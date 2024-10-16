import React from "react";

//Own components
// import { selectPhotoUrl } from "components/LayoutHandler/ImgLayout/imgLayout.helpers";
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";
import { imgUrlPdf }  from "helpers";
// eslint-disable-next-line import/extensions
// import { selectPhotoUrl } from "components/LayoutHandler/ImgLayout/imgLayout.helpers";

const Mod1Pdf = ({images}) => {

	const bodyHtml = (
		<div
			style={{
				height : "991px",
				width  : "100%",
			}}
		>
			<div
				style={{
					height     : "100%",
					width      : "100%",
					overflow   : "hidden",
					background : "#E3E3E3",
				}}
			>
				{
					images[0]?.url && (
						<img
							src={imgUrlPdf(images[0]?.url)}
							alt={images[0]?.url}
							style={{
								objectFit : "cover",
								height    : "991px",
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
