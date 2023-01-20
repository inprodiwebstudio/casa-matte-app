import { bindAll }        from "helpers";
import { connect }        from "react-redux";
import { workSpaceSlice } from "store/Slices";
import { useParams }      from "react-router-dom";

import "./Mod4.scss";

const Mod4 = ({images, sheetNo, workSpaceSlice, dragerImage}) => {
	const { pageId } = useParams();

	const handleDrop = (e, layoutNo) => {
		e.preventDefault();
		workSpaceSlice.addPhoto({
			sheetNo  : sheetNo,
			layoutNo : layoutNo,
			image    : dragerImage,
			pageId   : pageId,
		});
	};

	const handleDragOver = (e) => {
		e.preventDefault();
	};
	return (
		<div
			className="body-mod4-layout"
			onDrop={(e) => handleDrop(e, 1)}
			onDragOver={(e) => handleDragOver(e)}
			{
				...( images && {
					style : {
						backgroundImage    : `url(${images[0]})`,
						backgroundSize     : "cover",
						backgroundRepeat   : "no-repeat",
						backgroundPosition : "center",
					},
				} )
			}
		/>
	);
};

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

const mapStateToProps = ({ workSpaceSlice }) => ({
	dragerImage : workSpaceSlice?.currentPhotoDragger ?? null,
});

export default connect(mapStateToProps, mapDispatchToProps) (Mod4);
