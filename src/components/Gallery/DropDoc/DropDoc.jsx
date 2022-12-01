import { useState }    from "react";
import { connect }     from "react-redux";
import { useDropzone } from "react-dropzone";
// import Resizer         from "react-image-file-resizer";

//Own components
import { gallerySlice }                           from "store/Slices";
import { DropFile, Folder, PhotoList, ArrowLeft } from "Resources/icons";
import { TextInput, Button, Card }                from "core/components";
import { isValidArray, convertToObject, bindAll } from "helpers";
import "./DropDoc.scss";

const DropDoc = ({gallerySlice}) => {

	const [ fileImage, setFileImage ] = useState([]);
	const [ isSelectedFolder, setIsSelectedFolder ] = useState(false);
	const [ folderName, setFolderName ] = useState("");

	// const comprimirImagen = (imagenComoArchivo, porcentajeCalidad) => {
	// 	return new Promise((resolve, reject) => {
	// 		const $canvas = document.createElement("canvas");
	// 		const imagen = new Image();
	// 		imagen.onload = () => {
	// 			$canvas.width = imagen.width;
	// 			$canvas.height = imagen.height;
	// 			$canvas.getContext("2d").drawImage(imagen, 0, 0);
	// 			$canvas.toBlob(
	// 				(blob) => {
	// 					if (blob === null) {
	// 						return reject(blob);
	// 					} else {
	// 						resolve(blob);
	// 					}
	// 				},
	// 				"image/jpeg",
	// 				porcentajeCalidad / 100
	// 			);
	// 		};
	// 		imagen.src = URL.createObjectURL(imagenComoArchivo);
	// 	});
	// };

	const handleDrop = (files) => {
		const isValidFiles = isValidArray(files);

		if (isValidFiles) {
			const newListFiles = files.map((file) => {
				const myFile = file;
				// const blob = await comprimirImagen(myFile, 10);
				const createObjectURL = Object.assign(myFile, { preview : URL.createObjectURL(file) });
				return (
					createObjectURL
				);
			});

			// Promise.all(newListFiles).then(values => {
			// 	setFileImage(prev => {
			// 		const newData = [...prev, ...values];
			// 		return newData;
			// 	});
			// }, reason => {
			// 	console.error(reason);
			// });

			setFileImage(prev => {
				const newData = [...prev, ...newListFiles];
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
		const newData = fileImage.map(file => ({
			id    : file?.name,
			name  : file?.name,
			image : file?.preview,
		}));

		const dataToSend = convertToObject(newData);

		gallerySlice.setGalleryData(dataToSend);
	};

	const handleAddFolder = () => {
		const newData = fileImage.map(file => ({
			id       : file?.name,
			name     : file?.name,
			image    : file?.preview,
			parentId : folderName,
		}));
		const thumbImages = (newData?.length > 5) ? [newData[0], newData[1], newData[2], newData[3], newData[4]] : newData;
		const folderData = {
			id          : folderName,
			folderName  : folderName,
			thumbImages : thumbImages,
		};

		const dataToSend = convertToObject(newData);

		gallerySlice.setGalleryData({[folderData["id"]] : {...folderData}, ...dataToSend});
	};

	console.log(fileImage);

	return (
		<div className="DropDoc">
			{
				(!isValidArray(fileImage) && !isSelectedFolder) && (
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
							<Card
								isButton
								image={<Folder size="50px" />}
								body="CARGAR EN UNA NUEVA CARPETA"
								onSelect={() => setIsSelectedFolder(true)}
							/>
						</div>
					</div>
				)
			}
			{
				isSelectedFolder && (
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
	);
};

const mapDispatchToProps = bindAll({ gallerySlice : gallerySlice.actions});

export default connect(null, mapDispatchToProps) (DropDoc);
