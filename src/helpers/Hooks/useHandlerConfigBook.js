import { shallowEqual, useSelector } from "react-redux";
import photoBooksConfig              from "core/constants/photoBooksConfing";
import photoBooksConfigOld           from "core/constants/photoBooksConfigOld";

export const useHandlerConfigBook = (typeConfig) => {
	const photoBookData = useSelector((state) => state.workSpaceSlice.data, shallowEqual);

	const { product, format, sizePhotoBook } = photoBookData;

	if (!product || !format || !sizePhotoBook) {
		return undefined;
	}

	const handlerTypeConfig = (typeConfig === "old") ? photoBooksConfigOld : photoBooksConfig;

	const configBook = handlerTypeConfig[product][format].sizes[sizePhotoBook];

	return configBook;
};
