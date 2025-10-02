import { Stack }      from "@mantine/core";
import GridPhotos     from "./GridPhotos";
import GridFolder     from "./GridFolder";
import { useContext } from "react";

//Contexts
import {galleryTypeViewContext} from "contexts/galleryTypeView";

const Body = () => {
	const {gridType} = useContext(galleryTypeViewContext);
	return (
		<Stack
			w="100%"
			h="100%"
			align="center"
		>
			{gridType === "photos" && <GridPhotos />}
			{gridType === "folders" && <GridFolder />}
		</Stack>
	);
};

export default Body;
