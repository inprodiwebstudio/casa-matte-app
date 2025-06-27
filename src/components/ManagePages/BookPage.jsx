// eslint-disable-next-line import/no-extraneous-dependencies
import { useSortable } from "@dnd-kit/sortable";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Grid, Text }                from "@mantine/core";
import photoBooksConfing             from "core/constants/photoBooksConfing";
import { shallowEqual, useSelector } from "react-redux";


export const SortableBookPage = ({ pageData, aspectRatio, index }) => {
	const {
		attributes,
		listeners,
		setNodeRef,
		transition,
		isDragging,
		isOver,
	} = useSortable({ id : pageData.id });

	const photoBookData = useSelector((state) => state.workSpaceSlice.data, shallowEqual);

	const photobookSize = photoBookData?.sizePhotoBook ?? "grande";

	const currentPhotoBook = (photoBookData?.product === "" || !photoBookData?.product) ? "white" : photoBookData?.product;

	const photoBookFormat = photoBookData?.format ?? "vertical";

	const handlerLayoutMod = () => {
		const LayoutMod = photoBooksConfing[currentPhotoBook]?.[photoBookFormat]?.sizes?.[photobookSize]?.layoutMods[pageData?.layoutType]?.layout;
		if (LayoutMod) {
			return (
				<LayoutMod
					pageNo={pageData?.pageNo}
					modLayout={pageData?.layoutType}
					isThumbNail={false}
					isInPaginator={true}
					data={pageData}
					isInWorkSpace={false}
					sheetNo={Number(pageData?.sheetId.split("sheet")[1])}
				/>
			);
		}
		return null;
	};

	const style = {
		// transform  : CSS.Transform.toString(transform),
		transition : isDragging ? "none" : transition,
		opacity    : isDragging ? 0.7 : 1,
		cursor     : "grab",
		background : isOver ? "rgba(0, 255, 0, 0.1)" : "white",
	};

	return (
		<Grid.Col
			span={4}
			ref={setNodeRef}
			style={style}
			{...attributes}
			{...listeners}
		>
			<div
				style={{
					background  : "white",
					width       : "100%",
					boxShadow   : "0px 0px 7px rgba(35, 35, 35, 0.332)",
					aspectRatio : `${aspectRatio[0]} / ${aspectRatio[1]}`,
				}}
			>
				{handlerLayoutMod()}
			</div>
			<Text size="xs" align="center" mt="10px">
				{index + 1}
			</Text>
		</Grid.Col>
	);
};
