import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod64Pdf = ({
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
				height       : "850px",
				width        : "100%",
				padding      : "10%",
				paddingLeft  : "30%",
				paddingRight : "30%",
				overflow     : "hidden",
			}}
		>
			<div
				style={{
					minWidth       : "100%",
					height         : "100%",
					display        : "flex",
					justifyContent : "center",
					alignItems     : "center",
				}}
			>
				<div
					style={{
						width          : "90%",
						display        : "flex",
						flexDirection  : "column",
						gap            : "10px",
						justifyContent : "center",
						alignItems     : "center",
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
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod64Pdf;
