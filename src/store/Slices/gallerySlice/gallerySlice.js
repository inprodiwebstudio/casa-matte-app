import { createSlice }                                   from "@reduxjs/toolkit";
import { convertToArray, convertToObject, isValidArray } from "helpers";
import regularFormatImage                                from "helpers/Functions/regularFormatImage";


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
	filesDrop         : [],
	photosUploaded    : [],
	typeDropedView    : null,
	folderName        : null,
	folderId          : null,
	typeViewList      : "photos",
	data              : null,
	isFullSizeSideBar : false,
	isHidePhotosInUse : false,
	moreCols          : false,
	isLoadingData     : false,
	isLoadingMutation : false,
	selectedData      : null,
};

export const gallerySlice = createSlice({
	name     : "gallery",
	initialState,
	reducers : {
		setGalleryData : (state, {payload}) => {
			const insertNewData = {[payload?.id] : payload, ...state.data};

			const constructGalleryList = convertToArray(insertNewData).map(image => {
				const handlerContextDateCaptured = image.context?.custom ?? image.context;
				return {
					...image,
					context : handlerContextDateCaptured,
				};
			});


			const handlerGallerySorted = () => {
				return constructGalleryList.sort((a, b) => new Date(b?.context?.dateCaptured) - new Date(a?.context?.dateCaptured));
			};

			const myNewGalleryData = convertToObject(handlerGallerySorted());
			// state.data = newDataList;
			state.data = myNewGalleryData;
		},
		togglePhotosInUse : (state) => {
			state.isHidePhotosInUse = !state.isHidePhotosInUse;
		},
		setNewPhotosThumbNailsFolder : (state, {payload}) => {
			const listOfPhotos = payload;
			const sliceThumbnails = listOfPhotos.slice(0, 5);
			const newListOfThumbnails = sliceThumbnails.map(image => image?.url);
			state.data[state?.folderId].thumbNails = newListOfThumbnails;
		},
		setFolderId : (state, {payload}) => {
			state.folderId = payload;
		},
		setFolderName : (state, {payload}) => {
			state.folderName = payload;
		},
		setFilesDrop : (state, {payload}) => {
			state.filesDrop = payload;
		},
		setTypeViewList : (state, {payload}) => {
			state.typeViewList = payload;
		},
		setPhotosUploaded : (state, {payload}) => {
			const photoDataUpload = payload;
			state.photosUploaded = [{...photoDataUpload}, ...state.photosUploaded];
		},
		clearPhotosUploaded : (state) => {
			state.photosUploaded = [];
		},
		getGalleryData : (state, {payload}) => {
			if (!isValidArray(payload)) {
				return;
			}
			const constructorImages = payload.map(imageData => {
				return {
					...imageData,
					url : regularFormatImage(imageData?.url),
				};
			});
			const gallletyDataInsert = convertToObject(constructorImages);
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
			state.typeDropedView = payload;
		},
		setGalleryPath : (state, {payload}) => {
			state.galleryPathName = payload;
			state.selectedData = {};
		},
		setFilter : (state, {payload}) => {
			state.filter = payload;
		},
		toggleMoreCols : (state) => {
			state.moreCols = !state.moreCols;
		},
		toggleFullSizeSideBar : (state) => {
			state.isFullSizeSideBar = !state.isFullSizeSideBar;
			state.moreCols = false;
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
