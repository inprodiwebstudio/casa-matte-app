import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useState, useEffect }                    from "react";
import { FaChevronLeft, FaChevronRight }          from "react-icons/fa";
//Helpers

//Own components
import ManagePagesView        from "../ManagePagesView";
import { RedoArrow }          from "Resources/icons";
import { workSpaceSlice }     from "store/Slices";
import SpreadLayoutsWorkspace from "components/SpreadLayoutsWorkspace";
// import { currentConfigPhotoBookContext } from "contexts/configContext";
import CoverBook from "components/CoverBook";
import "./WorkSpace.scss";

const WorkSpace = () => {
	const dispatch = useDispatch();

	const [ myWorkSpaceData, setMyWorkSpaceData ] = useState(undefined);

	// const {setCurrentConfigPhotoBook, historyChanges} = useContext(currentConfigPhotoBookContext);

	const currentPageId = useSelector((state) => state.workSpaceSlice.data?.currentPage, shallowEqual);
	const workSpaceData = useSelector((state) => state.workSpaceSlice.data?.pages, shallowEqual);
	const productPhotoBook = useSelector((state) => state.workSpaceSlice.data?.product, shallowEqual);
	const workSpaceFrontPage = useSelector((state) => state.workSpaceSlice.data?.frontPage, shallowEqual);
	const workSpaceFormatPage = useSelector((state) => state.workSpaceSlice.data?.format, shallowEqual);
	const workSpaceSizePage = useSelector((state) => state.workSpaceSlice.data?.sizePhotoBook, shallowEqual);
	const statusViewPage = useSelector((state) => state.workSpaceSlice?.statusViewPage, shallowEqual);
	const isAvailableProduct = useSelector((state) => state.workSpaceSlice?.data?.product, shallowEqual);

	// const [ currentIndexHistory, setCurrentIndexHistory ] = useState(0);

	const isFrontLayout = currentPageId === "frontpage";
	const isInPreview = statusViewPage === "preview";

	const isAvailableUndo = false;
	const isAvailableRedo = false;

	// const handleUndo = () => {
	// 	if (historyChanges[currentIndexHistory - 1]) {
	// 		dispatch(workSpaceSlice.actions.updatePageContent({currentConfigPhotoBook : historyChanges[currentIndexHistory - 1]}));
	// 		setCurrentIndexHistory(currentIndexHistory - 1);
	// 	}
	// };
	// const handleRedo = () => {
	// 	if (historyChanges[currentIndexHistory + 1]) {
	// 		dispatch(workSpaceSlice.actions.updatePageContent({currentConfigPhotoBook : historyChanges[currentIndexHistory + 1]}));
	// 		setCurrentIndexHistory(currentIndexHistory + 1);
	// 	}
	// };

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
		// setCurrentConfigPhotoBook({
		// 	pageId : undefined,
		// 	sheet1 : {
		// 		modlayoutId : undefined,
		// 		texts       : undefined,
		// 		photos      : undefined,
		// 	},
		// 	sheet2 : {
		// 		modlayoutId : undefined,
		// 		texts       : undefined,
		// 		photos      : undefined,
		// 	},
		// });
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
					{
						!isInPreview && (
							<div className="undo-redo-container">
								<div
									className={`action-styled ${!isAvailableUndo && "disabled"}`}
									{...(
										isAvailableUndo && {
											onClick : () => undefined,
										}
									)}
								>
									<RedoArrow style={{transform : "scaleX(-1)"}} size="13px" />
									<div className="labelUndoRedo">
										<div>Deshacer</div>
									</div>
								</div>
								<div
									className={`action-styled ${!isAvailableRedo && "disabled"}`}
									{...(
										isAvailableRedo && {
											onClick : () => undefined,
										}
									)}
								>
									<RedoArrow size="13px" />
									<div className="labelUndoRedo">
										<div>Rehacer</div>
									</div>
								</div>
							</div>
						)
					}
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
