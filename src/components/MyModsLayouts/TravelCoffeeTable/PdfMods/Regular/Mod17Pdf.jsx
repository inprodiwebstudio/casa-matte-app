import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod17Pdf = ({text}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: center;'><span style='font-size: 30px; font-family: JosefinSans-Light;'>TÍTULO 1</span></p>";

	const bodyHtml = (
		<div
			style={{
				height       : "850px",
				paddingLeft  : "15%",
				paddingRight : "15%",
				width        : "100%",
				overflow     : "hidden",
				display      : "flex",
			}}
		>

			<div
				style={{
					height         : "100%",
					width          : "100%",
					display        : "flex",
					justifyContent : "center",
					alignItems     : "center",
				}}
			>
				<div
					style={{
						letterSpacing : "2.5px !important",
						textAlign     : "end",
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

export default Mod17Pdf;
