import React from "react";

//Own components
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";
import { imgUrlPdf }  from "helpers";
// eslint-disable-next-line import/extensions

const Mod27Pdf = ({images}) => {
	const bodyHtml = (
		<div
			style={{
				height        : "100%",
				width         : "100%",
				padding       : "3%",
				display       : "flex",
				flexDirection : "row",
				gap           : "10px",
			}}
		>
			<div
				style={{
					height        : "100%",
					width         : "calc(50% - 5px)",
					display       : "flex",
					flexDirection : "column",
					gap           : "10px",
				}}
			>
				<div
					style={{
						background : "#E3E3E3",
						width      : "100%",
						height     : "calc(50% - 5px)",
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
						width      : "100%",
						height     : "calc(50% - 5px)",
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
					height     : "100%",
					width      : "calc(50% - 5px)",
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
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod27Pdf;
