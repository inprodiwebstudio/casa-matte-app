import React from "react";

//Own components
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";
import { imgUrlPdf }  from "helpers";
// eslint-disable-next-line import/extensions

const Mod62Pdf = ({images}) => {
	const bodyHtml = (
		<div
			style={{
				height        : "100%",
				width         : "100%",
				display       : "flex",
				padding       : "2%",
				flexDirection : "column",
				gap           : "10px",
			}}
		>
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
						width      : "calc(33.33% - 3.333px)",
						height     : "100%",
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
						width      : "calc(33.33% - 3.333px)",
						height     : "100%",
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
						width      : "calc(33.33% - 3.333px)",
						height     : "100%",
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
					height        : "calc(33.33% - 3.333px)",
					display       : "flex",
					flexDirection : "row",
					gap           : "10px",
				}}
			>
				<div
					style={{
						width      : "calc(33.33% - 3.333px)",
						height     : "100%",
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
						width      : "calc(33.33% - 3.333px)",
						height     : "100%",
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
						width      : "calc(33.33% - 3.333px)",
						height     : "100%",
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
					height        : "calc(33.33% - 3.333px)",
					display       : "flex",
					flexDirection : "row",
					gap           : "10px",
				}}
			>
				<div
					style={{
						width      : "calc(33.33% - 3.333px)",
						height     : "100%",
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
						width      : "calc(33.33% - 3.333px)",
						height     : "100%",
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
						width      : "calc(33.33% - 3.333px)",
						height     : "100%",
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

export default Mod62Pdf;
