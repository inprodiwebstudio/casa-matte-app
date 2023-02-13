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
				"height" : height ? height : "150",
				"width"  : width ? width : "150",
			}),
			...(quality && {
				"quality" : quality,
			}),
		}],
	});

	return img;
};

export default resizerImage;
