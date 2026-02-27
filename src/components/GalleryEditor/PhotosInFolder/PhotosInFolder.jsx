import { CloseButton, Stack, Text }               from "@mantine/core";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import GalleryPhotos                              from "./GalleryPhotos";
import { gallerySlice }                           from "store/Slices";

const PhotosInFolder = () => {
	const dispatch = useDispatch();

	const folderName = useSelector((state) => state.gallerySlice.galleryPathName, shallowEqual);
	const isLoadingMutation = useSelector((state) => state.gallerySlice.isLoadingMutation, shallowEqual);

	const onCloseView = () => {
		dispatch(gallerySlice.actions.setNextCursor(""));
		dispatch(gallerySlice.actions.setGalleryPath({
			id           : "route",
			name         : "route",
			folderThumbs : [],
		}));
		dispatch(gallerySlice.actions.setTypeViewList("folders"));
	};

	return (
		<Stack
			spacing={10}
			h="100%"
			w="100%"
			p="10px"
			pt="25px"
			style={{
				background   : "#edeeee",
				borderRadius : "15px",
				position     : "relative",
			}}
		>
			<CloseButton
				radius={"50%"}
				color="darkCasaMatte"
				variant="filled"
				size="sm"
				loading={isLoadingMutation}
				style={{
					position : "absolute",
					top      : "-7px",
					right    : "-7px",
				}}
				onClick={onCloseView}
			/>
			<Text
				size="20px"
				color="black"
				weight={500}
				align="left"
				ml="10px"
				style={{
					fontFamily    : "Helvetica",
					letterSpacing : "0px",
					color         : "black",
				}}
			>
				{folderName?.name}
			</Text>
			<GalleryPhotos />
		</Stack>
	);
};

export default PhotosInFolder;
