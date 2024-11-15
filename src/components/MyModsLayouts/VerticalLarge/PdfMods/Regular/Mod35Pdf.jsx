import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod35Pdf = ({text}) => {

	const text01 = text[0] ?? "<p style='text-align: center;'><span style='font-size: 42px; font-family: JosefinSans-Light;'>TÍTULO 1</span></p>";

	const bodyHtml = (
		<div
			style={{
				height         : "991px",
				width          : "100%",
				display        : "flex",
				flexDirection  : "center",
				justifyContent : "center",
				alignItems     : "center",
			}}
		>
			<div
				dangerouslySetInnerHTML={{__html : text01}}
				style={{
					letterSpacing : "6.5px !important",
				}}
			/>
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod35Pdf;
