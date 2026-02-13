const sanitizerUrlImg = (url) => {
	return url
		.replace(/\(/g, "%28")
		.replace(/\)/g, "%29");
};

export default sanitizerUrlImg;
