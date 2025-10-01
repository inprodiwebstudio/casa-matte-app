
//Mantine Components
import { Card, Stack } from "@mantine/core";
import TitleInpt       from "./TitleInpt";
import ActionsGroup    from "./ActionsGrouop";
import PhotoGallery    from "./PhotoGallery";

//Styles
import styles from "./styles";

const GalleryEditorBody = () => {
	const { classes } = styles();
	return (
		<Card
			h="98%"
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
	);
};

export default GalleryEditorBody;
