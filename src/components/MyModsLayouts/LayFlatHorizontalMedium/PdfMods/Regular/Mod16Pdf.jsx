import React from "react";

//Own components
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";
import { imgUrlPdf }  from "helpers";
// eslint-disable-next-line import/extensions

const Mod16Pdf = ({images}) => {
	const bodyHtml = (
		<div
			style={{
				height       : "100%",
				width        : "100%",
				padding      : "14%",
				paddingLeft  : "3%",
				paddingRight : "3%",
			}}
		>
			<div
				style={{
					width         : "100%",
					height        : "100%",
					display       : "flex",
					flexDirection : "row",
					gap           : "10px",
				}}
			>
				<div
					style={{
						background : "#E3E3E3",
						height     : "100%",
						width      : "calc(50% - 5px)",
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
						width      : "calc(50% - 5px)",
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

export default Mod16Pdf;
