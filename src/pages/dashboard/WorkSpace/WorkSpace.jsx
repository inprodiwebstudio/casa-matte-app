import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useState, useEffect }                    from "react";
import { useParams }                              from "react-router-dom";
//Helpers
import { isValidArray, convertToArray } from "helpers";

//Own components
import BookPages          from "components/BookPages";
import { RedoArrow }      from "Resources/icons";
import LoginCard          from "../LoginCard";
import { workSpaceSlice } from "store/Slices";
import "./WorkSpace.scss";

const WorkSpace = () => {
	const { pageId } = useParams();

	const dispatch = useDispatch();

	const [ myWorkSpaceData, setMyWorkSpaceData ] = useState({});

	const workSpaceData = useSelector((state) => state.workSpaceSlice.data?.pages, shallowEqual);
	const workSpaceFrontPage = useSelector((state) => state.workSpaceSlice.data?.frontPage, shallowEqual);
	const workSpaceFormatPage = useSelector((state) => state.workSpaceSlice.data?.format, shallowEqual);
	const workSpaceSizePage = useSelector((state) => state.workSpaceSlice.data?.sizePhotoBook, shallowEqual);
	const workSpaceHistory = useSelector((state) => state.workSpaceSlice.history, shallowEqual);
	const isLoggin = useSelector((state) => state.authSlice.loggedIn, shallowEqual);
	const isLoading = useSelector((state) => state.workSpaceSlice?.loading, shallowEqual);
	const isPreview = useSelector((state) => state.workSpaceSlice?.isPreview, shallowEqual);
	const isAvailableProduct = useSelector((state) => state.workSpaceSlice?.data?.product, shallowEqual);

	const isFrontLayout = pageId === "frontpage";

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

	const SapceViewHandler = () => {
		if (!isLoggin) {
			return (
				<div className="WorkSpace">
					<div className="canva-space">
						<div className="ghost-canva">
							<LoginCard />
						</div>
					</div>
				</div>
			);
		}
		if (isPreview && isLoggin && !isLoading && (isAvailableProduct !== "") ) {
			return (
				<div
					className="PreviewPages"
				>
					{
						convertToArray({"FrontLayout" : {...workSpaceFrontPage}, ...workSpaceData}).map((page, index) => (
							<div className="photoBookContainer" key={index}>
								<div className={`pagesPreviewPhotoBook ${workSpaceFormatPage}-${workSpaceSizePage}-preview`}>
									<BookPages
										isInWorkSpcae={true}
										loading={isLoading}
										pageData={page}
									/>
								</div>
							</div>
						))
					}
				</div>
			);
		}
		if (myWorkSpaceData && isLoggin && !isLoading && (isAvailableProduct !== "")) {
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
						<div className={`ghost-canva ${workSpaceFormatPage}-${workSpaceSizePage}-workSpace`}>
							<BookPages
								isInWorkSpcae={true}
								loading={isLoading}
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
			setMyWorkSpaceData(workSpaceData[pageId]);
		}
		if (isFrontLayout) {
			setMyWorkSpaceData(workSpaceFrontPage);
		}
	}, [pageId, workSpaceData, workSpaceFrontPage]);

	useEffect(() => {
		if (pageId) {
			dispatch(workSpaceSlice.actions.handleChangePage(pageId));
		}
	}, [pageId]);

	document.onkeydown = undoAndRedoActions;

	return (
		<SapceViewHandler />
	);
};

export default WorkSpace;
