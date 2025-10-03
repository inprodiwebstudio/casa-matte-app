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
				<PhotoCard h="135px" />
			</Grid.Col>
			<Grid.Col
				span={6}
			>
				<PhotoCard h="135px" />
			</Grid.Col>
			<Grid.Col
				span={6}
			>
				<PhotoCard h="135px" />
			</Grid.Col>
			<Grid.Col
				span={6}
			>
				<PhotoCard h="135px" />
			</Grid.Col>
			<Grid.Col
				span={6}
			>
				<PhotoCard h="135px" />
			</Grid.Col>
			<Grid.Col
				span={6}
			>
				<PhotoCard h="135px" />
			</Grid.Col>
		</Grid>
	);
};

export default GridPhotos;
