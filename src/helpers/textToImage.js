// eslint-disable-next-line import/no-extraneous-dependencies
import domtoimage from "dom-to-image";

const textToImage = async (id) => {
	const element = document.getElementById(id);
	console.log(element);

	if (!element) return undefined;

	const width = element.clientWidth * 5; // Aumenta el ancho
	const height = element.clientHeight * 5; // Aumenta la altura

	const imgData = await domtoimage.toPng(element, {
		width  : width,
		height : height,
		style  : {
			transform       : `scale(${5})`,
			transformOrigin : "top left",
			width           : `${element.clientWidth}px`, // Mantiene el tamaño real en el DOM
			height          : `${element.clientHeight}px`,
		},
	});

	return imgData;
};

export default textToImage;
