import { Stack }      from "@mantine/core";
import GridPhotos     from "./GridPhotos";
import GridFolder     from "./GridFolder";
import { useContext } from "react";

//Contexts
import {galleryTypeViewContext}      from "contexts/galleryTypeView";
import { shallowEqual, useSelector } from "react-redux";

const Body = () => {
	const {gridType} = useContext(galleryTypeViewContext);
	const isFullSizeSideBar = useSelector((state) => state.gallerySlice.isFullSizeSideBar, shallowEqual);
	const isMoreCols = useSelector((state) => state.gallerySlice.moreCols, shallowEqual);

	const colsQuantity = () => {
		if (!isFullSizeSideBar && isMoreCols) {
			return 4;
		}
		if (isFullSizeSideBar) {
			return 3;
		}
		return 6;
	};

	return (
		<Stack
			w="100%"
			h="100%"
			align="center"
		>
			{gridType === "photos" && <GridPhotos cols={colsQuantity()} />}
			{gridType === "folders" && <GridFolder cols={colsQuantity()} />}
		</Stack>
	);
};

export default Body;
