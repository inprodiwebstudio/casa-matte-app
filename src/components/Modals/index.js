//Own components
import EditPhoto          from "./EditPhoto";
import EditText           from "./EditText";
import TestPdf            from "./TestPdf";
import ConfirmationDelete from "./ConfirmationDelete";


const modals = {
	editPhoto          : EditPhoto,
	editText           : EditText,
	testPdf            : TestPdf,
	confirmationDelete : ConfirmationDelete,
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
