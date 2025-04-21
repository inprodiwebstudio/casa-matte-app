
import { genericApi } from "store/api/genericApi";
import LoadingAccess  from "./LoadingAccess";

import Dashboard from "core/layout";

import { workSpaceSlice }                         from "store/Slices";
import { Navigate, useNavigate, useParams }       from "react-router";
import { useEffect }                              from "react";
import PayConfirm                                 from "pages/PayConfirm";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { usePhotoBookPreset }                     from "helpers/Hooks/usePhotoBookPreset";

const CorrectAccessGuard = () => {
	const dispatch = useDispatch();
	const { createPresetPhotoBook } = usePhotoBookPreset();
	const userId = useSelector((state) => state.authSlice.user.userId, shallowEqual);

	const { postId } = useParams();

	const navigate = useNavigate();

	if (!postId) {
		return <Navigate to="/error/404" replace />;
	}

	const { data : photobookData, error, isFetching } = genericApi.useGetDataQuery({
		module : `wp-json/wp/v2/photobook-2-0/${postId}`,
	});

	const isLoading = isFetching;

	const handlerPhotoBookNotFound = () => {
		if (error?.status === 404) {
			navigate("/error/404");
		}
		if (error?.status === 500) {
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

	useEffect(() => {
		handlerPhotoBookNotFound();
	}, [error]);

	useEffect(() => {
		if (!photobookData) return;
		if (!isOwner()) {
			return navigate("/error/403");
		}
		if (photobookData?.meta?.config) {
			return addCurrentPhotoBookConfig(photobookData);
		}
		createPresetPhotoBook(photobookData);
	}, [photobookData]);

	return (
		<>
			{
				isLoading && <LoadingAccess />
			}
			{
				(!isLoading && (photobookData.meta?.status === "48")) && <PayConfirm />
			}
			{
				(!isLoading && (photobookData.meta?.status === "26")) && <Dashboard />
			}
		</>
	);
};

export default CorrectAccessGuard;
