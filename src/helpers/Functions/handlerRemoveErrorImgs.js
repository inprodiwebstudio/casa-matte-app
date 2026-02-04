import convertToObject from "helpers/convertToobject";

const handlerRemoveErrorImgs = (errorImages, pages) => {
	const listOfPages = Object.values(pages).filter((page) => page?.id !== "FrontLayout");
	const clonePages = convertToObject(listOfPages);

	errorImages.forEach((errImage) => {
		clonePages[errImage.pageId] = {
			...clonePages[errImage.pageId],
			[errImage.sheetNo] : {
				...clonePages[errImage.pageId]?.[errImage.sheetNo],
				photos : {
					...clonePages[errImage.pageId]?.[errImage.sheetNo]?.photos,
					[errImage.photoNo] : {
						id  : "",
						url : "",
					},
				},
			},
		};
	});

	return clonePages;
};

export default handlerRemoveErrorImgs;
