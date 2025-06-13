import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod63Pdf = ({
	text,
	textImgs,
	modLayout,
	pageNo,
}) => {

	const myTextImgsMod = {
		0 : textImgs[`${pageNo}-${modLayout}-text1`]?.textImg ?? null,
		1 : textImgs[`${pageNo}-${modLayout}-text2`]?.textImg ?? null,
		2 : textImgs[`${pageNo}-${modLayout}-text3`]?.textImg ?? null,
		3 : textImgs[`${pageNo}-${modLayout}-text4`]?.textImg ?? null,
		4 : textImgs[`${pageNo}-${modLayout}-text5`]?.textImg ?? null,
		5 : textImgs[`${pageNo}-${modLayout}-text6`]?.textImg ?? null,
	};

	const bodyHtml = (
		<div
			style={{
				height   : "850px",
				width    : "100%",
				padding  : "4%",
				overflow : "hidden",
			}}
		>

			<div
				style={{
					height         : "100%",
					width          : "100%",
					display        : "flex",
					justifyContent : "center",
					alignItems     : "center",
				}}
			>
				<div style={{
					width          : "20%",
					height         : "100%",
					display        : "flex",
					flexDirection  : "column",
					gap            : "10px",
					justifyContent : "center",
					alignItems     : "center",
				}}>
					<div
						style={{
							width          : "100%",
							display        : "flex",
							flexDirection  : "column",
							gap            : "0px",
							justifyContent : "flex-start",
							alignItems     : "flex-start",
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
					<div
						style={{
							width          : "100%",
							display        : "flex",
							flexDirection  : "column",
							gap            : "0px",
							justifyContent : "flex-start",
							alignItems     : "flex-start",
						}}
					>
						<div
							style={{
								width : "100%",
							}}
						>
							{
								myTextImgsMod[2] &&
								<img
									src={myTextImgsMod[2]}
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
								myTextImgsMod[3] &&
								<img
									src={myTextImgsMod[3]}
									alt="Captura de texto"
									style={{ objectFit : "cover" }}
								/>
							}
						</div>
					</div>
					<div
						style={{
							width          : "100%",
							display        : "flex",
							flexDirection  : "column",
							gap            : "0px",
							justifyContent : "flex-start",
							alignItems     : "flex-start",
						}}
					>
						<div
							style={{
								width : "100%",
							}}
						>
							{
								myTextImgsMod[4] &&
								<img
									src={myTextImgsMod[4]}
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
								myTextImgsMod[5] &&
								<img
									src={myTextImgsMod[5]}
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

export default Mod63Pdf;
