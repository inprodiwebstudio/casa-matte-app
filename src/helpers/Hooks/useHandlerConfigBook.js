import photoBooksConfing             from "core/constants/photoBooksConfing";
import { shallowEqual, useSelector } from "react-redux";

export const useHandlerConfigBook = () => {
	const photoBookData = useSelector((state) => state.workSpaceSlice.data, shallowEqual);

	const { product, format,  sizePhotoBook} = photoBookData;

	const configBook = photoBooksConfing[product]?.[format]?.sizes?.[sizePhotoBook];

	return configBook;
};
