//Own components
import { typeFormats } from "./FormatPage.constants";
import BookSheets      from "../BookSheets";

const FormatPage = ({typeFormat, ...rest}) => {
	const isAvailableFormat = typeFormats.includes(typeFormat);
	if (isAvailableFormat) {
		switch (typeFormat) {
			case "LargeFormat" :
				return <BookSheets.LargeFormat {...rest} />;
			case "SquareFormat" :
				return <BookSheets.SquareFormat {...rest} />;
			default :
				return <div>Nuevo Formato</div>;
		}
	}
	return (
		<div>EL tipo de formato no es valido</div>
	);
};

export default FormatPage;
