import Mod1  from "./Mod1";
import Mod35 from "./Mod35";


import Mod1Tn  from "./ThumbNails/Mod1Tn";
import Mod35Tn from "./ThumbNails/Mod35Tn";


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
		layout          : Mod35,
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
				width  : "auto",
				height : "auto",
			},
		},
		defaultTexts : [
			{
				text     : "<p style='text-align: center;'><span style='font-size: 42px; font-family: JosefinSans-Light;'>TÍTULO 1</span></p>",
				position : {
					x : 235,
					y : 255,
				},
				sizes : {
					width  : "300px",
					height : "60px",
				},
			},
		],
	},
};

export default VerticalLarge;
