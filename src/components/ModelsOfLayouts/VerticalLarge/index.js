import Mod1 from "./Mod1";

//Own Components
import ModTextLayout from "components/global/ModTextLayout";

//ThumNails layouts imports
import Mod1Tn  from "./ThumbNails/Mod1Tn";
import Mod35Tn from "./ThumbNails/Mod35Tn";
import Mod36Tn from "./ThumbNails/Mod36Tn";
import Mod37Tn from "./ThumbNails/Mod37Tn";


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
		layout          : undefined,
		numberPhotos    : 0,
		numberText      : 2,
		cat             : "texto",
		layoutThumbNail : undefined,
		linesDecoration : [
			{
				orientation : "h",
				long        : "6.5%",
				weight      : "2px",
				position    : {
					x : 0,
					y : 0,
				},
			},
		],
	},
};

export default VerticalLarge;
