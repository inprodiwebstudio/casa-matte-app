
import SpreadBook from "components/global/SpreadBook";

import ModLayoutHandler from "components/global/ModLayoutHandler";

const SpreadLayoutsThumbNail = ({pageData}) => {
	const isAvailableRightPage = pageData?.sheet2 ? true : false;

	return (
		<SpreadBook
			isAvailableRightSheet={isAvailableRightPage}
			pageData={pageData}
			contents={{
				...(pageData?.sheet1 && {
					ContentSheet1 : () => <ModLayoutHandler modLayoutKey={pageData?.sheet1?.layoutType} type="thumbNail" photos={pageData?.sheet1?.photos} />,
				}),
				...(isAvailableRightPage && {
					ContentSheet2 : () => <ModLayoutHandler modLayoutKey={pageData?.sheet2?.layoutType} type="thumbNail" photos={pageData?.sheet2?.photos} />,
				}),
				layoutTypeSheet1 : pageData?.sheet1?.layoutType ?? undefined,
			}}
			isThumbNail
		/>
	);
};

export default SpreadLayoutsThumbNail;
