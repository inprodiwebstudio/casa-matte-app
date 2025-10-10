import { Stack, ScrollArea }               from "@mantine/core";
import GridPhotos                          from "./GridPhotos";
import GridFolder                          from "./GridFolder";
import { useContext, useState, useEffect } from "react";

//Contexts
import {galleryTypeViewContext}         from "contexts/galleryTypeView";
import { shallowEqual, useSelector }    from "react-redux";
import { convertToArray, isValidArray } from "helpers";

const Body = () => {
	const {gridType} = useContext(galleryTypeViewContext);
	const isFullSizeSideBar = useSelector((state) => state.gallerySlice.isFullSizeSideBar, shallowEqual);
	const isMoreCols = useSelector((state) => state.gallerySlice.moreCols, shallowEqual);
	const galleryData = useSelector((state) => state.gallerySlice.data, shallowEqual);

	const [listOfPhotos, setListOfPhotos] = useState([]);
	const [listOfFolders, setListOfFolders] = useState([]);


	const colsQuantity = () => {
		if (!isFullSizeSideBar && isMoreCols) {
			return 4;
		}
		if (isFullSizeSideBar) {
			return 3;
		}
		return 6;
	};

	const handlerSetPhotosAndFolders = () => {
		const listOfData = convertToArray(galleryData);

		const files = listOfData.filter((item) => item.type === "file");
		const folders = listOfData.filter((item) => item.type === "folder");

		setListOfPhotos(files);
		setListOfFolders(folders);
	};

	useEffect(() => {
		const listOfData = convertToArray(galleryData);
		const isAvAvailableDocs = isValidArray(listOfData);

		if (!isAvAvailableDocs || !galleryData) {
			return;
		}
		handlerSetPhotosAndFolders();
	}, [galleryData]);


	console.log(listOfPhotos, listOfFolders);

	return (
		<ScrollArea
			h="410px"
		>
			<Stack
				w="100%"
				h="100%"
				align="center"
			>
				{gridType === "photos" && <GridPhotos photos={listOfPhotos} cols={colsQuantity()} />}
				{gridType === "folders" && <GridFolder folders={listOfFolders} cols={colsQuantity()} />}
			</Stack>
		</ScrollArea>
	);
};

export default Body;
