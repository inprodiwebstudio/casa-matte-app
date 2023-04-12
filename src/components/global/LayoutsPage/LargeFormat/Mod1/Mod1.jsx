
import { connect }        from "react-redux";
import { workSpaceSlice } from "store/Slices";
import { useParams }      from "react-router-dom";

//Own components
import { bindAll }             from "helpers";
import { handlerResizerImage } from "../../ModsConstants";
import ActionImagesLayout      from "components/global/ActionImagesLayout";
import "./Mod1.scss";

const Mod1 = ({images, isInWorkSpcae, sheetNo, workSpaceSlice, dragerImage}) => {
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
			className="body-mod1-layout"
			onDrop={(e) => handleDrop(e, 0)}
			onDragOver={(e) => handleDragOver(e)}
			style={{
				overflow : "hidden",
			}}
		>
			<div
				{
					...( images && {
						style : {
							height             : "100%",
							backgroundImage    : `url(${handlerResizerImage(images, 0, isInWorkSpcae)})`,
							backgroundSize     : "cover",
							backgroundRepeat   : "no-repeat",
							backgroundPosition : "center",
							transform          : "scale(1.16)",
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
		</div>
	);
};

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

const mapStateToProps = ({ workSpaceSlice }) => ({
	dragerImage : workSpaceSlice?.currentPhotoDragger ?? null,
});

export default connect(mapStateToProps, mapDispatchToProps) (Mod1);
