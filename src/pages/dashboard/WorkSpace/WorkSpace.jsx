import { connect }             from "react-redux";
import { useState, useEffect } from "react";
import { useParams }           from "react-router-dom";
//Helpers

//Own components
import BookPages                 from "components/BookPages";
import { RedoArrow }             from "Resources/icons";
import LoginCard                 from "../LoginCard";
import { bindAll, isValidArray } from "helpers";
import { workSpaceSlice }        from "store/Slices";
import "./WorkSpace.scss";

const WorkSpace = ({
	isLoggin,
	isLoading,
	workSpaceData,
	sizePhotoBook,
	workSpaceSlice,
	workSpaceHistory,
}) => {
	document.onkeydown = undoAndRedoActions;

	const { pageId } = useParams();

	const isFrontLayout = pageId === "frontpage";

	const defaultViewData = {
		id     : "FrontLayout",
		sheet1 : {
			layoutType : "FrontLayout",
			text       : "",
			photos     : {
				1 : "",
			},
		},
	};

	const [ myWorkSpaceData, setMyWorkSpaceData ] = useState({});

	const isAvailableUndo = isValidArray(workSpaceHistory.undo);
	const isAvailableRedo = isValidArray(workSpaceHistory.redo);

	function undoAndRedoActions(e) {
		const evtobj = window.event? event : e;
		if ((evtobj.keyCode === 90) && (evtobj.ctrlKey) && isAvailableUndo) {
			workSpaceSlice.undo();
		}
		if ((evtobj.keyCode === 89) && (evtobj.ctrlKey) && isAvailableRedo) {
			workSpaceSlice.redo();
		}
	}

	useEffect(() => {
		if (!isFrontLayout) {
			setMyWorkSpaceData(workSpaceData[pageId]);
		}
		if (isFrontLayout) {
			setMyWorkSpaceData(defaultViewData);
		}
	}, [pageId, workSpaceData]);


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
										onClick : () => workSpaceSlice.undo(),
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
										onClick : () => workSpaceSlice.redo(),
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

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

const mapStateToProps = ({ workSpaceSlice, authSlice }) => ({
	workSpaceData    : workSpaceSlice?.data?.pages ?? {},
	sizePhotoBook    : workSpaceSlice?.data?.sizePhotoBook ?? "LargeFormat",
	workSpaceHistory : workSpaceSlice?.history ?? {},
	isLoggin         : authSlice?.loggedIn ?? false,
	isLoading        : workSpaceSlice?.loading ?? true,
});

export default connect(mapStateToProps, mapDispatchToProps) (WorkSpace);
