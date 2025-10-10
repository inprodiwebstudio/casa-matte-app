import { Grid }  from "@mantine/core";
import PhotoCard from "../PhotoCard";

const GridPhotos = ({
	cols = 6,
	photos,
}) => {
	const listOfPhotos = photos ?? [];
	return (
		<Grid
			w="100%"
			gutter="3"
		>
			{listOfPhotos.map((item, index) => (
				<Grid.Col
					key={index}
					span={cols}
					style={{
						aspectRatio : "1/1",
					}}
				>
					<PhotoCard urlImage={item?.urlThumbnail} />
				</Grid.Col>
			))}
		</Grid>
	);
};

export default GridPhotos;
