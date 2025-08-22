import React from "react";

//Own components
import { resizerImage }   from "helpers";
import { selectPhotoUrl } from "../../ModsConstants";
import Html               from "react-pdf-html";
import ReactDOMServer     from "react-dom/server";


const Mod10Pdf = ({images}) => {
	const bodyHtml = (
		<div
			style={{
				height        : "991px",
				width         : "850px",
				padding       : "122px",
				paddingTop    : "287px",
				paddingBottom : "287px",
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
							src={resizerImage(selectPhotoUrl(images[0]), 606, 417)}
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

export default Mod10Pdf;
