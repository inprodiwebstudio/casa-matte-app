import { bindAll }        from "helpers";
import { connect }        from "react-redux";
import { workSpaceSlice } from "store/Slices";
import { useParams }      from "react-router-dom";


//Own components
import { handlerResizerImage } from "../../ModsConstants";
import ActionImagesLayout      from "components/global/ActionImagesLayout";
import "./Mod2.scss";

const Mod2 = ({images, isInWorkSpcae, sheetNo, workSpaceSlice, dragerImage}) => {
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
		<div className="body-mod2-layout">
			<div
				className="content-body"
				onDrop={(e) => handleDrop(e, 0)}
				onDragOver={(e) => handleDragOver(e)}
				{
					...( images && {
						style : {
							backgroundImage    : `url(${handlerResizerImage(images, 0, isInWorkSpcae)})`,
							backgroundSize     : "cover",
							backgroundPosition : "center",
							backgroundRepeat   : "no-repeat",
						},
					} )
				}
			>
				{
					(images && images[0] && isInWorkSpcae) && (
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

export default connect(mapStateToProps, mapDispatchToProps) (Mod2);
