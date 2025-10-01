import { Center, Stack } from "@mantine/core";
import TabSelector       from "./TabSelector";
import FilterBar         from "./FilterBar";

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
		</Stack>
	);
};

export default PhotoGallery;
