/* eslint-disable import/no-extraneous-dependencies */
//Helpers
import { handlerResizerImage } from "../ImgLayout/imgLayout.helpers";
//Styles
import "./ImgLayoutPreview.scss";

const ImgLayoutPreview = ({
	imageData,
	isUnderImage,
	isCoverImage,
}) => {
	return (
		<div
			className={
                `ImgLayoutPreview ${isUnderImage ? "isUnderImage" : ""} ${isCoverImage && "relevantColor"}`
			}
			{
				...((imageData?.url && (imageData?.url !== "")) &&  {
					style : {
						backgroundImage    : "url(\"" + handlerResizerImage(imageData, false) + "\")",
						backgroundSize     : "cover",
						backgroundPosition : "center",
						backgroundRepeat   : "no-repeat",
					},
				} )
			}
		>
			&nbsp;
		</div>
	);
};

export default ImgLayoutPreview;
