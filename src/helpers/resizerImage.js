//external
import ImageKit from "imagekit-javascript";

const resizerImage = (imgUrl, width, height, quality) => {
	const imagekit = new ImageKit({
		urlEndpoint : "https://ik.imagekit.io/joabMedel",
	});

	const img = imagekit.url({
		src            : imgUrl,
		transformation : [{
			...(!quality && {
				"height" : 0.2,
				"width"  : 0.2,
			}),
			...(quality && {
				"width"  : quality,
				"height" : quality,
			}),
		}],
	});

	return img;
};

export default resizerImage;
