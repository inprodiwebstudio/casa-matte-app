//Contexts
import { currentConfigPhotoBookContext } from "contexts/configContext";

import SpreadBook from "components/global/SpreadBook";

import ModLayoutHandler from "components/global/ModLayoutHandler";

import { useContext } from "react";

const SpreadLayoutsWorkspace = () => {
	const { currentConfigPhotoBook } = useContext(currentConfigPhotoBookContext);

	const { sheet1, sheet2 } = currentConfigPhotoBook;

	const isAvailableRightPage = sheet2 ? true : false;

	return (
		<SpreadBook
			isWorkSpace={true}
			isAvailableRightSheet={isAvailableRightPage}
			contents={{
				ContentSheet1 : () => <ModLayoutHandler
					sheetNo={1}
					photos={sheet1.photos}
					modLayoutKey={sheet1?.modlayoutId}
					type="layout"
				/>,
				...(isAvailableRightPage && {
					ContentSheet2 : () => <ModLayoutHandler
						sheetNo={2}
						photos={sheet2.photos}
						modLayoutKey={sheet2?.modlayoutId}
						type="layout"
					/>,
				}),
			}}
		/>
	);
};

export default SpreadLayoutsWorkspace;
