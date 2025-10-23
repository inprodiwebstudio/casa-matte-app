import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod20Pdf = ({text}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: right;'><span style='font-size: 30px; font-family: JosefinSans-Light;'>TÍTULO 1</span></p>";

	const text02 = text[1] ? text[1] : "<p style='text-align: right;'><span style='font-size: 14px; font-family: JosefinSans-Light;'>Subtítulo 1</span></p>";

	const bodyHtml = (
		<div
			style={{
				height   : "850px",
				width    : "100%",
				padding  : "8%",
				overflow : "hidden",
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
						display       : "flex",
						flexDirection : "column",
						gap           : "10px",
					}}
				>
					<div
						style={{
							width         : "100%",
							letterSpacing : "2.5px !important",
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
							letterSpacing : "1px !important",
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
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod20Pdf;
