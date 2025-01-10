import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

import { imgUrlPdf } from "helpers";


const Mod20Pdf = ({images}) => {
	const bodyHtml = (
		<div
			style={{
				height        : "991px",
				width         : "100%",
				paddingTop    : "273px",
				paddingBottom : "273px",
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
						height     : "100%",
						width      : "calc(100% - 6.667px)",
						overflow   : "hidden",
						background : "#E3E3E3",
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
						height     : "100%",
						width      : "calc(100% - 6.667px)",
						overflow   : "hidden",
						background : "#E3E3E3",
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
						height     : "100%",
						width      : "calc(100% - 6.667px)",
						overflow   : "hidden",
						background : "#E3E3E3",
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

export default Mod20Pdf;
