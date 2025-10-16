import { Center, Grid, ScrollArea }               from "@mantine/core";
import CardAction                                 from "components/GalleryEditor/CradAction";
import PhotoCard                                  from "components/GalleryEditor/PhotoGallery/Body/PhotoCard";
import { convertToArray, isValidArray }           from "helpers";
import { useEffect, useState }                    from "react";
import { gallerySlice }                           from "store/Slices";
import { useDropzone }                            from "react-dropzone/.";
import { GoPlus }                                 from "react-icons/go";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

const DataGridPhotos = () => {
	const dispatch = useDispatch();
	const [ selectedImagesIds, setSelectedImagesIds ] = useState([]);

	const isFullSizeSideBar = useSelector((state) => state.gallerySlice.isFullSizeSideBar, shallowEqual);
	const isMoreCols = useSelector((state) => state.gallerySlice.moreCols, shallowEqual);
	const galleryData = useSelector((state) => state.gallerySlice.data, shallowEqual);
	const photosDrop = useSelector((state) => state.gallerySlice.filesDrop, shallowEqual);
	const workSpaceData = useSelector((state) => state.workSpaceSlice.data, shallowEqual);


	const colsQuantity = () => {
		if (!isFullSizeSideBar && isMoreCols) {
			return 4;
		}
		if (isFullSizeSideBar) {
			return 3;
		}
		return 6;
	};

	const handlerSize = isMoreCols ? "80px" : "125px";

	const isInUsePhoto = (imageId) => {
		const findImage = selectedImagesIds.find(id => id === imageId);
		if (findImage) {
			return true;
		}
		return false;
	};

	const handlerSubmitPhotos = (photosFiles) => {
		dispatch(gallerySlice.actions.setFilesDrop(photosFiles));
	};

	const { getInputProps, getRootProps } = useDropzone({
		multiple : true,
		onDrop   : (files) => handlerSubmitPhotos(files),
		accept   : {
			"image/*" : [],
		},
	});

	const isLoadingChargeNewPhotos = isValidArray(photosDrop);

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
					span={colsQuantity()}
				>
					<Center
						w="100%"
						h="100%"
					>
						<CardAction
							withBorder
							label="Agregar fotos"
							h={handlerSize}
							w={handlerSize}
							zoomContent={isMoreCols && 0.8}
							icon={
								<GoPlus size={13} />
							}
							{...!isLoadingChargeNewPhotos && getRootProps()}
						/>
						{
							!isLoadingChargeNewPhotos && (<input {...getInputProps()} />)
						}
					</Center>
				</Grid.Col>
				{convertToArray(galleryData).map((item, index) => (
					<Grid.Col
						key={index}
						span={colsQuantity()}
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

export default DataGridPhotos;
