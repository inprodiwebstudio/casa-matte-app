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
			isAvailableRightSheet={isAvailableRightPage}
			contents={{
				ContentSheet1 : () => <ModLayoutHandler modLayoutKey={sheet1?.modlayoutId} type="layout" />,
				...(isAvailableRightPage && {
					ContentSheet2 : () => <ModLayoutHandler modLayoutKey={sheet2?.modlayoutId} type="layout" />,
				}),
			}}
		/>
	);
};

export default SpreadLayoutsWorkspace;
