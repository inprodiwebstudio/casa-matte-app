import { resizerImage } from "helpers";

export const handlerResizerImage = (images, index, isInWorkSpcae) => {
	if (isInWorkSpcae) {
		if (images[index].urlPhotoEdited) {
			return resizerImage(images[index].urlPhotoEdited, null, null, 0.1);
		}
		return resizerImage(images[index].url, null, null, 0.1);
	}
	if (images[index].urlPhotoEdited) {
		return resizerImage(images[index].urlPhotoEdited, 100, 100);
	}
	return resizerImage(images[index].url, 100, 100);
};
