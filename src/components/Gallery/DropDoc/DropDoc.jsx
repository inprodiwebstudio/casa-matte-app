import { useState }    from "react";
import { useDropzone } from "react-dropzone";

//Own components
import { DropFile, Folder, PhotoList, ArrowLeft } from "Resources/icons";
import { TextInput, Button, Card }                from "core/components";
import { isValidArray }                           from "helpers";
import "./DropDoc.scss";

const DropDoc = () => {

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

export default DropDoc;
