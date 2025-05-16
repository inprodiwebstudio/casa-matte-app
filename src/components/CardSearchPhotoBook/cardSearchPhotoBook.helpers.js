import { isValidArray }  from "helpers";
import highQualityImgUrl from "helpers/Functions/highQualityImg";

export const fetchImageAsBase64WithRetry = async (url, maxAttempts = 5) => {
	let attempts = 0;

	while (attempts < maxAttempts) {
		try {
			const response = await fetch(url);
			const blob = await response.blob();

			const base64 = await new Promise((resolve, reject) => {
				const reader = new FileReader();
				reader.onloadend = () => resolve(reader.result);
				reader.onerror = reject;
				reader.readAsDataURL(blob);
			});

			return base64;
		} catch (err) {
			attempts++;
			if (attempts >= maxAttempts) {
				throw new Error(`No se pudo cargar la imagen: ${url}`);
			}
			await new Promise((res) => setTimeout(res, 500));
		}
	}
};

export const subsTarctImagesInPagesData = (objPages) => {
	if (!objPages) return new Error("Not pass pages data");

	const pages = Object.values(objPages);

	if (!isValidArray(pages)) return new Error("Error pages. Not valid array pages");

	const listOfImagesInPhotoBook = [];

	pages.forEach((page) => {
		const pageId = page.id;
		const { sheet2 } = page;

		const imagesInSheet = (sheetNo) => {
			if (page[`sheet${sheetNo}`].layoutType === "") return;
			const sheetKey = `sheet${sheetNo}`;
			const photos = page[sheetKey]?.photos;
			const photosArray = Object.values(photos);
			if (isValidArray(photosArray)) {
				photosArray.forEach((photo, index) => {
					if (photo.id !== "") {
						listOfImagesInPhotoBook.push({
							pageId,
							sheetKey,
							photoNo  : index,
							imageUrl : highQualityImgUrl(photo.urlPhotoEdited ? photo.urlPhotoEdited : photo.url),
						});
					}
				});
			}
		};

		imagesInSheet(1);
		if (sheet2) {
			imagesInSheet(2);
		}
	});

	return listOfImagesInPhotoBook;
};
