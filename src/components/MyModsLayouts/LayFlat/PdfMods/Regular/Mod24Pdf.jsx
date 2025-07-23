import React from "react";

//Own components
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";
import { imgUrlPdf }  from "helpers";
// eslint-disable-next-line import/extensions

const Mod24Pdf = ({images}) => {
	const bodyHtml = (
		<div
			style={{
				height        : "100%",
				width         : "100%",
				padding       : "4%",
				paddingLeft   : "31%",
				paddingRight  : "31%",
				display       : "flex",
				flexDirection : "column",
				gap           : "10px",
			}}
		>
			<div
				style={{
					background : "white",
					width      : "100%",
					height     : "calc(100% - 3.333px - 33.333%)",
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
					background : "white",
					width      : "100%",
					height     : "calc(100% - 3.333px - 33.333%)",
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
			<div
				style={{
					background : "white",
					width      : "100%",
					height     : "calc(100% - 3.333px - 33.333%)",
				}}
			>
				{
					images[2]?.url && (
						<img
							src={imgUrlPdf(images[2])}
							alt={images[2]?.url}
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

export default Mod24Pdf;
