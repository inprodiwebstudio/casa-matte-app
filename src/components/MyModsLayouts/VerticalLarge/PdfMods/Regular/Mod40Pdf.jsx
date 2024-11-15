import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html             from "react-pdf-html";
import ReactDOMServer   from "react-dom/server";
import DividerLayoutPdf from "components/LayoutHandler/DividerLayoutPdf";


const Mod40Pdf = ({text}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: right;'><span style='font-size: 12px; font-family: Spectral-Light-Italic;'>Para papá, un homenaje a tu vida. Gracias por tantos años de cariño y amor. Te queremos siempre.</span></p>";

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
				<div
					style={{
						width          : "100%",
						display        : "flex",
						justifyContent : "flex-end",
						alignItems     : "flex-end",
					}}
				>
					<DividerLayoutPdf w="8%" />
				</div>
				<div style={{
					width      : "100%",
					display    : "flex",
					alignItems : "flex-end",
				}}>
					<div
						style={{
							width      : "40%",
							lineHeight : "1.2px",
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

export default Mod40Pdf;
