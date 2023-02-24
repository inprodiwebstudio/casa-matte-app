import { connect }             from "react-redux";
import { useState, useEffect } from "react";
import { useParams }           from "react-router-dom";
//Helpers

//Own components
import { RedoArrow }             from "Resources/icons";
import { bindAll, isValidArray } from "helpers";
import { workSpaceSlice }        from "store/Slices";
import FormatPage                from "components/FormatPage";
import "./WorkSpace.scss";

const WorkSpace = ({ workSpaceData, workSpaceSlice, workSpaceHistory }) => {
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

	useEffect(() => {
		if (!isFrontLayout) {
			setMyWorkSpaceData(workSpaceData[pageId]);
		}
		if (isFrontLayout) {
			setMyWorkSpaceData({...defaultViewData});
		}
	}, [pageId, workSpaceData]);

	const isAvailableUndo = isValidArray(workSpaceHistory.undo);
	const isAvailableRedo = isValidArray(workSpaceHistory.redo);

	return (
		<div className="WorkSpace">
			<div className="canva-space">
				<div className="undo-redo-container">
					<div
						className={`action-styled ${!isAvailableUndo && "disabled"}`}
						{...(
							isAvailableUndo && {
								onClick : () => workSpaceSlice.undo(),
							}
						)}
					>
						<RedoArrow style={{transform : "scaleX(-1)"}} size="21px" />
						<div>Deshacer</div>
					</div>
					<div
						className={`action-styled ${!isAvailableRedo && "disabled"}`}
						{...(
							isAvailableRedo && {
								onClick : () => workSpaceSlice.redo(),
							}
						)}
					>
						<RedoArrow size="20px" />
						<div>Rehacer</div>
					</div>
				</div>
				<div className="ghost-canva">
					{
						workSpaceData && (
							<FormatPage
								typeFormat="LargeFormat"
								pageData={myWorkSpaceData}
								isInWorkSpcae
							/>
						)
					}
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

const mapStateToProps = ({ workSpaceSlice }) => ({
	workSpaceData    : workSpaceSlice?.data?.pages ?? {},
	workSpaceHistory : workSpaceSlice?.history ?? {},
});

export default connect(mapStateToProps, mapDispatchToProps) (WorkSpace);
