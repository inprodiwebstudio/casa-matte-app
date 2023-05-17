import { resizerImage } from "helpers";

export const handlerResizerImage = (image, isInWorkSpcae) => {
	const myImage = selectPhotoUrl(image);
	if (isInWorkSpcae) {
		return resizerImage(myImage, null, null, 0.1);
	}
	return resizerImage(myImage, 100, 100);
};

export const selectPhotoUrl = (photoData) => {
	if (photoData?.urlPhotoEdited) {
		return photoData?.urlPhotoEdited;
	}
	return photoData?.url;
};
