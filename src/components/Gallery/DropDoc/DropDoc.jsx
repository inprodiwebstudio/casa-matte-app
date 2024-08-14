import { useState, useEffect } from "react";
import { connect }             from "react-redux";
import { useDropzone }         from "react-dropzone";

//Own components
import { gallerySlice } from "store/Slices";
import { apiImageKit }  from "store/api/imageKitApi";


import {
	bindAll,
	isValidArray,
	uploadImageKitIo,
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

const DropDoc = ({
	refetch,
	userName,
	gallerySlice,
	galleryMutation,
	galleryPathRoute,
	galleryTypeDropedView,
}) => {

	const [ loading, setLoading ] = useState(false);

	const [ fileImage, setFileImage ] = useState([]);
	const [ isSelectedFolder, setIsSelectedFolder ] = useState(false);
	const [ folderName, setFolderName ] = useState("");
	const [ isGenerateNewFolder, setIsGenerateNewFolder ] = useState(false);
	const [ completedPhotos, setCompletedPhotos ] = useState([]);

	// const [galleryImagesMutation] = apiImageKit.useAddImageMutation();
	const [galleryFolderMutation] = apiImageKit.useAddFolderMutation();

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

	const handleAddPhotos =  () => {
		setLoading(true);
		const listOfPromises = fileImage.map(async (file, index) => {
			const respImage = await uploadImageKitIo(file, userName);
			setCompletedPhotos(prev => {
				const newData = [respImage?.data, ...prev];
				return newData;
			});
			return respImage;
		});

		Promise.all([...listOfPromises]).then((values) => {
			setLoading(false);
			gallerySlice.setTypeDropedView(null);
			refetch();
		}, reason => {
			setLoading(false);
			gallerySlice.setTypeDropedView(null);
			console.error(reason);
		});
	};

	const handleAddFolder = async () => {
		setLoading(true);
		if (isValidArray(fileImage)) {
			const listOfPromises = fileImage.map(async (file, index) => {
				const respImage = await uploadImageKitIo(file, userName, folderName);
				setCompletedPhotos(prev => {
					const newData = [respImage?.data, ...prev];
					return newData;
				});
				return respImage;
			});

			Promise.all([...listOfPromises]).then((values) => {
				setLoading(false);
				gallerySlice.setTypeDropedView(null);
				refetch();
			}, reason => {
				setLoading(false);
				gallerySlice.setTypeDropedView(null);
				console.error(reason);
			});
			return;
		}
		setIsGenerateNewFolder(true);
		await galleryFolderMutation({
			data : {
				folderName,
			},
			userName,
		});
		gallerySlice.setTypeDropedView(null);
		setLoading(false);
		refetch();
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
								completedPhotos.map((photoData, index) => (
									<div
										className="imageThumbContainer"
										key={index}
										style={{
											background : photoData?.thumbnailUrl ? `url(${photoData?.thumbnailUrl}) center center / cover no-repeat` : "grey",
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
	galleryPathRoute      : gallerySlice?.galleryPathName ?? {},
	userName              : authSlice?.user?.username ?? undefined,
});

export default connect(mapStateToProps, mapDispatchToProps) (DropDoc);
