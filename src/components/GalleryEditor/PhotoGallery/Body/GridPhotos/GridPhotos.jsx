import { Grid, ScrollArea } from "@mantine/core";
import PhotoCard            from "../PhotoCard";
import NotAvailablePhotos   from "./NotAvailablePhotos";
import { isValidArray }     from "helpers";

const GridPhotos = ({
	cols = 6,
	photos,
}) => {
	const listOfPhotos = photos ?? [];
	if (!isValidArray) {
		return (
			<NotAvailablePhotos />
		);
	}
	return (
		<ScrollArea
			w="100%"
			h="100%"
		>
			<Grid
				w="100%"
				gutter="3"
				style={{
					maxHeight : "100px",
				}}
			>
				{listOfPhotos.map((item, index) => (
					<Grid.Col
						key={index}
						span={cols}
						style={{
							aspectRatio : "1/1",
						}}
					>
						<PhotoCard urlImage={item?.url} />
					</Grid.Col>
				))}
			</Grid>
		</ScrollArea>
	);
};

export default GridPhotos;
