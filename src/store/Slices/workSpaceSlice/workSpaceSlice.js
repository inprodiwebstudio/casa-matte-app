import { createSlice }                           from "@reduxjs/toolkit";
import { convertToArray, History, isValidArray } from "helpers";


const initialState = {
	data : {
		sizePhotoBook : "SquareFormat",
		frontPage     : {},
		numberOfPages : 0,
		pages         : {
			page1 : {
				id     : "page1",
				sheet1 : {
					pageNo     : 1,
					layoutType : "Mod1",
					text       : "",
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
					},
				},
			},
			page2 : {
				id     : "page2",
				sheet1 : {
					pageNo     : 2,
					layoutType : "Mod2",
					text       : "",
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
					},
				},
				sheet2 : {
					pageNo     : 3,
					layoutType : "Mod3",
					text       : "",
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
					},
				},
			},
			page3 : {
				id     : "page3",
				sheet1 : {
					pageNo     : 4,
					layoutType : "Mod4",
					text       : "",
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
					},
				},
				sheet2 : {
					pageNo     : 5,
					layoutType : "Mod5",
					text       : "",
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
					},
				},
			},
			page4 : {
				id     : "page4",
				sheet1 : {
					pageNo     : 6,
					layoutType : "Mod6",
					text       : "",
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
					},
				},
				sheet2 : {
					pageNo     : 7,
					layoutType : "",
					text       : "",
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
					},
				},
			},
			page5 : {
				id     : "page5",
				sheet1 : {
					pageNo     : 8,
					layoutType : "Mod7",
					text       : "",
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
					},
				},
				sheet2 : {
					pageNo     : 9,
					layoutType : "",
					text       : "",
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
					},
				},
			},
			page6 : {
				id     : "page6",
				sheet1 : {
					pageNo     : 10,
					layoutType : "Mod8",
					text       : "",
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
					},
				},
				sheet2 : {
					pageNo     : 11,
					layoutType : "Mod9",
					text       : "",
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
					},
				},
			},
			page7 : {
				id     : "page7",
				sheet1 : {
					pageNo     : 12,
					layoutType : "Mod10",
					text       : "",
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
					},
				},
				sheet2 : {
					pageNo     : 13,
					layoutType : "Mod11",
					text       : "",
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
					},
				},
			},
			page8 : {
				id     : "page8",
				sheet1 : {
					pageNo     : 14,
					layoutType : "Mod12",
					text       : "",
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
						1 : {
							id  : "",
							url : "",
						},
					},
				},
				sheet2 : {
					pageNo     : 15,
					layoutType : "Mod13",
					text       : "",
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
						1 : {
							id  : "",
							url : "",
						},
					},
				},
			},
			page9 : {
				id     : "page9",
				sheet1 : {
					pageNo     : 16,
					layoutType : "",
					text       : "",
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
					},
				},
			},
		},
	},
	initialData : {
		sizePhotoBook : "LargeFormat",
		frontPage     : {},
		numberOfPages : 20,
		pages         : {
			page1 : {
				id     : "page1",
				sheet1 : {
					pageNo     : 1,
					layoutType : "",
					text       : "",
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
					},
				},
			},
			page2 : {
				id     : "page2",
				sheet1 : {
					pageNo     : 2,
					layoutType : "Mod2",
					text       : "",
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
					},
				},
				sheet2 : {
					pageNo     : 3,
					layoutType : "",
					text       : "",
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
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
						0 : {
							id  : "",
							url : "",
						},
					},
				},
				sheet2 : {
					pageNo     : 5,
					layoutType : "",
					text       : "",
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
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
						0 : {
							id  : "",
							url : "",
						},
					},
				},
				sheet2 : {
					pageNo     : 7,
					layoutType : "Mod15",
					text       : "",
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
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
						0 : {
							id  : "",
							url : "",
						},
					},
				},
				sheet2 : {
					pageNo     : 9,
					layoutType : "Mod6",
					text       : "",
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
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
						0 : {
							id  : "",
							url : "",
						},
					},
				},
				sheet2 : {
					pageNo     : 11,
					layoutType : "Mod8",
					text       : "",
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
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
						0 : {
							id  : "",
							url : "",
						},
					},
				},
				sheet2 : {
					pageNo     : 13,
					layoutType : "Mod10",
					text       : "",
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
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
						0 : {
							id  : "",
							url : "",
						},
					},
				},
				sheet2 : {
					pageNo     : 15,
					layoutType : "Mod12",
					text       : "",
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
						1 : {
							id  : "",
							url : "",
						},
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
						0 : {
							id  : "",
							url : "",
						},
						1 : {
							id  : "",
							url : "",
						},
					},
				},
				sheet2 : {
					pageNo     : 17,
					layoutType : "Mod14",
					text       : "",
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
						1 : {
							id  : "",
							url : "",
						},
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
						0 : {
							id  : "",
							url : "",
						},
						1 : {
							id  : "",
							url : "",
						},
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
					layoutType : "",
					text       : "",
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
					},
				},
			},
		},
	},
	history : {
		undo    : [],
		redo    : [],
		current : null,
	},
	pageDataSelected    : null,
	currentPhotoDragger : null,
	layoutFilter        : {
		type           : "all",
		photosQuantity : "all",
	},
	loading : false,
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
			const history = new History();
			history.undoStack = state.history.undo;
			const undoNewData = {
				...state.data,
				pages : {...payload},
			};
			history.addToUndoStack(undoNewData);
			state.history.undo = history.undoStack;
			state.history.current = history.currentAction;
		},
		insertData : (state, {payload}) => {
			state.data = {...payload};
		},
		addPhoto : (state, {payload}) => {
			const newData = {...state.data};
			newData.pages[payload.pageId][payload.sheetNo]["photos"][payload.layoutNo] = {
				id  : payload.image.fileId,
				url : payload.image.image,
			};
			state.data = newData;
			const history = new History();
			history.undoStack = state.history.undo;
			const undoNewData = {
				...newData,
			};
			history.addToUndoStack(undoNewData);
			state.history.undo = history.undoStack;
			state.history.current = history.currentAction;
		},
		addText : (state, {payload}) => {
			state.data.pages[payload.pageId][payload.sheetNo]["text"] = payload.text;

			const myUndoData = {
				...state.data,
				pages : {
					...state.data.pages,
					[payload.pageId] : {
						...state.data.pages[payload.pageId],
						[payload.sheetNo] : {
							...state.data.pages[payload.pageId][payload.sheetNo],
							text : payload.text,
						},
					},
				},
			};
			const history = new History();
			history.undoStack = state.history.undo;
			const undoNewData = {
				...myUndoData,
			};
			history.addToUndoStack(undoNewData);
			state.history.undo = history.undoStack;
			state.history.current = history.currentAction;
		},
		removePhoto : (state, {payload}) => {
			const newData = {...state.data};
			newData.pages[payload.pageId][payload.sheetNo]["photos"][payload.layoutNo] = {
				id  : "",
				url : "",
			};
			state.data = newData;
			const history = new History();
			history.undoStack = state.history.undo;
			const undoNewData = {
				...newData,
			};
			history.addToUndoStack(undoNewData);
			state.history.undo = history.undoStack;
			state.history.current = history.currentAction;
		},
		autoFillImages : (state, {payload}) => {
			const newData = {...state?.data?.pages};

			const listOfPages = [...convertToArray(newData)];
			const listOfPhotos = [...payload];

			const noImagesListKey = [];

			listOfPages.forEach((data, i) => {
				const sheet1Photos = convertToArray(data?.sheet1?.photos);
				const sheet2Photos = data?.sheet2?.photos ? convertToArray(data?.sheet2?.photos) : null;

				const isSinglePage = (["Mod1", "Mod2", "Mod3", "FrontLayout"].includes(newData[data?.id].sheet1?.layoutType));

				sheet1Photos.forEach((space, e) => {
					if (!space?.id) {
						noImagesListKey.push(`${data?.id}.sheet1.photos.${e}`);
					}
				});

				if (sheet2Photos && !isSinglePage) {
					sheet2Photos.forEach((space, e) => {
						if (!space?.id) {
							noImagesListKey.push(`${data?.id}.sheet2.photos.${e}`);
						}
					});
				}
			});

			for (let i = 0; i < listOfPhotos.length; i++) {
				const isAvailableContainer = noImagesListKey[i];
				const imageData = listOfPhotos[i];
				if (!isAvailableContainer) {
					break;
				}
				const splitKeyData = noImagesListKey[i].split(".");

				newData[splitKeyData[0]][splitKeyData[1]][splitKeyData[2]][splitKeyData[3]] = {
					id  : imageData?.fileId,
					url : imageData?.url,
				};
			}

			state.data.pages = newData;

			const history = new History();
			history.undoStack = state.history.undo;
			const undoNewData = {
				...state.data,
				pages : {
					...newData,
				},
			};
			history.addToUndoStack(undoNewData);
			state.history.undo = history.undoStack;
			state.history.current = history.currentAction;
		},
		addLayout : (state, {payload}) => {
			const cloneData = {...state.data};
			const parseToListImages = Array.from(Array(payload?.numberPhotos).keys()).map(e => ({id : "", url : ""}));
			const myPhotos = Object.assign({}, parseToListImages);
			const isFullBook = () => {
				switch (cloneData?.sizePhotoBook) {
					case "LargeFormat":
						return ["Mod1", "Mod2", "Mod3", "FrontLayout"].includes(payload.layout);
					case "SquareFormat" :
						return ["Mod6", "Mod7", "FrontLayout"].includes(payload.layout);
				}
			};
			const isAvailableDoublePage = cloneData.pages[payload.pageId]["sheet2"];
			if (isFullBook() && isAvailableDoublePage) {
				cloneData.pages[payload.pageId]["sheet1"] = {
					...cloneData.pages[payload.pageId]["sheet1"],
					layoutType : payload.layout,
					text       : cloneData.pages[payload.pageId]["sheet1"]["text"],
					photos     : myPhotos,
				};
				cloneData.pages[payload.pageId]["sheet2"] = {
					...cloneData.pages[payload.pageId]["sheet2"],
					layoutType : "",
					text       : cloneData.pages[payload.pageId]["sheet2"]["text"],
					photos     : {},
				};
				state.data = cloneData;
				return;
			}
			if (!isAvailableDoublePage && isFullBook) {
				return;
			}
			cloneData.pages[payload.pageId][payload.sheetId] = {
				...cloneData.pages[payload.pageId][payload.sheetId],
				layoutType : payload.layout,
				photos     : myPhotos,
			};
			state.data = cloneData;

			const history = new History();
			history.undoStack = state.history.undo;
			const undoNewData = {
				...cloneData,
			};
			history.addToUndoStack(undoNewData);
			state.history.undo = history.undoStack;
			state.history.current = history.currentAction;
		},
		undo : (state, {payload}) => {
			const history = new History();
			history.undoStack = state.history.undo;
			history.redoStack = state.history.redo;
			history.undo();
			state.history.undo = history.undoStack;
			state.history.redo = history.redoStack;
			state.history.current = history.currentAction;
			if (isValidArray(history.undoStack)) {
				state.data = history.undoStack[history.undoStack.length - 1];
			} else {
				state.data = state.initialData;
			}
		},
		redo : (state, {payload}) => {
			const history = new History();
			history.redoStack = state.history.redo;
			history.undoStack = state.history.undo;
			history.redo();
			state.history.undo = history.undoStack;
			state.history.redo = history.redoStack;
			state.history.current = history.currentAction;
			if (isValidArray(history.redoStack)) {
				state.data = history.redoStack[history.redoStack.length - 1];
			} else {
				state.data = history.undoStack[history.undoStack.length - 1];
			}
		},
		changeLoading : (state, {payload}) => {
			state.loading = payload;
		},
	},
});


export default workSpaceSlice;
