import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

import { imgUrlPdf } from "helpers";

const Mod43Pdf = ({
	text,
	images,
	pageNo,
	textImgs,
	modLayout,
}) => {

	const myTextImgsMod = {
		0 : textImgs[`${pageNo}-${modLayout}-text1`]?.textImg ?? null,
	};

	const bodyHtml = (
		<div
			style={{
				height : "615px",
				width  : "100%",
			}}
		>
			<div
				style={{
					height        : "100%",
					width         : "100%",
					display       : "flex",
					flexDirection : "row",
				}}
			>
				<div
					style={{
						width          : "70%",
						padding        : "3%",
						paddingBottom  : "2%",
						display        : "flex",
						justifyContent : "flex-end",
						alignItems     : "flex-end",
						overflow       : "hidden",
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
				</div>
				<div
					style={{
						height     : "100%",
						width      : "30%",
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
			</div>
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod43Pdf;
