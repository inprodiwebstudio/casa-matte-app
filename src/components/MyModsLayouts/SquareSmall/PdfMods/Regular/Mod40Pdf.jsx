import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod40Pdf = ({text}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: center;'><span style='font-size: 26px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	const text02 = text[1] ? text[1] : "<p style='text-align: center;'><span style='font-size: 15px; font-family: Inter-Lifght;'>SUBTÍTULO 1</span></p>";

	const bodyHtml = (
		<div
			style={{
				height  : "991px",
				width   : "100%",
				padding : "20px",
			}}
		>

			<div
				style={{
					height         : "100%",
					width          : "100%",
					display        : "flex",
					justifyContent : "center",
					alignItems     : "center",
					gap            : "8px",
				}}
			>
				<div
					style={{
						width         : "100%",
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
						width         : "100%",
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
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod40Pdf;
