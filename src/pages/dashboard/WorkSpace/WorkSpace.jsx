import { connect }   from "react-redux";
import { useParams } from "react-router-dom";

//Own components
import FormatPage from "components/FormatPage";
import "./WorkSpace.scss";

const WorkSpace = ({ workSpaceData }) => {
	const { pageId } = useParams();
	const myWorkSpaceData = workSpaceData[pageId];

	console.log(myWorkSpaceData);
	return (
		<div className="WorkSpace">
			<div className="canva-space">
				<div className="ghost-canva">
					{
						myWorkSpaceData && (
							<FormatPage
								typeFormat="LargeFormat"
								pageData={{
									...myWorkSpaceData,
								}}
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
