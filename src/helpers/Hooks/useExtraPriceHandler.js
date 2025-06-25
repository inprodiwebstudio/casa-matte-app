import convertToArray                from "helpers/convertToArray";
import counterSheets                 from "helpers/counterPages";
import { useEffect, useState }       from "react";
import { shallowEqual, useSelector } from "react-redux";

export const useExtraPriceHandler = () => {
	const [ extraPages, setExtraPages ] = useState(0);

	const sizePhotoBook = useSelector((state) => state.workSpaceSlice.data.sizePhotoBook, shallowEqual);
	const maxRangePages = useSelector((state) => state.workSpaceSlice.data?.maxRangePages, shallowEqual);
	const dataPages = useSelector((state) => state.workSpaceSlice.data, shallowEqual);
	const productType = useSelector((state) => state.workSpaceSlice.data.product, shallowEqual);

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
		if (productType === "layflat") {
			const myCounterPages = convertToArray(dataPages.pages).length;
			if (myCounterPages > maxRangePages) {
				setExtraPages(myCounterPages - Number(maxRangePages));
				return;
			}
			setExtraPages(0);
			return;
		}
		if (counterPages() > Number(maxRangePages)) {
			setExtraPages(counterPages() - Number(maxRangePages));
			return;
		}
		setExtraPages(0);
	}, [dataPages.pages]);

	return { handlerExtraCost };
};
