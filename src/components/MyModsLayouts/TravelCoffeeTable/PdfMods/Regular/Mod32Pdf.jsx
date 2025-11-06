import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod32Pdf = ({text}) => {
	console.log(text);

	const text04 = text[0] ? text[0] : "<p style='text-align: center;'><span style='font-size: 14px; font-family: Spectral-Light-Italic;'>Madrid</span></p><p style='text-align: center;'><span style='font-size: 14px; font-family: Spectral-Light-Italic;'>Segovia</span></p><p style='text-align: center;'><span style='font-size: 14px; font-family: Spectral-Light-Italic;'>Salamanca</span></p><p style='text-align: center;'><span style='font-size: 14px; font-family: Spectral-Light-Italic;'>Madrid</span></p><p style='text-align: center;'><span style='font-size: 14px; font-family: Spectral-Light-Italic;'>Segovia</span></p><p style='text-align: center;'><span style='font-size: 14px; font-family: Spectral-Light-Italic;'>Salamanca</span></p>";

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
					letterSpacing : "0.5px",
					lineHeight    : "2.5px",
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
                                 ${text04}`,
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
