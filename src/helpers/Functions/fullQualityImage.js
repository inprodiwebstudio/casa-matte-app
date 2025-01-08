const fullQualityImg = (urlimg) => {
	if (!urlimg) return;
	const sanityImageFullQuality = urlimg.replace("w_1920/q_30/", "");

	return sanityImageFullQuality;
};

export default fullQualityImg;
