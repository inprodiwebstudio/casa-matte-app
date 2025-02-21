import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod37Pdf = ({text}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: right;'><span style='font-size: 42px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	const text02 = text[1] ? text[1] : "<p style='text-align: right;'><span style='font-size: 15px; font-family: Inter-Light;'>SUBTÍTULO 1</span></p>";

	const bodyHtml = (
		<div
			style={{
				height  : "850px",
				width   : "100%",
				padding : "4%",
			}}
		>

			<div
				style={{
					height         : "100%",
					width          : "100%",
					display        : "flex",
					justifyContent : "flex-end",
					alignItems     : "flex-end",
					gap            : "10px",
				}}
			>
				<div
					style={{
						width         : "100%",
						letterSpacing : "6px !important",
						textTransform : "uppercase",
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
						textTransform : "uppercase",
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

export default Mod37Pdf;
