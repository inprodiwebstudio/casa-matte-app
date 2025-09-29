import Mod1 from "./Mod1";

//Own Components
import ModTextLayout from "components/global/ModTextLayout";

//ThumNails layouts imports
import Mod1Tn  from "./ThumbNails/Mod1Tn";
import Mod35Tn from "./ThumbNails/Mod35Tn";
import Mod36Tn from "./ThumbNails/Mod36Tn";
import Mod37Tn from "./ThumbNails/Mod37Tn";
import Mod38Tn from "./ThumbNails/Mod38Tn";


const VerticalLarge = {
	Mod1 : {
		id              : "Mod1",
		layout          : Mod1,
		numberPhotos    : 1,
		cat             : "fotos",
		layoutThumbNail : Mod1Tn,
	},
	Mod35 : {
		id              : "Mod35",
		layout          : ModTextLayout,
		numberPhotos    : 0,
		numberText      : 1,
		cat             : "texto",
		layoutThumbNail : Mod35Tn,
		presetNewText   : {
			text     : "<p style='text-align: center;'><span style='font-size: 42px; font-family: JosefinSans-Light;'>TÍTULO 1</span></p>",
			position : {
				x : 0,
				y : 0,
			},
			sizes : {
				width  : "300px",
				height : "60px",
			},
			letterSpacing : "6px",
			gapSpacing    : undefined,
			lineHeight    : undefined,
		},
		defaultTexts : [
			{
				text     : "<p style='text-align: center;'><span style='font-size: 42px; font-family: JosefinSans-Light;'>TÍTULO 1</span></p>",
				position : {
					x : 300,
					y : 455,
				},
				sizes : {
					width  : "300px",
					height : "60px",
				},
				letterSpacing : "6px",
				gapSpacing    : undefined,
				lineHeight    : undefined,
			},
		],
	},
	Mod36 : {
		id              : "Mod36",
		layout          : ModTextLayout,
		numberPhotos    : 0,
		numberText      : 1,
		cat             : "texto",
		layoutThumbNail : Mod36Tn,
		presetNewText   : {
			text     : "<p style='text-align: center;'><span style='font-size: 42px; font-family: Aitana-Regular;'>TÍTULO 2</span></p>",
			position : {
				x : 0,
				y : 0,
			},
			sizes : {
				width  : "300px",
				height : "60px",
			},
			letterSpacing : "6px",
			gapSpacing    : undefined,
			lineHeight    : undefined,
		},
		defaultTexts : [
			{
				text     : "<p style='text-align: center;'><span style='font-size: 42px; font-family: Aitana-Regular;'>TÍTULO 2</span></p>",
				position : {
					x : 550,
					y : 860,
				},
				sizes : {
					width  : "300px",
					height : "60px",
				},
				letterSpacing : "6px",
				gapSpacing    : undefined,
				lineHeight    : undefined,
			},
		],
	},
	Mod37 : {
		id              : "Mod37",
		layout          : ModTextLayout,
		numberPhotos    : 0,
		numberText      : 2,
		cat             : "texto",
		layoutThumbNail : Mod37Tn,
		presetNewText   : {
			text     : "<p style='text-align: center;'><span style='font-size: 42px; font-family: Aitana-Regular;'>TÍTULO</span></p>",
			position : {
				x : 0,
				y : 0,
			},
			sizes : {
				width  : "300px",
				height : "60px",
			},
			letterSpacing : "6px",
			gapSpacing    : undefined,
			lineHeight    : undefined,
		},
		defaultTexts : [
			{
				text     : "<p style='text-align: center;'><span style='font-size: 42px; font-family: Aitana-Regular;'>TÍTULO</span></p>",
				position : {
					x : 300,
					y : 450,
				},
				sizes : {
					width  : "300px",
					height : "60px",
				},
				letterSpacing : "6px",
				gapSpacing    : undefined,
				lineHeight    : undefined,
			},
			{
				text     : "<p style='text-align: center;'><span style='font-size: 15px; font-family: Inter-Lifght;'>SUBTÍTULO 1</span></p>",
				position : {
					x : 355,
					y : 505,
				},
				sizes : {
					width  : "200px",
					height : "30px",
				},
				letterSpacing : "6px",
				gapSpacing    : undefined,
				lineHeight    : undefined,
			},
		],
	},
	Mod38 : {
		id              : "Mod38",
		layout          : ModTextLayout,
		numberPhotos    : 0,
		numberText      : 2,
		cat             : "texto",
		layoutThumbNail : Mod38Tn,
		presetNewText   : {
			text     : "<p style='text-align: right;'><span style='font-size: 42px; font-family: JosefinSans-Light;'>TÍTULO</span></p>",
			position : {
				x : 0,
				y : 0,
			},
			sizes : {
				width  : "300px",
				height : "60px",
			},
			letterSpacing : "6px",
			gapSpacing    : undefined,
			lineHeight    : undefined,
		},
		defaultTexts : [
			{
				text     : "<p style='text-align: right;'><span style='font-size: 42px; font-family: JosefinSans-Light;'>TÍTULO</span></p>",
				position : {
					x : 504.65121070329474,
					y : 840.9767698208129,
				},
				sizes : {
					width  : "300px",
					height : "60px",
				},
				letterSpacing : "6px",
				gapSpacing    : undefined,
				lineHeight    : undefined,
			},
			{
				text     : "<p style='text-align: right;'><span style='font-size: 16px; font-family: Inter-Lifght;'>SUBTÍTULO 2</span></p>",
				position : {
					x : 600.0000000000001,
					y : 898.0232558139539,
				},
				sizes : {
					width  : "200px",
					height : "30px",
				},
				letterSpacing : "6px",
				gapSpacing    : undefined,
				lineHeight    : undefined,
			},
		],
		linesDecoration : [
			{
				orientation : "h",
				long        : "100px",
				weight      : "3px",
				position    : {
					x : 693.0232558139539,
					y : 795.3488372093026,
				},
			},
		],
	},
	// Mod39 : {
	// 	id              : "Mod39",
	// 	layout          : ModTextLayout,
	// 	numberPhotos    : 0,
	// 	numberText      : 1,
	// 	cat             : "texto",
	// 	layoutThumbNail : undefined,
	// 	presetNewText   : {
	// 		text     : "<p style='text-align: center;'><span style='font-size: 42px; font-family: Aitana-Regular;'>TEXTO</span></p>",
	// 		position : {
	// 			x : 0,
	// 			y : 0,
	// 		},
	// 		sizes : {
	// 			width  : "300px",
	// 			height : "60px",
	// 		},
	// 		letterSpacing : "6px",
	// 		gapSpacing    : undefined,
	// 		lineHeight    : undefined,
	// 	},
	// 	defaultTexts : [
	// 		{
	// 			text     : "<p style='text-align: left;'><span style='font-size: 12px; font-family: Inter-Lifght;'>PARA PAPÁ. UN HOMENAJE A TU VIDA. GRACIAS POR TANTOS AÑOS DE CARIÑO Y AMOR, TE QUEREMOS SIEMPRE..</span></p>",
	// 			position : {
	// 				x : 300,
	// 				y : 450,
	// 			},
	// 			sizes : {
	// 				width  : "400px",
	// 				height : "200px",
	// 			},
	// 			letterSpacing : undefined,
	// 			gapSpacing    : undefined,
	// 			lineHeight    : "18px",
	// 		},
	// 	],
	// },
};

export default VerticalLarge;
