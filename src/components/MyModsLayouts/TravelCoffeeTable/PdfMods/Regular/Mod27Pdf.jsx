import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html             from "react-pdf-html";
import ReactDOMServer   from "react-dom/server";
import DividerLayoutPdf from "components/LayoutHandler/DividerLayoutPdf";


const Mod27Pdf = ({
	text,
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
				height  : "850px",
				width   : "100%",
				overflow : "hidden",
			}}
		>

			{
				myTextImgsMod[0] &&
					<img
						src={myTextImgsMod[0]}
						alt="Captura de texto"
						style={{ objectFit : "contain", height : "auto", width : "100%"}}
					/>
			}
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod27Pdf;
