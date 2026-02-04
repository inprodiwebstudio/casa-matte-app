const handlerErrorImages = async (imagesInPages) => {
	const errorImages = [];

	const checkImage = (url) => {
		return new Promise((resolve) => {
			const img = new Image();

			img.onload = () => {
				if (img.naturalWidth <= 1 || img.naturalHeight <= 1) {
					resolve({ status : "error" });
				} else {
					resolve({ status : "success" });
				}
			};

			img.onerror = () => {
				resolve({ status : "error" });
			};

			img.src = `${url}?cb=${Date.now()}`;
		});
	};

	for (let i = 0; i < imagesInPages.length; i++) {
		const image = imagesInPages[i];
		const {status} = await checkImage(image.url);
		if (status === "error") {
			errorImages.push(image);
		}
	}
	return errorImages;
};

export default handlerErrorImages;
