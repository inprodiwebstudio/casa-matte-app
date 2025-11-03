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
import { MoonLoader }     from "react-spinners";

//Styles
import "./ImgLayout.scss";
import { cleanNotifications, showNotification } from "@mantine/notifications";

const ImgLayoutOld = ({
	sheetNo,
	imageNo,
	urlImage,
	isCoverImage,
	isInWorkSpace,
}) => {
	const [ loadingPhoto, setLoadingphoto ] = useState(false);

	const [ myImageUrl, setMyImageUrl ] = useState("");

	const currentPageId = useSelector((state) => state.workSpaceSlice.data?.currentPage, shallowEqual);

	const dispatch = useDispatch();

	const dragerImage = useSelector((state) => state.workSpaceSlice.currentPhotoDragger, shallowEqual);

	const [ isLowQuality, setIsLowQuality ] = useState(false);

	const handleDrop = (e) => {
		e.preventDefault();
		dispatch(workSpaceSlice.actions.addPhoto({
			pageId   : currentPageId,
			sheetNo  : sheetNo,
			layoutNo : imageNo,
			image    : dragerImage,
		}));
	};

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	const handleImageLoad = () => {
		setLoadingphoto(false);
	};
	const loadImage = () => {
		const img = new Image();
		img.src = handlerResizerImage(urlImage, isInWorkSpace);
		img.addEventListener("load", handleImageLoad);
		setMyImageUrl(img.src);
	};

	const handlerQuality = () => {
		const megapixels = urlImage.pixels / 1_000_000;

		if (urlImage && (megapixels < 8)) {
			cleanNotifications();
			showNotification({
				title     : "Alerta baja calidad",
				message   : `La imagen en el recuadro señalado presenta una baja calidad. De ${megapixels} pixeles. Recomendamos que la resolución de la imagen sea de 8 Mega Pixeles o superior.`,
				color     : "yellow",
				autoClose : 10000,
				styles    : () => ({
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
		if (urlImage?.url) {
			setLoadingphoto(true);
			loadImage();
		}
	}, [urlImage]);

	return (
		<div
			onDrop={(e) => handleDrop(e)}
			onDragOver={(e) => handleDragOver(e)}
			className={`ImgLayout ${isLowQuality ? "low-quality" : ""} ${isCoverImage && "relevantColor"}`}
			id={`${currentPageId}-${sheetNo}-${imageNo}`}
			{
				...( ((myImageUrl && (myImageUrl !== "")) || !loadingPhoto) &&  {
					style : {
						backgroundImage    : "url(\"" + myImageUrl + "\")",
						backgroundSize     : "cover",
						backgroundPosition : "center",
						backgroundRepeat   : "no-repeat",
					},
				} )
			}
		>
			{
				loadingPhoto && (
					<div className="loading">
						<MoonLoader size={isInWorkSpace ? 50 : 5} />
					</div>
				)
			}
			{
				(myImageUrl && (myImageUrl !== "") && isInWorkSpace) && (
					<>
						<ActionImagesLayout
							containerPhotoUuid={`${currentPageId}-${sheetNo}-${imageNo}`}
							sheetNo={sheetNo}
							layoutNo={imageNo}
							pageId={currentPageId}
							image={selectPhotoUrl(urlImage)}
						/>
					</>
				)
			}
		</div>
	);
};

ImgLayoutOld.propTypes = {
	imageNo       : PropTypes.number.isRequired,
	sheetNo       : PropTypes.number,
	isInWorkSpace : PropTypes.bool,
	urlImage      : PropTypes.object,
};

export default ImgLayoutOld;
