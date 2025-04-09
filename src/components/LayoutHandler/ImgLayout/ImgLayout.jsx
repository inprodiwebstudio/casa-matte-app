/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect } from "react";
import PropTypes               from "prop-types";
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
//Styles
import "./ImgLayout.scss";
import { cleanNotifications, showNotification } from "@mantine/notifications";

const ImgLayout = ({
	sheetNo,
	imageNo,
	urlImage,
	isInWorkSpace,
}) => {
	const { pageId } = useParams();

	const dispatch = useDispatch();

	const dragerImage = useSelector((state) => state.workSpaceSlice.currentPhotoDragger, shallowEqual);

	const [ isLowQuality, setIsLowQuality ] = useState(false);

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


	const handlerQuality = () => {
		const megapixels = urlImage.pixels / 1_000_000;

		if (urlImage && (megapixels < 8)) {
			cleanNotifications();
			showNotification({
				title   : "Alerta baja calidad",
				message : `La imagen en el recuadro señalado presenta una baja calidad. De ${megapixels} pixeles. Recomendamos que la resolución de la imagen sea de 8 Mega Pixeles o superior.`,
				color   : "yellow",
				styles  : () => ({
					root : {
									  "&::before" : {
										  borderRadius : "0px",
										  width        : "3px",
									  },
									  borderRadius : "0px",
					},

					title       : { fontFamily : "Helvetica", fontWeight : "500", textTransform : "uppercase" },
					description : { fontFamily : "Helvetica" },
				}),
			});
			setIsLowQuality(true);
			return;
		}
		setIsLowQuality(false);
	};

	useEffect(() => {
		if (urlImage && isInWorkSpace) {
			handlerQuality();
		}
	}, [urlImage]);

	return (
		<div
			onDrop={(e) => handleDrop(e)}
			onDragOver={(e) => handleDragOver(e)}
			className={`ImgLayout ${isLowQuality ? "low-quality" : ""}`}
			id={`${pageId}-${sheetNo}-${imageNo}`}
			{
				...( (urlImage?.url && (urlImage?.url !== "")) &&  {
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
				(urlImage?.url && (urlImage?.url !== "") && isInWorkSpace) && (
					<>
						<ActionImagesLayout
							containerPhotoUuid={`${pageId}-${sheetNo}-${imageNo}`}
							sheetNo={sheetNo}
							layoutNo={imageNo}
							pageId={pageId}
							image={selectPhotoUrl(urlImage)}
						/>
					</>
				)
			}
		</div>
	);
};

ImgLayout.propTypes = {
	imageNo       : PropTypes.number.isRequired,
	sheetNo       : PropTypes.number,
	isInWorkSpace : PropTypes.bool,
	urlImage      : PropTypes.object,
};

export default ImgLayout;
