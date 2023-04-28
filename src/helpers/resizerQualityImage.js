//external
import ImageKit from "imagekit-javascript";

const resizerQualityImage = (imgUrl, width, height) => {
	const imagekit = new ImageKit({
		urlEndpoint : "https://ik.imagekit.io/joabMedel",
	});

	const img = imagekit.url({
		src            : imgUrl,
		transformation : [{
			"height" : height ? height : "600",
			"width"  : width ? width : "800",
		}],
	});

	return img;
};

export default resizerQualityImage;
