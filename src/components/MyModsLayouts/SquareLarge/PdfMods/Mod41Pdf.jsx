import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html             from "react-pdf-html";
import ReactDOMServer   from "react-dom/server";
import DividerLayoutPdf from "components/LayoutHandler/DividerLayoutPdf";


const Mod38Pdf = ({text}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: right;'><span style='font-size: 26px; font-family: JosefinSans-Light;'>TÍTULO</span></p>";

	const text02 = text[1] ? text[1] : "<p style='text-align: right;'><span style='font-size: 15px; font-family: Inter-Lifght;'>SUBTÍTULO 2</span></p>";

	const bodyHtml = (
		<div
			style={{
				height  : "595px",
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
					gap            : "25px",
				}}
			>
				<div
					style={{
						display        : "flex",
						height         : "1px",
						width          : "100%",
						justifyContent : "flex-end",
						alignItems     : "flex-end",
					}}
				>
					<DividerLayoutPdf w="8%" />
				</div>
				<div
					style={{
						display       : "flex",
						flexDirection : "column",
						gap           : "10px",
					}}
				>
					<div
						style={{
							letterSpacing : "4px !important",
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
							letterSpacing : "2px !important",
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

export default Mod38Pdf;
