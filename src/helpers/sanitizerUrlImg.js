const sanitizerUrlImg = (url) => {
	return url
		.replace(/\(/g, "%28")
		.replace(/\)/g, "%29")
		.replace(/'/g, "%27")
		.replace(/"/g, "%22");
};

export default sanitizerUrlImg;
