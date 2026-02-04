const urlImagesInPages = (pages) => {
	const listOfPages = Object.values(pages).filter((page) => page?.id !== "FrontLayout");
	if (listOfPages.length <= 0) {
		return undefined;
	}
	const listPagesAndImages = listOfPages.map((page) => ({
		...page,
		sheet1 : {
			...page.sheet1,
			photos : Object.values(page.sheet1.photos),
		},
		...(page.sheet2 && {
			sheet2 : {
				...page.sheet2,
				photos : Object.values(page.sheet2.photos),
			},
		}),
	}));

	const imagesInPages = [];

	const susbstractImagesInSheet = (sheetData) => {
		const listOfPhotos = sheetData.photos;
		if (listOfPages.length <= 0) {
			return [];
		}
		const validPhotosInSheet = [];
		for (let i = 0; i < listOfPhotos.length; i++) {
			const {url, id} = listOfPhotos[i];
			if (url && id) {
				validPhotosInSheet.push({
					url,
					id,
					pageNo  : sheetData.pageNo,
					photoNo : i,
				});
			}
		}
		return validPhotosInSheet;
	};

	for (let i = 0; i < listPagesAndImages.length; i++) {
		const {id, sheet1, sheet2} = listPagesAndImages[i];

		const validImagesSheet1 = susbstractImagesInSheet(sheet1).map(imageSheet => ({...imageSheet, pageId : id, sheetNo : "sheet1"}));
		const validImagesSheet2 = sheet2 ? susbstractImagesInSheet(sheet2).map(imageSheet => ({...imageSheet, pageId : id, sheetNo : "sheet2"})) : [];

		imagesInPages.push(...validImagesSheet1, ...validImagesSheet2);
	}

	return imagesInPages;
};

export default urlImagesInPages;
