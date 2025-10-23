
import Mod1Tn from "./ThumbNails/Mod1Tn";
import Mod2Tn from "./ThumbNails/Mod2Tn";

import Mod1 from "./Mod1";
import Mod2 from "./Mod2";

const SquareSmall = {
	Mod1 : {
		id              : "Mod1",
		layout          : Mod1,
		numberPhotos    : 1,
		cat             : "fotos",
		layoutThumbNail : Mod1Tn,
	},
	Mod2 : {
		id              : "Mod2",
		layout          : Mod2,
		numberPhotos    : 1,
		cat             : "fotos",
		layoutThumbNail : Mod2Tn,
	},
};

export default SquareSmall;
