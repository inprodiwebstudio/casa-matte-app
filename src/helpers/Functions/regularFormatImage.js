const regularFormatImage = (url) => {
	if (!url) return;
	const myUrl = url.replace(/\.(heic|heif|dng|webp)(?=($|\?))/i, ".png");

	return myUrl;
};

export default regularFormatImage;
