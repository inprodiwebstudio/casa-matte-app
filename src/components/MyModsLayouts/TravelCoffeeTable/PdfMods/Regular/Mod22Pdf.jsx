import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html             from "react-pdf-html";
import ReactDOMServer   from "react-dom/server";
import DividerLayoutPdf from "components/LayoutHandler/DividerLayoutPdf";


const Mod40Pdf = ({text}) => {
	console.log(text);

	const text01 = text[0] ? text[0] : "<p style='text-align: right;'><span style='font-size: 12px; font-family: JosefinSans-Light;'>Quisque at malesuada dolor. Nullam in eleifend est. In dolor dui, egestas id blandit eget...</span></p>";

	const bodyHtml = (
		<div
			style={{
				height  : "850px",
				width   : "100%",
				padding : "8%",
			}}
		>

			<div
				style={{
					height         : "100%",
					width          : "100%",
					display        : "flex",
					justifyContent : "flex-end",
					alignItems     : "end",
					gap            : "25px",
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
					<DividerLayoutPdf w="5%" />
				</div>
				<div style={{
					width      : "100%",
					display    : "flex",
					alignItems : "flex-end",
				}}>
					<div
						style={{
							width         : "65%",
							lineHeight    : "1.4px",
							textTransform : "uppercase",
							overflow      : "hidden",
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
