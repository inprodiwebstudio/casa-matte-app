
import { useHandlerConfigBook } from "helpers/Hooks/useHandlerConfigBook";
import { useState, useEffect }  from "react";

const ModLayoutHandler = ({modLayoutKey, type, ...rest}) => {
	const [ showModLayout, setShowModLayout ] = useState(false);

	if (!modLayoutKey) {
		return <></>;
	}

	const {layoutMods} = useHandlerConfigBook();

	const ModLayoutThumbNail = layoutMods[modLayoutKey]?.layoutThumbNail;
	const ModLayout = layoutMods[modLayoutKey]?.layout;

	if (type === "thumbNail") {
		if (!ModLayoutThumbNail) return <></>;
		return (
			<ModLayoutThumbNail {...rest} />
		);
	}

	useEffect(() => {
		setTimeout(() => {
			setShowModLayout(true);
		}, 10);
	}, []);

	return (
		<div
			style={{
				width      : "100%",
				height     : "100%",
				transition : "all 0.2s ease-in-out",
				opacity    : showModLayout ? 1 : 0,
			}}
		>
			<ModLayout {...rest} />
		</div>
	);
};

export default ModLayoutHandler;
