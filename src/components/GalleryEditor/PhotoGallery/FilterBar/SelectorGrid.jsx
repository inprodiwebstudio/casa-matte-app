import { Group, Stack }                           from "@mantine/core";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { gallerySlice }                           from "store/Slices";

const SelectorGrid = () => {
	const isFullSizeSideBar = useSelector((state) => state.gallerySlice.isFullSizeSideBar, shallowEqual);

	const dispatch = useDispatch();

	const colorHandler = isFullSizeSideBar ? "#c3c3c3ff" : "#58595b";
	const cursorHandler = isFullSizeSideBar ? "not-allowed" : "pointer";

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
				cursor     : cursorHandler,
				userSelect : "none",
			}}
		>
			<Group spacing="1px">
				<Stack
					w="6px"
					h="6px"
					style={{
						background : colorHandler,
					}}
				>
					&nbsp;
				</Stack>
				<Stack
					w="6px"
					h="6px"
					style={{
						background : colorHandler,
					}}
				>
					&nbsp;
				</Stack>
				<Stack
					w="6px"
					h="6px"
					style={{
						background : colorHandler,
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
						background : colorHandler,
					}}
				>
					&nbsp;
				</Stack>
				<Stack
					w="8px"
					h="8px"
					style={{
						background : colorHandler,
					}}
				>
					&nbsp;
				</Stack>
			</Group>
		</Group>
	);
};

export default SelectorGrid;
