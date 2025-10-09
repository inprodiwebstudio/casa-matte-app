import { Grid }  from "@mantine/core";
import PhotoCard from "../PhotoCard";

const GridPhotos = ({
	cols = 6,
}) => {
	return (
		<Grid
			w="100%"
			gutter="3"
		>
			<Grid.Col
				span={cols}
				style={{
					aspectRatio : "1/1",
				}}
			>
				<PhotoCard />
			</Grid.Col>
			<Grid.Col
				span={cols}
				style={{
					aspectRatio : "1/1",
				}}
			>
				<PhotoCard />
			</Grid.Col>
			<Grid.Col
				span={cols}
				style={{
					aspectRatio : "1/1",
				}}
			>
				<PhotoCard />
			</Grid.Col>
			<Grid.Col
				span={cols}
				style={{
					aspectRatio : "1/1",
				}}
			>
				<PhotoCard />
			</Grid.Col>
			<Grid.Col
				span={cols}
				style={{
					aspectRatio : "1/1",
				}}
			>
				<PhotoCard />
			</Grid.Col>
			<Grid.Col
				span={cols}
				style={{
					aspectRatio : "1/1",
				}}
			>
				<PhotoCard />
			</Grid.Col>
			<Grid.Col
				span={cols}
				style={{
					aspectRatio : "1/1",
				}}
			>
				<PhotoCard />
			</Grid.Col>
		</Grid>
	);
};

export default GridPhotos;
