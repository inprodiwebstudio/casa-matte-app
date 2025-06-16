const constructorImg = (urlimg) => {
	if (!urlimg) return;
	const splitImage = urlimg.split("upload");

	return `${splitImage[0]}upload/c_fill,w_1600,q_auto,f_auto/v12345/${urlimg.split("/v1/")[1]}`;
};

export default constructorImg;
