import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod54Pdf = ({text}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: center;'><span style='font-size: 42px; font-family: TAN-MERINGUE;'>TOSCANA</span></p>";

	const bodyHtml = (
		<div
			style={{
				height         : "595px",
				width          : "100%",
				display        : "flex",
				justifyContent : "center",
				alignItems     : "center",
			}}
		>
			<div
				dangerouslySetInnerHTML={{__html : text01}}
				style={{
					letterSpacing : "4px !important",
				}}
			/>
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod54Pdf;
