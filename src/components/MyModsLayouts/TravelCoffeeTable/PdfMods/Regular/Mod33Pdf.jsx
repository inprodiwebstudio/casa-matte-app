import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod32Pdf = ({text}) => {
	console.log(text);

	const text01 = text[0] ? text[0] : "<p style='text-align: center;'><span style='font-size: 40px; font-family: JosefinSans-Light;'>TÍTULO 1</span></p>";

	const bodyHtml = (
		<div
			style={{
				height         : "850px",
				width          : "100%",
				display        : "flex",
				justifyContent : "center",
				overflow       : "hidden",
			}}
		>
			<div
				style={{
					letterSpacing : "2.5px",
					textTransform : "uppercase",
					minWidth      : "30%",
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
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod32Pdf;
