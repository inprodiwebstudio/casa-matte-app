// eslint-disable-next-line import/no-extraneous-dependencies
import domtoimage from "dom-to-image";

const textToImage = async (id) => {
	const element = document.getElementById(id);

	if (!element) return undefined;

	const width = element.clientWidth * 5;
	const height = element.clientHeight * 5;

	//convert to image fn

	const imgData = await domtoimage.toPng(element, {
		width  : width,
		height : height,
		style  : {
			transform       : `scale(${5})`,
			transformOrigin : "top left",
			width           : `${element.clientWidth}px`,
			height          : `${element.clientHeight}px`,
		},
	});

	return imgData;
};

export default textToImage;
