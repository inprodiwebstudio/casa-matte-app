//Own components
import EditPhoto from "./EditPhoto";
import EditText  from "./EditText";


const modals = {
	editPhoto : EditPhoto,
	editText  : EditText,
};

const modalsConfig = {
	centered            : true,
	overflow            : "outside",
	transition          : "pop-top-right",
	closeOnEscape       : true,
	overlayOpacity      : 0.35,
	closeOnClickOutside : true,
	withCloseButton     : false,
	radius              : "xs",
	size                : "50vw",
	padding             : "0px",
};

export { modals, modalsConfig };
