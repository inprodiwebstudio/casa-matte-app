// eslint-disable-next-line import/no-extraneous-dependencies
import domtoimage from "dom-to-image";

const textToImage = async (id) => {
	const element = document.getElementById(id);

	if (!element) return undefined;

	await document.fonts.ready;

	const width = element.clientWidth * 3; // Aumenta el ancho
	const height = element.clientHeight * 3; // Aumenta la altura

	const imgData = await domtoimage.toPng(element, {
		width  : width,
		height : height,
		style  : {
			transform       : `scale(${3})`,
			transformOrigin : "top left",
			background      : "white",
			width           : `${element.clientWidth}px`, // Mantiene el tamaño real en el DOM
			height          : `${element.clientHeight}px`,
		},
	});

	// if (imgData) {
	// 	const downloadBase64Image = (base64String, filename = "imagen.png") => {
	// 		const link = document.createElement("a");
	// 		link.href = base64String;
	// 		link.download = filename;

	// 		document.body.appendChild(link);
	// 		link.click();
	// 		document.body.removeChild(link);
	// 	};

	// 	downloadBase64Image(imgData, "imagen.png");
	// }

	return imgData;
};

export default textToImage;
