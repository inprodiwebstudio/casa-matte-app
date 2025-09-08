import { changeResolutionImgUrl } from "helpers/Functions/changeResolutionImgUrl";

export const handlerResizerImage = (image, isInWorkSpcae) => {
	const myImageUrl = selectPhotoUrl(image);
	const sizesWorkSpace = {
		width : 1920,
	};
	const sizesPaginatorThumbnail = {
		width : 300,
	};
	if (isInWorkSpcae) {
		return changeResolutionImgUrl(myImageUrl, sizesWorkSpace, 70);
	}
	return changeResolutionImgUrl(myImageUrl, sizesPaginatorThumbnail);
};

export const selectPhotoUrl = (photoData) => {
	if (photoData?.urlPhotoEdited) {
		return photoData?.urlPhotoEdited;
	}
	return photoData?.url;
};
