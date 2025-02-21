import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html             from "react-pdf-html";
import ReactDOMServer   from "react-dom/server";
import DividerLayoutPdf from "components/LayoutHandler/DividerLayoutPdf";


const Mod49Pdf = ({text}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: left;'><span style='font-size: 24px; font-family: JosefinSans-Light;'>TOSCANA</span></p>";

	const text02 = text[1] ? text[1] : "<p style='text-align: left;'><span style='font-size: 12px; font-family: Inter-Lifght;'>FLORENCIA</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Inter-Lifght;'>ORVIETTO</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Inter-Lifght;'>MONTALCINO</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Inter-Lifght;'>PIENZA</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Inter-Lifght;'>SIENNA</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Inter-Lifght;'>BAGNO VIGNIONI</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Inter-Lifght;'>SAN GIMINIANO</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Inter-Lifght;'>MONTEPULCIANO</span></p><p style='text-align: left;'><span style='font-size: 12px; font-family: Inter-Lifght;'>ANTINORI</span></p>";

	const bodyHtml = (
		<div
			style={{
				height       : "792px",
				width        : "100%",
				padding      : "70px",
				paddingRight : "20px",
				paddingLeft  : "20px",
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
					style={{
						width         : "35%",
						display       : "flex",
						flexDirection : "column",
						gap           : "20px",
					}}
				>
					<div
						style={{
							letterSpacing  : "3px",
							width          : "100%",
							display        : "flex",
							justifyContent : "flex-start",
							alignItems     : "flex-start",
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
					<div
						style={{
							width          : "100%",
							display        : "flex",
							justifyContent : "flex-start",
							alignItems     : "flex-start",
						}}
					>
						<DividerLayoutPdf w="30px" />
					</div>
					<div
						style={{
							letterSpacing  : "0.8px",
							lineHeight     : "2.5px",
							width          : "100%",
							display        : "flex",
							justifyContent : "flex-start",
							alignItems     : "flex-start",
							textTransform  : "uppercase",
						}}
						dangerouslySetInnerHTML={{
							__html : `<style>
                                   p {
                                     margin: 0;
                                     padding: 0;
                                   }
                                 </style>
                                 ${text02}`,
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

export default Mod49Pdf;
