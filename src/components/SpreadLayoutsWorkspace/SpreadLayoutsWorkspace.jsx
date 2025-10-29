// import { useContext } from "react";
//Contexts
// import {currentConfigPhotoBookContext} from "contexts/configContext";

import SpreadBook from "components/global/SpreadBook";

import ModLayoutHandler from "components/global/ModLayoutHandler";

import { shallowEqual, useSelector } from "react-redux";

const SpreadLayoutsWorkspace = () => {
	const currentPageData = useSelector((state) => state.workSpaceSlice.currentPageData, shallowEqual);
	// const { setCurrentPageData } = useContext(currentConfigPhotoBookContext);

	const { sheet1, sheet2 } = currentPageData;

	const isAvailableRightPage = sheet2 ? true : false;

	return (
		<SpreadBook
			isWorkSpace={true}
			isAvailableRightSheet={isAvailableRightPage}
			contents={{
				ContentSheet1 : () => <ModLayoutHandler
					sheetNo={1}
					modLayoutKey={sheet1?.layoutType}
					type="layout"
				/>,
				...(isAvailableRightPage && {
					ContentSheet2 : () => <ModLayoutHandler
						sheetNo={2}
						modLayoutKey={sheet2?.layoutType}
						type="layout"
					/>,
				}),
			}}
		/>
	);
};

export default SpreadLayoutsWorkspace;
