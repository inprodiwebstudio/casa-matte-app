export const inCompletePages = (pages) => {
	console.log(pages);
	const incompletedPages = [];

	const isIncompletedPhotos = (objectPhotos) => {
		const photos = Object.values(objectPhotos);

		return photos.some((photo) => ((photo.id === "") || (photo.url === "")));
	};
	pages.forEach((page) => {
		const { sheet1, sheet2 } = page;

		if (isIncompletedPhotos(sheet1.photos) && (sheet1.layoutType !== "")) {
			incompletedPages.push(sheet1.pageNo);
		}
		if (sheet2.photos) {
			if (isIncompletedPhotos(sheet2.photos) && (sheet2.layoutType !== "")) {
				incompletedPages.push(sheet2.pageNo);
			}
		}
	});
	return incompletedPages;
};
