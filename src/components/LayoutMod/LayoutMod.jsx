import { bindAll }        from "helpers";
import { connect }        from "react-redux";
import { workSpaceSlice } from "store/Slices";
import { useParams }      from "react-router-dom";

//Constants
import photoBooksConfing                       from "core/constants/photoBooksConfing";
import ActionImagesLayout                      from "./ActionImagesLayout";
import { handlerResizerImage, selectPhotoUrl } from "./layoutMod.helpers";
//Styles
import "./LayoutMods.scss";

const LayoutMod = ({
	images,
	sheetNo,
	modLayout,
	dragerImage,
	isInWorkSpcae,
	photoBookData,
	workSpaceSlice,
}) => {
	const { pageId } = useParams();

	const photobookProduct = photoBookData?.product ?? "white";

	const photobookFormat = photoBookData?.format ?? "vertical";

	const photosQuantity = photoBooksConfing[photobookProduct][photobookFormat]?.layoutMods[modLayout]?.numberPhotos ?? 0;

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

	const classNameStyle = `${modLayout}-${photobookFormat}`;

	return (
		<div className={classNameStyle}>
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
										backgroundImage    : `url(${handlerResizerImage(images[index], isInWorkSpcae)})`,
										backgroundSize     : "cover",
										backgroundRepeat   : "no-repeat",
										backgroundPosition : "center",
									},
								} )
							}
						>
							{
								(images && images[index].url && isInWorkSpcae) && (
									<ActionImagesLayout sheetNo={sheetNo} layoutNo={index} pageId={pageId} image={selectPhotoUrl(images[index])} />
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
