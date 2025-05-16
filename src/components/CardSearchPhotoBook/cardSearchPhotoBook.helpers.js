import highQualityImgUrl from "helpers/Functions/highQualityImg";

export const loadImageWithRetry = (url, maxAttempts = 5) => {
	return new Promise((resolve, reject) => {
		let attempts = 0;

		const tryLoad = () => {
			const img = new Image();
			img.src = highQualityImgUrl(url);

			img.onload = () => resolve(url);
			img.onerror = () => {
				attempts++;
				if (attempts < maxAttempts) {
					setTimeout(tryLoad, 500);
				} else {
					reject(new Error(`No se pudo cargar la imagen: ${url}`));
				}
			};
		};

		imagesInSheet(1);
		if (sheet2) {
			imagesInSheet(2);
		}
	});

	return listOfImagesInPhotoBook;
};
