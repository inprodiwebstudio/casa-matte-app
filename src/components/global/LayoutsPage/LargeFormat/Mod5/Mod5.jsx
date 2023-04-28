import { bindAll }        from "helpers";
import { connect }        from "react-redux";
import { workSpaceSlice } from "store/Slices";
import { useParams }      from "react-router-dom";

import "./Mod5.scss";
import ActionImagesLayout                      from "components/global/ActionImagesLayout";
import { handlerResizerImage, selectPhotoUrl } from "../../ModsConstants";

const Mod5 = ({images, sheetNo, workSpaceSlice, dragerImage, isInWorkSpcae}) => {
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
		<div className="body-mod5-layout">
			<div
				className="content-body"
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
						<ActionImagesLayout sheetNo={sheetNo} layoutNo={0} pageId={pageId} image={selectPhotoUrl(images[0])} />
					)
				}
			</div>
		</div>
	);
};

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

const mapStateToProps = ({ workSpaceSlice }) => ({
	dragerImage : workSpaceSlice?.currentPhotoDragger ?? null,
});

export default connect(mapStateToProps, mapDispatchToProps) (Mod5);
