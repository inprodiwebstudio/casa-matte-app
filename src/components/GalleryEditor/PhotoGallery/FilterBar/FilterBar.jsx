import { Checkbox, Group, Select, Stack } from "@mantine/core";
import { FaCaretDown, FaCheck }           from "react-icons/fa";
import HidePhotosCheck                    from "./HidePhotosCheck";
import SelectorGrid                       from "./SelectorGrid";

import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { gallerySlice }                           from "store/Slices";
import { convertToArray }                         from "helpers";

const FilterBar = () => {
	const dispatch = useDispatch();
	const typeViewList = useSelector((state) => state.gallerySlice.typeViewList, shallowEqual);
	const isFullSizeSideBar = useSelector((state) => state.gallerySlice.isFullSizeSideBar, shallowEqual);
	const filterValue = useSelector((state) => state.gallerySlice.filter, shallowEqual);
	const isLoadingMutation = useSelector((state) => state.gallerySlice.isLoadingMutation, shallowEqual);
	const selectedPhotos = useSelector((state) => state.gallerySlice.selectedData, shallowEqual);
	const galleryPhotos = useSelector((state) => state.gallerySlice.data, shallowEqual);

	const isAvailablePhotos = convertToArray(galleryPhotos).filter((item) => (item.type !== "folder")).length > 0;

	const isAvailableSelectedPhotos = convertToArray(selectedPhotos).length > 0;

	const isPhotosViewList = typeViewList === "photos";

	const filterOptions = [
		{ value : "UPLOAD_DATE", label : "Fecha de subida" },
		{ value : "CAPTURE_DATE", label : "Fecha de captura" },
	];

	const handlerChangeFilter = (value) => {
		const indexValue = filterOptions.findIndex((item) => item.value === value);
		const newFilter = filterOptions[indexValue];
		dispatch(gallerySlice.actions.setFilter(newFilter));
	};

	const toggleSelectPhotos = () => {
		if (isAvailableSelectedPhotos) {
			dispatch(gallerySlice.actions.clearSelectedData());
			return;
		}
		const listOfGallery = convertToArray(galleryPhotos);
		listOfGallery.forEach((photo) => {
			dispatch(gallerySlice.actions.setSelectedData({
				id       : photo.id,
				publicId : photo.publicId,
			}));
		});
	};

	return (
		<Group
			spacing="12px"
			mt="12px"
			position="center"
		>
			{
				(isAvailablePhotos && isPhotosViewList) && (
					<Checkbox
						onClick={() => toggleSelectPhotos()}
						checked={isAvailableSelectedPhotos}
						indeterminate
						color="darkCasaMatte"
						p={0}
						m={0}
						size="xs"
						icon={FaCheck}
						placeholder="test"
					/>
				)
			}
			{
				isPhotosViewList && (
					<Stack
						w="30%"
					>
						<Select
							withinPortal
							disabled={isLoadingMutation}
							value={filterValue?.value}
							placeholder="Ordenar por"
							onChange={(value) => handlerChangeFilter(value)}
							styles={{
								input : {
									background   : "#f6f6f6",
									borderColor  : "#e3e4e5",
									width        : "100%",
									height       : "20px",
									minHeight    : "2px",
									fontSize     : "10px",
									borderRadius : "10px",
									"&:focus"    : {
										borderColor : "#e3e4e5",
									},
								},
								dropdown : {
									paddingTop   : "0px !important",
									borderWidth  : 1,
									borderStyle  : "solid",
									borderRadius : 8,
									boxShadow    : "0 4px 10px rgba(0,0,0,0.1)",
									width        : "8% !important",
								},
								item : {
									fontFamily        : "Helvetica !important",
									letterSpacing     : "0px",
									fontSize          : "10px",
									padding           : "0px",
									paddingLeft       : "10px",
									marginTop         : "4px",
									"&[data-hovered]" : {
										backgroundColor : "null !important",
										color           : "dark",
									},
									"&[data-selected]" : {
										color      : "white !important",
										background : "#868d96 !important",
									},
								},
							}}
							rightSection={<FaCaretDown size={10} />}
							data={[
								...filterOptions,
							]}
						/>
					</Stack>
				)
			}
			{
				isPhotosViewList && (
					<HidePhotosCheck />
				)
			}
			{
				!isFullSizeSideBar && (
					<Stack>
						<SelectorGrid />
					</Stack>
				)
			}
		</Group>
	);
};

export default FilterBar;
