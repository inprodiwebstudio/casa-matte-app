import React from "react";

//Own components
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";
import { imgUrlPdf }  from "helpers";
// eslint-disable-next-line import/extensions

const Mod35Pdf = ({images}) => {

	const bodyHtml = (
		<div
			style={{
				height        : "850px",
				width         : "100%",
				padding       : "3%",
				paddingLeft   : "20%",
				paddingRight  : "20%",
				display       : "flex",
				flexDirection : "column",
				gap           : "10px",
			}}
		>
			<div
				style={{
					width         : "100%",
					display       : "flex",
					flexDirection : "row",
					gap           : "10px",
					height        : "calc(50% - 5px)",
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
					width         : "100%",
					display       : "flex",
					flexDirection : "row",
					gap           : "10px",
					height        : "calc(50% - 5px)",
				}}
			>
				<div
					style={{
						height     : "100%",
						width      : "calc(50% - 5px)",
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
						height     : "100%",
						width      : "calc(50% - 5px)",
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

export default Mod35Pdf;
