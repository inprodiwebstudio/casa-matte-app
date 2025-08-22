import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

import { imgUrlPdf } from "helpers";

const Mod36Pdf = ({
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
				paddingTop    : "16%",
				display       : "flex",
				alignItems    : "flex-end",
				flexDirection : "column",
			}}
		>
			<div
				style={{
					width    : "70%",
					height   : "80%",
					overflow : "hidden",
				}}
			>
				<div
					style={{
						width          : "100%",
						height         : "100%",
						display        : "flex",
						justifyContent : "flex-start",
						flexDirection  : "column",
						gap            : "30px",
					}}
				>
					<div
						style={{
							width         : "100%",
							height        : "100%",
							display       : "flex",
							flexDirection : "column",
							gap           : "30px",
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
										style={{ objectFit : "contain", height : "auto", width : "100%" }}
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
					</div>
					<div
						style={{
							width : "100%",
						}}
					>
							{
								myTextImgsMod[1] &&
									<img
										src={myTextImgsMod[1]}
										alt="Captura de texto"
										style={{ objectFit : "contain", height : "auto", width : "100%" }}
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

export default Mod36Pdf;
