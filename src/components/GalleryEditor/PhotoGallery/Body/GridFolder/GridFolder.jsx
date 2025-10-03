import { Center, Grid }              from "@mantine/core";
import CardAction                    from "components/GalleryEditor/CradAction";
import FolderCard                    from "../FolderCard";
import { GoPlus }                    from "react-icons/go";
import { shallowEqual, useSelector } from "react-redux";

const GridCard = ({
	cols = 6,
}) => {
	const isMoreCols = useSelector((state) => state.gallerySlice.moreCols, shallowEqual);

	const handlerSize = isMoreCols ? "80px" : "125px";
	return (
		<Grid
			w="100%"
			gutter="3"
		>
			<Grid.Col
				span={cols}
			>
				<Center
					w="100%"
					h="100%"
				>
					<CardAction
						withBorder
						label="Agregar carpeta nueva"
						h={handlerSize}
						w={handlerSize}
						zoomContent={isMoreCols && 0.8}
						icon={
							<GoPlus size={13} />
						}
					/>
				</Center>
			</Grid.Col>
			<Grid.Col
				span={cols}
				style={{
					aspectRatio : "1/1",
				}}
			>
				<FolderCard urlImage="https://images.pexels.com/photos/25390327/pexels-photo-25390327.jpeg" />
			</Grid.Col>
			<Grid.Col
				span={cols}
				style={{
					aspectRatio : "1/1",
				}}
			>
				<FolderCard urlImage="https://images.pexels.com/photos/32005277/pexels-photo-32005277.jpeg" />
			</Grid.Col>
			<Grid.Col
				span={cols}
				style={{
					aspectRatio : "1/1",
				}}
			>
				<FolderCard urlImage="https://images.pexels.com/photos/32506092/pexels-photo-32506092.jpeg" />
			</Grid.Col>
			<Grid.Col
				span={cols}
				style={{
					aspectRatio : "1/1",
				}}
			>
				<FolderCard urlImage="https://images.pexels.com/photos/27054239/pexels-photo-27054239.jpeg" />
			</Grid.Col>
			<Grid.Col
				span={cols}
				style={{
					aspectRatio : "1/1",
				}}
			>
				<FolderCard />
			</Grid.Col>
		</Grid>
	);
};

export default GridCard;
