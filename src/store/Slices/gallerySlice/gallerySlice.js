import { createSlice }     from "@reduxjs/toolkit";
import { convertToObject } from "helpers";


const initialState = {
	galleryPathName : {
		id           : "route",
		name         : "route",
		folderThumbs : [],
	},
	filter : {
		label : "FECHA DE CAPTURA",
		value : "CAPTURE_DATE",
	},
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
			if (newData[payload?.id]) {
				delete newData[payload?.id];
			} else {
				newData[payload?.id] = payload;
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
			const isMoveInFolder = !!payload?.folderId;
			if (isMoveInFolder) {
				const cloneListOfThumbNails = [...state.data[payload.folderId].thumbNails];
				const isAvialableAddMoreOneImages = () => {
					const counterLengthTotal = cloneListOfThumbNails.length + payload.iamgesSelectedData.length;
					if (counterLengthTotal >= 5) {
						return false;
					}
					return true;
				};
				const imagesUrl = payload.iamgesSelectedData.map(image => image.url);
				isAvialableAddMoreOneImages() ? (
					state.data[payload.folderId].thumbNails = [...cloneListOfThumbNails, ...imagesUrl]
				) : (
					state.data[payload.folderId].thumbNails[0] = imagesUrl[imagesUrl.length - 1]
				);
			}
			const handlerRemoveImages = () => {
				const newData = {...state.data};
				payload.iamgesSelectedData.forEach(image => {
					delete newData[image.id];
				});
				state.data = newData;
				state.selectedData = {};
			};
			handlerRemoveImages();
		},
	},
});


export default gallerySlice;
