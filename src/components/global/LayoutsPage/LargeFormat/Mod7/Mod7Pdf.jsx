import React from "react";

//Own components
import { resizerImage }   from "helpers";
import { selectPhotoUrl } from "../../ModsConstants";
import Html               from "react-pdf-html";
import ReactDOMServer     from "react-dom/server";


const Mod7Pdf = ({images}) => {
	const bodyHtml = (
		<div
			style={{
				height        : "991px",
				width         : "850px",
				paddingTop    : "271px",
				paddingBottom : "271px",
				paddingRight  : "175px",
			}}
		>
			<div
				style={{
					height     : "100%",
					width      : "100%",
					overflow   : "hidden",
					background : "white",
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

export default Mod7Pdf;
