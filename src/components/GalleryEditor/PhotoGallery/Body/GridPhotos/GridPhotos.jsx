import { Grid }  from "@mantine/core";
import PhotoCard from "../PhotoCard";

const GridPhotos = () => {
	return (
		<Grid
			w="100%"
			gutter="3"
		>
			<Grid.Col
				span={6}
			>
				<PhotoCard urlImage="https://images.pexels.com/photos/33971131/pexels-photo-33971131.jpeg" h="135px" />
			</Grid.Col>
			<Grid.Col
				span={6}
			>
				<PhotoCard urlImage="https://images.pexels.com/photos/33904144/pexels-photo-33904144.jpeg" h="135px" />
			</Grid.Col>
			<Grid.Col
				span={6}
			>
				<PhotoCard urlImage="https://images.pexels.com/photos/33260971/pexels-photo-33260971.jpeg" h="135px" />
			</Grid.Col>
			<Grid.Col
				span={6}
			>
				<PhotoCard urlImage="https://images.pexels.com/photos/33523613/pexels-photo-33523613.jpeg" h="135px" />
			</Grid.Col>
			<Grid.Col
				span={6}
			>
				<PhotoCard urlImage="https://images.pexels.com/photos/31861401/pexels-photo-31861401.jpeg" h="135px" />
			</Grid.Col>
			<Grid.Col
				span={6}
			>
				<PhotoCard urlImage="https://images.pexels.com/photos/34014534/pexels-photo-34014534.jpeg" h="135px" />
			</Grid.Col>
		</Grid>
	);
};

export default GridPhotos;
