import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html             from "react-pdf-html";
import ReactDOMServer   from "react-dom/server";
import DividerLayoutPdf from "components/LayoutHandler/DividerLayoutPdf";


const Mod38Pdf = ({
	text,
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
				padding       : "60px",
				paddingBottom : "40px",
			}}
		>

			<div
				style={{
					height         : "100%",
					width          : "100%",
					display        : "flex",
					justifyContent : "flex-end",
					alignItems     : "end",
					gap            : "15px",
				}}
			>
				<div
					style={{
						width          : "100%",
						display        : "flex",
						justifyContent : "flex-end",
						alignItems     : "flex-end",
					}}
				>
					<DividerLayoutPdf w="7%" />
				</div>
				<div
					style={{
						display       : "flex",
						flexDirection : "column",
						gap           : "5px",
					}}
				>
					<div
						style={{width : "100%"}}
					>
						{myTextImgsMod[0] && <img src={myTextImgsMod[0]} alt="Captura de texto" />}
					</div>
					<div
						style={{width : "100%"}}
					>
						{myTextImgsMod[1] && <img src={myTextImgsMod[1]} alt="Captura de texto" />}
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
