
import SpreadBook from "components/global/SpreadBook";

import ModLayoutHandler from "components/global/ModLayoutHandler";

const SpreadLayoutsThumbNail = ({pageData}) => {
	const { sheet1, sheet2 } = pageData;

	const isAvailableRightPage = sheet2 ? true : false;

	return (
		<SpreadBook
			isAvailableRightSheet={isAvailableRightPage}
			contents={{
				ContentSheet1    : () => <ModLayoutHandler modLayoutKey={sheet1?.layoutType} type="thumbNail" photos={sheet1?.photos} />,
				layoutTypeSheet1 : sheet1?.layoutType,
				...(isAvailableRightPage && {
					ContentSheet2 : () => <ModLayoutHandler modLayoutKey={sheet2?.layoutType} type="thumbNail" photos={sheet2?.photos} />,
				}),
			}}
		/>
	);
};

export default SpreadLayoutsThumbNail;
