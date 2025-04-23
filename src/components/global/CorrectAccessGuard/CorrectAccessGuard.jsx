/* eslint-disable import/extensions */

import { genericApi } from "store/api/genericApi";
import LoadingAccess  from "./LoadingAccess";

import Dashboard from "core/layout";

import { authSlice, workSpaceSlice }              from "store/Slices";
import { Navigate, useNavigate, useParams }       from "react-router";
import { useEffect, useState }                    from "react";
import PayConfirm                                 from "pages/PayConfirm";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { usePhotoBookPreset }                     from "helpers/Hooks/usePhotoBookPreset";
import NotPaid                                    from "components/NotPaid";

const { useLazyGetDataQuery } = genericApi;

const CorrectAccessGuard = () => {
	const dispatch = useDispatch();
	const { createPresetPhotoBook } = usePhotoBookPreset();
	const userId = useSelector((state) => state.authSlice.user.userId, shallowEqual);
	const userEmail = useSelector((state) => state.authSlice.user.email, shallowEqual);

	const [ statusView, setStatusView ] = useState("loading");
	const [ urlLinkPay, setUrlLinkPay ] = useState("");

	const { postId } = useParams();

	const navigate = useNavigate();

	if (!postId) {
		return <Navigate to="/error/404" replace />;
	}

	const { data : photobookData, error } = genericApi.useGetDataQuery({
		module : `wp-json/wp/v2/photobook-2-0/${postId}`,
	});

	const [ getOrdeInfo ] = useLazyGetDataQuery();

	const handlerPhotoBookNotFound = (status) => {
		if (status === 404) {
			navigate("/error/404");
		}
		if (status === 500) {
			navigate("/error/500");
		}
	};

	const isOwner = () => {
		if (photobookData?.author === userId) return true;
		return false;
	};

	const addCurrentPhotoBookConfig = (photoBookConfigData) => {
		const myData = photoBookConfigData?.meta?.config;
		const parseJSON = JSON.parse(myData);

		dispatch(workSpaceSlice.actions.insertData({
			...parseJSON,
			modified : photoBookConfigData?.modified ?? undefined,
			orderId  : photoBookConfigData?.meta?.id_del_pedido ?? undefined,
		}));
	};

	const isPaidExtra = async (orderId) => {
		try {
			const orderData = await getOrdeInfo({ module : `wp-json/wc/v3/orders/${orderId}` }).unwrap();
			if (orderData.date_paid) {
				return true;
			}
			setUrlLinkPay(orderData?.payment_url);
			return false;
		} catch (error) {
			console.error(error);
		}
	};

	const handlerAvailableExtra = async (idOrderExtra) => {
		const isPaid = await isPaidExtra(idOrderExtra);
		if (isPaid) {
			setStatusView("done");
			return;
		}
		setStatusView("notPaidExtras");
		return;
	};

	useEffect(() => {
		if (error) {
			handlerPhotoBookNotFound(error.status);
			return;
		}
	}, [error]);

	useEffect(() => {
		if (!photobookData) return;
		if (!isOwner()) {
			return navigate("/error/403");
		}
		if (!userEmail || (userEmail === "")) {
			dispatch(authSlice.actions.updateEmail(photobookData?.meta?.correo_del_autor));
		}
		if (photobookData?.meta?.status === "48") {
			if (!photobookData?.meta?.id_pedido_hojas_extra) {
				setStatusView("done");
				return;
			}
			handlerAvailableExtra(photobookData?.meta?.id_pedido_hojas_extra);
			return;
		}
		if (photobookData?.meta?.config) {
			addCurrentPhotoBookConfig(photobookData);
			setStatusView("continue");
			return;
		}
		createPresetPhotoBook(photobookData);
		setStatusView("continue");
		return;
	}, [photobookData]);

	return (
		<>
			{
				(statusView === "loading") && <LoadingAccess />
			}
			{
				(statusView === "notPaidExtras") && <NotPaid paymentLink={urlLinkPay} />
			}
			{
				(statusView === "done") && <PayConfirm />
			}
			{
				(statusView === "continue") && <Dashboard />
			}
		</>
	);
};

export default CorrectAccessGuard;
