import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

import { imgUrlPdf } from "helpers";

const Mod56Pdf = ({
	images,
	text,
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
				height        : "595px",
				width         : "100%",
				paddingTop    : "50px",
				paddingBottom : "50px",
				paddingLeft   : "0px",
				paddingRight  : "0px",
			}}
		>
			<div
				style={{
					height         : "100%",
					width          : "100%",
					display        : "flex",
					gap            : "20px",
					justifyContent : "center",
					alignItems     : "center",
				}}
			>
				<div
					style={{
						width : "77%",
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
						width : "77%",
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

export default Mod56Pdf;
