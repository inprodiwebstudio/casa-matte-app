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
				height  : "991px",
				width   : "100%",
				padding : "60px",
			}}
		>

			<div
				style={{
					height         : "100%",
					width          : "100%",
					display        : "flex",
					justifyContent : "flex-end",
					alignItems     : "end",
					gap            : "20px",
				}}
			>
				<div style={{
					width      : "100%",
					display    : "flex",
					alignItems : "flex-end",
				}}>
					<div
						style={{
							width         : "385px",
							display       : "flex",
							flexDirection : "column",
							gap           : "20px",
						}}
					>
						<div
							style={{
								width         : "100%",
								display       : "flex",
								flexDirection : "column",
								alignItems    : "flex-start",
								gap           : "10px",
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
