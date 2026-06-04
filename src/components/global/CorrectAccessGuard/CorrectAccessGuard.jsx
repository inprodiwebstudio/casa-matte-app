/* eslint-disable import/extensions */
import { genericApi } from "store/api/genericApi";
import LoadingAccess  from "./LoadingAccess";
import { Font }       from "@react-pdf/renderer";

import Dashboard from "core/layout";

//Fonts
import helveticaLight       from "Resources/Fonts/HelveticaLightRegular.otf";
import aitanaRegular        from "Resources/Fonts/Aitana-Regular.otf";
import cormorantLight       from "Resources/Fonts/Cormorant-Light.ttf";
import cormorantMedium      from "Resources/Fonts/Cormorant-Medium.ttf";
import gandhiSansRegular    from "Resources/Fonts/GandhiSans-Regular.otf";
import gandhiSerifRegular   from "Resources/Fonts/GandhiSerif-Regular.otf";
import interLight          	from "Resources/Fonts/Inter-Light.ttf";
import interRegular         from "Resources/Fonts/Inter-Regular.ttf";
import josefinSansLight     from "Resources/Fonts/JosefinSans-Light.ttf";
import josefinSansRegular   from "Resources/Fonts/JosefinSans-Regular.ttf";
import madeMirageRegular    from "Resources/Fonts/MADE-Mirage-Regular.otf";
import madeMirageThin       from "Resources/Fonts/MADE-Mirage-Thin.otf";
import restoraExtraLight    from "Resources/Fonts/RestoraExtraLight.otf";
import spectralLightItalic  from "Resources/Fonts/Spectral-LightItalic.ttf";
import spectralMediumItalic from "Resources/Fonts/Spectral-MediumItalic.ttf";
import tanmeringue          from "Resources/Fonts/TAN-MERINGUE.ttf";

import { authSlice, workSpaceSlice }              from "store/Slices";
import { Navigate, useNavigate, useParams }       from "react-router";
import { useEffect, useState }                    from "react";
import PayConfirm                                 from "pages/PayConfirm";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { usePhotoBookPreset }                     from "helpers/Hooks/usePhotoBookPreset";
import NotPaid                                    from "components/NotPaid";
// import { convertToArray }                         from "helpers";

const { useLazyGetDataQuery } = genericApi;

Font.register(
	{
		family : "HelveticaLight",
		src    : helveticaLight,
		fonts  : [
			{
				src : helveticaLight,
			},
			{
				src        : helveticaLight,
				fontWeight : "bold",
			},
			{
				src        : helveticaLight,
				fontWeight : "normal",
			},
	  ],
	}
);

Font.register(
	{
		family : "Aitana-Regular",
		src    : aitanaRegular,
		fonts  : [
			{
				src : aitanaRegular,
			},
			{
				src        : aitanaRegular,
				fontWeight : "bold",
			},
			{
				src        : aitanaRegular,
				fontWeight : "normal",
			},
	  ],
	}
);

Font.register(
	{
		family : "Cormorant-Light",
		src    : cormorantLight,
		fonts  : [
			{
				src : cormorantLight,
			},
			{
				src        : cormorantLight,
				fontWeight : "bold",
			},
			{
				src        : cormorantLight,
				fontWeight : "normal",
			},
	  ],
	}
);

Font.register(
	{
		family : "Cormorant-Medium",
		src    : cormorantMedium,
		fonts  : [
			{
				src : cormorantMedium,
			},
			{
				src        : cormorantMedium,
				fontWeight : "bold",
			},
			{
				src        : cormorantMedium,
				fontWeight : "normal",
			},
	  ],
	}
);

Font.register(
	{
		family     : "Inter-Regular",
		src        : interRegular,
		fontWeight : "normal",
		fonts      : [
			{
				src : interRegular,
			},
	  ],
	}
);

Font.register(
	{
		family : "GandhiSans-Regular",
		src    : gandhiSansRegular,
		fonts  : [
			{
				src : gandhiSansRegular,
			},
			{
				src        : gandhiSansRegular,
				fontWeight : "bold",
			},
			{
				src        : gandhiSansRegular,
				fontWeight : "normal",
			},
	  ],
	}
);

Font.register(
	{
		family : "GandhiSerif-Regular",
		src    : gandhiSerifRegular,
		fonts  : [
			{
				src : gandhiSerifRegular,
			},
			{
				src        : gandhiSerifRegular,
				fontWeight : "bold",
			},
			{
				src        : gandhiSerifRegular,
				fontWeight : "normal",
			},
	  ],
	}
);

Font.register(
	{
		family : "Inter-Lifght",
		src    : interLight,
		fonts  : [
			{
				src : interLight,
			},
	  ],
	}
);

Font.register(
	{
		family : "JosefinSans-Light",
		src    : josefinSansLight,
		fonts  : [
			{
				src : josefinSansLight,
			},
			{
				src        : josefinSansLight,
				fontWeight : "bold",
			},
			{
				src        : josefinSansLight,
				fontWeight : "normal",
			},
	  ],
	}
);

Font.register(
	{
		family : "JosefinSans-Regular",
		src    : josefinSansRegular,
		fonts  : [
			{
				src : josefinSansRegular,
			},
			{
				src        : josefinSansRegular,
				fontWeight : "bold",
			},
			{
				src        : josefinSansRegular,
				fontWeight : "normal",
			},
	  ],
	}
);

Font.register(
	{
		family : "Made-Mirage-Regular",
		src    : madeMirageRegular,
		fonts  : [
			{
				src : madeMirageRegular,
			},
			{
				src        : madeMirageRegular,
				fontWeight : "bold",
			},
			{
				src        : madeMirageRegular,
				fontWeight : "normal",
			},
	  ],
	}
);

Font.register(
	{
		family : "Made-Mirage-Thin",
		src    : madeMirageThin,
		fonts  : [
			{
				src : madeMirageThin,
			},
			{
				src        : madeMirageThin,
				fontWeight : "bold",
			},
			{
				src        : madeMirageThin,
				fontWeight : "normal",
			},
	  ],
	}
);

Font.register(
	{
		family : "Restora-Extra-Light",
		src    : restoraExtraLight,
		fonts  : [
			{
				src : restoraExtraLight,
			},
			{
				src        : restoraExtraLight,
				fontWeight : "bold",
			},
			{
				src        : restoraExtraLight,
				fontWeight : "normal",
			},
	  ],
	}
);

Font.register(
	{
		family : "Spectral-Light-Italic",
		src    : spectralLightItalic,
		fonts  : [
			{
				src : spectralLightItalic,
			},
			{
				src        : spectralLightItalic,
				fontWeight : "bold",
			},
			{
				src        : spectralLightItalic,
				fontWeight : "normal",
			},
	  ],
	}
);

Font.register(
	{
		family : "Spectral-Medium-Italic",
		src    : spectralMediumItalic,
		fonts  : [
			{
				src : spectralMediumItalic,
			},
			{
				src        : spectralMediumItalic,
				fontWeight : "bold",
			},
			{
				src        : spectralMediumItalic,
				fontWeight : "normal",
			},
	  ],
	}
);

Font.register(
	{
		family : "TAN-MERINGUE",
		src    : tanmeringue,
		fonts  : [
			{
				src : tanmeringue,
			},
			{
				src        : tanmeringue,
				fontWeight : "bold",
			},
			{
				src        : tanmeringue,
				fontWeight : "normal",
			},
	  ],
	}
);

const CorrectAccessGuard = () => {
	const dispatch = useDispatch();
	const { createPresetPhotoBook } = usePhotoBookPreset();
	const userId = useSelector((state) => state.authSlice.user.userId, shallowEqual);
	const userEmail = useSelector((state) => state.authSlice.user.email, shallowEqual);
	// const worspaceData = useSelector((state) => state.workSpaceSlice.data, shallowEqual);

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

		const pattern = /<span[^>]*font-family:HelveticaLight[^>]*>[\s\u200b]*<\/span>/gi;

		const cleanedData = myData.replaceAll(pattern, (match) => {
			return match.replace(/font-size:20px/g, "font-size:8px");
		});

		const parseJSON = JSON.parse(cleanedData);

		dispatch(workSpaceSlice.actions.handleChangepRrojectTitle(photoBookConfigData?.title?.rendered ?? "TITULO"));
		dispatch(workSpaceSlice.actions.insertData({
			...parseJSON,
			status     : photoBookConfigData?.meta?.status ?? undefined,
			version    : parseJSON?.version ? (parseJSON?.version + 1) : 1,
			postTypeId : postId,
			modified   : photoBookConfigData?.modified ?? undefined,
			orderId    : photoBookConfigData?.meta?.id_del_pedido ?? undefined,
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
			if (
				(postId === "42516")||
				(postId === "37505")||
				(postId === "43701")||
				(postId === "43256")||
				(postId === "43214")||
				(postId === "41895")||
				(postId === "44121")||
				(postId === "41814")||
				(postId === "42239")||
				(postId === "43930")||
				(postId === "41557")||
				(postId === "42155")||
				(postId === "44557")||
				(postId === "42503")||
				(postId === "43933")||
				(postId === "34277")||
				(postId === "45385")||
				(postId === "42292")||
				(postId === "36096")||
				(postId === "46056")||
				(postId === "45740")||
				(postId === "45292")||
				(postId === "42507")||
				(postId === "45334")||
				(postId === "45136")||
				(postId === "45832")||
				(postId === "36096")||
				(postId === "46130")||
				(postId === "46572")||
				(postId === "42998")||
				(postId === "46568")||
				(postId === "41730")||
				(postId === "51535")||
				(postId === "95701")||
				(postId === "95596")||
				(postId === "126475")||
				(postId === "70206")||
				(postId === "118460")||
				(postId === "141664")||
				(postId === "91785")||
				(postId === "154158")||
				(postId === "152901")
			) {
				addCurrentPhotoBookConfig(photobookData);
				setStatusView("continue");
				return;
			}
			setStatusView("done");
			return;
		}
		if (
			(postId === "42516")||
			(postId === "37505")||
			(postId === "43701")||
			(postId === "43256")||
			(postId === "43214")||
			(postId === "41895")||
			(postId === "44121")||
			(postId === "41814")||
			(postId === "42239")||
			(postId === "43930")||
			(postId === "41557")||
			(postId === "42155")||
			(postId === "44557")||
			(postId === "42503")||
			(postId === "43933")||
			(postId === "34277")||
			(postId === "45385")||
			(postId === "42292")||
			(postId === "36096")||
			(postId === "46056")||
			(postId === "45740")||
			(postId === "45292")||
			(postId === "42507")||
			(postId === "45334")||
			(postId === "45136")||
			(postId === "45832")||
			(postId === "36096")||
			(postId === "46130")||
			(postId === "46572")||
			(postId === "42998")||
			(postId === "46568")||
			(postId === "41730")||
			(postId === "51535")||
			(postId === "95701")||
			(postId === "95596")||
			(postId === "126475")||
			(postId === "70206")||
			(postId === "118460")||
			(postId === "141664")||
			(postId === "91785")||
			(postId === "154158")||
			(postId === "152901")
		) {
			addCurrentPhotoBookConfig(photobookData);
			setStatusView("continue");
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
		if ((photobookData?.meta?.status === "48") && (photobookData?.meta?.config)) {
			if (!photobookData?.meta?.id_pedido_hojas_extra) {
				if (
					(postId === "42516")||
					(postId === "37505")||
					(postId === "43701")||
					(postId === "43256")||
					(postId === "43214")||
					(postId === "41895")||
					(postId === "44121")||
					(postId === "41814")||
					(postId === "42239")||
					(postId === "43930")||
					(postId === "41557")||
					(postId === "42155")||
					(postId === "44557")||
					(postId === "42503")||
					(postId === "43933")||
					(postId === "34277")||
					(postId === "45385")||
					(postId === "42292")||
					(postId === "36096")||
					(postId === "46056")||
					(postId === "45740")||
					(postId === "45292")||
					(postId === "42507")||
					(postId === "45334")||
					(postId === "45136")||
					(postId === "45832")||
					(postId === "36096")||
					(postId === "46130")||
					(postId === "46572")||
					(postId === "42998")||
					(postId === "46568")||
					(postId === "41730")||
					(postId === "51535")||
					(postId === "95701")||
					(postId === "95596")||
					(postId === "126475")||
					(postId === "70206")||
					(postId === "118460")||
					(postId === "141664")||
					(postId === "91785")||
					(postId === "154158")||
					(postId === "152901")
				) {
					addCurrentPhotoBookConfig(photobookData);
					setStatusView("continue");
					return;
				}
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
		if (photobookData?.meta?.config === "") {
			createPresetPhotoBook(photobookData);
			setStatusView("continue");
			return;
		}
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
