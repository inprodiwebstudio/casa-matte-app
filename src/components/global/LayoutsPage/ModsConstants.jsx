import { resizerImage } from "helpers";

export const handlerResizerImage = (images, index, isInWorkSpcae) => {
	if (isInWorkSpcae) {
		return resizerImage(images[index].url, 900, 600, null);
	}
	return resizerImage(images[index].url, 100, 100);
};
