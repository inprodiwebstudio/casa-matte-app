import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod42Pdf = ({text}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: center;'><span style='font-size: 10px; font-family: Inter-Lifght;'>PARA PAPÁ. UN HOMENAJE A TU VIDA. GRACIAS POR TANTOS AÑOS DE CARIÑO Y AMOR, TE QUEREMOS SIEMPRE..</span></p>";

	const bodyHtml = (
		<div
			style={{
				height       : "595px",
				width        : "100%",
				padding      : "20px",
				paddingRight : "110px",
				paddingLeft  : "110px",
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
				<div
					style={{
						letterSpacing : "1px !important",
						textAlign     : "start",
						lineHeight    : "1.6px",
					}}
					dangerouslySetInnerHTML={{__html : text01}}
				/>
			</div>
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod42Pdf;
