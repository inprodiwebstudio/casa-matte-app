import { resizerImage } from "helpers";

export const handlerResizerImage = (image, isInWorkSpcae) => {
	const myImage = selectPhotoUrl(image);
	if (isInWorkSpcae) {
		return resizerImage(myImage, 50, 50);
	}
	return resizerImage(myImage, 10, 10);
};

export const selectPhotoUrl = (photoData) => {
	if (photoData?.urlPhotoEdited) {
		return photoData?.urlPhotoEdited;
	}
	return photoData?.url;
};
