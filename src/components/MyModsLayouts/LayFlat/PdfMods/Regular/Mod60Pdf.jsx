import React from "react";

//Own components
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";
import { imgUrlPdf }  from "helpers";
// eslint-disable-next-line import/extensions

const Mod60Pdf = ({images}) => {
	const bodyHtml = (
		<div
			style={{
				height        : "100%",
				width         : "100%",
				display       : "flex",
				padding       : "2%",
				paddingTop    : "4%",
				paddingBottom : "4%",
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
						width      : "calc(20% - 2px)",
						height     : "100%",
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
						width      : "calc(20% - 2px)",
						height     : "100%",
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
				<div
					style={{
						width      : "calc(20% - 2px)",
						height     : "100%",
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
				<div
					style={{
						width      : "calc(20% - 2px)",
						height     : "100%",
						background : "#E3E3E3",
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
						width      : "calc(20% - 2px)",
						height     : "100%",
						background : "#E3E3E3",
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
						width      : "calc(20% - 2px)",
						height     : "100%",
						background : "#E3E3E3",
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
				<div
					style={{
						width      : "calc(20% - 2px)",
						height     : "100%",
						background : "#E3E3E3",
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
						width      : "calc(20% - 2px)",
						height     : "100%",
						background : "#E3E3E3",
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
						width      : "calc(20% - 2px)",
						height     : "100%",
						background : "#E3E3E3",
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
				<div
					style={{
						width      : "calc(20% - 2px)",
						height     : "100%",
						background : "#E3E3E3",
					}}
				>
					{
						images[9]?.url && (
							<img
								src={imgUrlPdf(images[9])}
								alt={images[9]?.url}
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
						width      : "calc(20% - 2px)",
						height     : "100%",
						background : "#E3E3E3",
					}}
				>
					{
						images[10]?.url && (
							<img
								src={imgUrlPdf(images[10])}
								alt={images[10]?.url}
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
						width      : "calc(20% - 2px)",
						height     : "100%",
						background : "#E3E3E3",
					}}
				>
					{
						images[11]?.url && (
							<img
								src={imgUrlPdf(images[11])}
								alt={images[11]?.url}
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
						width      : "calc(20% - 2px)",
						height     : "100%",
						background : "#E3E3E3",
					}}
				>
					{
						images[12]?.url && (
							<img
								src={imgUrlPdf(images[12])}
								alt={images[12]?.url}
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
						width      : "calc(20% - 2px)",
						height     : "100%",
						background : "#E3E3E3",
					}}
				>
					{
						images[13]?.url && (
							<img
								src={imgUrlPdf(images[13])}
								alt={images[13]?.url}
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
						width      : "calc(20% - 2px)",
						height     : "100%",
						background : "#E3E3E3",
					}}
				>
					{
						images[14]?.url && (
							<img
								src={imgUrlPdf(images[14])}
								alt={images[14]?.url}
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

export default Mod60Pdf;
