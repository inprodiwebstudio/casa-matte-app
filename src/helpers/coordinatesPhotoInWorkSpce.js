import convertToArray from "./convertToArray";
import isValidArray   from "./isValidArray";

const abstractCoordinates = (photoId, pageId, sheetNo, photos) => {
	const listOfPhotos = convertToArray(photos);
	const myListOfCoordinates = [];

	if (isValidArray(listOfPhotos)) {
		listOfPhotos.forEach((photo, index) => {
			if (photo?.id === photoId) {
				const coordinate = `${pageId}.${sheetNo}.${index}`;
				myListOfCoordinates.push(coordinate);
			}
		});
		return myListOfCoordinates;
	}
};

const coordinatesPhotoInWorkSpce = (photoId, worspaceData) => {
	const listOfPages = convertToArray(worspaceData?.pages);
	const cordinateList = [];

	listOfPages.forEach(page => {
		cordinateList.push(abstractCoordinates(photoId, page?.id, "sheet1", page.sheet1?.photos));
		if (page.sheet2) {
			cordinateList.push(abstractCoordinates(photoId, page?.id, "sheet2", page.sheet2?.photos) ?? []);
		}
	});
	const listOutputCoordinates = cordinateList.flat();
	return listOutputCoordinates;
};

export default coordinatesPhotoInWorkSpce;
