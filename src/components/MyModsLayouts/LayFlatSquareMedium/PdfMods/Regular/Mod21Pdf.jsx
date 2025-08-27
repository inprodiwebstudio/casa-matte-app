import React from "react";

//Own components
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";
import { imgUrlPdf }  from "helpers";
// eslint-disable-next-line import/extensions

const Mod21Pdf = ({images}) => {
	const bodyHtml = (
		<div
			style={{
				height        : "100%",
				width         : "100%",
				paddingTop    : "22%",
				paddingBottom : "22%",
				display       : "flex",
				flexDirection : "row",
				gap           : "10px",
			}}
		>
			<div
				style={{
					background : "#E3E3E3",
					height     : "100%",
					width      : "calc(100% - 3.333px - 33.333%)",
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
					background : "#E3E3E3",
					height     : "100%",
					width      : "calc(100% - 3.333px - 33.333%)",
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
					background : "#E3E3E3",
					height     : "100%",
					width      : "calc(100% - 3.333px - 33.333%)",
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

export default Mod21Pdf;
