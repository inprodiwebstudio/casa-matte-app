import { Group, Select, Stack } from "@mantine/core";
import { FaCaretDown }          from "react-icons/fa";
import HidePhotosCheck          from "./HidePhotosCheck";
import SelectorGrid             from "./SelectorGrid";

import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { gallerySlice }                           from "store/Slices";

const FilterBar = () => {
	const dispatch = useDispatch();
	const typeViewList = useSelector((state) => state.gallerySlice.typeViewList, shallowEqual);
	const isFullSizeSideBar = useSelector((state) => state.gallerySlice.isFullSizeSideBar, shallowEqual);
	const filterValue = useSelector((state) => state.gallerySlice.filter, shallowEqual);

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

	return (
		<Group
			spacing="28px"
			mt="12px"
		>
			{
				isPhotosViewList && (
					<Stack
						w="30%"
					>
						<Select
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
									width        : "32% !important",
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
