import { Group, Stack }                           from "@mantine/core";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { gallerySlice }                           from "store/Slices";

const SelectorGrid = () => {
	const isFullSizeSideBar = useSelector((state) => state.gallerySlice.isFullSizeSideBar, shallowEqual);

	const dispatch = useDispatch();

	const handlerChangeGrid = () => {
		if (!isFullSizeSideBar) {
			dispatch(gallerySlice.actions.toggleMoreCols());
		}
	};

	return (
		<Group
			spacing={"5px"}
			onClick={handlerChangeGrid}
			style={{
				cursor     : "pointer",
				userSelect : "none",
			}}
		>
			<Group spacing="1px">
				<Stack
					w="6px"
					h="6px"
					style={{
						background : "#58595b",
					}}
				>
					&nbsp;
				</Stack>
				<Stack
					w="6px"
					h="6px"
					style={{
						background : "#58595b",
					}}
				>
					&nbsp;
				</Stack>
				<Stack
					w="6px"
					h="6px"
					style={{
						background : "#58595b",
					}}
				>
					&nbsp;
				</Stack>
			</Group>
			<Group
				spacing="1px"
			>
				<Stack
					w="8px"
					h="8px"
					style={{
						background : "#58595b",
					}}
				>
					&nbsp;
				</Stack>
				<Stack
					w="8px"
					h="8px"
					style={{
						background : "#58595b",
					}}
				>
					&nbsp;
				</Stack>
			</Group>
		</Group>
	);
};

export default SelectorGrid;
