export const gallerySeparation = (galleryData, isFolder) => {
	const newData = galleryData.filter(data => isFolder ? data?.type === "folder" : data?.type === "file");
	if (!isFolder) {
		const imagesConvertToPng = newData.map(image => {
			return {
				...image,
				url          : image?.url.includes(".heic") ? image?.url.replace(".heic", ".jpg") : image?.url,
				urlThumbnail : image?.urlThumbnail.includes(".heic") ? image?.urlThumbnail.replace(".heic", ".jpg") : image?.urlThumbnail,
			};
		});

		return imagesConvertToPng.reverse();
	}
	return newData.reverse();
};
