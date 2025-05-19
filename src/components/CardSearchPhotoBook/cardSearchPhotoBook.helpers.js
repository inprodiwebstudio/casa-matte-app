import highQualityImg from "helpers/Functions/highQualityImg";
export const loadImageWithRetry = (url, maxAttempts = 1) => {
	return new Promise((resolve, reject) => {
		let attempts = 0;

		const tryLoad = () => {
			const img = new Image();
			img.src = highQualityImg(url || null);

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

		tryLoad();
	});
};
