import { Center, Stack }             from "@mantine/core";
import TabSelector                   from "./TabSelector";
import FilterBar                     from "./FilterBar";
import ProgressBarUploading          from "./PrgressBarUploading";
import { shallowEqual, useSelector } from "react-redux";
import { isValidArray }              from "helpers";
import Body                          from "./Body";

const PhotoGallery = () => {
	const dropFilesPhotos = useSelector((state) => state.gallerySlice.filesDrop, shallowEqual);
	const typeDropedView = useSelector((state) => state.gallerySlice.typeDropedView, shallowEqual);
	const typeViewList = useSelector((state) => state.gallerySlice.typeViewList, shallowEqual);

	const isAvailableDropPhotos = isValidArray(dropFilesPhotos);

	return (
		<Stack
			h="100%"
			w="100%"
		>
			<Center>
				<TabSelector />
			</Center>
			<Stack
				w="100%"
			>
				<FilterBar />
			</Stack>
			{
				isAvailableDropPhotos && (
					<ProgressBarUploading />
				)
			}
			{
				((typeDropedView === "folders") && (typeViewList === "folders")) ? (
					<div
					>
						Drop
					</div>
				) : (
					<Body />
				)
			}
		</Stack>
	);
};

export default PhotoGallery;
