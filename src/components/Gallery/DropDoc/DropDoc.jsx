import { useState }    from "react";
import { useDropzone } from "react-dropzone";
import { connect }     from "react-redux";

//Own components
import { setGalleryData }                         from "store/Slices";
import { DropFile, Folder, PhotoList, ArrowLeft } from "Resources/icons";
import { TextInput, Button, Card }                from "core/components";
import { isValidArray, convertToObject, bindAll } from "helpers";
import "./DropDoc.scss";

const DropDoc = ({setGalleryData}) => {

	const [ fileImage, setFileImage ] = useState([]);
	const [ isSelectedFolder, setIsSelectedFolder ] = useState(false);

	const handleDrop = files => {
		const isValidFiles = isValidArray(files);

		if (isValidFiles) {
			const newListFiles = files.map(file => {
				const myFile = file;
				const createObjectURL = Object.assign(myFile, { preview : URL.createObjectURL(myFile) });
				return (
					createObjectURL
				);
			});

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

		setGalleryData(dataToSend);
	};

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
								<TextInput />
							</div>
							<Button
								fontSize="16px"
								fullSize
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

const mapDispatchToProps = bindAll({ setGalleryData : setGalleryData});

export default connect(null, mapDispatchToProps) (DropDoc);
