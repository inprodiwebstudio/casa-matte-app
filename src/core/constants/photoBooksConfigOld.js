
//LayoutsMods
import VerticalLarge            from "components/MyModsLayouts/VerticalLarge";
import SquareLarge              from "components/MyModsLayouts/SquareLarge";
import VerticalMedium           from "components/MyModsLayouts/VerticalMedium";
import VerticalMediumSencillo   from "components/MyModsLayouts/Sencillo/VerticalMedium";
import VerticalLargeSencillo    from "components/MyModsLayouts/Sencillo/VerticalLarge";
import VerticalMediumPremium    from "components/MyModsLayouts/Premium/VerticalMedium";
import SquareLargePremium       from "components/MyModsLayouts/Premium/SquareLarge";
import SquareSmallPremium       from "components/MyModsLayouts/Premium/SquareSmall";
import VerticalLargePremium     from "components/MyModsLayouts/Premium/VerticalLarge";
import HorizontalLargePremium   from "components/MyModsLayouts/Premium/HorizontalLarge";
import HorizontalMediumPremium  from "components/MyModsLayouts/Premium/HorizontalMedium";
import HorizontalLarge          from "components/MyModsLayouts/HorizontalLarge";
import SquareSmall              from "components/MyModsLayouts/SquareSmall";
import SquareSmallSencillo      from "components/MyModsLayouts/Sencillo/SquareSmall";
import SquareLrageSencillo      from "components/MyModsLayouts/Sencillo/SquareLarge";
import HorizontalMediumSencillo from "components/MyModsLayouts/Sencillo/HorizontalMedium";
import HorizontalLargeSencillo  from "components/MyModsLayouts/Sencillo/HorizontalLarge";
import TravelCoffeeTable        from "components/MyModsLayouts/TravelCoffeeTable";
import HorizontalMedium         from "components/MyModsLayouts/HorizontalMedium";
import LayFlat                  from "components/MyModsLayouts/LayFlat";
import LayFlatSquareMedium      from "components/MyModsLayouts/LayFlatSquareMedium";
import LayFlatSquareLarge       from "components/MyModsLayouts/LayFlatSquareLarge";
import LayFlatSquareSmall       from "components/MyModsLayouts/LayFlatSquareSmall";
import LayFlatHorizontalMedium  from "components/MyModsLayouts/LayFlatHorizontalMedium";

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
					layoutMods       : {...HorizontalMediumSencillo},
					frontLayouts     : {},
					modsInDoublePage : ["FrontLayout"],
					pdfSize          : [100, 100],
				},
				grande : {
					aspectRatio      : [496, 425],
					layoutMods       : {...HorizontalLargeSencillo},
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
					layoutMods       : {...VerticalMediumSencillo},
					frontLayouts     : {},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
				grande : {
					aspectRatio      : [8, 9],
					layoutMods       : {...VerticalLargeSencillo},
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
					layoutMods       : {...SquareSmallSencillo},
					frontLayouts     : {},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
				grande : {
					aspectRatio      : [1, 1],
					layoutMods       : {...SquareLrageSencillo},
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
					layoutMods       : {...HorizontalMediumPremium},
					frontLayouts     : {},
					modsInDoublePage : ["FrontLayout"],
					pdfSize          : [100, 100],
				},
				grande : {
					aspectRatio      : [496, 425],
					layoutMods       : {...HorizontalLargePremium},
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
					layoutMods       : {...VerticalMediumPremium},
					frontLayouts     : {},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
				grande : {
					aspectRatio      : [8, 9],
					layoutMods       : {...VerticalLargePremium},
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
					layoutMods       : {...SquareSmallPremium},
					frontLayouts     : {},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
				grande : {
					aspectRatio      : [1, 1],
					layoutMods       : {...SquareLargePremium},
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
					layoutMods       : {...HorizontalMediumPremium},
					frontLayouts     : {},
					modsInDoublePage : ["FrontLayout"],
					pdfSize          : [100, 100],
				},
				grande : {
					aspectRatio      : [496, 425],
					layoutMods       : {...HorizontalLargePremium},
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
					layoutMods       : {...VerticalMediumPremium},
					frontLayouts     : {},
					modsInDoublePage : [],
					pdfSize          : [100, 100],
				},
				grande : {
					aspectRatio      : [8, 9],
					layoutMods       : {...VerticalLargePremium},
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
					layoutMods       : {...SquareLargePremium},
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
	"civilypedida" : {
		vertical : {
			aspectRatio : [17, 22],
			sizes       : {
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
	"lunademiel" : {
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
	"travelcoffeetable" : {
		vertical : {
			aspectRatio : [354, 425],
			sizes       : {
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
	"layflat" : {
		"horizontal" : {
			sizes : {
				mediano : {
					aspectRatio      : [11, 8],
					layoutMods       : {...LayFlatHorizontalMedium},
					frontLayouts     : {},
					modsInDoublePage : [
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
					],
					pdfSize : [],
				},
			},
		},
		"vertical" : {
			sizes : {
				mediano : {
					aspectRatio      : [609, 790],
					layoutMods       : {...LayFlat},
					frontLayouts     : {},
					modsInDoublePage : [
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
					],
					pdfSize : [100, 100],
				},
			},
		},
		"cuadrado" : {
			sizes : {
				mediano : {
					aspectRatio      : [1, 1],
					layoutMods       : {...LayFlatSquareMedium},
					frontLayouts     : {},
					modsInDoublePage : [
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
					],
					pdfSize : [100, 100],
				},
				grande : {
					aspectRatio      : [1, 1],
					layoutMods       : {...LayFlatSquareLarge},
					frontLayouts     : {},
					modsInDoublePage : [
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
					],
					pdfSize : [100, 100],
				},
				chico : {
					aspectRatio      : [1, 1],
					layoutMods       : {...LayFlatSquareSmall},
					frontLayouts     : {},
					modsInDoublePage : [
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
					],
					pdfSize : [100, 100],
				},
			},
		},
	},
};

export default photoBooksConfing;
