export const loadImageWithRetry = (url, maxAttempts = 5) => {
	return new Promise((resolve, reject) => {
		let attempts = 0;

		const tryLoad = () => {
			const img = new Image();
			img.src = url;

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
