import { useState, useEffect } from "react";
import { connect }             from "react-redux";
import { useDropzone }         from "react-dropzone";

//Own components
import { gallerySlice } from "store/Slices";
import { genericApi }   from "store/api/genericApi";

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
	token,
	gallerySlice,
	galleryPathRoute,
	galleryTypeDropedView,
}) => {

	const [ loading, setLoading ] = useState(false);

	const [ fileImage, setFileImage ] = useState([]);
	const [ isSelectedFolder, setIsSelectedFolder ] = useState(false);
	const [ folderName, setFolderName ] = useState("");

	const [galleryMutation] = genericApi.useSubmitDataMutation();

	// const addNewFolder = async () => {
	// 	await galleryMutation({
	// 		module : "gallery",
	// 		tags   : ["gallery"],
	// 		data   : {
	// 			status : "publish",
	// 			meta   : {
	// 				name     : folderName,
	// 				isfolder : true,
	// 			},
	// 		},
	// 		method : "POST",
	// 	}).unwrap();
	// };

	const sendImages = (prentId) => {
		const filesData = fileImage.map(async (image, index) => {
			const imageData = await uploadImageKitIo(image);
			await galleryMutation({
				module : "gallery",
				tags   : (index === (fileImage.lenght - 1)) ? ["gallery"] : ["null"],
				data   : {
					status : "publish",
					meta   : {
						isfolder : false,
						imageurl : imageData?.data?.url,
						parentid : prentId ? prentId : "",
					},
				},
				method : "POST",
			}).unwrap();
		});
		return filesData;
	};

	const handleDrop = (files) => {
		const isValidFiles = isValidArray(files);

		if (isValidFiles) {
			// const newListFiles = files.map((file) => {
			// 	const myFile = file;
			// 	// const blob = await comprimirImagen(myFile, 10);
			// 	const createObjectURL = Object.assign(myFile, { preview : URL.createObjectURL(file) });
			// 	return (
			// 		createObjectURL
			// 	);
			// });

			// Promise.all(newListFiles).then(values => {
			// 	setFileImage(prev => {
			// 		const newData = [...prev, ...values];
			// 		return newData;
			// 	});
			// }, reason => {
			// 	console.error(reason);
			// });

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
		Promise.allSettled(sendImages()).then(values => {
			setLoading(false);
		}, reason => {
			setLoading(false);
			console.error(reason);
		});

		gallerySlice.setTypeDropedView(null);
	};

	const handleAddFolder = async () => {
		setLoading(true);
		const resFolder = await galleryMutation({
			module : "gallery",
			tags   : ["null"],
			data   : {
				status : "publish",
				meta   : {
					isfolder : true,
					name     : folderName,
				},
			},
			method : "POST",
		});
		if (resFolder?.data) {
			Promise.allSettled(sendImages(resFolder?.data?.id)).then(values => {
				setLoading(false);
				gallerySlice.setTypeDropedView(null);
			}, reason => {
				setLoading(false);
				console.error(reason);
			});
		}
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
						style={{
							width          : "100%",
							display        : "flex",
							justifyContent : "center",
							height         : "calc(100% - 350px)",
						}}
					>
						<Loading />
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
											galleryPathRoute === "main" && (
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

const mapStateToProps = ({ gallerySlice, authSlice }) => ({
	galleryTypeDropedView : gallerySlice?.typeDropedView ?? null,
	galleryPathRoute      : gallerySlice?.galleryPathName ?? "main",
	token                 : authSlice?.token ?? "",
});

export default connect(mapStateToProps, mapDispatchToProps) (DropDoc);
