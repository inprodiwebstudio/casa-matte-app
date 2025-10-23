import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html             from "react-pdf-html";
import ReactDOMServer   from "react-dom/server";
import DividerLayoutPdf from "components/LayoutHandler/DividerLayoutPdf";


const Mod27Pdf = ({text}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: center;'><span style='font-size: 28px; font-family: Aitana-Regular;'>ESPAÑA</span></p>";

	const text02 = text[1] ? text[1] : "<p style='text-align: center;'><span style='font-size: 16px; font-family: Spectral-Light-Italic;'>Madrid</span></p><p style='text-align: center;'><span style='font-size: 16px; font-family: Spectral-Light-Italic;'>Segovia</span></p><p style='text-align: center;'><span style='font-size: 16px; font-family: Spectral-Light-Italic;'>Toledo</span></p><p style='text-align: center;'><span style='font-size: 16px; font-family: Spectral-Light-Italic;'>Salamanca</span></p>";

	const bodyHtml = (
		<div
			style={{
				height  : "850px",
				width   : "100%",
				padding : "8%",
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
					width          : "50%",
					height         : "100%",
					display        : "flex",
					flexDirection  : "column",
					gap            : "30px",
					alignItems     : "center",
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
							width          : "45px",
							height         : "1px",
							display        : "flex",
							justifyContent : "center",
							alignItems     : "center",
						}}
					>
						<DividerLayoutPdf h="100%" w="100%" />
					</div>
					<div
						style={{
							width      : "100%",
							lineHeight : "2.5px",
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

export default Mod27Pdf;
