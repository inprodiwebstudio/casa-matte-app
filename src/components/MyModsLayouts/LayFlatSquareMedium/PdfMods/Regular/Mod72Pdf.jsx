import React from "react";

//Own components
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";
import { imgUrlPdf }  from "helpers";
// eslint-disable-next-line import/extensions

const Mod72Pdf = ({images}) => {
	const bodyHtml = (
		<div
			style={{
				height        : "100%",
				width         : "100%",
				display       : "flex",
				paddingTop    : "15%",
				paddingBottom : "15%",
				flexDirection : "row",
				gap           : "10px",
			}}
		>
			<div
				style={{
					width      : "calc(20% - 2px)",
					height     : "100%",
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
			<div
				style={{
					width      : "calc(20% - 2px)",
					height     : "100%",
					background : "#E3E3E3",
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
					width      : "calc(20% - 2px)",
					height     : "100%",
					background : "#E3E3E3",
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
			<div
				style={{
					width      : "calc(20% - 2px)",
					height     : "100%",
					background : "#E3E3E3",
				}}
			>
				{
					images[3]?.url && (
						<img
							src={imgUrlPdf(images[3])}
							alt={images[3]?.url}
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
					width      : "calc(20% - 2px)",
					height     : "100%",
					background : "#E3E3E3",
				}}
			>
				{
					images[4]?.url && (
						<img
							src={imgUrlPdf(images[4])}
							alt={images[4]?.url}
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

export default Mod72Pdf;
