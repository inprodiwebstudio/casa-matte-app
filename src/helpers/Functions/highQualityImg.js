const constructorImg = (urlimg) => {
	if (!urlimg) return;
	const splitImage = urlimg.split("upload");

	return `${splitImage[0]}upload/q_60/v1/${urlimg.split("/v1/")[1]}`;
};

export default constructorImg;
