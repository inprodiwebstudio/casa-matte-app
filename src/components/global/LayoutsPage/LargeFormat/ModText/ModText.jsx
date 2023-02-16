//Own components
import TextLineSkeleton from "../../TextLineSkeleton";
import TextPlace        from "../../TextPlace";
import { connect }      from "react-redux";
// import { useParams }    from "react-router";

import { bindAll } from "helpers";
// import { TextArea }       from "core/components";
import { workSpaceSlice } from "store/Slices";

import "./ModText.scss";

const ModText = ({isInWorkSpcae, sheetNo, dataPages, workSpaceSlice}) => {
	// const { pageId } = useParams();

	return (
		<div className="body-mod-text">
			<div className="content-body">
				{
					isInWorkSpcae ? (
						<TextPlace />
					) : (
						<TextLineSkeleton />
					)
				}
			</div>
		</div>
	);
};

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

const mapStateToProps = ({ workSpaceSlice }) => ({
	dataPages : workSpaceSlice?.data?.pages ?? null,
});

export default connect(mapStateToProps, mapDispatchToProps) (ModText);
