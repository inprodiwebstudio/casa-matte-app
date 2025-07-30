// eslint-disable-next-line import/no-extraneous-dependencies
import domtoimage from "dom-to-image";

const textToImage = async (id) => {
	const element = document.getElementById(id);
	const style = window.getComputedStyle(element);

	const width = element.clientWidth;
	const height =  parseFloat(style.height);

	const width = element.clientWidth * 5;
	const height = element.clientHeight * 5;

	const imgData = await domtoimage.toPng(element, {
		width  : width * 5,
		height : height * 1.6,
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
