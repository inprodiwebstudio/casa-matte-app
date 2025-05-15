import { isValidArray } from "helpers";

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
		const { sheet1, sheet2 } = page;
	});
};
