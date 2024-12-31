import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod09FrontPdf = ({text, images}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: center;'><span style='font-size: 50px; font-family: Aitana-Regular;'>TÍTULO GRANDE</span></p>";

	const bodyHtml = (
		<div
			style={{
				height : "991px",
				width  : "100%",
			}}
		>
			<div
				style={{
					height        : "100%",
					width         : "100%",
					display       : "flex",
					gap           : "0px",
					flexDirection : "row",
					background    : "red",
				}}
			>
				<div
					style={{
						width           : "800px",
						height          : "90px",
						// overflow       : "hidden",
						textTransform   : "uppercase",
						// justifyContent : "flex-start",
						// alignItems     : "flex-start",
						transformOrigin : "bottom right",
						transform       : "rotate(-90deg)",
						background      : "green",
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

export default Mod09FrontPdf;
