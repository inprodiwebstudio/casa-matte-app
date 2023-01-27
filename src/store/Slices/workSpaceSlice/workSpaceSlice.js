import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data : {
		sizePhotoBook : "LargeFormat",
		frontPage     : {},
		numberOfPages : 20,
		Bound         : "",
		pages         : {
			page1 : {
				id     : "page1",
				sheet1 : {
					layoutType : "Mod1",
					text       : "",
					photos     : {
						0 : "",
					},
				},
				sheet2 : {
					layoutType : "",
					text       : "",
					photos     : {
						0 : "",
					},
				},
			},
			page2 : {
				id     : "page2",
				sheet1 : {
					layoutType : "Mod2",
					text       : "",
					photos     : {
						0 : "",
					},
				},
				sheet2 : {
					layoutType : "",
					text       : "",
					photos     : {
						0 : "",
					},
				},
			},
			page3 : {
				id     : "page3",
				sheet1 : {
					layoutType : "Mod3",
					text       : "",
					photos     : {
						0 : "",
					},
				},
				sheet2 : {
					layoutType : "",
					text       : "",
					photos     : {
						0 : "",
					},
				},
			},
			page4 : {
				id     : "page4",
				sheet1 : {
					layoutType : "Mod4",
					text       : "",
					photos     : {
						0 : "",
					},
				},
				sheet2 : {
					layoutType : "Mod15",
					text       : "",
					photos     : {
						0 : "",
					},
				},
			},
			page5 : {
				id     : "page5",
				sheet1 : {
					layoutType : "Mod5",
					text       : "",
					photos     : {
						0 : "",
					},
				},
				sheet2 : {
					layoutType : "Mod6",
					text       : "",
					photos     : {
						0 : "",
					},
				},
			},
			page6 : {
				id     : "page6",
				sheet1 : {
					layoutType : "Mod7",
					text       : "",
					photos     : {
						0 : "",
					},
				},
				sheet2 : {
					layoutType : "Mod8",
					text       : "",
					photos     : {
						0 : "",
					},
				},
			},
			page7 : {
				id     : "page7",
				sheet1 : {
					layoutType : "Mod9",
					text       : "",
					photos     : {
						0 : "",
					},
				},
				sheet2 : {
					layoutType : "Mod10",
					text       : "",
					photos     : {
						0 : "",
					},
				},
			},
			page8 : {
				id     : "page8",
				sheet1 : {
					layoutType : "Mod11",
					text       : "",
					photos     : {
						0 : "",
					},
				},
				sheet2 : {
					layoutType : "Mod12",
					text       : "",
					photos     : {
						0 : "",
						1 : "",
					},
				},
			},
			page9 : {
				id     : "page9",
				sheet1 : {
					layoutType : "Mod13",
					text       : "",
					photos     : {
						0 : "",
						1 : "",
					},
				},
				sheet2 : {
					layoutType : "Mod14",
					text       : "",
					photos     : {
						0 : "",
						1 : "",
					},
				},
			},
			page10 : {
				id     : "page10",
				sheet1 : {
					layoutType : "Mod16",
					text       : "",
					photos     : {
						0 : "",
						1 : "",
					},
				},
				sheet2 : {
					layoutType : "",
					text       : "",
					photos     : {},
				},
			},
			page11 : {
				id     : "page11",
				sheet1 : {
					layoutType : "",
					text       : "",
					photos     : {},
				},
				sheet2 : {
					layoutType : "",
					text       : "",
					photos     : {},
				},
			},
		},
	},
	pageDataSelected    : null,
	currentPhotoDragger : null,
	layoutFilter        : {
		type           : "all",
		photosQuantity : "all",
	},
};

export const workSpaceSlice = createSlice({
	name     : "workspace",
	initialState,
	reducers : {
		setSelectePageData : (state, {payload}) => {
			state.pageDataSelected = payload;
		},
		setCurrentPhotoDrager : (state, {payload}) => {
			state.currentPhotoDragger = payload;
		},
		setLayoutFilter : (state, {payload}) => {
			state.layoutFilter = payload;
		},
		clearPhotoDrager : (state, {payload}) => {
			state.currentPhotoDragger = null;
		},
		clearSelectedPageData : (state, {payload}) => {
			state.pageDataSelected = null;
		},
		newListPages : (state, {payload}) => {
			state.data.pages = {...payload};
		},
		addPhoto : (state, {payload}) => {
			const newData = {...state.data};
			newData.pages[payload.pageId][payload.sheetNo]["photos"][payload.layoutNo] = payload.image;
			state.data = newData;
		},
		addLayout : (state, {payload}) => {
			const cloneData = {...state.data};
			const parseToListImages = Array.from(Array(payload?.numberPhotos).keys()).map(e => "");
			const myPhotos = Object.assign({}, parseToListImages);
			const isFullBook = ["Mod1", "Mod2", "Mod3", "FrontLayout"].includes(payload.layout);
			if (isFullBook) {
				cloneData.pages[payload.pageId]["sheet1"] = {
					layoutType : payload.layout,
					text       : "",
					photos     : myPhotos,
				};
				cloneData.pages[payload.pageId]["sheet2"] = {
					layoutType : "",
					text       : "",
					photos     : {},
				};
				state.data = cloneData;
				return;
			}
			cloneData.pages[payload.pageId][payload.sheetId] = {
				layoutType : payload.layout,
				text       : "",
				photos     : myPhotos,
			};
			state.data = cloneData;
		},
	},
});


export default workSpaceSlice;
