import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useEffect, useState }                    from "react";
import axios                                      from "axios";

//Own component;
import { PostingConfig }                           from "Notifications";
import { genericApi }                              from "store/api/genericApi";
import { workSpaceSlice, authSlice, gallerySlice } from "store/Slices";
import "./AppShell.scss";
import { useParams }                               from "react-router";
import { isValidArray }                            from "helpers";
import ErrorPageLayout                             from "core/layout/errorPage/ErrorPageLayout";
import ErrorPage                                   from "pages/ErrorPage";

import LogoCasaMatte from "Resources/images/casaMatteLogo.png";

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
	const [errorCoenection, setErrorCoenection] = useState(false);

	const [isCompatibleDivice, setIsCompatibleDivice] = useState(true);

	// const isSelectedPage = useSelector((state) => state.workSpaceSlice?.pageDataSelected, shallowEqual);
	const workSpaceData = useSelector((state) => state.workSpaceSlice?.data, shallowEqual);
	const projectTitle = useSelector((state) => state.workSpaceSlice.projectTittle, shallowEqual);
	const initialData = useSelector((state) => state.workSpaceSlice?.initialData, shallowEqual);
	const galleryData = useSelector((state) => state.gallerySlice?.data, shallowEqual);
	const galleryIsFullSizeSideBar = useSelector((state) => state.gallerySlice?.isFullSizeSideBar, shallowEqual);


	const [dataMutation, dataMutationResult] = genericApi.useSubmitDataMutation();

	const handlerCloseFullSizeGallery = () => {
		if (galleryIsFullSizeSideBar) {
			dispatch(gallerySlice.actions.toggleFullSizeSideBar());
		}
	};

	const parseSendData = (data) => {
		const myData = data;
		const stringData = JSON.stringify(myData);
		return stringData;
	};

	const validateAndSubmitData = async () => {
		try {
			const respGetPost = await axios.get(`https://casamatte.com/wp-json/wp/v2/photobook-2-0/${postId}`);
			const { data } = respGetPost;
			const config = data?.meta?.config;

			if (!config) {
				await dataMutation({
					module : "wp-json/wp/v2/photobook-2-0",
					data   : {
						title : {
							rendered : projectTitle ?? "TITULO",
							raw      : projectTitle ?? "TITULO",
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
				const currentTitle = projectTitle ?? "TITULO";

				const isEndWhiteSpace = currentTitle?.endsWith(" ");

				let newTitle = currentTitle;

				if (isEndWhiteSpace) {
					newTitle = currentTitle?.slice(0, currentTitle?.length - 1);
				} else {
					newTitle = `${currentTitle} `;
				}

				dispatch(workSpaceSlice.actions.handleChangepRrojectTitle(newTitle));

				await dataMutation({
					module : "wp-json/wp/v2/photobook-2-0",
					data   : {
						title : {
							rendered : newTitle,
							raw      : newTitle,
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
				return;
			}
			setErrorCoenection(true);
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
					setErrorCoenection(true);
					break;
			}
		}
	}, [dataMutationResult]);

	useEffect(() => {
		const listOfphotos = galleryData && Object.values(galleryData).filter(photo => (photo?.format === "jpg") || (photo?.format === "png") || (photo?.format === "heic") || (photo?.format === "heif") || (photo?.format === "HEIC") || (photo?.format === "HEIF"));

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

					const userName = listOfPathRoutes[9];
					const photoBookNo = listOfPathRoutes[10];
					const fileName = listOfPathRoutes[11];

					const myFinalUrl = `${prefixUrl}${sizesImgs}${userName}/${photoBookNo}/${fileName}`;

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
			return;
		}
		setUrlCollage("");
	}, [galleryData]);

	useEffect(() => {
		const checkCompatibility = () => {
			if (typeof window === "undefined") return;

			const width = window.innerWidth;

			setIsCompatibleDivice(width >= 1030);
		};

		checkCompatibility();

		window.addEventListener("resize", checkCompatibility);

		return () => {
			window.removeEventListener("resize", checkCompatibility);
		};
	}, []);

	if (errorCoenection) {
		return (
			<ErrorPage codeError="500" />
		);
	}

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

	if (!isCompatibleDivice) {
		return (
			<div id="body-app">
				<div className="container-mobile-info">
					<div className="text-group-mobile">
						<div className="mobile-notification">
							La aplicación para editar no es compatible con dispositivos móviles.
							Te recomendamos que uses una computadora.
						</div>
						<div className="mobile-logo-header">
							<div className="att-text-container">ATTE.</div>
							<img src={LogoCasaMatte} width={170} alt="CasaMatte Logo" />
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div
			id="AppShell"
			onClick={handlerCloseFullSizeGallery}
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
