//Own components
import EditPhoto from "./EditPhoto";

const modals = {
	editPhoto : EditPhoto,
};

const modalsConfig = {
	centered            : true,
	overflow            : "outside",
	transition          : "pop-top-right",
	closeOnEscape       : true,
	overlayOpacity      : 0.35,
	closeOnClickOutside : true,
};

export { modals, modalsConfig };
