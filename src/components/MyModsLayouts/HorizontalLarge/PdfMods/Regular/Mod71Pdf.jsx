import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod71Pdf = ({
	text,
	images,
	textImgs,
	modLayout,
	pageNo,
}) => {

	const myTextImgsMod = {
		0 : textImgs[`${pageNo}-${modLayout}-text1`]?.textImg ?? null,
	};

	const bodyHtml = (
		<div
			style={{
				height         : "850px",
				paddingLeft    : "23%",
				paddingRight   : "23%",
				width          : "100%",
				display        : "flex",
				alignItems     : "center",
				justifyContent : "center",
			}}
		>
			<div
				style={{
					width : "98%",
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

export default Mod71Pdf;
