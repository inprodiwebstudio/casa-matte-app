import { resizerImage } from "helpers";

export const handlerResizerImage = (images, index, isInWorkSpcae) => {
	if (isInWorkSpcae) {
		return resizerImage(images[index], 900, 600);
	}
	return resizerImage(images[index], 100, 100);
};
