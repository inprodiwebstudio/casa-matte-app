import { resizerImage } from "helpers";

export const handlerResizerImage = (images, index, isInWorkSpcae) => {
	if (isInWorkSpcae) {
		return resizerImage(images[index].url, 900, 600);
	}
	return resizerImage(images[index].url, 150, 150);
};
