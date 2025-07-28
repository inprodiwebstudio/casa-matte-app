import React from "react";

//Own components
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";
import { imgUrlPdf }  from "helpers";
// eslint-disable-next-line import/extensions

const Mod14Pdf = ({images}) => {

	const bodyHtml = (
		<div
			style={{
				height       : "615px",
				padding      : "0%",
				paddingLeft  : "20%",
				paddingRight : "20%",
				width        : "100%",
			}}
		>
			<div
				style={{
					display       : "flex",
					flexDirection : "column",
					gap           : "10px",
					height        : "100%",
					width         : "100%",
					overflow      : "hidden",
				}}
			>
				<div
					style={{
						width      : "100%",
						height     : "calc(50% - 5px)",
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
						width      : "100%",
						height     : "calc(50% - 5px)",
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
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod14Pdf;
