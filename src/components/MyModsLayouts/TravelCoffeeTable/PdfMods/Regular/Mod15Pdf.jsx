import React from "react";

//Own components
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";
import { imgUrlPdf }  from "helpers";
// eslint-disable-next-line import/extensions

const Mod15Pdf = ({images}) => {

	const bodyHtml = (
		<div
			style={{
				height        : "850px",
				width         : "100%",
				padding       : "15%",
				display       : "flex",
				flexDirection : "column",
				gap           : "10px",
			}}
		>
			<div
				style={{
					height        : "calc(50% - 5px)",
					width         : "100%",
					display       : "flex",
					gap           : "10px",
					flexDirection : "row",
					overflow      : "hidden",
				}}
			>
				<div
					style={{
						width      : "calc(50% - 5px)",
						height     : "100%",
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
						width      : "calc(50% - 5px)",
						height     : "100%",
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
			<div
				style={{
					height        : "calc(50% - 5px)",
					width         : "100%",
					display       : "flex",
					gap           : "10px",
					flexDirection : "row",
					overflow      : "hidden",
				}}
			>
				<div
					style={{
						width      : "calc(50% - 5px)",
						height     : "100%",
						overflow   : "hidden",
						background : "white",
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
						width      : "calc(50% - 5px)",
						height     : "100%",
						overflow   : "hidden",
						background : "white",
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
			</div>
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod15Pdf;
