import { Grid, ScrollArea }             from "@mantine/core";
import PhotoCard                        from "../PhotoCard";
import NotAvailablePhotos               from "./NotAvailablePhotos";
import { convertToArray, isValidArray } from "helpers";
import { useEffect, useState }          from "react";
import { shallowEqual, useSelector }    from "react-redux";

const GridPhotos = ({
	cols = 6,
	photos,
}) => {
	const [ selectedImagesIds, setSelectedImagesIds ] = useState([]);

	const workSpaceData = useSelector((state) => state.workSpaceSlice?.data, shallowEqual);

	const listOfPhotos = photos ?? [];
	if (!isValidArray) {
		return (
			<NotAvailablePhotos />
		);
	}

	useEffect(() => {
		const pagesList = convertToArray(workSpaceData?.pages);
		const listOfAllPages = [workSpaceData?.frontPage, ...pagesList];
		const newDataSelected = [];
		if (isValidArray(pagesList)) {
			listOfAllPages.forEach((data, i) => {
				const isAVailableSheet2 = data?.sheet2;
				const sheet1Photos = convertToArray(data?.sheet1?.photos);

				if (isValidArray(sheet1Photos)) {
					sheet1Photos.forEach((photo, e) => {
						if (photo?.id !== "") {
							newDataSelected.push(photo?.id);
						}
					});
				}

				if (isAVailableSheet2) {
					const sheet2Photos = convertToArray(data?.sheet2?.photos);
					if (isValidArray(sheet2Photos)) {
						sheet2Photos.forEach((photo, e) => {
							if (photo?.id !== "") {
								newDataSelected.push(photo?.id);
							}
						});
					}
				}
			});
		}

		setSelectedImagesIds(newDataSelected);
	}, [workSpaceData]);

	const isInUsePhoto = (imageId) => {
		const findImage = selectedImagesIds.find(id => id === imageId);
		if (findImage) {
			return true;
		}
		return false;
	};
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
						<PhotoCard
							urlImage={item?.url}
							isInUsePhoto={isInUsePhoto(item?.id)}
							id={item?.id}
							publicId={item?.public_id}
							pixels={item?.pixels}
						/>
					</Grid.Col>
				))}
			</Grid>
		</ScrollArea>
	);
};

export default GridPhotos;
