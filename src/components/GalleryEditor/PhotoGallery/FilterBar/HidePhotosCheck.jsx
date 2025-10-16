import { Radio }                                  from "@mantine/core";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { gallerySlice }                           from "store/Slices";

const HidePhotosCheck = () => {
	const dispatch = useDispatch();
	const isHidePhotosInUse = useSelector((state) => state.gallerySlice.isHidePhotosInUse, shallowEqual);

	const handlerChangeHidePhotos = () => {
		dispatch(gallerySlice.actions.togglePhotosInUse());
	};
	return (
		<Radio
			checked={isHidePhotosInUse}
			labelPosition="left"
			onClick={() => handlerChangeHidePhotos()}
			label="Ocultar fotos usadas"
			size="xs"
			styles={{
				label : {
					fontFamily    : "Helvetica",
					letterSpacing : "0px",
					fontSize      : "10px",
					paddingRight  : "5px !important",
				},
				radio : {
					marginRight : "0px !important",
					"&:checked" : {
						borderColor : "#58595b",
						background  : "#58595b",
					},
				},
			}}
		/>
	);
};

export default HidePhotosCheck;
