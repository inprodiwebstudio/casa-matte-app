const fullQualityImg = (urlimg) => {
	if (!urlimg) return;
	const splitImage = urlimg.split("w_");
	const folderName = urlimg.split("/")[urlimg.split("/").length - 2];
	const userName = urlimg.split("/")[urlimg.split("/").length - 3];
	const fileName = urlimg.split("/")[urlimg.split("/").length - 1];

	return `${splitImage[0]}/${userName}/${folderName}/${fileName}`;
};

export default fullQualityImg;
