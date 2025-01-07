import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const SpinePage = ({text}) => {

	const text01 = text ? text : "<p style='text-align: center;'><span style='font-size: 30px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	const bodyHtml = (
		<div
			style={{
				height : "100%",
				width  : "100%",
			}}
		>
			<div
				style={{
					display       : "flex",
					flexDirection : "row",
					width         : "100%",
					height        : "100%",
					position      : "relative",
				}}
			>
				<div
					style={{
						position       : "absolute",
						top            : "0px",
						left           : "0px",
						bottom         : "0px",
						right          : "0px",
						textTransform  : "uppercase",
						width          : "100%",
						height         : "100%",
						transform      : "rotate(90deg)",
						alignItems     : "center",
						justifyContent : "center",
						paddingTop     : "0%",
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

export default SpinePage;
