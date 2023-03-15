import { bindAll }        from "helpers";
import { connect }        from "react-redux";
import { workSpaceSlice } from "store/Slices";
import { useParams }      from "react-router-dom";

import "./Mod12.scss";
import ActionImagesLayout      from "components/global/ActionImagesLayout";
import { handlerResizerImage } from "../../ModsConstants";

const Mod12 = ({images, sheetNo, workSpaceSlice, dragerImage, isInWorkSpcae}) => {
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
		<div className="body-mod12SquareFormat-layout">
			<div className="content-body">
				<div
					className="content-children-body"
					onDrop={(e) => handleDrop(e, 0)}
					onDragOver={(e) => handleDragOver(e)}
					{
						...( images && {
							style : {
								backgroundImage    : `url(${handlerResizerImage(images, 0, isInWorkSpcae)})`,
								backgroundSize     : "cover",
								backgroundRepeat   : "no-repeat",
								backgroundPosition : "center",
							},
						} )
					}
				>
					{
						(images && images[0].url && isInWorkSpcae) && (
							<ActionImagesLayout sheetNo={sheetNo} layoutNo={0} pageId={pageId} image={images[0].url} />
						)
					}
				</div>
				<div
					className="content-children-body"
					onDrop={(e) => handleDrop(e, 1)}
					onDragOver={(e) => handleDragOver(e)}
					{
						...( images && {
							style : {
								backgroundImage    : `url(${handlerResizerImage(images, 1, isInWorkSpcae)})`,
								backgroundSize     : "cover",
								backgroundRepeat   : "no-repeat",
								backgroundPosition : "center",
							},
						} )
					}
				>
					{
						(images && images[1].url && isInWorkSpcae) && (
							<ActionImagesLayout sheetNo={sheetNo} layoutNo={1} pageId={pageId} image={images[1].url} />
						)
					}
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

const mapStateToProps = ({ workSpaceSlice }) => ({
	dragerImage : workSpaceSlice?.currentPhotoDragger ?? null,
});

export default connect(mapStateToProps, mapDispatchToProps) (Mod12);
