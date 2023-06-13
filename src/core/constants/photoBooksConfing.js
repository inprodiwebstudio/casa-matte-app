import { grandeCuadrado } from "./modsLayoutsConfig";

//LayoutsMods
import VerticalLarge from "components/MyModsLayouts/VerticalLarge";

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
					layoutMods       : {...VerticalLarge},
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
			aspectRatio : [0, 0],
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
