import { Grid }                         from "@mantine/core";
import PhotoCard                        from "../PhotoCard";
import NotAvailablePhotos               from "./NotAvailablePhotos";
import { convertToArray, isValidArray } from "helpers";
import { shallowEqual, useSelector }    from "react-redux";
import { useEffect, useState }          from "react";

// eslint-disable-next-line import/no-extraneous-dependencies
import InfiniteScroll from "react-infinite-scroll-component";
import useGetGallery  from "helpers/Hooks/useGetGallery";

const GridPhotos = ({
	cols = 6,
	photos,
}) => {
	const [ selectedImagesIds, setSelectedImagesIds ] = useState([]);

	const workSpaceData = useSelector((state) => state.workSpaceSlice.data, shallowEqual);
	const isHidePhotosInUse = useSelector((state) => state.gallerySlice.isHidePhotosInUse, shallowEqual);
	const nextCursor = useSelector((state) => state.gallerySlice.nextCursor, shallowEqual);

	const hasMore = !!nextCursor;

	const listOfPhotos = photos ?? [];

	const { handlerGetGallery } = useGetGallery();

	const isInUsePhoto = (imageId) => {
		const findImage = selectedImagesIds.find(id => id === imageId);
		if (findImage) {
			return true;
		}
		return false;
	};

	useEffect(() => {
		if (!workSpaceData) return;

		const pagesList = convertToArray(workSpaceData?.pages);
		const listOfAllPages = [workSpaceData?.frontPage, ...pagesList];
		const newDataSelected = [];
		if (isValidArray(pagesList)) {
			listOfAllPages.forEach((data, i) => {
				const isAVailableSheet2 = data?.sheet2;
				const sheet1Photos = convertToArray(data?.sheet1?.photos);

				if (isValidArray(sheet1Photos)) {
					sheet1Photos.forEach((photo) => {
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

	const getMyGallery = async () => {
		try {
			await handlerGetGallery();
		} catch (error) {
			console.error(error);
		}
	};

	if (!isValidArray(listOfPhotos)) {
		return (
			<NotAvailablePhotos />
		);
	}

	return (
		<div
			id="scrollableDiv"
			style={{
				height    : "410px",
				width     : "100%",
				overflowY : "scroll",
			}}
		>
			<InfiniteScroll
				dataLength={listOfPhotos.length}
				next={() => getMyGallery()}
				hasMore={hasMore}
				height={410}
				scrollableTarget="scrollableDiv"
			>
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
								display     : (isHidePhotosInUse && isInUsePhoto(item?.id)) ? "none" : "block",
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
			</InfiniteScroll>
		</div>
	);
};

export default GridPhotos;
