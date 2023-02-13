import { resizerImage } from "helpers";

export const handlerResizerImage = (images, index, isInWorkSpcae) => {
	if (isInWorkSpcae) {
		return resizerImage(images[index].url, null, null, 1);
	}
	return resizerImage(images[index].url, 150, 150);
};
