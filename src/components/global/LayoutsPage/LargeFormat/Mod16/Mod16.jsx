import { bindAll }        from "helpers";
import { connect }        from "react-redux";
import { workSpaceSlice } from "store/Slices";
import { useParams }      from "react-router-dom";

import "./Mod16.scss";

const Mod16 = ({images, sheetNo, workSpaceSlice, dragerImage}) => {
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
		<div className="body-mod16-layout">
			<div className="content-body">
				<div
					className="content-children-body"
					onDrop={(e) => handleDrop(e, 0)}
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
				<div
					className="content-children-body"
					onDrop={(e) => handleDrop(e, 1)}
					onDragOver={(e) => handleDragOver(e)}
					{
						...( images && {
							style : {
								backgroundImage    : `url(${images[1]})`,
								backgroundSize     : "cover",
								backgroundRepeat   : "no-repeat",
								backgroundPosition : "center",
							},
						} )
					}
				/>
			</div>
		</div>
	);
};

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

const mapStateToProps = ({ workSpaceSlice }) => ({
	dragerImage : workSpaceSlice?.currentPhotoDragger ?? null,
});

export default connect(mapStateToProps, mapDispatchToProps) (Mod16);
