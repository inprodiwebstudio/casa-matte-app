//external
import ImageKit from "imagekit-javascript";


const resizerImage = (imgUrl, width, height) => {
	const imagekit = new ImageKit({
		urlEndpoint : "https://ik.imagekit.io/joabMedel",
	});

	const img = imagekit.url({
		src            : imgUrl,
		transformation : [{
			"height" : height ? height : "150",
			"width"  : width ? width : "150",
		}],
	});

	return img;
};

export default resizerImage;
