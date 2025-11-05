import photoBooksConfigOld           from "core/constants/photoBooksConfigOld";
import photoBooksConfigNew           from "core/constants/photoBooksConfing";
import { shallowEqual, useSelector } from "react-redux";

export const useHandlerTypeConfigBooks = () => {
	const photoBookData = useSelector((state) => state.workSpaceSlice.data, shallowEqual);

	const versionTypeApp = photoBookData?.productionTypeVersion ?? undefined;

	console.log("Type version App", versionTypeApp);

	if ((versionTypeApp === "moveTexts")) {
		return photoBooksConfigNew;
	}

	return photoBooksConfigOld;
};
