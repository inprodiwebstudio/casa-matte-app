import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

import { imgUrlPdf } from "helpers";


const Mod37Pdf = ({
	text,
	pageNo,
	images,
	textImgs,
	modLayout,
}) => {

	const myTextImgsMod = {
		0 : textImgs[`${pageNo}-${modLayout}-text1`]?.textImg ?? null,
	};

	const bodyHtml = (
		<div
			style={{
				height        : "850px",
				width         : "100%",
				paddingBottom : "13%",
			}}
		>
			<div
				style={{
					height        : "100%",
					width         : "100%",
					display       : "flex",
					flexDirection : "column",
					gap           : "20px",
				}}
			>
				<div
					style={{
						height     : "88%",
						width      : "100%",
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
						height     : "55px",
						overflow   : "hidden",
						paddingRight : "20px"
					}}
				>
					{
						myTextImgsMod[0] &&
							<img
								src={myTextImgsMod[0]}
								alt="Captura de texto"
								style={{ objectFit : "contain", height : "auto", width : "100%", objectPosition : "right" }}
							/>
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

export default Mod37Pdf;
