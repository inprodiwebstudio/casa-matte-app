import { isValidArray } from "helpers";

export const inCompletePages = (pages, layoutMods) => {
	const clonePagesLeaveFrontPage = pages.filter((page) => (page?.id !== "FrontLayout"));
	const incompletedPages = [];

	const isIncompletedPhotos = (objectPhotos) => {
		const photos = Object.values(objectPhotos);

		const validPhotos = photos.filter(photo => !((photo?.[0] === "h") && (photo?.[1] === "t") && (photo?.[2] === "t") && (photo?.[3] === "p") && (photo?.[4] === "s") && (photo?.[5] === ":")) || !(Object.keys(photo).length === 0));

		if (!isValidArray(validPhotos)) {
			return true;
		}

		return validPhotos.some((photo) => (((photo.id === "") || (photo.id === undefined)) || ((photo.url === "") || (photo.url === undefined)) || (Object.values(photo).length === 0)));
	};

	clonePagesLeaveFrontPage.forEach((page) => {
		const { sheet1, sheet2 } = page;

		const isPhotoLayout = (sheetNo) => {
			const layoutType = sheetNo?.layoutType;
			const layout = layoutMods[layoutType];
			return (layout?.cat === "fotos") || (layout?.cat === "fotosytexto");
		};

		if (isIncompletedPhotos(sheet1?.photos)) {
			if (sheet1?.layoutType !== "") {
				if (isPhotoLayout(sheet1)) {
					incompletedPages.push(sheet1.pageNo);
				}
			}
		}
		if (sheet2?.photos) {
			if (isIncompletedPhotos(sheet2?.photos)) {
				if (sheet2?.layoutType !== "") {
					if (isPhotoLayout(sheet2)) {
						incompletedPages.push(sheet2.pageNo);
					}
				}
			}
		}
	});
	return incompletedPages;
};
