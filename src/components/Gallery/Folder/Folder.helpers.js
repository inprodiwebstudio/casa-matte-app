//Own functions
import { convertToArray } from "helpers";

export const UpdateThumbNails = (currentPhotos, photosSelected) => {
	const newPhotos = convertToArray(photosSelected).map(photo => photo?.meta?.imageurl);
	const updatedable = (currentPhotos.length + newPhotos.length) > 4 ? false : true;
	if (updatedable) {
		const missingPhotos = 5 - currentPhotos.length;
		const sliceNewPhotos = newPhotos.slice(0, missingPhotos);
		const newPhotosUpload = [...currentPhotos, ...sliceNewPhotos ];
		return newPhotosUpload;
	}
	return currentPhotos;
};
