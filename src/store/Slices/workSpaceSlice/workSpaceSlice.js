import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data : {
		sizePhotoBook : "LargeFormat",
		frontPage     : {},
		numberOfPages : 20,
		Bound         : "",
		firtsPage     : {
			id     : "page1",
			sheet1 : {
				pageNo     : 1,
				layoutType : "",
				text       : "",
				photos     : {
					0 : "",
				},
			},
		},
		lastPage : {
			id     : "lastPage",
			sheet1 : {
				pageNo     : 20,
				layoutType : "",
				text       : "",
				photos     : {
					0 : "",
				},
			},
		},
		pages : {
			page2 : {
				id     : "page2",
				sheet1 : {
					pageNo     : 2,
					layoutType : "Mod2",
					text       : "",
					photos     : {
						0 : "",
					},
				},
				sheet2 : {
					pageNo     : 3,
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
					pageNo     : 4,
					layoutType : "Mod3",
					text       : "",
					photos     : {
						0 : "",
					},
				},
				sheet2 : {
					pageNo     : 5,
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
					pageNo     : 6,
					layoutType : "Mod4",
					text       : "",
					photos     : {
						0 : "",
					},
				},
				sheet2 : {
					pageNo     : 7,
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
					pageNo     : 8,
					layoutType : "Mod5",
					text       : "",
					photos     : {
						0 : "",
					},
				},
				sheet2 : {
					pageNo     : 9,
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
					pageNo     : 10,
					layoutType : "Mod7",
					text       : "",
					photos     : {
						0 : "",
					},
				},
				sheet2 : {
					pageNo     : 11,
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
					pageNo     : 12,
					layoutType : "Mod9",
					text       : "",
					photos     : {
						0 : "",
					},
				},
				sheet2 : {
					pageNo     : 13,
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
					pageNo     : 14,
					layoutType : "Mod11",
					text       : "",
					photos     : {
						0 : "",
					},
				},
				sheet2 : {
					pageNo     : 15,
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
					pageNo     : 16,
					layoutType : "Mod13",
					text       : "",
					photos     : {
						0 : "",
						1 : "",
					},
				},
				sheet2 : {
					pageNo     : 17,
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
					pageNo     : 18,
					layoutType : "Mod16",
					text       : "",
					photos     : {
						0 : "",
						1 : "",
					},
				},
				sheet2 : {
					pageNo     : 19,
					layoutType : "",
					text       : "",
					photos     : {},
				},
			},
			page11 : {
				id     : "page11",
				sheet1 : {
					pageNo     : 20,
					layoutType : "Mod15",
					text       : "",
					photos     : {
						0 : "",
					},
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
			// const isFullBook = ["Mod1", "Mod2", "Mod3", "FrontLayout"].includes(payload.layout);
			// if (isFullBook) {
			// 	cloneData.pages[payload.pageId]["sheet1"] = {
			// 		layoutType : payload.layout,
			// 		text       : "",
			// 		photos     : myPhotos,
			// 	};
			// 	cloneData.pages[payload.pageId]["sheet2"] = {
			// 		layoutType : "",
			// 		text       : "",
			// 		photos     : {},
			// 	};
			// 	state.data = cloneData;
			// 	return;
			// }
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
