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
					layoutType : "Mod12",
					text       : "<div>formatText<div/>",
					photos     : {
						1 : "url",
						2 : "url",
					},
				},
				sheet2 : {
					layoutType : "Mod10",
					text       : "",
					photos     : {
						1 : "url",
						2 : "url",
						3 : "url",
					},
				},
			},
			page2 : {
				id     : "page2",
				sheet1 : {
					layoutType : "Mod12",
					text       : "<div>formatText<div/>",
					photos     : {
						1 : "url",
						2 : "url",
					},
				},
				sheet2 : {
					layoutType : "Mod10",
					text       : "",
					photos     : {
						1 : "url",
						2 : "url",
						3 : "url",
					},
				},
			},
			page3 : {
				id     : "page3",
				sheet1 : {
					layoutType : "Mod12",
					text       : "<div>formatText<div/>",
					photos     : {
						1 : "url",
						2 : "url",
					},
				},
				sheet2 : {
					layoutType : "Mod10",
					text       : "",
					photos     : {
						1 : "url",
						2 : "url",
						3 : "url",
					},
				},
			},
			page4 : {
				id     : "page4",
				sheet1 : {
					layoutType : "Mod12",
					text       : "<div>formatText<div/>",
					photos     : {
						1 : "url",
						2 : "url",
					},
				},
				sheet2 : {
					layoutType : "Mod10",
					text       : "",
					photos     : {
						1 : "url",
						2 : "url",
						3 : "url",
					},
				},
			},
			page5 : {
				id     : "page5",
				sheet1 : {
					layoutType : "Mod12",
					text       : "<div>formatText<div/>",
					photos     : {
						1 : "url",
						2 : "url",
					},
				},
				sheet2 : {
					layoutType : "Mod10",
					text       : "",
					photos     : {
						1 : "url",
						2 : "url",
						3 : "url",
					},
				},
			},
			page6 : {
				id     : "page6",
				sheet1 : {
					layoutType : "Mod12",
					text       : "<div>formatText<div/>",
					photos     : {
						1 : "url",
						2 : "url",
					},
				},
				sheet2 : {
					layoutType : "Mod10",
					text       : "",
					photos     : {
						1 : "url",
						2 : "url",
						3 : "url",
					},
				},
			},
			page7 : {
				id     : "page7",
				sheet1 : {
					layoutType : "Mod12",
					text       : "<div>formatText<div/>",
					photos     : {
						1 : "url",
						2 : "url",
					},
				},
				sheet2 : {
					layoutType : "Mod10",
					text       : "",
					photos     : {
						1 : "url",
						2 : "url",
						3 : "url",
					},
				},
			},
			page8 : {
				id     : "page8",
				sheet1 : {
					layoutType : "Mod12",
					text       : "<div>formatText<div/>",
					photos     : {
						1 : "url",
						2 : "url",
					},
				},
				sheet2 : {
					layoutType : "Mod10",
					text       : "",
					photos     : {
						1 : "url",
						2 : "url",
						3 : "url",
					},
				},
			},
			page9 : {
				id     : "page9",
				sheet1 : {
					layoutType : "Mod12",
					text       : "<div>formatText<div/>",
					photos     : {
						1 : "url",
						2 : "url",
					},
				},
				sheet2 : {
					layoutType : "Mod10",
					text       : "",
					photos     : {
						1 : "url",
						2 : "url",
						3 : "url",
					},
				},
			},
			page10 : {
				id     : "page10",
				sheet1 : {
					layoutType : "Mod12",
					text       : "<div>formatText<div/>",
					photos     : {
						1 : "url",
						2 : "url",
					},
				},
				sheet2 : {
					layoutType : "Mod10",
					text       : "",
					photos     : {
						1 : "url",
						2 : "url",
						3 : "url",
					},
				},
			},
			page11 : {
				id     : "page11",
				sheet1 : {
					layoutType : "Mod12",
					text       : "<div>formatText<div/>",
					photos     : {
						1 : "url",
						2 : "url",
					},
				},
				sheet2 : {
					layoutType : "Mod10",
					text       : "",
					photos     : {
						1 : "url",
						2 : "url",
						3 : "url",
					},
				},
			},
			page12 : {
				id     : "page12",
				sheet1 : {
					layoutType : "Mod12",
					text       : "<div>formatText<div/>",
					photos     : {
						1 : "url",
						2 : "url",
					},
				},
				sheet2 : {
					layoutType : "Mod10",
					text       : "",
					photos     : {
						1 : "url",
						2 : "url",
						3 : "url",
					},
				},
			},
			page13 : {
				id     : "page13",
				sheet1 : {
					layoutType : "Mod12",
					text       : "<div>formatText<div/>",
					photos     : {
						1 : "url",
						2 : "url",
					},
				},
				sheet2 : {
					layoutType : "Mod10",
					text       : "",
					photos     : {
						1 : "url",
						2 : "url",
						3 : "url",
					},
				},
			},
			page15 : {
				id     : "page15",
				sheet1 : {
					layoutType : "Mod12",
					text       : "<div>formatText<div/>",
					photos     : {
						1 : "url",
						2 : "url",
					},
				},
				sheet2 : {
					layoutType : "Mod10",
					text       : "",
					photos     : {
						1 : "url",
						2 : "url",
						3 : "url",
					},
				},
			},
			page16 : {
				id     : "page16",
				sheet1 : {
					layoutType : "Mod12",
					text       : "<div>formatText<div/>",
					photos     : {
						1 : "url",
						2 : "url",
					},
				},
				sheet2 : {
					layoutType : "Mod10",
					text       : "",
					photos     : {
						1 : "url",
						2 : "url",
						3 : "url",
					},
				},
			},
			page17 : {
				id     : "page17",
				sheet1 : {
					layoutType : "Mod12",
					text       : "<div>formatText<div/>",
					photos     : {
						1 : "url",
						2 : "url",
					},
				},
				sheet2 : {
					layoutType : "Mod10",
					text       : "",
					photos     : {
						1 : "url",
						2 : "url",
						3 : "url",
					},
				},
			},
			page18 : {
				id     : "page18",
				sheet1 : {
					layoutType : "Mod12",
					text       : "<div>formatText<div/>",
					photos     : {
						1 : "url",
						2 : "url",
					},
				},
				sheet2 : {
					layoutType : "Mod10",
					text       : "",
					photos     : {
						1 : "url",
						2 : "url",
						3 : "url",
					},
				},
			},
			page19 : {
				id     : "page19",
				sheet1 : {
					layoutType : "Mod12",
					text       : "<div>formatText<div/>",
					photos     : {
						1 : "url",
						2 : "url",
					},
				},
				sheet2 : {
					layoutType : "Mod10",
					text       : "",
					photos     : {
						1 : "url",
						2 : "url",
						3 : "url",
					},
				},
			},
			page20 : {
				id     : "page20",
				sheet1 : {
					layoutType : "Mod12",
					text       : "<div>formatText<div/>",
					photos     : {
						1 : "url",
						2 : "url",
					},
				},
				sheet2 : {
					layoutType : "Mod10",
					text       : "",
					photos     : {
						1 : "url",
						2 : "url",
						3 : "url",
					},
				},
			},
		},
	},
};

export const workSpaceSlice = createSlice({
	name     : "workspace",
	initialState,
	reducers : {
	},
});


export default workSpaceSlice;
