
//LayoutsMods
import VerticalLarge   from "components/MyModsLayouts/VerticalLarge";
import SquareLarge     from "components/MyModsLayouts/SquareLarge";
import VerticalMedium  from "components/MyModsLayouts/VerticalMedium";
import HorizontalLarge from "components/MyModsLayouts/HorizontalLarge";

const photoBooksConfing = {
	white : {
		horizontal : {
			aspectRatio : [496, 425],
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
					layoutMods       : {...HorizontalLarge},
					frontLayouts     : {},
					modsInDoublePage : ["Mod6", "FrontLayout"],
					pdfSize          : [100, 100],
				},
			},
		},
		vertical : {
			aspectRatio : [8, 9],
			sizes       : {
				chico : {
					layoutMods       : {},
					frontLayouts     : {},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
				mediano : {
					layoutMods       : {...VerticalMedium},
					frontLayouts     : {},
					modsInDoublePage : ["FrontLayout"],
					pdfSize          : [100, 100],
				},
				grande : {
					layoutMods       : {...VerticalLarge},
					frontLayouts     : {},
					modsInDoublePage : ["FrontLayout"],
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
					layoutMods       : {...SquareLarge},
					frontLayouts     : {},
					modsInDoublePage : ["Mod6", "Mod7", "FrontLayout"],
					pdfSize          : [1, 1],
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
