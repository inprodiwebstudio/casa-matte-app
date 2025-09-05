/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect, useContext } from "react";
import PropTypes                           from "prop-types";
//Redux
import { useSelector, shallowEqual } from "react-redux";
//Contexts
import { currentConfigPhotoBookContext } from "contexts/configContext";
import { pageIdContext }                 from "contexts/pageIdContext";
//Slices
//Helpers
import { handlerResizerImage, selectPhotoUrl } from "./imgLayout.helpers";
//OwnComponents
import ActionImagesLayout from "./ActionImagesLayout";
//Styles
import "./ImgLayout.scss";
import { cleanNotifications, showNotification } from "@mantine/notifications";

const ImgLayout = ({
	sheetNo,
	imageNo,
	urlImage,
	isUnderImage,
	isCoverImage,
	isInWorkSpace,
}) => {
	const {setCurrentConfigPhotoBook, currentConfigPhotoBook} = useContext(currentConfigPhotoBookContext);
	const {myCurrentPageId,  isInPaginatorBar} = useContext(pageIdContext);

	const currentPhotoData = currentConfigPhotoBook?.[`sheet${sheetNo}`]?.photos?.[imageNo] ?? undefined;

	const currentPageId = useSelector((state) => state.workSpaceSlice.data?.currentPage, shallowEqual);

	const dragerImage = useSelector((state) => state.workSpaceSlice.currentPhotoDragger, shallowEqual);

	const [ isLowQuality, setIsLowQuality ] = useState(false);

	const handlerPhotoData = () => {
		if ((isInPaginatorBar && (myCurrentPageId === currentPageId)) || isInWorkSpace) {
			return currentPhotoData;
		}
		return urlImage;
	};

	const handleDrop = (e) => {
		e.preventDefault();
		setCurrentConfigPhotoBook(prev => ({
			...prev,
			[`sheet${sheetNo}`] : {
				...prev[`sheet${sheetNo}`],
				photos : {
					...prev[`sheet${sheetNo}`]?.photos,
					[imageNo] : {
						id             : dragerImage?.id ?? undefined,
						url            : dragerImage?.image ?? undefined,
						pixels         : dragerImage?.pixels ?? undefined,
						urlPhotoEdited : undefined,
					},
				},
			},
		}));
	};

	const handleDragOver = (e) => {
		e.preventDefault();
	};


	const handlerQuality = () => {
		const megapixels = handlerPhotoData()?.pixels / 1_000_000;

		if (handlerPhotoData() && (megapixels < 8)) {
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
		if (handlerPhotoData() && isInWorkSpace) {
			handlerQuality();
		}
	}, [currentPhotoData]);

	return (
		<div
			onDrop={(e) => handleDrop(e)}
			onDragOver={(e) => handleDragOver(e)}
			className={
				`ImgLayout ${isUnderImage ? "isUnderImage" : ""} ${isLowQuality ? "low-quality" : ""} ${isCoverImage && "relevantColor"}`
			}
			id={`${currentPageId}-${sheetNo}-${imageNo}`}
			{
				...( ((handlerPhotoData()?.url && (handlerPhotoData()?.url !== ""))) &&  {
					style : {
						backgroundImage    : "url(\"" + handlerResizerImage(handlerPhotoData(), isInWorkSpace) + "\")",
						backgroundSize     : "cover",
						backgroundPosition : "center",
						backgroundRepeat   : "no-repeat",
					},
				} )
			}
		>
			{
				(handlerPhotoData()?.url && (handlerPhotoData()?.url !== "") && isInWorkSpace) && (
					<>
						<ActionImagesLayout
							containerPhotoUuid={`${currentPageId}-${sheetNo}-${imageNo}`}
							sheetNo={sheetNo}
							layoutNo={imageNo}
							pageId={currentPageId}
							image={selectPhotoUrl(handlerPhotoData())}
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
