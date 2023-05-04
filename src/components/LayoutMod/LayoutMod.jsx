import { bindAll }        from "helpers";
import { connect }        from "react-redux";
import { workSpaceSlice } from "store/Slices";
import { useParams }      from "react-router-dom";

import "./Mod13.scss";
//Constants
import photoBooksConfing                       from "core/constants/photoBooksConfing";
import ActionImagesLayout                      from "./ActionImagesLayout";
import { handlerResizerImage, selectPhotoUrl } from "./layoutMod.helpers";

const LayoutMod = ({images, modLayout, sheetNo, workSpaceSlice, dragerImage, isInWorkSpcae, photoBookData}) => {
	const { pageId } = useParams();

	const photosQuantity = photoBooksConfing[photoBookData?.product][photoBookData?.format]?.layoutMods[modLayout]?.numberPhotos ?? 0;

	const arrayPhotos = new Array(photosQuantity).fill(" ");

	const handleDrop = (e, layoutNo) => {
		e.preventDefault();
		workSpaceSlice.addPhoto({
			pageId   : pageId,
			sheetNo  : sheetNo,
			layoutNo : layoutNo,
			image    : dragerImage,
		});
	};

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	return (
		<div className="body-mod13-layout">
			<div className="content-body">
				{
					arrayPhotos.map((boxContent, index) => (
						<div
							key={index}
							className="content-children-body"
							onDrop={(e) => handleDrop(e, index)}
							onDragOver={(e) => handleDragOver(e)}
							{
								...( images && {
									style : {
										backgroundImage    : `url(${handlerResizerImage(images, index, isInWorkSpcae)})`,
										backgroundSize     : "cover",
										backgroundRepeat   : "no-repeat",
										backgroundPosition : "center",
									},
								} )
							}
						>
							{
								(images && images[index].url && isInWorkSpcae) && (
									<ActionImagesLayout sheetNo={sheetNo} layoutNo={0} pageId={pageId} image={selectPhotoUrl(images[index])} />
								)
							}
						</div>
					))
				}
			</div>
		</div>
	);
};

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

const mapStateToProps = ({ workSpaceSlice }) => ({
	dragerImage   : workSpaceSlice?.currentPhotoDragger ?? null,
	photoBookData : workSpaceSlice?.data ?? null,
});

export default connect(mapStateToProps, mapDispatchToProps) (LayoutMod);
