// eslint-disable-next-line import/no-extraneous-dependencies
import { useSortable }               from "@dnd-kit/sortable";
import { shallowEqual, useSelector } from "react-redux";
import { useMemo }                   from "react";
import { Text }                      from "@mantine/core";
import { useHandlerTypeConfigBooks } from "helpers/Hooks/useHandlerTypeConfigBooks";

export const SortableBookPage = ({ pageData, aspectRatio }) => {
	const {
		attributes,
		listeners,
		setNodeRef,
		transition,
		isDragging,
		isOver,
	} = useSortable({ id : pageData.id });

	const { pageNo } = pageData;

	const photoBookData = useSelector((state) => state.workSpaceSlice.data, shallowEqual);

	const photoBooksConfig = useHandlerTypeConfigBooks();

	const photobookSize = photoBookData?.sizePhotoBook ?? "grande";
	const currentPhotoBook = (photoBookData?.product === "" || !photoBookData?.product)
		? "white"
		: photoBookData?.product;
	const photoBookFormat = photoBookData?.format ?? "vertical";

	const handlerLayoutMod = useMemo(() => {
		const LayoutMod = photoBooksConfig[currentPhotoBook]?.[photoBookFormat]?.sizes?.[photobookSize]?.layoutMods[pageData?.layoutType]?.layout;

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
	}, [currentPhotoBook, photoBookFormat, photobookSize, pageData]);

	const style = {
		transition  : isDragging ? "none" : transition,
		opacity     : isDragging ? 0.3 : 1,
		cursor      : "grab",
		background  : isOver ? "rgba(0, 255, 0, 0.17)" : "white",
		aspectRatio : `${aspectRatio[0]} / ${aspectRatio[1]}`,
		width       : "50%",
		zIndex      : isDragging ? 100 : 1,
	};

	return (
		<div
			ref={setNodeRef}
			style={style}
			{...attributes}
			{...listeners}
		>
			<div
				style={{
					position       : "relative",
					overflow       : "hidden",
					boxShadow      : "0px 0px 7px rgba(35, 35, 35, 0.332)",
					width          : "100%",
					height         : "100%",
					display        : "flex",
					justifyContent : "center",
					alignItems     : "center",
					pointerEvents  : "none",
				}}
			>
				{handlerLayoutMod}
			</div>
			<Text
				align="center"
				size="11px"
				mt="10px"
			>
				{pageNo}
			</Text>
		</div>
	);
};
