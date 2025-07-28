import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod50Pdf = ({
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
				height         : "595px",
				width          : "100%",
				display        : "flex",
				justifyContent : "center",
				paddingLeft    : "5%",
			}}
		>

			<div
				style={{
					width : "93%",
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
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod50Pdf;
