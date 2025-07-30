import React from "react";

//Own components
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";
import { imgUrlPdf }  from "helpers";
// eslint-disable-next-line import/extensions

const Mod25Pdf = ({images}) => {

	const bodyHtml = (
		<div
			style={{
				height        : "850px",
				width         : "100%",
				padding       : "25%",
				paddingLeft   : "10%",
				paddingRight  : "10%",
				display       : "flex",
				flexDirection : "row",
				gap           : "10px",
			}}
		>
			<div
				style={{
					height     : "100%",
					width      : "calc(70% - 5px)",
					overflow   : "hidden",
					background : "white",
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
			<div
				style={{
					height     : "100%",
					width      : "calc(30% - 5px)",
					overflow   : "hidden",
					background : "white",
				}}
			>
				{
					images[1]?.url && (
						<img
							src={imgUrlPdf(images[1])}
							alt={images[1]?.url}
							style={{
								objectFit : "cover",
								height    : "100%",
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

export default Mod25Pdf;
