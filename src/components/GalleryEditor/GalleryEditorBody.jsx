
//Mantine Components
import { Card, Flex, Stack } from "@mantine/core";
import TitleInpt             from "./TitleInpt";
import ActionsGroup          from "./ActionsGrouop";
import PhotoGallery          from "./PhotoGallery";
import { GalleryTypeView }   from "contexts/galleryTypeView";
import ExpandButton          from "./ExpandButton";

//Redux

//Styles
import styles                        from "./styles";
import { shallowEqual, useSelector } from "react-redux";

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
				</Card>
			</Flex>
		</GalleryTypeView>
	);
};

export default GalleryEditorBody;
