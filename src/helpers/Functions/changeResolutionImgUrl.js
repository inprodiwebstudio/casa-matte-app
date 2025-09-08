export const changeResolutionImgUrl = (
	url,
	sizes = {
		width  : 1920,
		height : undefined,
	},
	quality = 100,
) => {
	const newUrlImage = url.replace("w_1920/q_30/", `w_${sizes.width}/${sizes?.height ? `h_${sizes.height}/` : ""}q_${quality}/`);

	return newUrlImage;
};
