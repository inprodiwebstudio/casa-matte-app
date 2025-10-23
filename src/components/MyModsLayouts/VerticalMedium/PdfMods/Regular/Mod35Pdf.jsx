import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod35Pdf = ({
	text,
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
				height         : "792px",
				width          : "100%",
				display        : "flex",
				flexDirection  : "center",
				justifyContent : "center",
				alignItems     : "center",
			}}
		>
			<div
				style={{
					width          : "70%",
					maxHeight      : "100px",
					overflow       : "hidden",
					display        : "flex",
					justifyContent : "center",
					alignItems     : "center",
				}}
			>
				{
					myTextImgsMod[0] &&
					<img
						src={myTextImgsMod[0]}
						alt="Captura de texto"
						style={{
							objectFit      : "cover",
							height         : "auto",
							width          : "100%",
							objectPosition : "center",
						}}
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

export default Mod35Pdf;
