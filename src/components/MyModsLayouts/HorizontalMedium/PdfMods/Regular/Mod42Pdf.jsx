import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod42Pdf = ({text}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: center;'><span style='font-size: 18px; font-family: JosefinSans-Light;'>Título pequeño 1</span></p>";

	const bodyHtml = (
		<div
			style={{
				height   : "615px",
				width    : "100%",
				padding  : "0%",
				overflow : "hidden",
			}}
		>

			<div
				style={{
					minWidth       : "70%",
					height         : "100%",
					display        : "flex",
					justifyContent : "center",
					alignItems     : "center",
				}}
			>
				<div
					style={{
						letterSpacing : "6.5px",
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
			</div>
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod42Pdf;
