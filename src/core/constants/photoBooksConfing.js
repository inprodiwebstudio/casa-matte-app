
//LayoutsMods
import VerticalLarge   from "components/MyModsLayouts/VerticalLarge";
import SquareLarge     from "components/MyModsLayouts/SquareLarge";
import VerticalMedium  from "components/MyModsLayouts/VerticalMedium";
import HorizontalLarge from "components/MyModsLayouts/HorizontalLarge";
import SquareSmall     from "components/MyModsLayouts/SquareSmall";

const photoBooksConfing = {
	white : {
		horizontal : {
			aspectRatio : [36, 31],
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
					aspectRatio      : [36, 31],
					layoutMods       : {...HorizontalLarge},
					frontLayouts     : {},
					modsInDoublePage : ["FrontLayout"],
					pdfSize          : [35, 30],
				},
			},
		},
		vertical : {
			aspectRatio : [8, 9],
			sizes       : {
				chico : {
					layoutMods       : {},
					frontLayouts     : {},
					modsInDoublePage : ["FrontLayout"],
					pdfSize          : [100, 100],
				},
				mediano : {
					aspectRatio      : [17, 22],
					layoutMods       : {...VerticalMedium},
					frontLayouts     : {},
					modsInDoublePage : ["FrontLayout"],
					pdfSize          : [100, 100],
				},
				grande : {
					aspectRatio      : [8, 9],
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
					aspectRatio      : [1, 1],
					layoutMods       : {...SquareSmall},
					frontLayouts     : {},
					modsInDoublePage : ["FrontLayout"],
					pdfSize          : [100, 100],
				},
				mediano : {
					aspectRatio      : [1, 1],
					layoutMods       : {},
					frontLayouts     : {},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
				grande : {
					aspectRatio      : [1, 1],
					layoutMods       : {...SquareLarge},
					frontLayouts     : {},
					modsInDoublePage : ["FrontLayout"],
					pdfSize          : [100, 100],
				},
			},
		},
	},
	sencillo : {
		horizontal : false,
		vertical   : {
			aspectRatio : [17, 22],
			sizes       : {
				chico   : false,
				mediano : {
					aspectRatio      : [17, 22],
					layoutMods       : {...VerticalMedium},
					frontLayouts     : {},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
				grande : {
					aspectRatio      : [8, 9],
					layoutMods       : {...VerticalLarge},
					frontLayouts     : {},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
			},
		},
		cuadrado : {
			aspectRatio : [1, 1],
			sizes       : {
				mediano : false,
				chico   : {
					aspectRatio      : [1, 1],
					layoutMods       : {...SquareSmall},
					frontLayouts     : {},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
				grande : {
					aspectRatio      : [1, 1],
					layoutMods       : {...SquareLarge},
					frontLayouts     : {},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
			},
		},
	},
	clásico : {
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
					aspectRatio      : [17, 22],
					layoutMods       : {...VerticalMedium},
					frontLayouts     : {},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
				grande : {
					aspectRatio      : [8, 9],
					layoutMods       : {...VerticalLarge},
					frontLayouts     : {},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
			},
		},
		cuadrado : {
			aspectRatio : [1, 1],
			sizes       : {
				mediano : false,
				chico   : {
					aspectRatio      : [1, 1],
					layoutMods       : {...SquareSmall},
					frontLayouts     : {},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
				grande : {
					aspectRatio      : [1, 1],
					layoutMods       : {...SquareLarge},
					frontLayouts     : {},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
			},
		},
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
					aspectRatio      : [17, 22],
					layoutMods       : {...VerticalMedium},
					frontLayouts     : {},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
				grande : {
					aspectRatio      : [8, 9],
					layoutMods       : {...VerticalLarge},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
			},
		},
		cuadrado : {
			aspectRatio : [1, 1],
			sizes       : {
				mediano : false,
				// chico   : {
				// 	aspectRatio      : [1, 1],
				// 	layoutMods       : {...SquareSmall},
				// 	frontLayouts     : {},
				// 	modsInDoublePage : [],
				// 	pdfSize          : [100, 100],
				// },
				grande  : {
					aspectRatio      : [1, 1],
					layoutMods       : {...SquareLarge},
					frontLayouts     : {},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
			},
		},
	},
	coffeTable : {
		mediaCarta : {
			aspectRatio : [496, 425],
			sizes       : {
				mediano : {
					aspectRatio      : [496, 425],
					layoutMods       : {},
					frontLayouts     : {},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
			},
		},
	},
	boda : {
		cuadrado : {
			aspectRatio : [1, 1],
			sizes       : {
				grande : {
					aspectRatio      : [1, 1],
					layoutMods       : {...SquareLarge},
					frontLayouts     : {},
					modsInDoublePage : ["FrontLayout"],
					pdfSize          : [100, 100],
				},
			},
		},
	},
	colorblock : {
		vertical : {
			aspectRatio : [8, 9],
			sizes       : {
				mediano : {
					aspectRatio      : [17, 22],
					layoutMods       : {...VerticalMedium},
					frontLayouts     : {},
					modsInDoublePage : ["FrontLayout"],
					pdfSize          : [100, 100],
				},
				grande : {
					aspectRatio      : [8, 9],
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
					aspectRatio      : [1, 1],
					layoutMods       : {...SquareSmall},
					frontLayouts     : {},
					modsInDoublePage : ["FrontLayout"],
					pdfSize          : [100, 100],
				},
				grande : {
					aspectRatio      : [1, 1],
					layoutMods       : {...SquareLarge},
					frontLayouts     : {},
					modsInDoublePage : ["FrontLayout"],
					pdfSize          : [100, 100],
				},
			},
		},
	},
	window : {
		vertical : {
			aspectRatio : [8, 9],
			sizes       : {
				mediano : {
					aspectRatio      : [17, 22],
					layoutMods       : {...VerticalMedium},
					frontLayouts     : {},
					modsInDoublePage : ["FrontLayout"],
					pdfSize          : [100, 100],
				},
				grande : {
					aspectRatio      : [8, 9],
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
					aspectRatio      : [1, 1],
					layoutMods       : {...SquareSmall},
					frontLayouts     : {},
					modsInDoublePage : ["FrontLayout"],
					pdfSize          : [100, 100],
				},
				grande : {
					aspectRatio      : [1, 1],
					layoutMods       : {...SquareLarge},
					frontLayouts     : {},
					modsInDoublePage : ["FrontLayout"],
					pdfSize          : [100, 100],
				},
			},
		},
	},
	minianillo : {
		cuadrado : {
			aspectRatio : [1, 1],
			sizes       : {
				chico : {
					aspectRatio      : [1, 1],
					layoutMods       : {...SquareSmall},
					frontLayouts     : {},
					modsInDoublePage : ["FrontLayout"],
					pdfSize          : [100, 100],
				},
			},
		},
	},
	miniexpress : {
		cuadrado : {
			aspectRatio : [1, 1],
			sizes       : {
				chico : {
					aspectRatio      : [1, 1],
					layoutMods       : {...SquareSmall},
					frontLayouts     : {},
					modsInDoublePage : ["FrontLayout"],
					pdfSize          : [100, 100],
				},
			},
		},
	},
	"civily pedida" : {
		vertical : {
			sizes : {
				mediano : {
					aspectRatio      : [17, 22],
					layoutMods       : {...VerticalMedium},
					frontLayouts     : {},
					modsInDoublePage : ["FrontLayout"],
					pdfSize          : [100, 100],
				},
			},
		},
	},
	"familiaranual" : {
		vertical : {
			sizes : {
				grande : {
					aspectRatio      : [8, 9],
					layoutMods       : {...VerticalLarge},
					frontLayouts     : {},
					modsInDoublePage : ["FrontLayout"],
					pdfSize          : [100, 100],
				},
			},
		},
	},
	"lunade miel" : {
		vertical : {
			sizes : {
				grande : {
					aspectRatio      : [8, 9],
					layoutMods       : {...VerticalLarge},
					frontLayouts     : {},
					modsInDoublePage : ["FrontLayout"],
					pdfSize          : [100, 100],
				},
			},
		},
	},
	"bautizo" : {
		vertical : {
			sizes : {
				mediano : {
					aspectRatio      : [17, 22],
					layoutMods       : {...VerticalMedium},
					frontLayouts     : {},
					modsInDoublePage : ["FrontLayout"],
					pdfSize          : [100, 100],
				},
			},
		},
	},
};

export default photoBooksConfing;
