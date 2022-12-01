import { createSlice } from "@reduxjs/toolkit";

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
			state.selectedData = initialState;
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
		},
	},
});


export default gallerySlice;
