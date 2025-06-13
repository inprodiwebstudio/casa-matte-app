import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod46Pdf = ({
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
				height         : "615px",
				width          : "100%",
				padding        : "5%",
				paddingBottom  : "4%",
				display        : "flex",
				justifyContent : "flex-end",
				alignItems     : "flex-end",
			}}
		>
			<div
				style={{
					width : "45%",
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

export default Mod46Pdf;
