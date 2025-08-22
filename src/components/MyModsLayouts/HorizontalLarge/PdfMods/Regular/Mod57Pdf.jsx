import React from "react";

//Own components
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";
import { imgUrlPdf }  from "helpers";
// eslint-disable-next-line import/extensions

const Mod57Pdf = ({images}) => {

	const bodyHtml = (
		<div
			style={{
				height        : "850px",
				width         : "100%",
				padding       : "4%",
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
					height        : "calc(33.3% - 3.3px)",
				}}
			>
				<div
					style={{
						width      : "calc(33.3% - 3.3px)",
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
						width      : "calc(33.3% - 3.3px)",
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
				<div
					style={{
						width      : "calc(33.3% - 3.3px)",
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
			</div>
			<div
				style={{
					width         : "100%",
					display       : "flex",
					flexDirection : "row",
					gap           : "10px",
					height        : "calc(33.3% - 3.3px)",
				}}
			>
				<div
					style={{
						width      : "calc(33.3% - 3.3px)",
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
				<div
					style={{
						width      : "calc(33.3% - 3.3px)",
						height     : "100%",
						overflow   : "hidden",
						background : "white",
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
						width      : "calc(33.3% - 3.3px)",
						height     : "100%",
						overflow   : "hidden",
						background : "white",
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
					display       : "flex",
					flexDirection : "row",
					gap           : "10px",
					height        : "calc(33.3% - 3.3px)",
				}}
			>
				<div
					style={{
						width      : "calc(33.3% - 3.3px)",
						height     : "100%",
						overflow   : "hidden",
						background : "white",
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
						width      : "calc(33.3% - 3.3px)",
						height     : "100%",
						overflow   : "hidden",
						background : "white",
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
						width      : "calc(33.3% - 3.3px)",
						height     : "100%",
						overflow   : "hidden",
						background : "white",
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

export default Mod57Pdf;
