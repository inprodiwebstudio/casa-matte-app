export const gallerySeparation = (galleryData, isFolder) => {
	const newData = galleryData.filter(data => isFolder ? data?.meta?.isfolder === "true" : data?.meta?.isfolder === "false");
	return newData.reverse();
};
