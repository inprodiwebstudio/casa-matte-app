import { useState, useEffect } from "react";
import { connect }             from "react-redux";
import { useDropzone }         from "react-dropzone";


//Own components
import { gallerySlice } from "store/Slices";

import {
	bindAll,
	isValidArray,
	uploadImageKitIo,
} from "helpers";
import {
	Card,
	Button,
	Loading,
	TextInput,
} from "core/components";

import {
	Folder,
	DropFile,
	ArrowLeft,
	PhotoList,
} from "Resources/icons";
import "./DropDoc.scss";

const DropDoc = ({
	gallerySlice,
	galleryMutation,
	galleryPathRoute,
	galleryTypeDropedView,
}) => {

	const [ loading, setLoading ] = useState(false);

	const [ fileImage, setFileImage ] = useState([]);
	const [ isSelectedFolder, setIsSelectedFolder ] = useState(false);
	const [ folderName, setFolderName ] = useState("");
	const [ completedPhotos, setPhotosCompleted ] = useState([]);
	const [ isGenerateNewFolder, setIsGenerateNewFolder ] = useState(false);

	const postImage = async (image, prentId, isRefetching) => {
		const imageData = await uploadImageKitIo(image);

		const newGallery = await galleryMutation({
			module : "gallery",
			tags   : isRefetching ? ["gallery"] : ["null"],
			data   : {
				status : "publish",
				meta   : {
					isfolder : false,
					fileid   : imageData?.data?.fileId,
					imageurl : imageData?.data?.url,
					parentid : prentId ? prentId : galleryPathRoute?.id,
				},
			},
			method : "POST",
		});
		setPhotosCompleted(prev => {
			const newData = [newGallery?.data, ...prev];
			return newData;
		});
		if (prentId) {
			return imageData?.data?.url;
		}
		return newGallery?.data;
	};

	const sendImages = (prentId) => {
		const cloneFileList = prentId ? fileImage : (fileImage?.slice(0, fileImage?.length - 1));
		const filesData = cloneFileList.map((image) => {
			const availableParentId = prentId ? prentId : false;
			return postImage(image, availableParentId);
		});
		return filesData;
	};

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
		setLoading(true);
		Promise.allSettled([...sendImages()]).then(async (values) => {
			await postImage(fileImage[fileImage?.length - 1], false, true);
			setLoading(false);
			gallerySlice.setTypeDropedView(null);
		}, reason => {
			setLoading(false);
			gallerySlice.setTypeDropedView(null);
			console.error(reason);
		});
	};

	const handleAddFolder = async () => {
		setLoading(true);
		if (fileImage?.length <= 0) {
			setIsGenerateNewFolder(true);
		}

		const resFolder = await galleryMutation({
			module : "gallery",
			tags   : !isValidArray(fileImage) ? ["gallery"] : ["null"],
			data   : {
				status : "publish",
				meta   : {
					isfolder : true,
					parentid : "route",
					name     : folderName,
				},
			},
			method : "POST",
		});
		if (resFolder?.data && (isValidArray(fileImage))) {
			Promise.allSettled(sendImages(resFolder?.data?.id)).then(async values => {
				const listOfImages = values.map(image => image?.value);

				const thumbimages =
				(listOfImages?.length > 5) ?
					[listOfImages[0], listOfImages[1], listOfImages[2], listOfImages[3], listOfImages[4]] :
					listOfImages;

				setIsGenerateNewFolder(true);

				await galleryMutation({
					module : `gallery/${resFolder?.data?.id}`,
					tags   : ["gallery"],
					data   : {
						status : "publish",
						meta   : {
							thumbimages : [...thumbimages],
						},
					},
					method : "POST",
				});
				setLoading(false);
				setIsGenerateNewFolder(false);
				gallerySlice.setTypeDropedView(null);
			}, reason => {
				setLoading(false);
				setIsGenerateNewFolder(false);
				gallerySlice.setTypeDropedView(null);
				console.error(reason);
			});
			return;
		}
		setLoading(false);
		setIsGenerateNewFolder(false);
		gallerySlice.setTypeDropedView(null);
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
					<div
						className="UploadingContainer"
					>
						<div className="upluadIndicatorContainer">
							<Loading />
							{
								!isGenerateNewFolder && (
									<div className="currentUpluaded">{completedPhotos.length} de {fileImage.length}</div>
								)
							}
							{
								isGenerateNewFolder && (
									<div className="currentUpluaded">Generando Nueva Carpeta...</div>
								)
							}
						</div>
					</div>
				) : (
					<div className="DropDoc">
						{
							((!isValidArray(fileImage) && !isSelectedFolder) && (galleryTypeDropedView !== "addFolder")) && (
								<div  {...getRootProps({className : "indicator-drop-container"})}>
									<DropFile size="40px" />
									<p>
										ARRASTRA AQUÍ LAS FOTOGRAFÍAS QUE
										QUIERAS AGREGAR A TU PROYECTO
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
											onSelect={() => handleAddPhotos()}
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
											<TextInput placeholder="NOMBRE DE LA CARPETA" onChange={(e) => setFolderName(e.target.value)} />
										</div>
										<Button
											fontSize="16px"
											fullSize
											onClick={() => handleAddFolder()}
										>
											CREAR
										</Button>
									</div>
									<div className="back-container">
										{
											galleryTypeDropedView !== "addFolder" && (
												<Button
													onClick={() => setIsSelectedFolder(false)}
													icon={<ArrowLeft size="20px" />}
													fontSize="12px"
													type="transparent"
												>
													ATRÁS
												</Button>
											)
										}
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

const mapStateToProps = ({ gallerySlice }) => ({
	galleryTypeDropedView : gallerySlice?.typeDropedView ?? null,
	galleryPathRoute      : gallerySlice?.galleryPathName ?? {},
});

export default connect(mapStateToProps, mapDispatchToProps) (DropDoc);
