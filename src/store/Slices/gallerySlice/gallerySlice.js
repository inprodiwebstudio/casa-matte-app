import { createSlice }     from "@reduxjs/toolkit";
import { convertToObject } from "helpers";


const initialState = {
	galleryPathName : "main",
	typeDropedView  : null,
	data            : {},
	selectedData    : {},
};

export const gallerySlice = createSlice({
	name     : "gallery",
	initialState,
	reducers : {
		setGalleryData : (state, {payload}) => {
			state.data = {...payload, ...state.data};
		},
		clearSelectedData : (state) => {
			state.selectedData = {};
		},
		setSelectedData : (state, {payload}) => {
			const newData = {...state.selectedData};
			if (newData[payload?.id]) {
				delete newData[payload?.id];
			} else {
				newData[payload?.id] = payload;
			}
			state.selectedData = newData;
		},
		deleteData : (state, {payload}) => {
			const newData = {...state.data};
			const listOfKeys = Object.keys(payload);
			listOfKeys.forEach(key => {
				delete newData[key];
			});
			state.data = newData;
			state.selectedData = {};
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
