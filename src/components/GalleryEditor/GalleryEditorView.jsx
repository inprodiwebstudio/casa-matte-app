import { Stack }    from "@mantine/core";
import TitleInpt    from "./TitleInpt";
import ActionsGroup from "./ActionsGrouop";
import PhotoGallery from "./PhotoGallery";


const GalleryEditorView = () => {
	return (
		<Stack
			spacing={10}
			h="100%"
		>
			<TitleInpt />
			<ActionsGroup
				w="290px"
				spacing="10px"
			/>
			<Stack
				style={{
					flex : 1,
				}}
				p={0}
				mt="10px"
			>
				<PhotoGallery />
			</Stack>
		</Stack>
	);
};

export default GalleryEditorView;
