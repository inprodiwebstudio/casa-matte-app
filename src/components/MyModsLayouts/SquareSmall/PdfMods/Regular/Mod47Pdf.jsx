import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod47Pdf = ({
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
				height         : "595px",
				width          : "100%",
				padding        : "20px",
				paddingBottom  : "10px",
				display        : "flex",
				justifyContent : "center",
				alignItems     : "center",
			}}
		>

			<div style={{
				width          : "70%",
				height         : "100%",
				display        : "flex",
				flexDirection  : "column",
				gap            : "17px !important",
				justifyContent : "center",
				alignItems     : "center",
			}}>
				<div
					style={{
						width : "55%",
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
						width : "55%",
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
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod47Pdf;
