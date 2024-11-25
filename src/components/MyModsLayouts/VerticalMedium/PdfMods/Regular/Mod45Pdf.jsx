import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html             from "react-pdf-html";
import ReactDOMServer   from "react-dom/server";
import DividerLayoutPdf from "components/LayoutHandler/DividerLayoutPdf";


const Mod45Pdf = ({text}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: center;'><span style='font-size: 42px; font-family: JosefinSans-Light;'>JAPÓN</span></p>";

	const text02 = text[1] ? text[1] : "<p style='text-align: center;'><span style='font-size: 14px; font-family: JosefinSans-Light;'>TOKIO</span></p><p style='text-align: center;'><span style='font-size: 14px; font-family: JosefinSans-Light;'>KAMAKURA</span></p><p style='text-align: center;'><span style='font-size: 14px; font-family: JosefinSans-Light;'>KIOTO</span></p><p style='text-align: center;'><span style='font-size: 14px; font-family: JosefinSans-Light;'>NARA</span></p><p style='text-align: center;'><span style='font-size: 14px; font-family: JosefinSans-Light;'>NAOSHIMA</span></p>";

	const bodyHtml = (
		<div
			style={{
				height  : "792px",
				width   : "100%",
				padding : "20px",
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
				<div style={{
					width          : "70%",
					height         : "100%",
					display        : "flex",
					flexDirection  : "column",
					gap            : "35px !important",
					justifyContent : "center",
				}}>
					<div
						style={{
							width          : "100%",
							display        : "flex",
							flexDirection  : "column",
							justifyContent : "center",
							alignItems     : "center",
						}}
					>
						<div
							style={{
								letterSpacing : "5px",
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
					<div
						style={{
							width      : "100%",
							display    : "flex",
							alignItems : "center",
						}}
					>
						<DividerLayoutPdf w="35px" />
					</div>
					<div
						style={{
							width         : "100%",
							letterSpacing : "0.5px",
							lineHeight    : "3px",
						}}
						dangerouslySetInnerHTML={{
							__html : `<style>
                               p {
                                 margin: 0;
                                 padding: 0;
                               }
                             </style>
                             ${text02}`,
						}}
					/>
				</div>
			</div>
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod45Pdf;
