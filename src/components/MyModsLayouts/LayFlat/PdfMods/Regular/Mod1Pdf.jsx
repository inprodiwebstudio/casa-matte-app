import React from "react";

//Own components
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";
import { imgUrlPdf }  from "helpers";
// eslint-disable-next-line import/extensions

const Mod1Pdf = ({images}) => {
	const bodyHtml = (
		<div
			style={{
				height     : "100%",
				width      : "100%",
				background : "#E3E3E3",
			}}
		>
			{
				images[0]?.url && (
					<img
						src={imgUrlPdf(images[0])}
						alt={images[0]?.url}
						style={{
							objectFit : "cover",
							height    : "100%",
						}}
					/>
				)
			}
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod1Pdf;
