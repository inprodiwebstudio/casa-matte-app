export const changeResolutionImgUrl = (
	url,
	sizes = {
		width  : 1920,
		height : undefined,
	},
	quality = 100,
) => {
	if (!url) return;
	const newUrlImage = url.replace(/w_\d+\/q_\d+\//,
  `w_${sizes.width}/${sizes?.height ? `h_${sizes.height}/` : ""}q_${quality}/`
	);
	console.log(newUrlImage);

	return newUrlImage;
};
