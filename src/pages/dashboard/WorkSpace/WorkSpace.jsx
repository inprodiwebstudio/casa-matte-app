import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useState, useEffect }                    from "react";
import { useParams }                              from "react-router-dom";
//Helpers
import { isValidArray } from "helpers";

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
	const workSpaceHistory = useSelector((state) => state.workSpaceSlice.history, shallowEqual);
	const isLoggin = useSelector((state) => state.authSlice.loggedIn, shallowEqual);
	const isLoading = useSelector((state) => state.workSpaceSlice?.loading, shallowEqual);

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

	useEffect(() => {
		if (!isFrontLayout) {
			setMyWorkSpaceData(workSpaceData[pageId]);
		}
		if (isFrontLayout) {
			setMyWorkSpaceData(workSpaceFrontPage);
		}
	}, [pageId, workSpaceData]);

	document.onkeydown = undoAndRedoActions;
	return (
		<div className="WorkSpace">
			<div className="canva-space">
				{
					(!isLoading && isLoggin) && (
						<div className="undo-redo-container">
							<div
								className={`action-styled ${!isAvailableUndo && "disabled"}`}
								{...(
									isAvailableUndo && {
										onClick : () => dispatch(workSpaceSlice.actions.undo()),
									}
								)}
							>
								<RedoArrow style={{transform : "scaleX(-1)"}} size="20px" />
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
								<RedoArrow size="21px" />
								<div className="labelUndoRedo">
									<div>Rehacer</div>
								</div>
							</div>
						</div>
					)
				}
				<div className="ghost-canva">
					{
						(myWorkSpaceData && isLoggin) ? (
							<BookPages
								isInWorkSpcae
								loading={isLoading}
								pageData={myWorkSpaceData}
							/>
						) : (
							!isLoggin ? (
								<LoginCard />
							) : (
								<div />
							)
						)
					}
				</div>
			</div>
		</div>
	);
};

export default WorkSpace;
