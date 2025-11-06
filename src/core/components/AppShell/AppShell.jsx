import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useEffect, useState }                    from "react";
import axios                                      from "axios";

//Own component;
import { PostingConfig }             from "Notifications";
import { genericApi }                from "store/api/genericApi";
import { workSpaceSlice, authSlice } from "store/Slices";
import "./AppShell.scss";
import { useParams }                 from "react-router";
import { isValidArray }              from "helpers";
import ErrorPageLayout               from "core/layout/errorPage/ErrorPageLayout";

const AppShell = ({
	Body,
	header,
	navbar,
	footer,
	sidebar,
}) => {
	const { postId } = useParams();

	const dispatch = useDispatch();

	const [urlCollage, setUrlCollage] = useState("");
	const [errorVersionMatch, setErrorVersionMatch] = useState(false);

	// const isSelectedPage = useSelector((state) => state.workSpaceSlice?.pageDataSelected, shallowEqual);
	const workSpaceData = useSelector((state) => state.workSpaceSlice?.data, shallowEqual);
	const initialData = useSelector((state) => state.workSpaceSlice?.initialData, shallowEqual);
	const galleryData = useSelector((state) => state.gallerySlice?.data, shallowEqual);


	const [dataMutation, dataMutationResult] = genericApi.useSubmitDataMutation();

	const parseSendData = (data) => {
		const myData = data;
		const stringData = JSON.stringify(myData);
		return stringData;
	};

	const validateAndSubmitData = async () => {
		try {
			const respGetPost = await axios.get(`https://casamatte.wip-inprodi.com/wp-json/wp/v2/photobook-2-0/${postId}`);
			const { data } = respGetPost;
			const config = data?.meta?.config;

			if (!config) {
				await dataMutation({
					module : "wp-json/wp/v2/photobook-2-0",
					data   : {
						title : {
							rendered : workSpaceData?.projectTittle ?? "TITULO",
							raw      : workSpaceData?.projectTittle ?? "TITULO",
						},
						status : "publish",
						meta   : {
							collage : urlCollage,
							config  : parseSendData({...workSpaceData, minPages : (workSpaceData?.pasta === "Dura") ? 25 : 10}),
						},
					},
					id     : postId,
					method : "POST",
				});
				return;
			}

			const photoBookConfig = JSON.parse(config);

			const isRechargeProject = workSpaceData?.version === (photoBookConfig?.version + 1);
			const isSameVersion = workSpaceData?.version === photoBookConfig?.version;

			if (isSameVersion || isRechargeProject || !photoBookConfig?.version) {
				await dataMutation({
					module : "wp-json/wp/v2/photobook-2-0",
					data   : {
						title : {
							rendered : workSpaceData?.projectTittle ?? "TITULO",
							raw      : workSpaceData?.projectTittle ?? "TITULO",
						},
						status : "publish",
						meta   : {
							collage : urlCollage,
							config  : parseSendData({...workSpaceData, minPages : (workSpaceData?.pasta === "Dura") ? 25 : 10}),
						},
					},
					id     : postId,
					method : "POST",
				});
				return;
			}

			throw new Error("Versiones diferentes");
		} catch (error) {
			if (error.message === "Versiones diferentes") {
				setErrorVersionMatch(true);
			}
			console.error(error);
		}
	};


	useEffect(() => {
		if (workSpaceData?.productName) {
			validateAndSubmitData();
		}
		if (!initialData) {
			dispatch(workSpaceSlice.actions.addInitialData(workSpaceData));
		}
	}, [workSpaceData, urlCollage]);

	useEffect(() => {
		if (dataMutationResult.isUninitialized) return;

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
	}, [dataMutationResult]);

	useEffect(() => {
		const listOfphotos = galleryData && Object.values(galleryData).filter(photo => photo?.format === "jpg");

		if (isValidArray(listOfphotos)) {
			const handlerConstructURLCollage = () => {
				const firstImages = isValidArray(listOfphotos) && listOfphotos.slice(0, 4);

				const prefixUrl = "https://res.cloudinary.com/dtjvmtfji/image/upload/";
				const sizesImgs = "c_auto,g_auto,h_150,w_150/";
				const layerApply = "fl_layer_apply";
				const positionImagesConstructor = (indexImage) => {
					switch (indexImage) {
						case 0:
							return "$w_150/";
						case 1:
							return `${layerApply},x_$w_add_0/$h_150/`;
						case 2:
							return `${layerApply},g_east,y_$h_add_0/`;
						default:
							return `${layerApply},g_south_west/`;
					}
				};

				if (firstImages.length === 1) {
					const listOfPathRoutes = firstImages[0]?.url.split("/");

					const userName = listOfPathRoutes[0];
					const photoBookNo = listOfPathRoutes[1];
					const fileName = listOfPathRoutes[2];
					const extensionFormat = firstImages[0]?.format;

					const fileNameWithFormat = `${fileName}.${extensionFormat}`;

					const myFinalUrl = `${prefixUrl}${sizesImgs}${userName}/${photoBookNo}/${fileNameWithFormat}`;

					return myFinalUrl;
				}

				let finalUrl = `${prefixUrl}${sizesImgs}`;

				firstImages.forEach((photo, index) => {
					const listOfPathRoutes = photo?.public_id?.split("/");
					const userName = listOfPathRoutes[0];
					const photoBookNo = listOfPathRoutes[1];
					const fileName = listOfPathRoutes[2];

					const extensionFormat = photo?.format;
					const fileNameWithFormat = `${fileName}.${extensionFormat}`;

					if (index === ( firstImages.length - 1)) {
						finalUrl += `${positionImagesConstructor(index)}${userName}/${photoBookNo}/${fileNameWithFormat}`;
					} else {
						finalUrl += `${positionImagesConstructor(index)}l_${userName}:${photoBookNo}:${fileNameWithFormat}/c_auto,g_auto,h_150,w_150/`;
					}
				});

				return finalUrl;
			};

			setUrlCollage(handlerConstructURLCollage);
		}
	}, [galleryData]);

	if (errorVersionMatch) {
		return (
			<ErrorPageLayout
				errorCode="426"
				title="Book Desincronizado"
				description="Parece que realizaste cambios de tu proyecto en otra pestaña, navegador o dispositivo de forma simultanea. Recarga la pagina para continuar editando tu photobook."
				actionButton={{
					body   : "RECARGAR",
					action : () => window.location.reload(),
				}}
			/>
		);
	}

	return (
		<div
			id="AppShell"
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
