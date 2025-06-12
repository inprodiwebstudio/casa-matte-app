import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

import { imgUrlPdf } from "helpers";


const Mod53Pdf = ({
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
				height : "991px",
				width  : "100%",
			}}
		>
			<div
				style={{
					height        : "100%",
					width         : "100%",
					display       : "flex",
					flexDirection : "column",
					gap           : "25px",
				}}
			>
				<div
					style={{
						height     : "83%",
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
						display       : "flex",
						alignItems    : "flex-end",
						flexDirection : "column",
						gap           : "0px",
						marginBottom  : "50px",
						width         : "100%",
						paddingRight  : "70px",
					}}
				>
					<div
						style={{
							width : "75%",
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
							width : "75%",
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
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod53Pdf;
