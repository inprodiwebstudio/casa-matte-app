//Own components
import EditPhoto                from "./EditPhoto";
import EditText                 from "./EditText";
import TestPdf                  from "./TestPdf";
import ConfirmationDelete       from "./ConfirmationDelete";
import ConfirmationToPrint      from "./ConfirmationToPrint";
import ConfirmationDeleteFolder from "./ConfirmationDeleteFolder";
import AddNewPageConfirmation   from "./AddNewPageConfirmation";
import NoMorePages              from "./NoMorePages";
import MinPagesLimit            from "./MinPagesLimit";


const modals = {
	editPhoto                : EditPhoto,
	editText                 : EditText,
	testPdf                  : TestPdf,
	confirmationDelete       : ConfirmationDelete,
	confirmationToPrint      : ConfirmationToPrint,
	confirmationDeleteFolder : ConfirmationDeleteFolder,
	addNewPageConfirmation   : AddNewPageConfirmation,
	noMorePages              : NoMorePages,
	minPagesLimit            : MinPagesLimit,
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
