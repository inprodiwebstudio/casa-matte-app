// eslint-disable-next-line import/no-extraneous-dependencies
import domtoimage from "dom-to-image";

const textToImage = async (id) => {
	const element = document.getElementById(id);

	if (!element) return undefined;

	await document.fonts.ready;

	const width = element.clientWidth * 4; // Aumenta el ancho
	const height = element.clientHeight * 4; // Aumenta la altura

	const imgData = await domtoimage.toJpeg(element, {
		width  : width,
		height : height,
		style  : {
			transform       : `scale(${4})`,
			transformOrigin : "top left",
			background      : "white",
			width           : `${element.clientWidth}px`, // Mantiene el tamaño real en el DOM
			height          : `${element.clientHeight}px`,
		},
	});

	// if (imgData) {
	// 	const downloadBase64Image = (base64String, filename = "imagen.jpg") => {
	// 		const link = document.createElement("a");
	// 		link.href = base64String;
	// 		link.download = filename;

	// 		document.body.appendChild(link);
	// 		link.click();
	// 		document.body.removeChild(link);
	// 	};

	// 	downloadBase64Image(imgData, "imagen.jpg");
	// }

	return imgData;
};

export default textToImage;
