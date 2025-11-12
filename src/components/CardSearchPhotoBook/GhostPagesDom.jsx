import { shallowEqual, useSelector } from "react-redux";
import "./GhostTextPageDom.scss";
import SpreadBook                    from "components/global/SpreadBook";
import ModLayoutHandler              from "components/global/ModLayoutHandler";

const GhostPagesDom = ({spreadPage}) => {
	const productPhotoBook = useSelector((state) => state.workSpaceSlice.data?.product, shallowEqual);
	const workSpaceFormatPage = useSelector((state) => state.workSpaceSlice.data?.format, shallowEqual);
	const workSpaceSizePage = useSelector((state) => state.workSpaceSlice.data?.sizePhotoBook, shallowEqual);

	const { sheet1, sheet2 } = spreadPage;

	const isAvailableRightPage = sheet2 ? true : false;

	const handlerTypeProductFormat = () => {
		if (productPhotoBook === "travelcoffeetable ") {
			return "travel-coffee-table";
		}
		return `${workSpaceFormatPage}-${workSpaceSizePage}`;
	};

	return (
		<div
			style={{
				height : "100%",
				width  : "100%",
			}}>
			<div
				style={{
					height   : "0px",
					width    : "100%",
					overflow : "hidden",
				}}
			>
				<div
					className="PreviewPages"
				>
					<div className="photoBookContainer">
						<div className={`pagesPreviewPhotoBook ${handlerTypeProductFormat()}-preview`}>
							<SpreadBook
								isWorkSpace={true}
								isAvailableRightSheet={isAvailableRightPage}
								contents={{
									ContentSheet1 : () => <ModLayoutHandler
										pageNo={sheet1?.pageNo}
										modLayout={sheet1?.layoutType}
										isThumbNail={false}
										isInPaginator={false}
										data={sheet1}
										isInWorkSpace={true}
										sheetNo={1}
										modLayoutKey={sheet1?.layoutType}
										type="layout"
									/>,
									layoutTypeSheet1 : sheet1?.layoutType,
									...(isAvailableRightPage && {
										ContentSheet2 : () => <ModLayoutHandler
											pageNo={sheet2?.pageNo}
											modLayout={sheet2?.layoutType}
											isThumbNail={false}
											isInPaginator={false}
											data={sheet2}
											isInWorkSpace={true}
											sheetNo={2}
											modLayoutKey={sheet2?.layoutType}
											type="layout"
										/>,
									}),
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GhostPagesDom;
