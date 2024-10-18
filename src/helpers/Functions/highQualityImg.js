const constructorImg = (urlimg) => {
	if (!urlimg) return;
	const splitImage = urlimg.split("w_");

	return `${splitImage[0]}q_60/v1${urlimg.split("v1")[1]}`;
};

export default constructorImg;
