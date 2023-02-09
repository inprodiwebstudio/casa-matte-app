import { connect }             from "react-redux";
import { useState, useEffect } from "react";
import { useParams }           from "react-router-dom";

//Own components
import FormatPage from "components/FormatPage";
import "./WorkSpace.scss";

const WorkSpace = ({ workSpaceData }) => {
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

	const [ myWorkSpaceData, setMyWorkSpaceData ] = useState({
		...defaultViewData,
	});

	useEffect(() => {
		if (!isFrontLayout) {
			setMyWorkSpaceData(workSpaceData[pageId]);
		}
		if (isFrontLayout) {
			setMyWorkSpaceData({...defaultViewData});
		}
	}, [pageId, workSpaceData]);

	return (
		<div className="WorkSpace">
			<div className="canva-space">
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

const mapStateToProps = ({ workSpaceSlice }) => ({
	workSpaceData : workSpaceSlice?.data?.pages ?? {},
});

export default connect(mapStateToProps) (WorkSpace);
