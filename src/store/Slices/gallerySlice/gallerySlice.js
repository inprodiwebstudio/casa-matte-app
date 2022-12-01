import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	galleryPathName : "main",
	data            : {},
	selectedData    : {},
};

export const gallerySlice = createSlice({
	name     : "gallery",
	initialState,
	reducers : {
		setGalleryData : (state, {payload}) => {
			state.data = payload;
		},
		clearSelectedData : (state) => {
			state.selectedData = initialState;
		},
		deleteData : (state, {payload}) => {
			const newData = {...state.data};
			const listOfKeys = Object.keys(payload);
			listOfKeys.forEach(key => {
				delete newData[key];
			});
			state.data = newData;
		},
		setGalleryPath : (state, {payload}) => {
			state.galleryPathName = payload;
		},
	},
});


export default gallerySlice;
