/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from "prop-types";
//Redux
import { useSelector, shallowEqual, useDispatch } from "react-redux";
//Slices
import { workSpaceSlice } from "store/Slices";
//Helpers
import { handlerResizerImage, selectPhotoUrl } from "./imgLayout.helpers";
//OwnComponents
import ActionImagesLayout from "./ActionImagesLayout";
//reactRouter
import { useParams } from "react-router-dom";


const ImgLayout = ({
	sheetNo,
	imageNo,
	urlImage,
	isInWorkSpace,
}) => {
	const { pageId } = useParams();

	const dispatch = useDispatch();

	const dragerImage = useSelector((state) => state.workSpaceSlice.currentPhotoDragger, shallowEqual);

	const handleDrop = (e) => {
		e.preventDefault();
		dispatch(workSpaceSlice.actions.addPhoto({
			pageId   : pageId,
			sheetNo  : sheetNo,
			layoutNo : imageNo,
			image    : dragerImage,
		}));
	};

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	return (
		<div
			onDrop={(e) => handleDrop(e)}
			onDragOver={(e) => handleDragOver(e)}
			className="ImgLayout"
			id={`${pageId}-${sheetNo}-${imageNo}`}
			{
				...( (urlImage && (urlImage !== "")) &&  {
					style : {
						backgroundImage    : `url(${handlerResizerImage(urlImage, isInWorkSpace)})`,
						backgroundSize     : "cover",
						backgroundPosition : "center",
						backgroundRepeat   : "no-repeat",
					},
				} )
			}
		>
			{
				(urlImage && (urlImage !== "") && isInWorkSpace) && (
					<ActionImagesLayout
						containerPhotoUuid={`${pageId}-${sheetNo}-${imageNo}`}
						sheetNo={sheetNo}
						layoutNo={imageNo}
						pageId={pageId}
						image={selectPhotoUrl(urlImage)}
					/>
				)
			}
		</div>
	);
};

ImgLayout.propTypes = {
	imageNo       : PropTypes.number.isRequired,
	sheetNo       : PropTypes.number.isRequired,
	isInWorkSpace : PropTypes.bool,
	urlImage      : PropTypes.string,
};

export default ImgLayout;
