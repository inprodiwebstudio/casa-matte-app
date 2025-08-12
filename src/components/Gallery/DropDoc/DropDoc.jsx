import { useState, useEffect }  from "react";
import { connect, useDispatch } from "react-redux";
import { useDropzone }          from "react-dropzone";

//Own components
import { gallerySlice } from "store/Slices";
import { apiImageKit }  from "store/api/imageKitApi";

import useSubmitImages from "helpers/Hooks/useSubmitImages";

import {
	bindAll,
	convertToArray,
	isValidArray,
} from "helpers";

import {
	Card,
	Button,
	TextInput,
} from "core/components";

import {
	Button as ButtonMantine,
	Text,
} from "@mantine/core";

import {
	Folder,
	DropFile,
	ArrowLeft,
	PhotoList,
} from "Resources/icons";
import "./DropDoc.scss";
import { showNotification, cleanNotifications } from "@mantine/notifications";
import { closeAllModals, openContextModal }     from "@mantine/modals";
import { useParams }                            from "react-router";

const DropDoc = ({
	userName,
	photosData,
	isInPageUpload,
	galleryPathRoute,
	galleryTypeDropedView,
}) => {
	const dispatch = useDispatch();

	const { postId } = useParams();

	const [ loading, setLoading ] = useState(false);

	const [ fileImage, setFileImage ] = useState([]);
	const [ isSelectedFolder, setIsSelectedFolder ] = useState(false);
	const [ folderName, setFolderName ] = useState("");
	const [ isGenerateNewFolder, setIsGenerateNewFolder ] = useState(false);
	const [ completedPhotos, setCompletedPhotos ] = useState([]);
	const [ photoPreview, setPhotosPreview ] = useState([]);

	// const [galleryImagesMutation] = apiImageKit.useAddImageMutation();
	const [galleryFolderMutation] = apiImageKit.useAddFolderMutation();

	const { handlerUploadImage } = useSubmitImages({userName : `${userName}/${postId}`, folderName : folderName});

	const completePercentage = (completedPhotos.length * 100) / fileImage.length;

	const handleDrop = (files) => {
		const isValidFiles = isValidArray(files);

		if (isValidFiles) {
			setFileImage(prev => {
				const newData = [...prev, ...files];
				return newData;
			});
		}
	};

	const { getInputProps, getRootProps } = useDropzone({
		multiple : true,
		onDrop   : (files) => handleDrop(files),
		accept   : {
			"image/*" : [],
		},
	});

	const handleAddPhotos = () => {
		closeAllModals();
		setLoading(true);
		dispatch(gallerySlice.actions.setLoadingMutationGallery(true));
		const listOfPromises = fileImage.map(async (file, index) => {
			try {
				const respImage = await handlerUploadImage(file);
				setCompletedPhotos(prev => {
					const newData = [respImage, ...prev];
					return newData;
				});
				if (respImage?.urlThumbnail && respImage?.url) {
					setPhotosPreview(prev => {
						const newData = [respImage, ...prev];
						return newData;
					});
				}
				const constructotImageData = {
					...respImage,
					id       : respImage?.asset_id,
					fileId   : respImage?.asset_id,
					filePath : respImage?.public_id,
					type     : "file",
				};
				return constructotImageData;
			} catch (error) {
				cleanNotifications();
				showNotification({
					title   : "Error al subir la imagen",
					message : `Ocurrió un problema al subir la imagen ${file.name}. Intenta más tarde.`,
					color   : "red",
					styles  : () => ({
						root : {
						  "&::before" : {
							  borderRadius : "0px",
							  width        : "3px",
						  },
						  borderRadius : "0px",
						},

						title       : { fontFamily : "Helvetica", fontWeight : "500", textTransform : "uppercase" },
						description : { fontFamily : "Helvetica" },
					}),
				});
			}
		});

		Promise.allSettled([...listOfPromises]).then((imageValues) => {
			setLoading(false);
			const successImages = imageValues.filter(image => image?.value && image?.status === "fulfilled");
			const errorImages = imageValues.filter(image => !image?.value || (image?.status !== "fulfilled"));

			const imagesSuccess = successImages.filter(myImage => (myImage?.value?.urlThumbnail && myImage?.value?.url));
			const imagesErrorPreview = successImages.filter(myImage => (!myImage?.value?.urlThumbnail || !myImage?.value?.url));

			if (isValidArray(successImages)) {
				imagesSuccess.forEach((image) => {
					dispatch(gallerySlice.actions.setGalleryData(image.value));
				});
			}
			if (isValidArray(errorImages)) {
				cleanNotifications();
				showNotification({
					title   : "Error al subir algunas imágenes",
					message : "Algunas imágenes no pudieron ser subidas. Intenta mas tarde.",
					color   : "yellow",
					styles  : () => ({
						root : {
						  "&::before" : {
							  borderRadius : "0px",
							  width        : "3px",
						  },
						  borderRadius : "0px",
						},

						title       : { fontFamily : "Helvetica", fontWeight : "500", textTransform : "uppercase" },
						description : { fontFamily : "Helvetica" },
					}),
				});
			}
			if (isValidArray(imagesErrorPreview)) {
				showNotification({
					title   : "Error al previsualizar algunas imágenes",
					message : "Algunas images no pudieron ser previsualizadas, te recomendamos que recargues la pagina para poder previsualizarlas.",
					color   : "blue",
					styles  : () => ({
						root : {
						  "&::before" : {
							  borderRadius : "0px",
							  width        : "3px",
						  },
						  borderRadius : "0px",
						},

						title       : { fontFamily : "Helvetica", fontWeight : "500", textTransform : "uppercase" },
						description : { fontFamily : "Helvetica" },
					}),
				});
			}
			setFileImage([]);
			setCompletedPhotos([]);
			dispatch(gallerySlice.actions.setLoadingMutationGallery(false));
			dispatch(gallerySlice.actions.setTypeDropedView(null));
		});
	};

	const handlerSubmitPhotos = () => {
		const listOfPhotos = convertToArray(photosData);
		const isAvailablePhotos = isValidArray(listOfPhotos);

		if (!isAvailablePhotos && !isInPageUpload) {
			return openContextModal({
				modal      : "disclaimerDropPhotos",
				innerProps : {
					handdleSuccess : () => handleAddPhotos(),
				},
			});
		}
		return handleAddPhotos();
	};

	const handleAddFolder = async () => {
		closeAllModals();
		setLoading(true);
		dispatch(gallerySlice.actions.setLoadingMutationGallery(true));
		if (isValidArray(fileImage)) {
			const listOfPromises = fileImage.map(async (file, index) => {
				const respImage = await handlerUploadImage(file);
				setCompletedPhotos(prev => {
					const newData = [respImage, ...prev];
					return newData;
				});
				return respImage;
			});

			Promise.all([...listOfPromises]).then((values) => {
				const thumbNails = values.map(image => image.urlThumbnail);
				const constructorData = {
					id         : `${userName}/${folderName}`,
					path       : `${userName}/${folderName}`,
					name       : folderName,
					thumbNails : [...thumbNails],
					type       : "folder",
				};
				dispatch(gallerySlice.actions.setGalleryData(constructorData));
				setLoading(false);
				dispatch(gallerySlice.actions.setLoadingMutationGallery(false));
				dispatch(gallerySlice.actions.setTypeDropedView(null));
			}, reason => {
				setLoading(false);
				dispatch(gallerySlice.actions.setLoadingMutationGallery(false));
				dispatch(gallerySlice.actions.setTypeDropedView(null));
				console.error(reason);
			});
			return;
		}
		setIsGenerateNewFolder(true);
		const respFolder = await galleryFolderMutation({
			data : {
				userName,
				postId,
				folderName,
			},
		});

		const constructorData = {
			...respFolder?.data,
			type       : "folder",
			id         : respFolder?.data?.path,
			thumbNails : [],
		};
		dispatch(gallerySlice.actions.setGalleryData(constructorData));
		dispatch(gallerySlice.actions.setTypeDropedView(null));
		setLoading(false);
		dispatch(gallerySlice.actions.setLoadingMutationGallery(false));
	};

	useEffect(() => {
		if (galleryTypeDropedView === "addFolder") {
			setFileImage([]);
		}
	}, [galleryTypeDropedView]);

	return (
		<>
			{
				loading ? (
					<div className="toUploadContainer">
						<div className="skeletonContainer">
							{
								photoPreview.map((photoData, index) => (
									<div
										className="imageThumbContainer"
										key={index}
										style={{
											background : photoData?.url ? `url(${photoData?.url}) center center / cover no-repeat` : "grey",
										}}
									>
											&nbsp;
									</div>
								))
							}
						</div>
						<div
							className="UploadingContainer"
						>
							<div className="upluadIndicatorContainer">
								{
									!isGenerateNewFolder && (
										<div className="tittleUploadPhotos">CARGANDO FOTOS</div>
									)
								}
								<div className="bardLoader">
									<div style={{width : `${isNaN(completePercentage) ? 0 : completePercentage}%`}} className="progressLoader">&nbsp;</div>
								</div>
								{
									!isGenerateNewFolder && (
										<div className="lenthPhotosText">{completedPhotos.length} DE {fileImage.length}</div>
									)
								}
								{
									isGenerateNewFolder && (
										<div className="currentUpluaded">Generando Nueva Carpeta...</div>
									)
								}
							</div>
						</div>
					</div>
				) : (
					<div className="DropDoc">
						{
							((!isValidArray(fileImage) && !isSelectedFolder) && (galleryTypeDropedView !== "addFolder")) && (
								<div  {...getRootProps({className : "indicator-drop-container"})}>
									<DropFile size="40px" />
									<p>
										haz click aquí para subir tus fotos o arrastra y suelta
									</p>
									<input {...getInputProps()} />
								</div>
							)
						}
						{
							(isValidArray(fileImage) && !isSelectedFolder) && (
								<div className="options-cards-container">
									<div className="options-card">
										<Card
											isButton
											image={<PhotoList size="50px" />}
											body="CARGAR A GALERÍA"
											onSelect={() => handlerSubmitPhotos()}
										/>
										{
											galleryPathRoute?.id === "route" && (
												<Card
													isButton
													image={<Folder size="50px" />}
													body="CARGAR EN UNA NUEVA CARPETA"
													onSelect={() => setIsSelectedFolder(true)}
												/>
											)
										}
									</div>
								</div>
							)
						}
						{
							(isSelectedFolder || (galleryTypeDropedView === "addFolder")) && (
								<div className="options-cards-container">
									<div className="options-card">
										<div className="form-container">
											<Card
												image={<Folder size="50px" />}
												body="CARGAR EN UNA NUEVA CARPETA"
											/>
											<div
												style={{ width : "200px"}}
											>
												<TextInput placeholder="NOMBRE DE LA CARPETA" onChange={(e) => setFolderName(e.target.value)} />
											</div>
										</div>
										<ButtonMantine
											radius={8}
											size="xs"
											color="darkCasaMatte"
											sx={{marginTop : "15px"}}
											loading={loading}
											onClick={() => handleAddFolder()}
											w={110}
											h={30}
										>
											<Text
												weight={400}
												color="whiteCasaMatte"
												sx={{
													textTransform : "uppercase",
												}}
											>
												CREAR
											</Text>
										</ButtonMantine>
									</div>
									<div className="back-container">
										<Button
											onClick={() => setIsSelectedFolder(false)}
											icon={<ArrowLeft size="20px" />}
											fontSize="12px"
											type="transparent"
										>
											ATRÁS
										</Button>
									</div>
								</div>
							)
						}
					</div>
				)
			}
		</>
	);
};

const mapDispatchToProps = bindAll({ gallerySlice : gallerySlice.actions});

const mapStateToProps = ({ gallerySlice, authSlice }) => ({
	galleryTypeDropedView : gallerySlice?.typeDropedView ?? null,
	photosData            : gallerySlice?.data ?? null,
	galleryPathRoute      : gallerySlice?.galleryPathName ?? {},
	userName              : authSlice?.user?.username ?? undefined,
});

export default connect(mapStateToProps, mapDispatchToProps) (DropDoc);
