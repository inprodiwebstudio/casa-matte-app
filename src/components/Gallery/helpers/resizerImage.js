//external
import ImageKit from "imagekit-javascript";


const resizerImage = (imgUrl) => {
	const imagekit = new ImageKit({
		urlEndpoint : "https://ik.imagekit.io/joabMedel",
	});

	const img = imagekit.url({
		src            : imgUrl,
		transformation : [{
			"height" : "150",
			"width"  : "150",
		}],
	});

	return img;
};

export default resizerImage;
