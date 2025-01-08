import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod39Pdf = ({text}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: center;'><span style='font-size: 12px; font-family: JosefinSans-Light;'>Quisque at malesuada dolor. Nullam in eleifend est. In dolor dui, egestas id blandit eget...</span></p>";

	const bodyHtml = (
		<div
			style={{
				height         : "850px",
				width          : "100%",
				padding        : "4%",
				display        : "flex",
				justifyContent : "center",
				alignItems     : "center",
				overflow       : "hidden",
			}}
		>

			<div
				style={{
					height         : "100%",
					width          : "53%",
					display        : "flex",
					justifyContent : "center",
					alignItems     : "center",
					overflow       : "hidden",
				}}
			>
				<div
					style={{
						textAlign     : "start",
						lineHeight    : "1.4px",
						textTransform : "uppercase",
					}}
					dangerouslySetInnerHTML={{__html : text01}}
				/>
			</div>
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod39Pdf;
