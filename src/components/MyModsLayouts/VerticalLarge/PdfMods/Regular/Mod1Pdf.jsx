import React from "react";

//Own components
import { resizerImage } from "helpers";
// import { selectPhotoUrl } from "components/LayoutHandler/ImgLayout/imgLayout.helpers";
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";
// eslint-disable-next-line import/extensions
import { selectPhotoUrl } from "components/LayoutHandler/ImgLayout/imgLayout.helpers";

const Mod1Pdf = ({images, isRightPage}) => {
	const bodyHtml = (
		<div
			style={{
				height   : "991px",
				width    : "850px",
				// marginLeft : "-100px",
				// marginLeft  : isRightPage ? "850px" : "0px",
				overflow : "hidden",
			}}
		>
			<div
				style={{
					height     : "991px",
					width      : "1700px",
					marginLeft : isRightPage ? "-850px" : "0px",
					// overflow   : "hidden",
					background : "#E3E3E3",
				}}
			>
				{
					images[0]?.url && (
						<img
							src={resizerImage(selectPhotoUrl(images[0]), 1700, 991)}
							alt="test"
							style={{
								height    : "991px",
								objectFit : "cover",
								// objectPosition : isRightPage ? "right" : "left",
							}}
						/>
					)
				}
			</div>
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod1Pdf;
