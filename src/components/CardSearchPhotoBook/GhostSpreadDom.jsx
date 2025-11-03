import { shallowEqual, useSelector }     from "react-redux";
import { currentConfigPhotoBookContext } from "contexts/configContext";
import "./GhostSpreadDom.scss";
import SpreadBook                        from "components/global/SpreadBook";
import ModLayoutHandler                  from "components/global/ModLayoutHandler";
import { useContext, useEffect }         from "react";

const GhostSpreadDom = ({pageData}) => {
	const { sheet1, sheet2, id } = pageData;

	const {setCurrentConfigPhotoBook} = useContext(currentConfigPhotoBookContext);

	const isAvailableRightPage = sheet2 ? true : false;

	const productPhotoBook = useSelector((state) => state.workSpaceSlice.data?.product, shallowEqual);
	const workSpaceFormatPage = useSelector((state) => state.workSpaceSlice.data?.format, shallowEqual);
	const workSpaceSizePage = useSelector((state) => state.workSpaceSlice.data?.sizePhotoBook, shallowEqual);

	const handlerTypeProductFormat = () => {
		if (productPhotoBook === "travelcoffeetable ") {
			return "travel-coffee-table";
		}
		return `${workSpaceFormatPage}-${workSpaceSizePage}`;
	};

	useEffect(() => {
		if (pageData) {
			setCurrentConfigPhotoBook({
				pageId : id ?? undefined,
				sheet1 : {
					modlayoutId     : sheet1?.layoutType ?? undefined,
					texts           : sheet1?.text ?? undefined,
					photos          : sheet1?.photos ?? undefined,
					linesDecoration : sheet1?.linesDecoration ?? undefined,
				},
				...(sheet2 && {
					sheet2 : {
						modlayoutId     : sheet2?.layoutType ?? undefined,
						texts           : sheet2?.text ?? undefined,
						photos          : sheet2?.photos ?? undefined,
						linesDecoration : sheet2?.linesDecoration ?? undefined,
					},
				}),
			});
		}
	}, [pageData]);

	return (
		<div
			style={{
				height : "100%",
				width  : "100%",
			}}>
			<div
				style={{
					height   : "1000px",
					width    : "100%",
					overflow : "hidden",
				}}
			>
				<div
					className="PreviewPages"
				>
					<div className="photoBookContainer">
						<div className={`pagesPreviewPhotoBook ${handlerTypeProductFormat()}-preview ${!sheet2 && "onePage"}`}>
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

export default GhostSpreadDom;
