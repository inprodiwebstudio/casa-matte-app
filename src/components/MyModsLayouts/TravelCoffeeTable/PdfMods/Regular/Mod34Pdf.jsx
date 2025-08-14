import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

import { imgUrlPdf } from "helpers";

const Mod34Pdf = ({
	text,
	pageNo,
	images,
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
				height        : "850px",
				width         : "100%",
				paddingTop    : "8%",
				paddingBottom : "8%",
				paddingLeft   : "20%",
				paddingRight  : "20%",
			}}
		>
			<div
				style={{
					height         : "100%",
					width          : "100%",
					display        : "flex",
					alignItems     : "center",
					justifyContent : "center",
				}}
			>
				<div
					style={{
						width         : "100%",
						height        : "100%",
						display       : "flex",
						flexDirection : "column",
						gap           : "25px !important",
					}}
				>
					<div
						style={{
							width          : "100%",
							display        : "flex",
							alignItems     : "center",
							justifyContent : "center",
						}}
					>
						{
							myTextImgsMod[0] &&
								<img
									src={myTextImgsMod[0]}
									alt="Captura de texto"
									style={{ objectFit : "contain", height : "auto", width : "100%", objectPosition : "center" }}
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
							width          : "100%",
							display        : "flex",
							alignItems     : "center",
							justifyContent : "center",
						}}
					>
						{
							myTextImgsMod[1] &&
								<img
									src={myTextImgsMod[1]}
									alt="Captura de texto"
									style={{ objectFit : "contain", height : "auto", width : "100%", objectPosition : "center" }}
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

export default Mod34Pdf;
