import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

import { imgUrlPdf } from "helpers";

const Mod51Pdf = ({
	text,
	images,
	textImgs,
	modLayout,
	pageNo,
}) => {

	const myTextImgsMod = {
		0 : textImgs[`${pageNo}-${modLayout}-text1`]?.textImg ?? null,
		1 : textImgs[`${pageNo}-${modLayout}-text2`]?.textImg ?? null,
	};

	const bodyHtml = (
		<div
			style={{
				height        : "792px",
				width         : "100%",
				paddingTop    : "50px",
				paddingBottom : "50px",
				paddingLeft   : "30px",
				paddingRight  : "30px",
			}}
		>
			<div
				style={{
					height         : "100%",
					width          : "100%",
					display        : "flex",
					gap            : "35px",
					justifyContent : "center",
					alignItems     : "center",
				}}
			>
				<div
					style={{
						width : "65%",
					}}
				>
					{myTextImgsMod[0] && <img style={{ objectFit : "cover" }} src={myTextImgsMod[0]} alt="Captura de texto" />}
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
						width : "55%",
					}}
				>
					{myTextImgsMod[1] && <img style={{ objectFit : "cover" }} src={myTextImgsMod[1]} alt="Captura de texto" />}
				</div>
			</div>
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod51Pdf;
