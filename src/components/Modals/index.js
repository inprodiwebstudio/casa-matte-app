//Own components
import EditPhoto                from "./EditPhoto";
import EditText                 from "./EditText";
import TestPdf                  from "./TestPdf";
import ConfirmationDelete       from "./ConfirmationDelete";
import ConfirmationDeletePhoto  from "./ConfirmationDeletePhoto";
import ConfirmationToPrint      from "./ConfirmationToPrint";
import ConfirmationDeleteFolder from "./ConfirmationDeleteFolder";
import AddNewPageConfirmation   from "./AddNewPageConfirmation";
import NoMorePages              from "./NoMorePages";
import MinPagesLimit            from "./MinPagesLimit";
import DisclaimerDropPhotos     from "./DisclaimerDropPhotos";
import DeletePageConfirm        from "./DeletePageConfirm";
import QrGeneratorPhotos        from "./QrGeneratorPhotos";
import RefreshNotification      from "./RefreshNotification";
import DisclaimerHiddenPhoto    from "./DisclaimerHiddenPhoto";


const modals = {
	editPhoto                : EditPhoto,
	editText                 : EditText,
	testPdf                  : TestPdf,
	confirmationDelete       : ConfirmationDelete,
	confirmationDeletePhoto  : ConfirmationDeletePhoto,
	confirmationToPrint      : ConfirmationToPrint,
	confirmationDeleteFolder : ConfirmationDeleteFolder,
	addNewPageConfirmation   : AddNewPageConfirmation,
	noMorePages              : NoMorePages,
	disclaimerDropPhotos     : DisclaimerDropPhotos,
	minPagesLimit            : MinPagesLimit,
	deletePageConfirm        : DeletePageConfirm,
	qrGeneratorPhotos        : QrGeneratorPhotos,
	refreshNotification      : RefreshNotification,
	disclaimerHiddenPhoto    : DisclaimerHiddenPhoto,
};

const modalsConfig = {
	centered            : true,
	overflow            : "outside",
	transition          : "pop-top-right",
	closeOnEscape       : true,
	overlayOpacity      : 0.35,
	closeOnClickOutside : true,
	withCloseButton     : false,
	radius              : "xl",
	size                : "50vw",
};

export { modals, modalsConfig };
