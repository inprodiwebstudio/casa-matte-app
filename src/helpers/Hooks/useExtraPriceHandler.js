import convertToArray                from "helpers/convertToArray";
import counterSheets                 from "helpers/counterPages";
import { useEffect, useState }       from "react";
import { shallowEqual, useSelector } from "react-redux";

export const useExtraPriceHandler = () => {
	const [ extraPages, setExtraPages ] = useState(0);

	const sizePhotoBook = useSelector((state) => state.workSpaceSlice.data.sizePhotoBook, shallowEqual);
	const maxRangePages = useSelector((state) => state.workSpaceSlice.data?.maxRangePages, shallowEqual);
	const dataPages = useSelector((state) => state.workSpaceSlice.data, shallowEqual);

	const listOfPages = convertToArray(dataPages.pages);
	const counterPages = () => counterSheets(listOfPages);

	const handlerExtraCost = () => {
		let extraCost = 0;
		if ((sizePhotoBook === "chico") || (sizePhotoBook === "mediano")) {
			extraCost = 15;
		}
		extraCost = 22;
		const cost = extraPages * Number(extraCost);
		return cost;
	};

	useEffect(() => {
		if (counterPages() > Number(maxRangePages)) {
			setExtraPages(counterPages() - Number(maxRangePages));
			return;
		}
		setExtraPages(0);
	}, [dataPages.pages]);

	return { handlerExtraCost };
};
