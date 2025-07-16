import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

import { imgUrlPdf } from "helpers";

const Mod74Pdf = ({
	text,
	images,
	textImgs,
	modLayout,
	pageNo,
}) => {

	const myTextImgsMod = {
		0 : textImgs[`${pageNo}-${modLayout}-text1`]?.textImg ?? null,
	};

	const bodyHtml = (
		<div
			style={{
				height : "850px",
				width  : "100%",
				// paddingBottom : "12%",
			}}
		>
			<div
				style={{
					width          : "100%",
					height         : "100%",
					display        : "flex",
					flexDirection  : "column",
					justifyContent : "flex-end",
					alignItems     : "flex-end",
					gap            : "16px",
					marginBottom   : "10%",
				}}
			>
				<div
					style={{
						height     : "100%",
						width      : "100%",
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
									objectFit : "cover",
									height    : "100%",
								}}
							/>
						)
					}
				</div>
				<div
					style={{
						width : "100%",
					}}
				>
					{
						myTextImgsMod[0] &&
						<img
							src={myTextImgsMod[0]}
							alt="Captura de texto"
							style={{ objectFit : "contain", height : "auto", width : "100%" }}
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

export default Mod74Pdf;
