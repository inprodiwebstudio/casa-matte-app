import { useState }    from "react";
import { useDropzone } from "react-dropzone";

//Own components
import { DropFile }     from "Resources/icons";
import { isValidArray } from "helpers";
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

	console.log(fileImage);
	return (
		<div className="DropDoc">
			<div  {...getRootProps({className : "indicator-drop-container"})}>
				<DropFile size="40px" />
				<p>
					ARRASTRA AQUÍ LAS FOTOGRAFÍAS QUE
					QUIERAS AGREGAR A TU PROYECTO
				</p>
				<input {...getInputProps()} />
			</div>
		</div>
	);
};

export default DropDoc;
