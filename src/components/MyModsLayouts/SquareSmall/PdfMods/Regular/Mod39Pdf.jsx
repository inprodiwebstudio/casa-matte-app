import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod38Pdf = ({text}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: right;'><span style='font-size: 26px; font-family: Aitana-Regular;'>TÍTULO 2</span></p>";

	const bodyHtml = (
		<div
			style={{
				height         : "595px",
				width          : "100%",
				display        : "flex",
				justifyContent : "flex-end",
				alignItems     : "flex-end",
				padding        : "20px",
				paddingRight   : "40px",
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

export default Mod38Pdf;
