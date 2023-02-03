import { bindAll, resizerImage } from "helpers";
import { connect }               from "react-redux";
import { workSpaceSlice }        from "store/Slices";
import { useParams }             from "react-router-dom";

import "./Mod10.scss";
import ActionImagesLayout from "components/global/ActionImagesLayout";

const Mod10 = ({images, sheetNo, workSpaceSlice, dragerImage}) => {
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
		<div className="body-mod10-layout">
			<div
				className="content-body"
				onDrop={(e) => handleDrop(e, 0)}
				onDragOver={(e) => handleDragOver(e)}
				{
					...( images && {
						style : {
							backgroundImage    : `url(${resizerImage(images[0], 900, 600)})`,
							backgroundSize     : "cover",
							backgroundRepeat   : "no-repeat",
							backgroundPosition : "center",
						},
					} )
				}
			>
				{
					(images && images[0]) && (
						<ActionImagesLayout image={images[0]} />
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

export default connect(mapStateToProps, mapDispatchToProps) (Mod10);
