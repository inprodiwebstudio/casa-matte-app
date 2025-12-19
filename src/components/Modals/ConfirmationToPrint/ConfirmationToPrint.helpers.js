import { isValidArray } from "helpers";

export const inCompletePages = (pages, layoutMods) => {
	const clonePagesLeaveFrontPage = pages.filter((page) => (page?.id !== "FrontLayout"));
	const incompletedPages = [];

	const isIncompletedPhotos = (objectPhotos) => {
		const photos = Object.values(objectPhotos);

		if (!isValidArray(photos)) {
			return true;
		}

		return photos.some((photo) => ((photo.id === "") || (photo.url === "")));
	};

	clonePagesLeaveFrontPage.forEach((page) => {
		const { sheet1, sheet2 } = page;

		const isTextLayout = (sheetNo) => {
			const layoutType = sheetNo?.layoutType;
			const layout = layoutMods[layoutType];
			return (layout?.cat === "text") || (layout?.cat === "fotosytexto");
		};

		if (isIncompletedPhotos(sheet1?.photos) && ((sheet1?.layoutType !== "") && !isTextLayout(sheet1))) {
			incompletedPages.push(sheet1.pageNo);
		}
		if (sheet2?.photos) {
			if (isIncompletedPhotos(sheet2.photos) && ((sheet2.layoutType !== "") && !isTextLayout(sheet2))) {
				incompletedPages.push(sheet2.pageNo);
			}
		}
	});
	return incompletedPages;
};
