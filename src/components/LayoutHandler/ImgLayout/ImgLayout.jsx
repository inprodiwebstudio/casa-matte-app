/* eslint-disable import/no-extraneous-dependencies */
import { useContext } from "react";
import PropTypes      from "prop-types";
//Redux
import { useSelector, shallowEqual } from "react-redux";
//Contexts
import { currentConfigPhotoBookContext } from "contexts/configContext";
//Helpers
import { handlerResizerImage, selectPhotoUrl } from "./imgLayout.helpers";
//OwnComponents
import ActionImagesLayout from "./ActionImagesLayout";
//Styles
import "./ImgLayout.scss";
import { changeResolutionImgUrl } from "helpers/Functions/changeResolutionImgUrl";
// import { cleanNotifications, showNotification } from "@mantine/notifications";

const ImgLayout = ({
	imageNo,
	sheetNo,
	isUnderImage,
	isCoverImage,
}) => {
	const {setCurrentConfigPhotoBook, currentConfigPhotoBook} = useContext(currentConfigPhotoBookContext);

	const sheetData = currentConfigPhotoBook[`sheet${sheetNo}`];
	const imageData = sheetData?.photos?.[imageNo];

	const currentPageId = useSelector((state) => state.workSpaceSlice.data?.currentPage, shallowEqual);
	const statusViewPage = useSelector((state) => state.workSpaceSlice.statusViewPage, shallowEqual);

	const dragerImage = useSelector((state) => state.workSpaceSlice.currentPhotoDragger, shallowEqual);

	const isInPreView = statusViewPage === "preview";

	// const [ isLowQuality, setIsLowQuality ] = useState(false);

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


	// const handlerQuality = () => {
	// 	const megapixels = imageData?.pixels / 1_000_000;

	// 	if (imageData && (megapixels < 8)) {
	// 		cleanNotifications();
	// 		showNotification({
	// 			title     : "Alerta baja calidad",
	// 			message   : `La imagen en el recuadro señalado presenta una baja calidad. De ${megapixels} pixeles. Recomendamos que la resolución de la imagen sea de 8 Mega Pixeles o superior.`,
	// 			color     : "yellow",
	// 			autoClose : 10000,
	// 			styles    : () => ({
	// 				root : {
	// 								  "&::before" : {
	// 									  borderRadius : "0px",
	// 									  width        : "3px",
	// 								  },
	// 								  borderRadius : "0px",
	// 				},

	// 				title       : { fontFamily : "Helvetica", fontWeight : "500", textTransform : "uppercase" },
	// 				description : { fontFamily : "Helvetica" },
	// 			}),
	// 		});
	// 		setIsLowQuality(true);
	// 		return;
	// 	}
	// 	setIsLowQuality(false);
	// };

	// useEffect(() => {
	// 	handlerQuality();
	// }, []);

	return (
		<div
			onDrop={(e) => handleDrop(e)}
			onDragOver={(e) => handleDragOver(e)}
			className={
				`ImgLayout ${isUnderImage ? "isUnderImage" : ""} ${isCoverImage && "relevantColor"}`
			}
			id={`${currentPageId}-${sheetNo}-${imageNo}`}
			{
				...((imageData?.url && (imageData?.url !== "")) &&  {
					style : {
						backgroundImage    : !isInPreView ? "url(\"" + handlerResizerImage(imageData, true) + "\")" : "url(\"" + changeResolutionImgUrl(selectPhotoUrl(imageData), {width : 1920}) + "\")",
						backgroundSize     : "cover",
						backgroundPosition : "center",
						backgroundRepeat   : "no-repeat",
					},
				} )
			}
		>
			{
				(imageData?.url && !isInPreView) && (
					<ActionImagesLayout
						containerPhotoUuid={`${currentPageId}-${sheetNo}-${imageNo}`}
						sheetNo={sheetNo}
						layoutNo={imageNo}
						pageId={currentPageId}
						image={selectPhotoUrl(imageData)}
					/>
				)
			}
		</div>
	);
};

ImgLayout.propTypes = {
	imageNo   : PropTypes.number.isRequired,
	sheetNo   : PropTypes.number,
	imageData : PropTypes.object,
};

export default ImgLayout;
