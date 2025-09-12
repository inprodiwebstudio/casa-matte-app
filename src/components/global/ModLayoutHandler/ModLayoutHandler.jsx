
import { useHandlerConfigBook } from "helpers/Hooks/useHandlerConfigBook";

const ModLayoutHandler = ({modLayoutKey, type, ...rest}) => {

	if (!modLayoutKey) {
		return <></>;
	}

	const {layoutMods} = useHandlerConfigBook();

	const ModLayoutThumbNail = layoutMods[modLayoutKey]?.layoutThumbNail;
	const ModLayout = layoutMods[modLayoutKey]?.layout;

	if (type === "thumbNail") {
		return (
			<ModLayoutThumbNail {...rest} />
		);
	}

	return (
		<ModLayout {...rest} />
	);
};

export default ModLayoutHandler;
