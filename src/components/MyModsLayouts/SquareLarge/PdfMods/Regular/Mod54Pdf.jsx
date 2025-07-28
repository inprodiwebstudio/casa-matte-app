import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

import { imgUrlPdf } from "helpers";

const Mod54Pdf = ({
	text,
	images,
	pageNo,
	textImgs,
	modLayout,
}) => {

	const myTextImgsMod = {
		0 : textImgs[`${pageNo}-${modLayout}-text1`]?.textImg ?? null,
		1 : textImgs[`${pageNo}-${modLayout}-text2`]?.textImg ?? null,
	};

	const bodyHtml = (
		<div
			style={{
				height         : "850px",
				width          : "100%",
				paddingTop     : "83px",
				paddingBottom  : "83px",
				paddingLeft    : "30px",
				paddingRight   : "30px",
				display        : "flex",
				flexDirection  : "column",
				alignItems     : "center",
				justifyContent : "center",
			}}
		>
			<div
				style={{
					height         : "100%",
					width          : "53%",
					display        : "flex",
					gap            : "20px",
					justifyContent : "center",
					alignItems     : "center",
				}}
			>
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
							style={{ objectFit : "cover" }}
						/>
					}
				</div>
				<div
					style={{
						height     : "100%",
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
						width : "80%",
					}}
				>
					{
						myTextImgsMod[1] &&
						<img
							src={myTextImgsMod[1]}
							alt="Captura de texto"
							style={{ objectFit : "cover" }}
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

export default Mod54Pdf;
