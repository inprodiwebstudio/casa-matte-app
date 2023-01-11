export const gallerySeparation = (galleryData, isFolder) => {
	const newData = galleryData.filter(data => isFolder ? data?.type === "folder" : data?.type === "file");
	return newData.reverse();
};
