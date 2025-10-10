import { Center, Grid, Stack, ScrollArea } from "@mantine/core";
import CardAction                          from "components/GalleryEditor/CradAction";
import { GoPlus }                          from "react-icons/go";
import { shallowEqual, useSelector }       from "react-redux";
import FolderCard                          from "../FolderCard";
import { isValidArray }                    from "helpers";

const GridFolder = ({
	cols = 6,
	folders,
}) => {
	const listOfFolders = folders ?? [];
	const isMoreCols = useSelector((state) => state.gallerySlice.moreCols, shallowEqual);

	const isAvailableFolders = isValidArray(listOfFolders);

	const handlerSize = isMoreCols ? "80px" : "125px";

	if (!isAvailableFolders) {
		return (
			<Stack
				w="100%"
				h="100%"
			>
				<CardAction
					withBorder
					label="Agregar carpeta nueva"
					w="100%"
					h="100%"
					icon={
						<GoPlus size={13} />
					}
				/>
			</Stack>
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
				{listOfFolders.map((item, index) => (
					<Grid.Col
						key={index}
						span={cols}
						style={{
							aspectRatio : "1/1",
						}}
					>
						<FolderCard urlImage="https://images.pexels.com/photos/25390327/pexels-photo-25390327.jpeg" />
					</Grid.Col>
				))}
			</Grid>
		</ScrollArea>
	);
};

export default GridFolder;
