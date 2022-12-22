import { convertToArray } from "helpers";

export const gallerySeparation = (galleryData, isFolder) => {
	const parseToListData = convertToArray(galleryData);
	const newData = parseToListData.filter(data => isFolder ? data?.meta?.isfolder === "true" : data?.meta?.isfolder === "false");
	return newData;
};
