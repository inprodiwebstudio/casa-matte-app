import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod36Pdf = ({
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
				height        : "792px",
				width         : "100%",
				paddingBottom : "7%",
				paddingRight  : "9%",
			}}
		>

			<div
				style={{
					height         : "100%",
					width          : "100%",
					display        : "flex",
					justifyContent : "flex-end",
					alignItems     : "flex-end",
				}}
			>
				<div
					style={{ width : "85%" }}
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
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod36Pdf;
