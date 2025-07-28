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
				height        : "792px",
				width         : "100%",
				paddingBottom : "25px !important",
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
						height     : "80%",
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
						display       : "flex",
						alignItems    : "flex-end",
						flexDirection : "column",
						gap           : "0px",
						paddingRight  : "45px",
						width         : "100%",
					}}
				>
					<div
						style={{
							width : "70%",
						}}
					>
						{myTextImgsMod[0] &&
						<img
							src={myTextImgsMod[0]}
							alt="Captura de texto"
							style={{ objectFit : "cover" }}
						/>}
					</div>
					<div
						style={{
							width : "70%",
						}}
					>

						{myTextImgsMod[1] &&
						<img
							src={myTextImgsMod[1]}
							alt="Captura de texto"
							style={{ objectFit : "cover" }}
						/>}
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
