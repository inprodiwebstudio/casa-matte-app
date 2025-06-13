import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod41Pdf = ({
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
				// paddingRight  : "50px",
				paddingBottom : "40px",
				paddingRight  : "50px",
			}}
		>

			<div
				style={{
					height         : "100%",
					width          : "100%",
					display        : "flex",
					justifyContent : "flex-end",
					alignItems     : "end",
					gap            : "0px",
				}}
			>
				<div style={{
					width      : "100%",
					display    : "flex",
					alignItems : "flex-end",
				}}>
					<div
						style={{
							width         : "50%",
							display       : "flex",
							flexDirection : "column",
							gap           : "15px",
						}}
					>
						<div
							style={{
								width         : "100%",
								display       : "flex",
								flexDirection : "column",
								alignItems    : "flex-start",
								gap           : "0px",
							}}
						>
							<div
								style={{
									width : "100%",
								}}
							>
								{myTextImgsMod[0] && <img style={{ objectFit : "cover" }} src={myTextImgsMod[0]} alt="Captura de texto" />}
							</div>
						</div>
						<div
							style={{
								width : "100%",
							}}
						>
							{myTextImgsMod[1] && <img style={{ objectFit : "cover" }} src={myTextImgsMod[1]} alt="Captura de texto" />}
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

export default Mod41Pdf;
