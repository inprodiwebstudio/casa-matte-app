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
