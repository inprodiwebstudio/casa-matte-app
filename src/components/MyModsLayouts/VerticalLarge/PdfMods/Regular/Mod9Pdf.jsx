import React from "react";

//Own components
import { resizerImage } from "helpers";
// eslint-disable-next-line import/extensions
import { selectPhotoUrl } from "components/LayoutHandler/ImgLayout/imgLayout.helpers";
import Html               from "react-pdf-html";
import ReactDOMServer     from "react-dom/server";


const Mod9Pdf = ({images}) => {
	const bodyHtml = (
		<div
			style={{
				height        : "991px",
				width         : "850px",
				paddingTop    : "271px",
				paddingBottom : "271px",
				paddingLeft   : "175px",
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
							src={resizerImage(selectPhotoUrl(images[0]), 675, 449)}
							alt="test"
							style={{
								height    : "991px",
								objectFit : "cover",
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

export default Mod9Pdf;
