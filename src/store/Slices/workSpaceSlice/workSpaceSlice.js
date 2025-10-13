import { createSlice }                                                        from "@reduxjs/toolkit";
import { arrayToObj, convertToArray, convertToObject, History, isValidArray } from "helpers";

const initialState = {
	data : {
		product            : "",
		productName        : "",
		format             : "",
		sizePhotoBook      : "",
		sizeDimentions     : "",
		pasta              : "",
		projectTittle      : "",
		currentTextsInPage : {},
		modified           : undefined,
		orderId            : undefined,
		frontPage          : {
			id     : "FrontLayout",
			sheet1 : {
				layoutType : "",
				text       : "",
				photos     : {
					1 : "",
				},
			},
		},
		cover          : undefined,
		engraving      : undefined,
		availableSpine : false,
		minPages       : 0,
		maxPages       : 0,
		numberOfPages  : 50,
		price          : 0,
		currentPage    : "frontpage",
		basePrice      : undefined,
		extraCost      : 50,
		maxRangePages  : 30,
		pages          : {
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
	textsImgs       : undefined,
	currentPageData : undefined,
	initialData     : undefined,
	history         : {
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
	loading        : false,
	statusViewPage : "",
};

export const workSpaceSlice = createSlice({
	name     : "workspace",
	initialState,
	reducers : {
		changeStatusViewPage : (state, {payload}) => {
			state.statusViewPage = payload;
		},
		changePageContainer : (state, {payload}) => {
			const { originPageKey, destinationPageKey } = payload;

			const abstractIdPages = (pageKey) => {
				return {
					pageId  : pageKey.split("-")[0],
					sheetId : pageKey.split("-")[1],
				};
			};

			const originAndDestinationKeys = {
				origin : {
					pageId  : abstractIdPages(originPageKey).pageId,
					sheetId : abstractIdPages(originPageKey).sheetId,
				},
				destination : {
					pageId  : abstractIdPages(destinationPageKey).pageId,
					sheetId : abstractIdPages(destinationPageKey).sheetId,
				},
			};

			const newDataPagesInsert = {
				originData : {
					... state.data.pages[originAndDestinationKeys.origin.pageId][originAndDestinationKeys.origin.sheetId],
				},
				destinationData : {
					... state.data.pages[originAndDestinationKeys.destination.pageId][originAndDestinationKeys.destination.sheetId],
				},
			};

			const newDataPages = {
				...state.data,
				pages : {
					...state.data.pages,
					[originAndDestinationKeys.origin.pageId] : {
						...state.data.pages[originAndDestinationKeys.origin.pageId],
						[originAndDestinationKeys.origin.sheetId] : {
							...state.data.pages[originAndDestinationKeys.origin.pageId][originAndDestinationKeys.origin.sheetId],
							layoutType : newDataPagesInsert.destinationData.layoutType,
							photos     : newDataPagesInsert.destinationData.photos,
							text       : newDataPagesInsert.destinationData.text ?? {0 : ""},
						},
					},
				},
			};

			newDataPages.pages[originAndDestinationKeys.destination.pageId] = {
				...newDataPages.pages[originAndDestinationKeys.destination.pageId],
				[originAndDestinationKeys.destination.sheetId] : {
					...newDataPages.pages[originAndDestinationKeys.destination.pageId][originAndDestinationKeys.destination.sheetId],
					layoutType : newDataPagesInsert.originData.layoutType,
					photos     : newDataPagesInsert.originData.photos,
					text       : newDataPagesInsert.originData.text ?? {0 : ""},
				},
			};

			state.data = newDataPages;
		},
		setSelectePageData : (state, {payload}) => {
			state.pageDataSelected = payload;
		},
		setCurrentPhotoDrager : (state, {payload}) => {
			state.currentPhotoDragger = payload;
		},
		changeColorCover : (state, {payload}) => {
			state.data.cover = payload;
		},
		changeColorEngraving : (state, {payload}) => {
			state.data.engraving.currentColor = payload;
		},
		insertPhotoBase64Url : (state, {payload}) => {
			const { pageId, sheetNo, photoIndex, imageData } = payload;
			state.data.pages[pageId][sheetNo].photos[photoIndex] = imageData;
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
		setCurrentPageData : (state, {payload}) => {
			state.currentPageData = payload;
		},
		setTextCurrentPage : (state, {payload}) => {
			const {sheetNo, layoutNo, text} = payload;
			state.currentPageData[`sheet${sheetNo}`].text[layoutNo] = text;
		},
		updatePageContent : (state, {payload}) => {
			const { currentConfigPhotoBook } = payload;
			const parseContentPage = {
				...state?.currentPageData,
				"sheet1" : {
					...state?.currentPageData?.sheet1,
					layoutType : currentConfigPhotoBook?.sheet1?.modlayoutId,
					photos     : currentConfigPhotoBook?.sheet1?.photos,
					text       : currentConfigPhotoBook?.sheet1?.texts,
				},
				...(state?.currentPageData?.sheet2 && { "sheet2" : {
					...state?.currentPageData?.sheet2,
					layoutType : currentConfigPhotoBook?.sheet2?.modlayoutId,
					photos     : currentConfigPhotoBook?.sheet2?.photos,
					text       : currentConfigPhotoBook?.sheet2?.texts,
				} }),
			};

			const newPagesContent = {
				...state.data.pages,
				[state.currentPageData.id] : parseContentPage,
			};

			state.data.pages = newPagesContent;
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
		handleChangepRrojectTitle : (state, {payload}) => {
			state.data.projectTittle = payload;
		},
		addPage : (state) => {
			const newData = {...state.data.pages};
			const pagesObjToArray = convertToArray(newData);

			const isAvailablePage = pagesObjToArray.find((page) => page.id === state.data.currentPage);

			if (!isAvailablePage) {
				return;
			}

			const listOfPages = pagesObjToArray.filter((page) => page.id !== "page1");

			const indexCurrentPage = listOfPages.findIndex((page) => page.id === state.data.currentPage);

			const validIndexPage = () => {
				if (indexCurrentPage === -1) {
					return 0;
				}
				return indexCurrentPage;
			};

			const slicePagesToReorder = listOfPages.slice(validIndexPage(), listOfPages.length);

			const lastPage = slicePagesToReorder[slicePagesToReorder.length - 1];

			if (lastPage.sheet2) {
				slicePagesToReorder.push({
					id     : `page${Number(lastPage.id.split("page")[1]) + 1}`,
					sheet1 : {
						pageNo     : lastPage?.sheet2?.pageNo + 1,
						layoutType : "",
						text       : {},
						photos     : {},
					},
				});
			}
			if (!lastPage.sheet2) {
				slicePagesToReorder[slicePagesToReorder.length - 1] = {
					sheet2 : {
						pageNo     : lastPage?.sheet1?.pageNo + 1,
						layoutType : "",
						text       : {},
						photos     : {},
					},
					...lastPage,
				};
			}

			const newPagesReordered = slicePagesToReorder.map((page, index) => {
				if (index === 0) {
					return {
						...page,
						sheet1 : {
							pageNo     : page?.sheet1?.pageNo,
							layoutType : "",
							photos     : {
								0 : {id : "", url : ""},
							},
							text : {},
						},
						sheet2 : {
							...page?.sheet1,
							pageNo : page?.sheet2?.pageNo,
						},
					};
				}
				if ((index === slicePagesToReorder.length - 1) && !slicePagesToReorder[slicePagesToReorder.length - 1]?.sheet2) {
					return {
						...page,
						sheet1 : {
							pageNo     : page?.sheet1?.pageNo,
							layoutType : slicePagesToReorder[index - 1]?.sheet2?.layoutType,
							photos     : slicePagesToReorder[index - 1]?.sheet2?.photos,
							text       : slicePagesToReorder[index - 1]?.sheet2?.text ?? {},
						},
					};
				}
				return {
					...page,
					sheet1 : {
						pageNo     : page.sheet1?.pageNo,
						layoutType : slicePagesToReorder[index - 1]?.sheet2?.layoutType,
						photos     : slicePagesToReorder[index - 1]?.sheet2?.photos,
						text       : slicePagesToReorder[index - 1]?.sheet2?.text ?? {},
					},
					sheet2 : {
						pageNo     : page.sheet2?.pageNo,
						layoutType : page.sheet1?.layoutType,
						photos     : page.sheet1?.photos,
						text       : page.sheet1?.text ?? {},
					},
				};
			});

			listOfPages.splice(validIndexPage(), slicePagesToReorder.length, ...newPagesReordered);

			state.data.pages = convertToObject([pagesObjToArray[0], ...listOfPages]);
			state.data.numberOfPages = state.data.numberOfPages + 1;
			const history = new History();
			history.undoStack = state.history.undo;
			const undoNewData = {
				...state.data,
				pages : convertToObject(listOfPages),
			};
			history.addToUndoStack(undoNewData);
			state.history.undo = history.undoStack;
			state.history.current = history.currentAction;
		},
		addSpread : (state) => {
			const cloneDataPages = {...state.data.pages};
			const currentListOfPages = convertToArray(cloneDataPages);
			const currentIndexPage = currentListOfPages.findIndex((page) => page.id === state.currentPageData.id);

			if (currentIndexPage === (currentListOfPages.length - 1)) {
				const pageData = currentListOfPages[currentIndexPage];

				const pageId = `page${Number(pageData.id.split("page")[1]) + 1}`;
				const newPageData = {
					id     : pageId,
					sheet1 : {
						pageNo     : pageData.sheet1.pageNo + 1,
						layoutType : "",
						text       : {},
						photos     : {},
					},
					sheet2 : {
						pageNo     : pageData.sheet1.pageNo + 2,
						layoutType : "",
						text       : {},
						photos     : {},
					},
				};

				const newListPages = [...currentListOfPages, newPageData];
				const newObjPages = convertToObject(newListPages);

				state.data.pages = newObjPages;
				return;
			}

			const slicePagesToReorder = currentListOfPages.slice(currentIndexPage + 1, currentListOfPages.length);
			slicePagesToReorder.unshift({
				id     : slicePagesToReorder[0].id,
				sheet1 : {
					pageNo     : slicePagesToReorder[0].id.split("page")[1],
					layoutType : "",
					text       : {},
					photos     : {},
				},
				sheet2 : {
					pageNo     : slicePagesToReorder[0].id.split("page")[1],
					layoutType : "",
					text       : {},
					photos     : {},
				},
			});
			const pagesReordered = slicePagesToReorder.map((pageData, index) => {
				if (index === 0) {
					return pageData;
				}
				return {
					...pageData,
					id : `page${Number(pageData.id.split("page")[1]) + 1}`,
				};
			});
			const pagesBeforeInsert = currentListOfPages.slice(0, currentIndexPage + 1);
			const finalPages = [...pagesBeforeInsert, ...pagesReordered];
			const newPagesObject = convertToObject(finalPages);

			state.data.pages = newPagesObject;
		},
		deletePage : (state) => {
			const minPages = state.data.minPages;
			if (state.data.numberOfPages === minPages) {
				return;
			}
			state.data.numberOfPages = state.data.numberOfPages - 1;
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
						id     : payload.image.id,
						url    : payload.image.image,
						pixels : payload.image.pixels,
					},
				};
			} else {
				if (!newData.pages[payload.pageId]?.[`sheet${payload.sheetNo}`].layoutType) {
					return;
				}
				newData.pages[payload.pageId][`sheet${payload.sheetNo}`]["photos"][payload.layoutNo] = {
					id     : payload.image.id,
					url    : payload.image.image,
					pixels : payload.image.pixels,
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
		addTextFront : (state, {payload}) => {
			state.data.frontPage[`sheet${payload.sheetNo}`]["text"][payload.layoutNo] = payload.text;

			const myUndoData = {
				...state.data,
				frontPage : {
					...state.data.frontPage,
					[payload.sheetNo] : {
						...state.data.frontPage[payload.sheetNo],
						text : payload.text,
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
		addTextBound : (state, {payload}) => {
			state.data.bound = payload.text;

			const myUndoData = {
				...state.data,
				bound : {
					...state.data.bound,
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
		removePhotosDeleted : (state, {payload}) => {
			const { imagesIds } = payload;
			const cloneDataPages = {...state.data.pages};
			let stringyDataPages = JSON.stringify(cloneDataPages);

			imagesIds.forEach(id => {
				const regex = new RegExp(id, "g");
				stringyDataPages = stringyDataPages.replace(regex, "");
			});

			const dataPagesLeaveImages = JSON.parse(stringyDataPages);
			const listOfPagesLeaveImages = [...convertToArray(dataPagesLeaveImages)];

			const parseDeleteImagesSheet = (sheetData) => {
				const listOfPhotos = convertToArray(sheetData?.photos);

				if (isValidArray(listOfPhotos)) {
					const isNotAvailablePhotos = (listOfPhotos.length === 1) && (!listOfPhotos[0]?.id && !listOfPhotos[0]?.url);
					if (isNotAvailablePhotos) {
						return sheetData;
					}
					const newListOfPhotos = listOfPhotos.map((photo) => {
						if ((photo?.id === "") && photo?.url) {
							return {
								...photo,
								url            : "",
								urlPhotoEdited : "",
								pixels         : undefined,
							};
						}
						return {...photo};
					});
					const newObjectPhotos = newListOfPhotos.reduce((acc, photo, index) => {
						acc[index] = photo;
						return acc;
					}, {});
					return {
						...sheetData,
						photos : newObjectPhotos,
					};
				}

				return sheetData;
			};

			const listOfPagesDeletedImages = listOfPagesLeaveImages.map((pageData) => {
				return {
					...pageData,
					sheet1 : parseDeleteImagesSheet(pageData?.sheet1),
					...(pageData?.sheet2 && {sheet2 : parseDeleteImagesSheet(pageData?.sheet2)}),
				};
			});

			const newPagesDataDeletedImages = convertToObject(listOfPagesDeletedImages);

			state.data = {
				...state.data,
				pages : newPagesDataDeletedImages,
			};
		},
		autoFillImages : (state, {payload}) => {
			const newData = {FrontLayout : {...state.data.frontPage}, ...state?.data?.pages};

			const listOfPages = [...convertToArray(newData)];
			const listOfPhotos = [...payload];

			const noImagesListKey = [];

			listOfPages.forEach((data, i) => {
				const sheet1Photos = convertToArray(data?.sheet1?.photos);
				const sheet2Photos = data?.sheet2?.photos ? convertToArray(data?.sheet2?.photos) : null;

				const isSinglePage = (["FrontLayout"].includes(newData[data?.id].sheet1?.layoutType));

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
					id  : imageData?.id,
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
			const {layout, defaultTexts, linesDecoration, numberPhotos, anotherSheetKey, anotherSheetData, pageId, sheetId} = payload;
			const cloneData = {...state.data};
			const parseToListImages = Array.from(Array(numberPhotos).keys()).map(e => ({id : "", url : ""}));
			const myPhotos = Object.assign({}, parseToListImages);
			const texts = defaultTexts ? arrayToObj(defaultTexts) : undefined;
			const myLinesDecoration = linesDecoration ? arrayToObj(linesDecoration) : undefined;
			const isFullBook = () => {
				switch (`${cloneData?.product}-${cloneData?.sizePhotoBook}-${cloneData?.format}`) {
					case "grande-vertical":
						return ["FrontLayout"].includes(layout);
					case "layflat-mediano-vertical":
						return [
							"FrontLayout",
							"Mod33",
							"Mod34",
							"Mod35",
							"Mod36",
							"Mod37",
							"Mod38",
							"Mod39",
							"Mod40",
							"Mod41",
							"Mod42",
							"Mod43",
							"Mod44",
							"Mod45",
							"Mod46",
							"Mod47",
							"Mod48",
							"Mod49",
							"Mod50",
							"Mod51",
							"Mod52",
							"Mod53",
							"Mod54",
							"Mod55",
							"Mod56",
							"Mod57",
							"Mod58",
							"Mod59",
							"Mod60",
							"Mod61",
							"Mod62",
							"Mod63",
							"Mod64",
						].includes(payload.layout);
					case "layflat-mediano-cuadrado":
						return [
							"FrontLayout",
							"Mod44",
							"Mod45",
							"Mod46",
							"Mod47",
							"Mod48",
							"Mod49",
							"Mod50",
							"Mod51",
							"Mod52",
							"Mod53",
							"Mod54",
							"Mod55",
							"Mod56",
							"Mod57",
							"Mod58",
							"Mod59",
							"Mod60",
							"Mod61",
							"Mod62",
							"Mod63",
							"Mod64",
							"Mod65",
							"Mod66",
							"Mod67",
							"Mod68",
							"Mod69",
							"Mod70",
							"Mod71",
							"Mod72",
							"Mod73",
							"Mod74",
							"Mod75",
							"Mod76",
							"Mod77",
							"Mod78",
						].includes(payload.layout);
					case "layflat-grande-cuadrado":
						return [
							"FrontLayout",
							"Mod44",
							"Mod45",
							"Mod46",
							"Mod47",
							"Mod48",
							"Mod49",
							"Mod50",
							"Mod51",
							"Mod52",
							"Mod53",
							"Mod54",
							"Mod55",
							"Mod56",
							"Mod57",
							"Mod58",
							"Mod59",
							"Mod60",
							"Mod61",
							"Mod62",
							"Mod63",
							"Mod64",
							"Mod65",
							"Mod66",
							"Mod67",
							"Mod68",
							"Mod69",
							"Mod70",
							"Mod71",
							"Mod72",
							"Mod73",
							"Mod74",
							"Mod75",
							"Mod76",
							"Mod77",
							"Mod78",
						].includes(payload.layout);
					case "layflat-chico-cuadrado":
						return [
							"FrontLayout",
							"Mod44",
							"Mod45",
							"Mod46",
							"Mod47",
							"Mod48",
							"Mod49",
							"Mod50",
							"Mod51",
							"Mod52",
							"Mod53",
							"Mod54",
							"Mod55",
							"Mod56",
							"Mod57",
							"Mod58",
							"Mod59",
							"Mod60",
							"Mod61",
							"Mod62",
							"Mod63",
							"Mod64",
							"Mod65",
							"Mod66",
							"Mod67",
							"Mod68",
							"Mod69",
							"Mod70",
							"Mod71",
							"Mod72",
							"Mod73",
							"Mod74",
							"Mod75",
							"Mod76",
							"Mod77",
							"Mod78",
						].includes(payload.layout);
					case "layflat-mediano-horizontal":
						return [
							"FrontLayout",
							"Mod32",
							"Mod33",
							"Mod34",
							"Mod35",
							"Mod36",
							"Mod37",
							"Mod38",
							"Mod39",
							"Mod40",
							"Mod41",
							"Mod42",
							"Mod43",
							"Mod44",
							"Mod45",
							"Mod46",
							"Mod47",
							"Mod48",
							"Mod49",
							"Mod50",
							"Mod51",
							"Mod52",
							"Mod53",
							"Mod54",
							"Mod55",
							"Mod56",
							"Mod57",
							"Mod57",
							"Mod58",
							"Mod59",
							"Mod60",
							"Mod61",
							"Mod62",
							"Mod63",
							"Mod64",
						].includes(payload.layout);
					case "grande-cuadrado" :
						return ["FrontLayout"].includes(layout);
				}
			};
			const isAvailableDoublePage = cloneData.pages[pageId]?.["sheet2"];
			if (pageId === "FrontLayout") {
				cloneData.frontPage.sheet1 = {
					...cloneData.frontPage.sheet1,
					layoutType      : layout,
					text            : texts,
					linesDecoration : myLinesDecoration,
					photos          : {
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
				cloneData.pages[pageId]["sheet1"] = {
					...cloneData.pages[pageId]["sheet1"],
					layoutType      : layout,
					text            : texts,
					linesDecoration : myLinesDecoration,
					photos          : myPhotos,
				};
				cloneData.pages[pageId]["sheet2"] = {
					...cloneData.pages[pageId]["sheet2"],
					layoutType      : "",
					text            : undefined,
					linesDecoration : undefined,
					photos          : undefined,
				};
				state.data = cloneData;
				return;
			}
			if (!isAvailableDoublePage && isFullBook()) {
				return;
			}
			if (anotherSheetKey) {
				cloneData.pages[pageId][anotherSheetKey] = {
					...cloneData.pages[pageId][anotherSheetKey],
					layoutType      : anotherSheetData?.modlayoutId,
					text            : anotherSheetData?.texts,
					linesDecoration : anotherSheetData?.linesDecoration,
					photos          : anotherSheetKey?.photos,
				};
			}
			cloneData.pages[pageId][sheetId] = {
				...cloneData.pages[pageId][sheetId],
				layoutType      : layout,
				text            : texts,
				linesDecoration : myLinesDecoration,
				photos          : myPhotos,
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
		addTextImgs : (state, {payload}) => {
			const { textImgs } = payload;
			state.textsImgs = textImgs;
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
