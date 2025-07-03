import React from "react";

//Own components
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";
import { imgUrlPdf }  from "helpers";
// eslint-disable-next-line import/extensions

const Mod32Pdf = ({images}) => {
	const bodyHtml = (
		<div
			style={{
				height        : "100%",
				width         : "100%",
				padding       : "4%",
				paddingTop    : "18%",
				paddingBottom : "18%",
				display       : "flex",
				flexDirection : "column",
				gap           : "10px",
			}}
		>
			<div
				style={{
					width         : "100%",
					height        : "calc(33.33% - 3.33px)",
					display       : "flex",
					flexDirection : "row",
					gap           : "10px",
				}}
			>
				<div
					style={{
						background : "#E3E3E3",
						height     : "100%",
						width      : "calc(33.33% - 3.333px)",
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
						width      : "calc(33.33% - 3.333px)",
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
						width      : "calc(33.33% - 3.333px)",
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
			<div
				style={{
					width         : "100%",
					height        : "calc(33.33% - 3.333px)",
					display       : "flex",
					flexDirection : "row",
					gap           : "10px",
				}}
			>
				<div
					style={{
						background : "#E3E3E3",
						height     : "100%",
						width      : "calc(33.33% - 3.333px)",
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
						background : "#E3E3E3",
						height     : "100%",
						width      : "calc(33.33% - 3.333px)",
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
				<div
					style={{
						background : "#E3E3E3",
						height     : "100%",
						width      : "calc(33.33% - 3.333px)",
					}}
				>
					{
						images[5]?.url && (
							<img
								src={imgUrlPdf(images[5])}
								alt={images[5]?.url}
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
					height        : "calc(33.33% - 3.333px)",
					display       : "flex",
					flexDirection : "row",
					gap           : "10px",
				}}
			>
				<div
					style={{
						background : "#E3E3E3",
						height     : "100%",
						width      : "calc(33.33% - 3.333px)",
					}}
				>
					{
						images[6]?.url && (
							<img
								src={imgUrlPdf(images[6])}
								alt={images[6]?.url}
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
						width      : "calc(33.33% - 3.333px)",
					}}
				>
					{
						images[7]?.url && (
							<img
								src={imgUrlPdf(images[7])}
								alt={images[7]?.url}
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
						width      : "calc(33.33% - 3.333px)",
					}}
				>
					{
						images[8]?.url && (
							<img
								src={imgUrlPdf(images[8])}
								alt={images[8]?.url}
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

export default Mod32Pdf;
