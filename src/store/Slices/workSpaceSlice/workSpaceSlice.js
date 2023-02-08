import { createSlice }    from "@reduxjs/toolkit";
import { convertToArray } from "helpers";


const initialState = {
	data : {
		sizePhotoBook : "LargeFormat",
		frontPage     : {
			id : "Hola",
		},
		numberOfPages : 20,
		Bound         : "",
		firtsPage     : {
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
		pages : {
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
			newData.pages[payload.pageId][payload.sheetNo]["photos"][payload.layoutNo] = {
				id  : payload.image.fileId,
				url : payload.image.image,
			};
			state.data = newData;
		},
		removePhoto : (state, {payload}) => {
			const newData = {...state.data};
			newData.pages[payload.pageId][payload.sheetNo]["photos"][payload.layoutNo] = {
				id  : "",
				url : "",
			};
			state.data = newData;
		},
		handleAutoFill : (state, {payload}) => {
			const newData = {...state?.data?.pages};
			const images = payload.images;

			const listOfPages = [...convertToArray(newData)];
			let countPageIndex = 0;

			loop1 : for (let i = 0; i < images.length; i++) {

				const myPhotoData = images[i];

				const pageData = listOfPages[countPageIndex];
				const imageUrl = myPhotoData?.url;
				const fileId = myPhotoData?.fileId;

				const isNotCompleteSheet1 = convertToArray(newData[pageData?.id]["sheet1"]?.photos).find(e => e.id === "");
				const isNotCompleteSheet2 = convertToArray(newData[pageData?.id]["sheet2"]?.photos).find(e => e.id === "");
				const isSinglePage = (["Mod1", "Mod2", "Mod3", "FrontLayout"].includes(newData[pageData?.id].sheet1?.layoutType));

				if (!isNotCompleteSheet1 && !isNotCompleteSheet2) {
					// listOfPages.forEach((data, index) => {
					// 	const isNotCompleteSheet1 = convertToArray(newData[data?.id]["sheet1"]?.photos).find(e => e.id === "");
					// 	const isNotCompleteSheet2 = convertToArray(newData[data?.id]["sheet2"]?.photos).find(e => e.id === "");
					// 	if (isNotCompleteSheet1) {
					// 		const listOfPhotos = convertToArray(newData[data?.id]["sheet1"]?.photos);

					// 		firstLoop : for (let u = 0; u < listOfPhotos.length; u++) {
					// 			const data = listOfPhotos[u];
					// 			if (data?.id === "") {
					// 				newData[pageData?.id]["sheet1"]["photos"][u] = {
					// 					id  : fileId,
					// 					url : imageUrl,
					// 				};
					// 				break firstLoop;
					// 			}
					// 		}
					// 	}

					// 	if (isNotCompleteSheet2) {
					// 		const listOfPhotos = convertToArray(newData[data?.id]["sheet2"]?.photos);

					// 		secondLoop : for (let e = 0; e < listOfPhotos.length; e++) {
					// 			const data = listOfPhotos[e];
					// 			if (data?.id === "") {
					// 				newData[pageData?.id]["sheet2"]["photos"][e] = {
					// 					id  : fileId,
					// 					url : imageUrl,
					// 				};
					// 				break secondLoop;
					// 			}
					// 		}
					// 	}
					// });
					// countPageIndex = listOfPages.length - 1;
				}

				if (isSinglePage) {
					newData[pageData?.id]["sheet1"]["photos"][0] = {
						id  : fileId,
						url : imageUrl,
					};
					countPageIndex += 1;
					continue loop1;
				}

				if (isNotCompleteSheet1) {
					const listOfPhotos = convertToArray(newData[pageData.id]["sheet1"]?.photos);

					loop2 : for (let j = 0; j < listOfPhotos.length; j++) {
						const data = listOfPhotos[j];
						if (data?.id === "") {
							newData[pageData?.id]["sheet1"]["photos"][j] = {
								id  : fileId,
								url : imageUrl,
							};
							break loop2;
						}
					}
					continue loop1;
				}

				if (isNotCompleteSheet2) {
					const listOfPhotos = convertToArray(newData[pageData.id]["sheet2"]?.photos);

					loop3 : for (let h = 0; h < listOfPhotos.length; h++) {
						const data = listOfPhotos[h];
						if (data?.id === "") {
							newData[pageData.id]["sheet2"]["photos"][h] = {
								id  : fileId,
								url : imageUrl,
							};
							if (h === (listOfPhotos.length - 1)) {
								countPageIndex += 1;
							}
							break loop3;
						}
					}
				}
			}

			state.data.pages = newData;
		},
		newAutoFill : (state, {payload}) => {
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
		},
		addLayout : (state, {payload}) => {
			const cloneData = {...state.data};
			const parseToListImages = Array.from(Array(payload?.numberPhotos).keys()).map(e => ({id : "", url : ""}));
			const myPhotos = Object.assign({}, parseToListImages);
			const isFullBook = ["Mod1", "Mod2", "Mod3", "FrontLayout"].includes(payload.layout);
			const isAvailableDoublePage = cloneData.pages[payload.pageId]["sheet2"];
			if (isFullBook && isAvailableDoublePage) {
				cloneData.pages[payload.pageId]["sheet1"] = {
					...cloneData.pages[payload.pageId]["sheet1"],
					layoutType : payload.layout,
					text       : "",
					photos     : myPhotos,
				};
				cloneData.pages[payload.pageId]["sheet2"] = {
					...cloneData.pages[payload.pageId]["sheet2"],
					layoutType : "",
					text       : "",
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
				text       : "",
				photos     : myPhotos,
			};
			state.data = cloneData;
		},
	},
});


export default workSpaceSlice;
