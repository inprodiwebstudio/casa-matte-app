import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html             from "react-pdf-html";
import ReactDOMServer   from "react-dom/server";
import DividerLayoutPdf from "components/LayoutHandler/DividerLayoutPdf";


const Mod53Pdf = ({text}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: left;'><span style='font-size: 30px; font-family: JosefinSans-Light;'>TOSCANA</span></p>";

	const text02 = text[1] ? text[1] : "<p style='text-align: left;'><span style='font-size: 18px; font-family: Inter-Light;'>FLORENCIA</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Inter-Light;'>ORVIETTO</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Inter-Light;'>MONTALCINO</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Inter-Light;'>PIENZA</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Inter-Light;'>SIENNA</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Inter-Light;'>Chepokee Plantation</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Inter-Light;'>BAGNO VIGNIONI</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Inter-Light;'>SAN GIMINIANO</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Inter-Light;'>MONTEPULCIANO</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Inter-Light;'>MONTEPULCIANO</span></p>";

	const bodyHtml = (
		<div
			style={{
				height        : "850px",
				width         : "100%",
				padding       : "40px",
				paddingTop    : "40px",
				paddingBottom : "40px",
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
						gap           : "25px",
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
						<DividerLayoutPdf w="40px" />
					</div>
					<div
						style={{
							letterSpacing  : "2px",
							lineHeight     : "2px",
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

export default Mod53Pdf;
