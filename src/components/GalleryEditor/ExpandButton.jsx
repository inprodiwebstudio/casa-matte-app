import { ActionIcon }  from "@mantine/core";
import { MdArrowLeft } from "react-icons/md";
//Redux
import { useDispatch }  from "react-redux";
import { gallerySlice } from "store/Slices";


const ExpandButton = () => {
	const dispatch = useDispatch();

	const onClickButton = () => {
		dispatch(gallerySlice.actions.toggleFullSizeSideBar());
	};

	return (
		<ActionIcon
			variant="filled"
			mih={"40px"}
			radius={"8px"}
			onClick={onClickButton}
			style={{
				backgroundColor : "#58595b",
				position        : "absolute",
				top             : "45%",
				zIndex          : 1,
				left            : "-12px",
			}}
		>
			<MdArrowLeft size={15} />
		</ActionIcon>
	);
};

export default ExpandButton;
