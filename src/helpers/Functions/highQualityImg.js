const constructorImg = (urlimg) => {
	if (!urlimg) return;
	const splitImage = urlimg.split("w_");
	const folderName = urlimg.split("/")[urlimg.split("/").length - 2];
	const fileName = urlimg.split("/")[urlimg.split("/").length - 1];

	return `${splitImage[0]}q_70/v1/${folderName}/${fileName}`;
};

export default constructorImg;
