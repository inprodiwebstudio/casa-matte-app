import Mod1  from "./Mod1";
import Mod35 from "./Mod35";

const VerticalLarge = {
	Mod1 : {
		id              : "Mod1",
		layout          : Mod1,
		numberPhotos    : 1,
		cat             : "fotos",
		layoutThumbNail : undefined,
	},
	Mod35 : {
		id              : "Mod35",
		layout          : Mod35,
		numberPhotos    : 0,
		numberText      : 1,
		cat             : "texto",
		layoutThumbNail : undefined,
		defaultTexts    : [
			{
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
		],
	},
};

export default VerticalLarge;
