import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod53Pdf = ({text}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: center;'><span style='font-size: 13px; font-family: Inter-Lifght;'>FLORENCIA</span></p><p style='text-align: center;'><span style='font-size: 13px; font-family: Inter-Lifght;'>ORVIETTO</span></p><p style='text-align: center;'><span style='font-size: 13px; font-family: Inter-Lifght;'>MONTALCINO</span></p><p style='text-align: center;'><span style='font-size: 13px; font-family: Inter-Lifght;'>PIENZA</span></p><p style='text-align: center;'><span style='font-size: 13px; font-family: Inter-Lifght;'>Smithfeld</span></p><p style='text-align: center;'><span style='font-size: 13px; font-family: Inter-Lifght;'>SIENNA</span></p><p style='text-align: center;'><span style='font-size: 13px; font-family: Inter-Lifght;'>BAGNO VIGNIONI</span></p><p style='text-align: center;'><span style='font-size: 13px; font-family: Inter-Lifght;'>SAN GIMINIANO</span></p><p style='text-align: center;'><span style='font-size: 13px; font-family: Inter-Lifght;'>MONTEPULCIANO</span></p>";

	const bodyHtml = (
		<div
			style={{
				height        : "595px",
				width         : "100%",
				paddingTop    : "50px",
				paddingBottom : "50px",
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
						width         : "30%",
						display       : "flex",
						flexDirection : "column",
						gap           : "25px",
					}}
				>
					<div
						style={{
							letterSpacing  : "2.5px",
							lineHeight     : "3px",
							width          : "100%",
							display        : "flex",
							justifyContent : "center",
							alignItems     : "center",
							textTransform  : "uppercase",
						}}
						dangerouslySetInnerHTML={{
							__html : `<style>
                                   p {
                                     margin: 0;
                                     padding: 0;
                                   }
                                 </style>
                                 ${text01}`,
						}}
					/>
				</div>
			</div>
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod53Pdf;
