import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod41Pdf = ({text}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: center;'><span style='font-size: 18px; font-family: Aitana-Regular;'>ESPAÑA</span></p>";

	const text04 = text[1] ? text[1] : "<p style='text-align: center;'><span style='font-size: 12px; font-family: Spectral-Light-Italic;'>Madrid</span></p><p style='text-align: center;'><span style='font-size: 12px; font-family: Spectral-Light-Italic;'>Segovia</span></p><p style='text-align: center;'><span style='font-size: 12px; font-family: Spectral-Light-Italic;'>Salamanca</span></p>";

	const bodyHtml = (
		<div
			style={{
				height       : "615px",
				width        : "100%",
				padding      : "10%",
				paddingLeft  : "30%",
				paddingRight : "30%",
				overflow     : "hidden",
			}}
		>

			<div
				style={{
					minWidth       : "100%",
					height         : "100%",
					display        : "flex",
					justifyContent : "center",
					alignItems     : "center",
				}}
			>
				<div
					style={{
						width          : "100%",
						display        : "flex",
						flexDirection  : "column",
						gap            : "16px",
						justifyContent : "center",
						alignItems     : "center",
					}}
				>
					<div
						style={{
							letterSpacing : "2px",
							textTransform : "uppercase",
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
					<div
						style={{
							width : "100%",
						}}
					>
						<div
							style={{
								letterSpacing : "0.5px",
								lineHeight    : "2px",
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
				</div>
			</div>
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod41Pdf;
