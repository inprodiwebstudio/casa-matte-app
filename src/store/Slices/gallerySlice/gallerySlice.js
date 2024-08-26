import { createSlice }     from "@reduxjs/toolkit";
import { convertToObject } from "helpers";


const initialState = {
	galleryPathName : {
		id           : "route",
		name         : "route",
		folderThumbs : [],
	},
	filter            : undefined,
	typeDropedView    : null,
	data              : null,
	isFullSizeSideBar : false,
	isLoadingData     : false,
	isLoadingMutation : false,
	selectedData      : null,
};

export const gallerySlice = createSlice({
	name     : "gallery",
	initialState,
	reducers : {
		setGalleryData : (state, {payload}) => {
			state.data = {[payload?.id] : payload, ...state.data};
		},
		getGalleryData : (state, {payload}) => {
			const gallletyDataInsert = convertToObject(payload);
			state.data = gallletyDataInsert;
		},
		setLoadingGalleryData : (state, {payload}) => {
			state.isLoadingData = payload;
		},
		setLoadingMutationGallery : (state, {payload}) => {
			state.isLoadingMutation = payload;
		},
		deleteDataGallery : (state, {payload}) => {
			const newData = {...state.data};
			const listOfKeys = Object.keys(payload);
			listOfKeys.forEach(key => {
				delete newData[key];
			});
			state.data = newData;
			state.selectedData = {};
		},
		clearSelectedData : (state) => {
			state.selectedData = {};
		},
		setSelectedData : (state, {payload}) => {
			const newData = {...state.selectedData};
			if (newData[payload?.public_id]) {
				delete newData[payload?.public_id];
			} else {
				newData[payload?.public_id] = payload;
			}
			state.selectedData = newData;
		},
		setTypeDropedView : (state, {payload}) => {
			if (payload === state.typeDropedView) {
				state.typeDropedView = null;
			} else {
				state.typeDropedView = payload;
			}
		},
		setGalleryPath : (state, {payload}) => {
			state.galleryPathName = payload;
			state.selectedData = {};
		},
		setFilter : (state, {payload}) => {
			state.filter = payload;
		},
		toggleFullSizeSideBar : (state) => {
			state.isFullSizeSideBar = !state.isFullSizeSideBar;
		},
		moveToFolder : (state, {payload}) => {
			const cloneData = { ...state.data };
			const toArrSelectedData = Object.values(state.selectedData).map(data => ({...data, parentId : payload}));
			const lenghtOfThumbImages = cloneData[payload].thumbImages;
			const quantityToSetImages = 5 - lenghtOfThumbImages.length;
			const newImagesThumb = toArrSelectedData.slice(0, quantityToSetImages + 1);

			const newData = {...cloneData, ...convertToObject(toArrSelectedData)};
			newData[payload].thumbImages = [...newData[payload].thumbImages, ...newImagesThumb];

			state.data = newData;
			state.selectedData = {};
		},
	},
});


export default gallerySlice;
