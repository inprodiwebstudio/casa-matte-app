import { bindAll }        from "helpers";
import { connect }        from "react-redux";
import { workSpaceSlice } from "store/Slices";
import { useParams }      from "react-router-dom";

import "./Mod36.scss";
import ActionImagesLayout      from "components/global/ActionImagesLayout";
import { handlerResizerImage } from "../../ModsConstants";

const Mod36 = ({images, sheetNo, workSpaceSlice, dragerImage, isInWorkSpcae}) => {
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
		<div className="body-mod36SquareFormat-layout">
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
							<ActionImagesLayout sheetNo={sheetNo} layoutNo={0} pageId={pageId} image={images[0]} />
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
				<div
					className="content-children-body"
					onDrop={(e) => handleDrop(e, 2)}
					onDragOver={(e) => handleDragOver(e)}
					{
						...( images && {
							style : {
								backgroundImage    : `url(${handlerResizerImage(images, 2, isInWorkSpcae)})`,
								backgroundSize     : "cover",
								backgroundRepeat   : "no-repeat",
								backgroundPosition : "center",
							},
						} )
					}
				>
					{
						(images && images[2].url && isInWorkSpcae) && (
							<ActionImagesLayout sheetNo={sheetNo} layoutNo={2} pageId={pageId} image={images[2].url} />
						)
					}
				</div>
				<div
					className="content-children-body"
					onDrop={(e) => handleDrop(e, 3)}
					onDragOver={(e) => handleDragOver(e)}
					{
						...( images && {
							style : {
								backgroundImage    : `url(${handlerResizerImage(images, 3, isInWorkSpcae)})`,
								backgroundSize     : "cover",
								backgroundRepeat   : "no-repeat",
								backgroundPosition : "center",
							},
						} )
					}
				>
					{
						(images && images[3].url && isInWorkSpcae) && (
							<ActionImagesLayout sheetNo={sheetNo} layoutNo={3} pageId={pageId} image={images[3].url} />
						)
					}
				</div>
				<div
					className="content-children-body"
					onDrop={(e) => handleDrop(e, 4)}
					onDragOver={(e) => handleDragOver(e)}
					{
						...( images && {
							style : {
								backgroundImage    : `url(${handlerResizerImage(images, 4, isInWorkSpcae)})`,
								backgroundSize     : "cover",
								backgroundRepeat   : "no-repeat",
								backgroundPosition : "center",
							},
						} )
					}
				>
					{
						(images && images[4].url && isInWorkSpcae) && (
							<ActionImagesLayout sheetNo={sheetNo} layoutNo={4} pageId={pageId} image={images[4].url} />
						)
					}
				</div>
				<div
					className="content-children-body"
					onDrop={(e) => handleDrop(e, 5)}
					onDragOver={(e) => handleDragOver(e)}
					{
						...( images && {
							style : {
								backgroundImage    : `url(${handlerResizerImage(images, 5, isInWorkSpcae)})`,
								backgroundSize     : "cover",
								backgroundRepeat   : "no-repeat",
								backgroundPosition : "center",
							},
						} )
					}
				>
					{
						(images && images[5].url && isInWorkSpcae) && (
							<ActionImagesLayout sheetNo={sheetNo} layoutNo={5} pageId={pageId} image={images[5].url} />
						)
					}
				</div>
				<div
					className="content-children-body"
					onDrop={(e) => handleDrop(e, 6)}
					onDragOver={(e) => handleDragOver(e)}
					{
						...( images && {
							style : {
								backgroundImage    : `url(${handlerResizerImage(images, 6, isInWorkSpcae)})`,
								backgroundSize     : "cover",
								backgroundRepeat   : "no-repeat",
								backgroundPosition : "center",
							},
						} )
					}
				>
					{
						(images && images[6].url && isInWorkSpcae) && (
							<ActionImagesLayout sheetNo={sheetNo} layoutNo={6} pageId={pageId} image={images[6].url} />
						)
					}
				</div>
				<div
					className="content-children-body"
					onDrop={(e) => handleDrop(e, 7)}
					onDragOver={(e) => handleDragOver(e)}
					{
						...( images && {
							style : {
								backgroundImage    : `url(${handlerResizerImage(images, 7, isInWorkSpcae)})`,
								backgroundSize     : "cover",
								backgroundRepeat   : "no-repeat",
								backgroundPosition : "center",
							},
						} )
					}
				>
					{
						(images && images[7].url && isInWorkSpcae) && (
							<ActionImagesLayout sheetNo={sheetNo} layoutNo={7} pageId={pageId} image={images[7].url} />
						)
					}
				</div>
				<div
					className="content-children-body"
					onDrop={(e) => handleDrop(e, 8)}
					onDragOver={(e) => handleDragOver(e)}
					{
						...( images && {
							style : {
								backgroundImage    : `url(${handlerResizerImage(images, 8, isInWorkSpcae)})`,
								backgroundSize     : "cover",
								backgroundRepeat   : "no-repeat",
								backgroundPosition : "center",
							},
						} )
					}
				>
					{
						(images && images[8].url && isInWorkSpcae) && (
							<ActionImagesLayout sheetNo={sheetNo} layoutNo={8} pageId={pageId} image={images[8].url} />
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

export default connect(mapStateToProps, mapDispatchToProps) (Mod36);
