import React from "react";

//Own components
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";
import { imgUrlPdf }  from "helpers";
// eslint-disable-next-line import/extensions

const Mod54Pdf = ({images}) => {
	const bodyHtml = (
		<div
			style={{
				height        : "100%",
				width         : "100%",
				display       : "flex",
				flexDirection : "row",
				gap           : "0px",
			}}
		>
			<div
				style={{
					width         : "40%",
					display       : "flex",
					flexDirection : "row",
					paddingTop    : "5%",
					paddingBottom : "5%",
					paddingLeft   : "3%",
					paddingRight  : "3%",
					gap           : "10px",
				}}
			>
				<div
					style={{
						height     : "100%",
						width      : "calc(50% - 5px)",
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
						height     : "100%",
						width      : "calc(50% - 5px)",
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
			</div>
			<div
				style={{
					height      : "100%",
					width       : "60%",
					padding     : "2%",
					paddingLeft : "0%",
				}}
			>
				<div
					style={{
						height     : "100%",
						width      : "100%",
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
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod54Pdf;
