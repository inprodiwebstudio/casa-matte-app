import { connect }             from "react-redux";
import { useState, useEffect } from "react";
import { useParams }           from "react-router-dom";

//Own components
import FormatPage from "components/FormatPage";
import "./WorkSpace.scss";

const WorkSpace = ({ workSpaceData, firstPage, lastPage }) => {
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
		if (pageId === "page1") {
			setMyWorkSpaceData({...firstPage});
		}
		if (pageId === "lastPage") {
			setMyWorkSpaceData({...lastPage});
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
	firstPage     : workSpaceSlice?.data?.firtsPage ?? {},
	lastPage      : workSpaceSlice?.data?.lastPage ?? {},
});

export default connect(mapStateToProps) (WorkSpace);
