import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html             from "react-pdf-html";
import ReactDOMServer   from "react-dom/server";
import DividerLayoutPdf from "components/LayoutHandler/DividerLayoutPdf";


const Mod38Pdf = ({
	text,
	modLayout,
	pageNo,
	textImages,
}) => {

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
					gap            : "10px",
				}}
			>
				<div
					style={{
						width          : "100%",
						display        : "flex",
						justifyContent : "flex-end",
						alignItems     : "flex-end",
					}}
				>
					<DividerLayoutPdf w="7%" />
				</div>
				<div
					style={{
						display       : "flex",
						flexDirection : "column",
						gap           : "0px",
					}}
				>
					<div
						style={{
							width : "100%",
						}}
					>
						{
							textImages[0] && (
								<img
									src={textImages[0]}
									alt="Captura de texto"
									style={{ objectFit : "cover" }}
								/>
							)
						}
					</div>
					<div
						style={{
							width : "100%",
						}}
					>
						{
							textImages[1] && (
								<img
									src={textImages[1]}
									alt="Captura de texto"
									style={{ objectFit : "cover" }}
								/>
							)
						}
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

export default Mod38Pdf;
