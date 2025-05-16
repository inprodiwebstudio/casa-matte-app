import highQualityImgUrl from "helpers/Functions/highQualityImg";
export const loadImageWithRetry = (url) => {
	return new Promise((resolve, reject) => {
		const tryLoad = () => {
			const img = new Image();
			img.src = highQualityImgUrl(url);

			img.onload = () => resolve(url);
			img.onerror = () => {
				highQualityImgUrl(url);
			};
		};

		tryLoad();
	});
};
