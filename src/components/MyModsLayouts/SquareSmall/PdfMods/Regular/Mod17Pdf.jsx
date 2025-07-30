import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

import { imgUrlPdf } from "helpers";


const Mod17Pdf = ({images}) => {
	const bodyHtml = (
		<div
			style={{
				height        : "595px",
				width         : "100%",
				padding       : "20px",
				paddingTop    : "200px",
				paddingBottom : "200px",
			}}
		>
			<div
				style={{
					height        : "100%",
					width         : "100%",
					display       : "flex",
					flexDirection : "row",
					gap           : "10px",
				}}
			>
				<div
					style={{
						width      : "calc(33.33% - 6.667px)",
						height     : "100%",
						overflow   : "hidden",
						background : "white",
					}}
				>
					{
						images[0]?.url && (
							<img
								src={imgUrlPdf(images[0])}
								alt="test"
								style={{
									height    : "100%",
									objectFit : "cover",
								}}
							/>
						)
					}
				</div>
				<div
					style={{
						width      : "calc(33.33% - 6.667px)",
						height     : "100%",
						overflow   : "hidden",
						background : "white",
					}}
				>
					{
						images[1]?.url && (
							<img
								src={imgUrlPdf(images[1])}
								alt="test"
								style={{
									height    : "100%",
									objectFit : "cover",
								}}
							/>
						)
					}
				</div>
				<div
					style={{
						width      : "calc(33.33% - 6.667px)",
						height     : "100%",
						overflow   : "hidden",
						background : "white",
					}}
				>
					{
						images[2]?.url && (
							<img
								src={imgUrlPdf(images[2])}
								alt="test"
								style={{
									height    : "100%",
									objectFit : "cover",
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

export default Mod17Pdf;
