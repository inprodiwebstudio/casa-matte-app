/* eslint-disable import/extensions */
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useEffect }                              from "react";
import { Font }                                   from "@react-pdf/renderer";

//Resources Fonts
import helveticaLight       from "Resources/Fonts/HelveticaLightRegular.otf";
import aitanaRegular        from "Resources/Fonts/Aitana-Regular.otf";
import cormorantLight       from "Resources/Fonts/Cormorant-Light.ttf";
import cormorantMedium      from "Resources/Fonts/Cormorant-Medium.ttf";
import gandhiSansRegular    from "Resources/Fonts/GandhiSans-Regular.otf";
import gandhiSerifRegular   from "Resources/Fonts/GandhiSerif-Regular.otf";
import interLifght          from "Resources/Fonts/Inter-Light.ttf";
import interRegular         from "Resources/Fonts/Inter-Regular.ttf";
import josefinSansLight     from "Resources/Fonts/JosefinSans-Light.ttf";
import josefinSansRegular   from "Resources/Fonts/JosefinSans-Regular.ttf";
import madeMirageRegular    from "Resources/Fonts/MADE-Mirage-Regular.otf";
import madeMirageThin       from "Resources/Fonts/MADE-Mirage-Thin.otf";
import restoraExtraLight    from "Resources/Fonts/RestoraExtraLight.otf";
import spectralLightItalic  from "Resources/Fonts/Spectral-LightItalic.ttf";
import spectralMediumItalic from "Resources/Fonts/Spectral-MediumItalic.ttf";
import tanmeringue          from "Resources/Fonts/TAN-MERINGUE.ttf";

//Own component;
import { PostingConfig }             from "Notifications";
import { genericApi }                from "store/api/genericApi";
import { workSpaceSlice, authSlice } from "store/Slices";
import "./AppShell.scss";

//Fonts
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
		family : "Inter-Regular",
		src    : interRegular,
		fonts  : [
			{
				src : interRegular,
			},
			{
				src        : interRegular,
				fontWeight : "bold",
			},
			{
				src        : interRegular,
				fontWeight : "normal",
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
		src    : interLifght,
		fonts  : [
			{
				src : interLifght,
			},
			{
				src        : interLifght,
				fontWeight : "bold",
			},
			{
				src        : interLifght,
				fontWeight : "normal",
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

const AppShell = ({
	Body,
	header,
	navbar,
	footer,
	sidebar,
}) => {
	const dispatch = useDispatch();

	const isSelectedPage = useSelector((state) => state.workSpaceSlice?.pageDataSelected, shallowEqual);
	const workSpaceData = useSelector((state) => state.workSpaceSlice?.data, shallowEqual);
	const postIdphotoBook = useSelector((state) => state.authSlice?.user?.postId, shallowEqual);
	const initialData = useSelector((state) => state.workSpaceSlice?.initialData, shallowEqual);

	const { data : photobookData, isFetching, error } = genericApi.useGetDataQuery({
		module : `wp-json/wp/v2/photobook-2-0/${postIdphotoBook === "" ? null : postIdphotoBook}`,
	});

	const [dataMutation, dataMutationResult] = genericApi.useSubmitDataMutation();

	const parseSendData = (data) => {
		const myData = data;
		const stringData = JSON.stringify(myData);
		const myReplacerString = stringData.replace(/"/g, "'");
		return myReplacerString;
	};

	const submitData = async () => {
		await dataMutation({
			module : "wp-json/wp/v2/photobook-2-0",
			data   : {
				tittle : "Texto de prueba",
				status : "publish",
				meta   : {
					config : parseSendData(workSpaceData),
				},
			},
			id     : postIdphotoBook,
			method : "POST",
		});
	};


	useEffect(() => {
		if (photobookData?.meta?.config) {
			const myData = photobookData?.meta?.config;
			const myReplacerString = myData.replace(/'/g, "\"");
			const parseJSON = JSON.parse(myReplacerString);
			dispatch(workSpaceSlice.actions.insertData({...parseJSON, modified : photobookData?.modified, projectTittle : photobookData?.tittle?.rendered  ?? undefined}));
		}
	}, [photobookData]);

	useEffect(() => {
		if (!error) {
			dispatch(workSpaceSlice.actions.changeLoading(isFetching));
		}
	}, [isFetching]);


	useEffect(() => {
		if (photobookData?.meta?.config) {
			submitData();
		}
		if (!initialData) {
			if (photobookData?.meta?.config) {
				const myData = photobookData?.meta?.config;
				const myReplacerString = myData.replace(/'/g, "\"");
				const parseJSON = JSON.parse(myReplacerString);
				dispatch(workSpaceSlice.actions.addInitialData(parseJSON));
			}
		}
	}, [workSpaceData]);

	useEffect(() => {
		if (dataMutationResult.isUninitialized) return;

		// if (dataMutationResult.isLoading) {
		// 	PostingConfig["post"]["posting"]();
		// }

		if (dataMutationResult.isError) {
			const status = dataMutationResult.error?.status;

			switch (status) {
				case 403:
					PostingConfig["post"][403]();
					dispatch(authSlice.actions.clearUserData());
					break;
				default:
					PostingConfig["post"][500]();
					break;
			}
		}

		// if (dataMutationResult.status === "fulfilled") {
		// 	PostingConfig["post"][200]();
		// }

	}, [dataMutationResult]);

	return (
		<div
			id="AppShell"
			{
				...(isSelectedPage && {
					onClick : () => dispatch(workSpaceSlice.actions.clearSelectedPageData()),
				})
			}
		>
			<div className="bodyContainer">
				<Body />
			</div>
			<div className="shell-container">
				<div className="header-container">
					{header}
				</div>
				<div className="footer-and-nav-grouped">
					<div className="nav-menu">
						{navbar}
					</div>
					<div className="footer-nav">
						{footer}
					</div>
					<div>
						{sidebar}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppShell;
