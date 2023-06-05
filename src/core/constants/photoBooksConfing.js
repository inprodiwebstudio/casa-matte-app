import { grandeVertical, grandeCuadrado } from "./modsLayoutsConfig";

const photoBooksConfing = {
	white : {
		horizontal : false,
		vertical   : {
			aspectRatio : [8, 9],
			sizes       : {
				chico : {
					layoutMods       : {},
					frontLayouts     : {},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
				mediano : {
					layoutMods       : {},
					frontLayouts     : {},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
				grande : {
					layoutMods       : {...grandeVertical},
					frontLayouts     : {},
					modsInDoublePage : ["Mod1", "Mod2", "Mod3", "FrontLayout"],
					pdfSize          : [100, 100],
				},
			},
		},
		cuadrado : {
			aspectRatio : [1, 1],
			sizes       : {
				chico : {
					layoutMods       : {},
					frontLayouts     : {},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
				mediano : {
					layoutMods       : {},
					frontLayouts     : {},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
				grande : {
					layoutMods       : {...grandeCuadrado},
					frontLayouts     : {},
					modsInDoublePage : ["Mod6", "Mod7"],
					pdfSize          : [100, 100],
				},
			},
		},
	},
	sencillo : {
		horizontal : false,
		vertical   : {
			aspectRatio : [8, 9],
			sizes       : {
				chico   : false,
				mediano : {
					layoutMods       : {},
					frontLayouts     : {},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
				grande : {
					layoutMods       : {},
					frontLayouts     : {},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
			},
		},
		cuadrado : {
			aspectRatio : [1, 1],
			sizes       : {
				chico   : false,
				mediano : {
					layoutMods       : {},
					frontLayouts     : {},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
				grande : {
					layoutMods       : {},
					frontLayouts     : {},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
			},
		},
	},
	clasico : {
		horizontal : {
			aspectRatio : [],
			sizes       : {
				chico   : false,
				mediano : false,
				grande  : {
					layoutMods       : {},
					frontLayouts     : {},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
			},
		},
		vertical : {
			aspectRatio : [8, 9],
			sizes       : {
				chico   : false,
				mediano : {
					layoutMods       : {},
					frontLayouts     : {},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
				grande : {
					layoutMods       : {},
					frontLayouts     : {},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
			},
		},
		cuadrado : false,
	},
	premium : {
		horizontal : {
			aspectRatio : [],
			sizes       : {
				chico   : false,
				mediano : false,
				grande  : {
					layoutMods       : {},
					frontLayouts     : {},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
			},
		},
		vertical : {
			aspectRatio : [8, 9],
			sizes       : {
				chico   : false,
				mediano : {
					layoutMods       : {},
					frontLayouts     : {},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
				grande : {
					layoutMods       : {},
					frontLayouts     : {},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
			},
		},
		cuadrado : false,
	},
};

export default photoBooksConfing;
