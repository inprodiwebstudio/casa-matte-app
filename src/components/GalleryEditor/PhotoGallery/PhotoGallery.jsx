import { Center, Stack } from "@mantine/core";
import TabSelector       from "./TabSelector";

const PhotoGallery = () => {
	return (
		<Stack
			h="100%"
			w="100%"
		>
			<Center>
				<TabSelector />
			</Center>
		</Stack>
	);
};

export default PhotoGallery;
