const photoBooksConfing = {
	white : {
		horizontal : false,
		vertical   : {
			aspectRatio : 0,
			layoutMods  : {},
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
		cuadrado : false,
	},
	sencillo : {
		horizontal : false,
		vertical   : {
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
		cuadrado : false,
	},
	clasico : {
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
