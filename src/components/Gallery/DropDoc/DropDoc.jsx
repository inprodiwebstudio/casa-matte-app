import { useState }    from "react";
import { useDropzone } from "react-dropzone";

//Own components
import { DropFile, Folder, PhotoList } from "Resources/icons";
import { TextInput }                   from "core/components";
import { isValidArray }                from "helpers";
import "./DropDoc.scss";

const DropDoc = () => {

	const [ fileImage, setFileImage ] = useState([]);

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

	const testing = true;

	return (
		<div className="DropDoc">
			{
				(!isValidArray(fileImage) && !testing) && (
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
				(isValidArray(fileImage) && !testing) && (
					<div className="options-cards-container">
						<div className="options-card">
							<div className="cardOption">
								<PhotoList size="50px" />
								<p>
									CARGAR A GALERÍA
								</p>
							</div>
							<div className="cardOption">
								<Folder size="50px" />
								<p>
									CARGAR EN UNA NUEVA
									CARPETA
								</p>
							</div>
						</div>
					</div>
				)
			}
			{
				testing && (
					<div className="options-cards-container">
						<div className="options-card">
							<div className="form-container">
								<div className="cardOption regularCard">
									<Folder size="50px" />
									<p>
										CARGAR EN UNA NUEVA
										CARPETA
									</p>
								</div>
								<TextInput />
							</div>
							<p>Boton</p>
						</div>
					</div>
				)
			}
		</div>
	);
};

export default DropDoc;
