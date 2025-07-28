import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html             from "react-pdf-html";
import ReactDOMServer   from "react-dom/server";
import DividerLayoutPdf from "components/LayoutHandler/DividerLayoutPdf";


const Mod38Pdf = ({
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
				padding       : "60px",
				paddingBottom : "30px",
			}}
		>
			<div
				style={{
					height         : "100%",
					width          : "100%",
					display        : "flex",
					justifyContent : "flex-end",
					alignItems     : "end",
					gap            : "8px",
				}}
			>
				<div
					style={{
						display        : "flex",
						height         : "1px",
						width          : "100%",
						justifyContent : "flex-end",
						alignItems     : "flex-end",
					}}
				>
					<DividerLayoutPdf w="7%" />
				</div>
				<div
					style={{
						display       : "flex",
						alignItems    : "flex-end",
						flexDirection : "column",
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
							width : "100%",
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

export default Mod38Pdf;
