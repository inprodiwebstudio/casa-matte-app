import { vertical, cuadrado, horizontal } from "./modsLayoutsConfig";

const photoBooksConfing = {
	white : {
		horizontal : false,
		vertical   : {
			aspectRatio      : 8/9,
			modsInDoublePage : ["Mod1", "Mod2", "Mod3"],
			layoutMods       : {...vertical},
			sizes            : {
				chico : {
					pdfSize : [100, 100],
				},
				mediano : {
					pdfSize : [100, 100],
				},
				grande : {
					pdfSize : [100, 100],
				},
			},
		},
		cuadrado : {
			aspectRatio      : 1/1,
			layoutMods       : {...cuadrado},
			modsInDoublePage : ["Mod6", "Mod7"],
			sizes            : {
				chico : {
					pdfSize : [100, 100],
				},
				mediano : {
					pdfSize : [100, 100],
				},
				grande : {
					pdfSize : [100, 100],
				},
			},
		},
	},
	sencillo : {
		horizontal : false,
		vertical   : {
			aspectRatio      : 8/9,
			layoutMods       : {...vertical},
			modsInDoublePage : ["Mod1", "Mod2", "Mod3"],
			sizes            : {
				chico   : false,
				mediano : {
					pdfSize : [100, 100],
				},
				grande : {
					pdfSize : [100, 100],
				},
			},
		},
		cuadrado : {
			aspectRatio      : 1/1,
			layoutMods       : {...cuadrado},
			modsInDoublePage : ["Mod6", "Mod7"],
			sizes            : {
				chico   : false,
				mediano : {
					pdfSize : [100, 100],
				},
				grande : {
					pdfSize : [100, 100],
				},
			},
		},
	},
	clasico : {
		horizontal : {
			aspectRatio      : 0,
			layoutMods       : {...horizontal},
			modsInDoublePage : [],
			sizes            : {
				chico   : false,
				mediano : false,
				grande  : {
					pdfSize : [100, 100],
				},
			},
		},
		vertical : {
			aspectRatio      : 8/9,
			layoutMods       : {...vertical},
			modsInDoublePage : ["Mod1", "Mod2", "Mod3"],
			sizes            : {
				chico   : false,
				mediano : {
					pdfSize : [100, 100],
				},
				grande : {
					pdfSize : [100, 100],
				},
			},
		},
		cuadrado : false,
	},
	premium : {
		horizontal : {
			aspectRatio      : 0,
			layoutMods       : false,
			modsInDoublePage : [],
			sizes            : {
				chico   : false,
				mediano : false,
				grande  : {
					pdfSize    : [100, 100],
					layoutMods : {},
				},
			},
		},
		vertical : {
			aspectRatio      : 8/9,
			layoutMods       : {...vertical},
			modsInDoublePage : ["Mod1", "Mod2", "Mod3"],
			sizes            : {
				chico   : false,
				mediano : {
					pdfSize    : [100, 100],
					layoutMods : {},
				},
				grande : {
					pdfSize    : [100, 100],
					layoutMods : {},
				},
			},
		},
		cuadrado : false,
	},
};

export default photoBooksConfing;
