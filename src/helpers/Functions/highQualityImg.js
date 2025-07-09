const constructorImg = (urlimg) => {
	if (!urlimg) return;
	const splitImage = urlimg.split("upload");

	return `${splitImage[0]}upload/c_fill,w_3000,q_auto,f_auto/v12345/${urlimg.split("/v1/")[1]}`;
};

export default constructorImg;
