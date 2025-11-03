
import { useHandlerConfigBook }      from "helpers/Hooks/useHandlerConfigBook";
import { useState, useEffect }       from "react";
import { shallowEqual, useSelector } from "react-redux";

const ModLayoutHandler = ({modLayoutKey, type, ...rest}) => {
	const [ showModLayout, setShowModLayout ] = useState(false);

	const photoBookData = useSelector((state) => state.workSpaceSlice.data, shallowEqual);

	const versionTypeApp = photoBookData?.productionTypeVersion ?? undefined;

	if (!modLayoutKey) {
		return <></>;
	}

	const handlerTypeConfig = () => {
		if ((versionTypeApp === "moveTexts") || (type === "thumbNail")) {
			return "new";
		}
		return "old";
	};

	const {layoutMods} = useHandlerConfigBook(handlerTypeConfig());

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
			id={`${rest?.sheetNo}-snapshot`}
		>
			<ModLayout {...rest} />
		</div>
	);
};

export default ModLayoutHandler;
