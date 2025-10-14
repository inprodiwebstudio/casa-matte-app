import { Center, Grid, Stack, ScrollArea }        from "@mantine/core";
import CardAction                                 from "components/GalleryEditor/CradAction";
import { GoPlus }                                 from "react-icons/go";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import FolderCard                                 from "../FolderCard";
import { isValidArray }                           from "helpers";
import { gallerySlice }                           from "store/Slices";

const GridFolder = ({
	cols = 6,
	folders,
}) => {
	const dispatch = useDispatch();
	const listOfFolders = folders ?? [];
	const isMoreCols = useSelector((state) => state.gallerySlice.moreCols, shallowEqual);

	const isAvailableFolders = isValidArray(listOfFolders);

	const handlerSize = isMoreCols ? "80px" : "125px";

	const onClickAddNewFolder = () => {
		dispatch(gallerySlice.actions.setTypeDropedView("folders"));
	};

	if (!isAvailableFolders) {
		return (
			<Stack
				w="100%"
				h="100%"
				onClick={() => onClickAddNewFolder()}
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
				style={{
					maxHeight : "100px",
				}}
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
							onClick={onClickAddNewFolder}
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
						<FolderCard
							urlImage={item?.thumbNails[0] ?? undefined}
							folderName={item?.name}
							folderId={item?.id ?? undefined}
						/>
					</Grid.Col>
				))}
			</Grid>
		</ScrollArea>
	);
};

export default GridFolder;
