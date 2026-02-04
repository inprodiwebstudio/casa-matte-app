import convertToObject from "helpers/convertToobject";

const handlerRemoveErrorImgs = (errorImages, pages) => {
	const listOfPages = Object.values(pages).filter((page) => page?.id !== "FrontLayout");
	const clonePages = convertToObject(listOfPages);

	errorImages.forEach((errImage) => {
		clonePages[errImage.pageId][errImage.sheetNo].photos[errImage.photoNo] = {
			url : "",
			id  : "",
		};
	});

	return clonePages;
};

export default handlerRemoveErrorImgs;
