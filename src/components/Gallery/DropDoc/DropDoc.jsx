import { useState }    from "react";
import { useDropzone } from "react-dropzone";

//Own components
import { DropFile, Folder, PhotoList } from "Resources/icons";
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

	return (
		<div className="DropDoc">
			{
				!isValidArray(fileImage) ? (
					<div  {...getRootProps({className : "indicator-drop-container"})}>
						<DropFile size="40px" />
						<p>
							ARRASTRA AQUÍ LAS FOTOGRAFÍAS QUE
							QUIERAS AGREGAR A TU PROYECTO
						</p>
						<input {...getInputProps()} />
					</div>
				) : (
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
		</div>
	);
};

export default DropDoc;
