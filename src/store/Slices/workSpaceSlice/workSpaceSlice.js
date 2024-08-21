import { createSlice }                                            from "@reduxjs/toolkit";
import { convertToArray, History, isValidArray, convertToObject } from "helpers";

const initialState = {
	data : {
		product        : "",
		format         : "",
		sizePhotoBook  : "",
		sizeDimentions : "",
		pasta          : "",
		modified       : undefined,
		frontPage      : {
			id     : "FrontLayout",
			sheet1 : {
				layoutType : "",
				text       : "",
				photos     : {
					1 : "",
				},
			},
		},
		minPages      : 0,
		maxPages      : 0,
		numberOfPages : 50,
		price         : 0,
		currentPage   : "frontpage",
		basePrice     : 800,
		extraCost     : 50,
		maxRangePages : 30,
		pages         : {
			page1 : {
				id     : "page1",
				sheet1 : {
					pageNo     : undefined,
					layoutType : "",
					text       : {},
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
					pageNo     : undefined,
					layoutType : "",
					text       : {},
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
					},
				},
				sheet2 : {
					pageNo     : undefined,
					layoutType : "",
					text       : {},
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
					pageNo     : undefined,
					layoutType : "",
					text       : {},
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
					},
				},
				sheet2 : {
					pageNo     : undefined,
					layoutType : "",
					text       : {},
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
					pageNo     : undefined,
					layoutType : "",
					text       : {},
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
					},
				},
				sheet2 : {
					pageNo     : undefined,
					layoutType : "",
					text       : {},
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
					pageNo     : undefined,
					layoutType : "",
					text       : {},
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
					},
				},
				sheet2 : {
					pageNo     : undefined,
					layoutType : "",
					text       : {},
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
					pageNo     : undefined,
					layoutType : "",
					text       : {},
					photos     : {
						0 : {
							id  : "",
							url : "",
						},
					},
				},
				sheet2 : {
					pageNo     : undefined,
					layoutType : "",
					text       : {},
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
					pageNo     : undefined,
					layoutType : "",
					text       : {},
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
	initialData : undefined,
	history     : {
		undo    : [],
		redo    : [],
		current : null,
	},
	pageDataSelected    : null,
	currentPhotoDragger : null,
	layoutFilter        : {
		type           : "all",
		photosQuantity : {
			label : "TODOS",
			value : "all",
		},
	},
	loading   : true,
	isPreview : false,
};

export const workSpaceSlice = createSlice({
	name     : "workspace",
	initialState,
	reducers : {
		togglePreview : (state) => {
			state.isPreview = !state.isPreview;
		},
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
		addInitialData : (state, {payload}) => {
			state.initialData = {...payload};
		},
		handleChangePage : (state, {payload}) => {
			state.data.currentPage = payload;
		},
		addPage : (state) => {
			const newData = {...state.data.pages};
			const listOfPages = convertToArray(newData);

			if (state.data.currentPage === "frontpage") {
				return;
			}

			const indexPage = listOfPages.findIndex((page) => page.id === state.data.currentPage);
			const handlerNumberPage = () => {
				if ((state.data.currentPage === "page1") && !listOfPages[indexPage + 1].sheet2) {
					return listOfPages[indexPage + 1].sheet1.pageNo + 1;
				}
				if (!listOfPages[indexPage].sheet2) {
					return listOfPages[indexPage].sheet1.pageNo + 1;
				}
				if (listOfPages[indexPage].sheet2 && (indexPage !== listOfPages.length - 1) && !listOfPages[indexPage + 1]?.sheet2) {
					return listOfPages[indexPage + 1].sheet1.pageNo + 1;
				}
				return listOfPages[indexPage].sheet2.pageNo + 1;
			};

			const mySheet = {
				pageNo     : handlerNumberPage(),
				layoutType : "",
				text       : {},
				photos     : {
					0 : {
						id  : "",
						url : "",
					},
				},
			};

			const prevPages = listOfPages.slice(0, indexPage + 1);
			const nextPages = listOfPages.slice(indexPage + 1, listOfPages.length);

			if (!listOfPages[indexPage].sheet2 && state.data.currentPage !== "page1") {
				const lastPage = {
					...prevPages[prevPages.length - 1],
					sheet2 : mySheet,
				};
				const prevPagesNotLast = prevPages.slice(0, prevPages.length - 1);
				const newPrevPages = [...prevPagesNotLast, lastPage];
				const newNextPages = nextPages.map(page => ({
					...page,
					sheet1 : {
						...page.sheet1,
						pageNo : page.sheet1.pageNo + 1,
					},
					...(page.sheet2) && {
						sheet2 : {
							...page.sheet2,
							pageNo : page.sheet2.pageNo + 1,
						},
					},
				}));
				const newListPages = [...newPrevPages, ...newNextPages];
				state.data.pages = convertToObject(newListPages);
				state.data.numberOfPages = state.data.numberOfPages + 1;
				return;
			}
			if (!listOfPages[indexPage + 1]?.sheet2 && (indexPage !== listOfPages.length - 1)) {
				const firstPageNextPages = {
					...nextPages[0],
					sheet2 : mySheet,
				};

				const nextPagesNotFirst = nextPages.slice(1, nextPages.length);

				const pagesWithNewNo = nextPagesNotFirst.map(myPage => ({
					...myPage,
					sheet1 : {
						...myPage.sheet1,
						pageNo : myPage.sheet1.pageNo + 1,
					},
					...(myPage.sheet2) && {
						sheet2 : {
							...myPage.sheet2,
							pageNo : myPage.sheet2.pageNo + 1,
						},
					},
				}));
				const newListPages = [...prevPages, firstPageNextPages, ...pagesWithNewNo];
				state.data.pages = convertToObject(newListPages);
				state.data.numberOfPages = state.data.numberOfPages + 1;
				return;
			}
			if (listOfPages[indexPage + 1]?.sheet2 || (indexPage === listOfPages.length - 1)) {
				const newAddPage = {
					id     : `page${indexPage + 2}`,
					sheet1 : mySheet,
				};
				const nextPagesNewNo = nextPages.map((myPage) => ({
					...myPage,
					id     : `page${Number(myPage.id.split("page")[1]) + 1}`,
					sheet1 : {
						...myPage.sheet1,
						pageNo : myPage.sheet1.pageNo + 1,
					},
					...(myPage.sheet2) && {
						sheet2 : {
							...myPage.sheet2,
							pageNo : myPage.sheet2.pageNo + 1,
						},
					},
				}));

				const newListPages = [...prevPages, newAddPage, ...nextPagesNewNo];
				state.data.pages = convertToObject(newListPages);
				state.data.numberOfPages = state.data.numberOfPages + 1;
				return;
			}

		},
		deletePage : (state, {payload}) => {
			const minPages = state.data.minPages;
			if (state.data.numberOfPages === minPages) {
				return;
			}
			state.data.numberOfPages = state.data.numberOfPages - payload.quantityDelete;
		},
		addPhotoEdited : (state, {payload}) => {
			const newData = {...state.data};
			newData.pages[payload?.pageId][`sheet${payload.sheetNo}`]["photos"][payload?.layoutNo]["urlPhotoEdited"] = payload?.imageUrl;
			state.data = newData;
		},
		addPhoto : (state, {payload}) => {
			const newData = {...state.data};
			if (payload.pageId === "frontpage") {
				newData.frontPage.sheet1["photos"] = {
					0 : {
						id  : payload.image.public_id,
						url : payload.image.image,
					},
				};
			} else {
				if (!newData.pages[payload.pageId]?.[`sheet${payload.sheetNo}`].layoutType) {
					return;
				}
				newData.pages[payload.pageId][`sheet${payload.sheetNo}`]["photos"][payload.layoutNo] = {
					id  : payload.image.public_id,
					url : payload.image.image,
				};
			}
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
			state.data.pages[payload.pageId][`sheet${payload.sheetNo}`]["text"][payload.layoutNo] = payload.text;

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
			if (payload?.pageId === "frontpage") {
				newData.frontPage.sheet1.photos = {
					0 : {
						id  : "",
						url : "",
					},
				};
			} else {
				newData.pages[payload.pageId][`sheet${payload.sheetNo}`]["photos"][payload.layoutNo] = {
					id  : "",
					url : "",
				};
			}
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
		removePhotoById : (state, {payload}) => {
			const listOfCoordinatesPhotos = payload;
			listOfCoordinatesPhotos.forEach(photoCoordinate => {
				const coordinateList = photoCoordinate.split(".");
				const pageId = coordinateList[0];
				const sheetNo = coordinateList[1];
				const noPhoto = coordinateList[2];
				state.data.pages[pageId][sheetNo].photos[noPhoto].id = "";
				state.data.pages[pageId][sheetNo].photos[noPhoto].url = "";
			});
		},
		autoFillImages : (state, {payload}) => {
			const newData = {FrontLayout : {...state.data.frontPage}, ...state?.data?.pages};

			const listOfPages = [...convertToArray(newData)];
			const listOfPhotos = [...payload];

			const noImagesListKey = [];

			listOfPages.forEach((data, i) => {
				const sheet1Photos = convertToArray(data?.sheet1?.photos);
				const sheet2Photos = data?.sheet2?.photos ? convertToArray(data?.sheet2?.photos) : null;

				const isSinglePage = (["Mod1", "Mod2", "Mod3", "FrontLayout"].includes(newData[data?.id].sheet1?.layoutType));

				sheet1Photos.forEach((space, e) => {
					if (!space?.id && data?.sheet1?.layoutType) {
						noImagesListKey.push(`${data?.id}.sheet1.photos.${e}`);
					}
				});

				if (sheet2Photos && !isSinglePage && data?.sheet1?.layoutType !== "") {
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
					id  : imageData?.public_id,
					url : imageData?.url,
				};
			}

			state.data.frontPage = newData.FrontLayout;
			delete newData.FrontLayout;
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
			const parseToListText = Array.from(Array(payload?.numberText).keys()).map(e => (""));
			const myPhotos = Object.assign({}, parseToListImages);
			const myText = Object.assign({}, parseToListText);
			const isFullBook = () => {
				switch (`${cloneData?.sizePhotoBook}-${cloneData?.format}`) {
					case "grande-vertical":
						return ["Mod1", "Mod2", "Mod3", "FrontLayout"].includes(payload.layout);
					case "grande-cuadrado" :
						return ["Mod6", "Mod7", "FrontLayout"].includes(payload.layout);
				}
			};
			const isAvailableDoublePage = cloneData.pages[payload.pageId]?.["sheet2"];
			if (payload?.pageId === "FrontLayout") {
				cloneData.frontPage.sheet1 = {
					...cloneData.frontPage.sheet1,
					layoutType : payload.layout,
					text       : myText,
					photos     : {
						0 : {
							id  : cloneData?.frontPage?.sheet1?.photos?.[0]?.id,
							url : cloneData?.frontPage?.sheet1?.photos?.[0]?.url,
						},
					},
				};
				state.data = cloneData;
				return;
			}
			if (isFullBook() && isAvailableDoublePage) {
				cloneData.pages[payload.pageId]["sheet1"] = {
					...cloneData.pages[payload.pageId]["sheet1"],
					layoutType : payload.layout,
					text       : myText,
					photos     : myPhotos,
				};
				cloneData.pages[payload.pageId]["sheet2"] = {
					...cloneData.pages[payload.pageId]["sheet2"],
					layoutType : "",
					text       : {},
					photos     : {},
				};
				state.data = cloneData;
				return;
			}
			if (!isAvailableDoublePage && isFullBook()) {
				return;
			}
			cloneData.pages[payload.pageId][payload.sheetId] = {
				...cloneData.pages[payload.pageId][payload.sheetId],
				layoutType : payload.layout,
				text       : myText,
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
