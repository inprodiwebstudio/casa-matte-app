import { Stack }    from "@mantine/core";
import TitleInpt    from "./TitleInpt";
import ActionsGroup from "./ActionsGrouop";
import PhotoGallery from "./PhotoGallery";

import DropPhotos from "./DropPhotos";

//Redux
import { shallowEqual, useSelector } from "react-redux";


const GalleryEditorView = () => {
	const typeDropedView = useSelector((state) => state.gallerySlice.typeDropedView, shallowEqual);

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
			{
				(!typeDropedView) && (
					<Stack
						style={{
							flex : 1,
						}}
						p={0}
						mt="10px"
					>
						<PhotoGallery />
					</Stack>
				)
			}
			{
				(typeDropedView === "photos") && (
					<DropPhotos />
				)
			}
		</Stack>
	);
};

export default GalleryEditorView;
