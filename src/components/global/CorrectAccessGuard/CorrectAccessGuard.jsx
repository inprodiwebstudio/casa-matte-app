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
import handlerMaterialAndColorLining              from "helpers/handlerMaterialAndColorLining";
import handlerGravingColorData                    from "helpers/handlerGravingColor";

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

		const cover = !photoBookConfigData.meta.color_de_tela ? undefined : {
			material : handlerMaterialAndColorLining(photoBookConfigData.meta.color_de_tela).materialName,
			color    : handlerMaterialAndColorLining(photoBookConfigData.meta.color_de_tela).colorName,
		};

		const handlerEngravingData = () => {
			const isAvailableEngraving = photoBookConfigData?.meta?.color_de_grabado !== "";

			if (!isAvailableEngraving) {
				return undefined;
			}

			return {
				currentColor : handlerGravingColorData(photoBookConfigData?.meta?.color_de_grabado).currentColor,
				listOfColors : handlerGravingColorData(photoBookConfigData?.meta?.color_de_grabado).listOfColors,
			};
		};

		dispatch(workSpaceSlice.actions.insertData({
			...parseJSON,
			availableSpine : !photoBookConfigData?.meta?.grabado_en_lomo ? false : true,
			cover          : parseJSON?.cover ? parseJSON?.cover : cover,
			engraving      : handlerEngravingData(),
			modified       : photoBookConfigData?.modified ?? undefined,
			orderId        : photoBookConfigData?.meta?.id_del_pedido ?? undefined,
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
