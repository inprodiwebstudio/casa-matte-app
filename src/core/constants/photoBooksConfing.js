
//LayoutsMods
import VerticalLarge     from "components/MyModsLayouts/VerticalLarge";
import SquareLarge       from "components/MyModsLayouts/SquareLarge";
import VerticalMedium    from "components/MyModsLayouts/VerticalMedium";
import HorizontalLarge   from "components/MyModsLayouts/HorizontalLarge";
import SquareSmall       from "components/MyModsLayouts/SquareSmall";
import TravelCoffeeTable from "components/MyModsLayouts/TravelCoffeeTable";
import HorizontalMedium  from "components/MyModsLayouts/HorizontalMedium";

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
					aspectRatio      : [158, 123],
					layoutMods       : {...HorizontalMedium},
					frontLayouts     : {},
					modsInDoublePage : ["FrontLayout"],
					pdfSize          : [100, 100],
				},
				grande : {
					aspectRatio      : [496, 425],
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
					aspectRatio      : [158, 123],
					layoutMods       : {...HorizontalMedium},
					frontLayouts     : {},
					modsInDoublePage : ["FrontLayout"],
					pdfSize          : [100, 100],
				},
				grande : {
					aspectRatio      : [496, 425],
					layoutMods       : {...HorizontalLarge},
					frontLayouts     : {},
					modsInDoublePage : ["FrontLayout"],
					pdfSize          : [35, 30],
				},
			},
		},
		vertical : {
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
			aspectRatio : [36, 31],
			sizes       : {
				chico : {
					layoutMods       : {},
					frontLayouts     : {},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
				mediano : {
					aspectRatio      : [158, 123],
					layoutMods       : {...HorizontalMedium},
					frontLayouts     : {},
					modsInDoublePage : ["FrontLayout"],
					pdfSize          : [100, 100],
				},
				grande : {
					aspectRatio      : [496, 425],
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
			aspectRatio : [36, 31],
			sizes       : {
				chico : {
					layoutMods       : {},
					frontLayouts     : {},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
				mediano : {
					aspectRatio      : [158, 123],
					layoutMods       : {...HorizontalMedium},
					frontLayouts     : {},
					modsInDoublePage : ["FrontLayout"],
					pdfSize          : [100, 100],
				},
				grande : {
					aspectRatio      : [496, 425],
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
					aspectRatio      : [158, 123],
					layoutMods       : {...HorizontalMedium},
					frontLayouts     : {},
					modsInDoublePage : ["FrontLayout"],
					pdfSize          : [100, 100],
				},
				grande : {
					aspectRatio      : [496, 425],
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
					aspectRatio      : [158, 123],
					layoutMods       : {...HorizontalMedium},
					frontLayouts     : {},
					modsInDoublePage : ["FrontLayout"],
					pdfSize          : [100, 100],
				},
				grande : {
					aspectRatio      : [496, 425],
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
	"travelcoffeetable " : {
		vertical : {
			sizes : {
				grande : {
					aspectRatio      : [354, 425],
					layoutMods       : {...TravelCoffeeTable},
					frontLayouts     : {},
					modsInDoublePage : ["FrontLayout"],
					pdfSize          : [100, 100],
				},
			},
		},
	},
};

export default photoBooksConfing;
