import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useState, useEffect }                    from "react";
//Helpers
import { isValidArray, convertToArray } from "helpers";

//Own components
import BookPages          from "components/BookPages";
import { RedoArrow }      from "Resources/icons";
import { workSpaceSlice } from "store/Slices";
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
	const workSpaceHistory = useSelector((state) => state.workSpaceSlice.history, shallowEqual);
	const isPreview = useSelector((state) => state.workSpaceSlice?.isPreview, shallowEqual);
	const isAvailableProduct = useSelector((state) => state.workSpaceSlice?.data?.product, shallowEqual);

	const isFrontLayout = currentPageId === "frontpage";

	const isAvailableUndo = isValidArray(workSpaceHistory.undo);
	const isAvailableRedo = isValidArray(workSpaceHistory.redo);

	function undoAndRedoActions(e) {
		const evtobj = window.event? event : e;
		if ((evtobj.keyCode === 90) && (evtobj.ctrlKey) && isAvailableUndo) {
			dispatch(workSpaceSlice.actions.undo({}));
		}
		if ((evtobj.keyCode === 89) && (evtobj.ctrlKey) && isAvailableRedo) {
			dispatch(workSpaceSlice.actions.redo({}));
		}
	}

	const handlerTypeProductFormat = () => {
		if (productPhotoBook === "travelcoffeetable ") {
			return "travel-coffee-table";
		}
		if ((productPhotoBook === "layflat") && (workSpaceFormatPage === "horizontal") && (workSpaceSizePage === "mediano")) {
			return `${workSpaceFormatPage}-${workSpaceSizePage}-layflat`;
		}
		return `${workSpaceFormatPage}-${workSpaceSizePage}`;
	};

	const SapceViewHandler = () => {
		if (isPreview && (isAvailableProduct !== "") ) {
			return (
				<div
					className="PreviewPages"
				>
					{
						convertToArray({...workSpaceData}).map((page, index) => (
							<div className="photoBookContainer" key={index}>
								<div className={`pagesPreviewPhotoBook ${handlerTypeProductFormat()}-preview`}>
									<BookPages
										isInWorkSpcae={true}
										loading={false}
										pageData={page}
									/>
								</div>
							</div>
						))
					}
				</div>
			);
		}
		if (myWorkSpaceData && (isAvailableProduct !== "")) {
			return (
				<div className="WorkSpace">
					<div className="canva-space">
						<div className="undo-redo-container">
							<div
								className={`action-styled ${!isAvailableUndo && "disabled"}`}
								{...(
									isAvailableUndo && {
										onClick : () => dispatch(workSpaceSlice.actions.undo()),
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
										onClick : () => dispatch(workSpaceSlice.actions.redo()),
									}
								)}
							>
								<RedoArrow size="13px" />
								<div className="labelUndoRedo">
									<div>Rehacer</div>
								</div>
							</div>
						</div>
						<div
							className={`ghost-canva ${handlerTypeProductFormat()}-workSpace ${(!myWorkSpaceData?.sheet2 && (myWorkSpaceData?.id !== "FrontLayout")) && "onePage"}`}
						>
							<BookPages
								isInWorkSpcae={true}
								loading={false}
								pageData={myWorkSpaceData}
							/>
						</div>
					</div>
				</div>
			);
		}
	};

	useEffect(() => {
		if (!isFrontLayout) {
			setMyWorkSpaceData(workSpaceData[currentPageId]);
			dispatch(workSpaceSlice.actions.setCurrentPageData(workSpaceData[currentPageId]));
		}
		if (isFrontLayout) {
			setMyWorkSpaceData(workSpaceFrontPage);
		}
	}, [currentPageId, workSpaceData, workSpaceFrontPage]);

	document.onkeydown = undoAndRedoActions;

	return (
		<>
			{
				myWorkSpaceData && <SapceViewHandler />
			}
		</>
	);
};

export default WorkSpace;
