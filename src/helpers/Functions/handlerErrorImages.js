const handlerErrorImages = async (imagesInPages) => {
	const errorImages = [];

	const sanitizeUrl = (url = "") => {
		return url.replace("/w_1920/q_30/v1", "/w_20/v1");
	};

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

		const sanityUrl = sanitizeUrl(image.url);
		console.log(sanityUrl);
		const { status } = await checkImage(sanityUrl);

		if (status === "error") {
			errorImages.push({
				...image,
				url : sanityUrl,
			});
		}
	}

	return errorImages;
};

export default handlerErrorImages;
