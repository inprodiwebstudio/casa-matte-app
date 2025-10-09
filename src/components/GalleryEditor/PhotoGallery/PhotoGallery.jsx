import { Center, Stack }             from "@mantine/core";
import TabSelector                   from "./TabSelector";
import FilterBar                     from "./FilterBar";
import ProgressBarUploading          from "./PrgressBarUploading";
import Body                          from "./Body";
import { shallowEqual, useSelector } from "react-redux";
import { isValidArray }              from "helpers";

const PhotoGallery = () => {
	const dropFilesPhotos = useSelector((state) => state.gallerySlice.filesDrop, shallowEqual);

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
			<Body />
		</Stack>
	);
};

export default PhotoGallery;
