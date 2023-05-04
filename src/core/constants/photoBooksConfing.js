import { vertical, cuadrado, horizontal } from "./modsLayoutsConfig";

const photoBooksConfing = {
	white : {
		horizontal : false,
		vertical   : {
			aspectRatio : 0,
			layoutMods  : {...vertical},
			sizes       : {
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
			aspectRatio : 0,
			layoutMods  : {...cuadrado},
			sizes       : {
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
			aspectRatio : 0,
			layoutMods  : {...vertical},
			sizes       : {
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
			aspectRatio : 0,
			layoutMods  : {...cuadrado},
			sizes       : {
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
			aspectRatio : 0,
			layoutMods  : {...horizontal},
			sizes       : {
				chico   : false,
				mediano : false,
				grande  : {
					pdfSize : [100, 100],
				},
			},
		},
		vertical : {
			aspectRatio : 0,
			layoutMods  : {...vertical},
			sizes       : {
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
			aspectRatio : 0,
			sizes       : {
				chico   : false,
				mediano : false,
				grande  : {
					pdfSize    : [100, 100],
					layoutMods : {},
				},
			},
		},
		vertical : {
			aspectRatio : 0,
			sizes       : {
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
	},
};

export default photoBooksConfing;
