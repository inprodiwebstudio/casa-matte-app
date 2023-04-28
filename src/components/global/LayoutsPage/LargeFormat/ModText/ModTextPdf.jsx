import React from "react";

//Own components
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const ModTextPdf = ({images, text}) => {
	const bodyHtml = (
		<div
			style={{
				height  : "991px",
				width   : "850px",
				padding : "250px",
			}}
		>
			<div dangerouslySetInnerHTML={{__html : text}} />
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default ModTextPdf;
