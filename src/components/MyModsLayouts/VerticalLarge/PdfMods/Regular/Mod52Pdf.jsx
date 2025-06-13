import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

import { imgUrlPdf } from "helpers";

const Mod52Pdf = ({
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
				height        : "991px",
				width         : "100%",
				paddingTop    : "60px",
				paddingBottom : "60px",
				paddingLeft   : "30px",
				paddingRight  : "0px",
			}}
		>
			<div
				style={{
					height     : "100%",
					width      : "100%",
					display    : "flex",
					alignItems : "flex-end",
				}}
			>
				<div
					style={{
						width         : "65%",
						height        : "100%",
						display       : "flex",
						flexDirection : "column",
						gap           : "35px !important",
					}}
				>
					<div
						style={{
							width        : "100%",
							paddingRight : "50px",
							display      : "flex",
							alignItems   : "flex-end",
						}}
					>
						<div
							style={{
								width : "90%",
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
							width      : "100%",
							display    : "flex",
							alignItems : "flex-start",
						}}
					>
						<div
							style={{
								width : "70%",
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
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod52Pdf;
