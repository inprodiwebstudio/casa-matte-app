
//Mantine Components
import { Card, Flex }      from "@mantine/core";
import { GalleryTypeView } from "contexts/galleryTypeView";
import ExpandButton        from "./ExpandButton";
import GetDataGallery      from "./GetDataGallery";

//Redux
import { shallowEqual, useSelector } from "react-redux";

//Styles
import styles from "./styles";

const GalleryEditorBody = () => {
	const { classes } = styles();

	const isFullSizeSideBar = useSelector((state) => state.gallerySlice.isFullSizeSideBar, shallowEqual);

	const handlerSizeSidebar = isFullSizeSideBar ? "750px" : "100%";

	const handlerClickInGallery = (e) => {
		e.stopPropagation();
	};

	return (
		<GalleryTypeView>
			<Flex
				h="100%"
				w={handlerSizeSidebar}
				style={{
					position   : "absolute",
					right      : "0",
					transition : "all ease 200ms",
				}}
				onClick={handlerClickInGallery}
			>
				<ExpandButton />
				<Card
					h="98%"
					w="100%"
					radius="15px"
					withBorder
					shadow="xl"
					p={25}
					pl={30}
					pr={17}
					pb={12}
					className={classes.galleryBodyCard}
				>
					<GetDataGallery />
				</Card>
			</Flex>
		</GalleryTypeView>
	);
};

export default GalleryEditorBody;
