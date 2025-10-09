import { Center, Stack }    from "@mantine/core";
import TabSelector          from "./TabSelector";
import FilterBar            from "./FilterBar";
import ProgressBarUploading from "./PrgressBarUploading";
import Body                 from "./Body";

const PhotoGallery = () => {
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
			<ProgressBarUploading />
			<Body />
		</Stack>
	);
};

export default PhotoGallery;
