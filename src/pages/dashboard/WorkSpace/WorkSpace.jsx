import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useState, useEffect }                    from "react";
import { FaChevronLeft, FaChevronRight }          from "react-icons/fa";
//Helpers

//Own components
import ManagePagesView        from "../ManagePagesView";
import { workSpaceSlice }     from "store/Slices";
import SpreadLayoutsWorkspace from "components/SpreadLayoutsWorkspace";
import CoverBook              from "components/CoverBook";
import "./WorkSpace.scss";

const WorkSpace = () => {
	const dispatch = useDispatch();

	const [ myWorkSpaceData, setMyWorkSpaceData ] = useState(undefined);

	const currentPageId = useSelector((state) => state.workSpaceSlice.data?.currentPage, shallowEqual);
	const workSpaceData = useSelector((state) => state.workSpaceSlice.data?.pages, shallowEqual);
	const productPhotoBook = useSelector((state) => state.workSpaceSlice.data?.product, shallowEqual);
	const workSpaceFrontPage = useSelector((state) => state.workSpaceSlice.data?.frontPage, shallowEqual);
	const workSpaceFormatPage = useSelector((state) => state.workSpaceSlice.data?.format, shallowEqual);
	const workSpaceSizePage = useSelector((state) => state.workSpaceSlice.data?.sizePhotoBook, shallowEqual);
	const statusViewPage = useSelector((state) => state.workSpaceSlice?.statusViewPage, shallowEqual);
	const isAvailableProduct = useSelector((state) => state.workSpaceSlice?.data?.product, shallowEqual);

	const isFrontLayout = currentPageId === "frontpage";
	const isInPreview = statusViewPage === "preview";

	const handlerTypeProductFormat = () => {
		if (productPhotoBook === "travelcoffeetable") {
			return "travel-coffee-table";
		}
		if ((productPhotoBook === "layflat") && (workSpaceFormatPage === "horizontal") && (workSpaceSizePage === "mediano")) {
			return `${workSpaceFormatPage}-${workSpaceSizePage}-layflat`;
		}
		return `${workSpaceFormatPage}-${workSpaceSizePage}`;
	};

	const handlerChangePagePreview = (typeChangePage) => {
		const listOfPages = Object.values(workSpaceData).filter((page) => page?.id !== "FrontLayout");
		const currentIndexPosition = listOfPages.findIndex((page) => page.id === currentPageId);

		let pageId = null;

		if (typeChangePage === "prev") {
			if (currentIndexPosition === 0) {
				return;
			}
			pageId = listOfPages[currentIndexPosition - 1].id;
		} else {
			if (currentIndexPosition === (listOfPages.length - 1)) {
				return;
			}
			pageId = listOfPages[currentIndexPosition + 1].id;
		}
		dispatch(workSpaceSlice.actions.setSelectePageData({
			pageId      : pageId,
			currentPage : "sheet1",
		}));
		dispatch(workSpaceSlice.actions.handleChangePage(pageId));

	};

	const SapceViewHandler = () => {
		if ((statusViewPage === "managePages") && (isAvailableProduct !== "")) {
			return (
				<ManagePagesView />
			);
		}
		return (
			<div className={`WorkSpace ${isInPreview && "previewActive"}`}>
				<div className="canva-space">
					<div
						className={
							`ghost-canva
							${isInPreview ? "onPreviewContainer" : ""}
							${handlerTypeProductFormat()}-workSpace
							${(!myWorkSpaceData?.sheet2 && (myWorkSpaceData?.id !== "FrontLayout")) && "onePage"}
							`
						}
					>
						{(isInPreview && !isFrontLayout) && (
							<div
								style={{
									cursor : "pointer",
								}}
								onClick={() => handlerChangePagePreview("prev")}
							>
								<FaChevronLeft color="gray" size={50} />
							</div>
						)}
						{
							isFrontLayout ? (
								<CoverBook isInWorkSpace />
							) : (
								<SpreadLayoutsWorkspace />
							)
						}
						{(isInPreview && !isFrontLayout) && (
							<div
								style={{
									cursor : "pointer",
								}}
								onClick={() => handlerChangePagePreview("next")}
							>
								<FaChevronRight color="gray" size={50} />
							</div>
						)}
					</div>
				</div>
			</div>
		);
	};

	useEffect(() => {
		if (!isFrontLayout) {
			setMyWorkSpaceData(workSpaceData[currentPageId]);
			dispatch(workSpaceSlice.actions.setCurrentPageData(workSpaceData[currentPageId]));
		}
		if (isFrontLayout) {
			setMyWorkSpaceData(workSpaceFrontPage);
			dispatch(workSpaceSlice.actions.setCurrentPageData(workSpaceFrontPage));
		}
	}, [currentPageId, workSpaceData, workSpaceFrontPage]);

	// useEffect(() => {
	// 	if (historyChanges.length > 0) {
	// 		setCurrentIndexHistory(historyChanges.length - 1);
	// 	}
	// }, [historyChanges]);

	return (
		<>
			{
				myWorkSpaceData && <SapceViewHandler />
			}
		</>
	);
};

export default WorkSpace;
