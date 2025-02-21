import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod46Pdf = ({text, images}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: right;'><span style='font-size: 12px; font-family: Inter-Light;'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</span></p>";

	const bodyHtml = (
		<div
			style={{
				height         : "615px",
				width          : "100%",
				padding        : "4%",
				display        : "flex",
				justifyContent : "flex-end",
				alignItems     : "flex-end",
			}}
		>
			<div
				style={{
					width          : "45%",
					maxHeight      : "70%",
					display        : "flex",
					justifyContent : "flex-end",
					alignItems     : "flex-end",
					lineHeight     : "1.5px",
					textTransform  : "uppercase",
				}}
			>
				<div
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

export default Mod46Pdf;
