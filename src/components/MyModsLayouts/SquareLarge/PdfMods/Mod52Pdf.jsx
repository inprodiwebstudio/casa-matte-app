import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html             from "react-pdf-html";
import ReactDOMServer   from "react-dom/server";
import DividerLayoutPdf from "components/LayoutHandler/DividerLayoutPdf";


const Mod52Pdf = ({text}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: left;'><span style='font-size: 30px; font-family: Aitana-Regular;'>VIRGINIA</span></p>";

	const text02 = text[1] ? text[1] : "<p style='text-align: left;'><span style='font-size: 18px; font-family: Spectral-Light-Italic;'>Colonial Williamsburg</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Spectral-Light-Italic;'>William & Mary University</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Spectral-Light-Italic;'>The Capitol</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Spectral-Light-Italic;'>Jamestown</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Spectral-Light-Italic;'>Smithfeld</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Spectral-Light-Italic;'>Chepokee Plantation</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Spectral-Light-Italic;'>Waller Mill Park</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Spectral-Light-Italic;'>Richmond</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Spectral-Light-Italic;'>Ford’s Colony</span></p><p style='text-align: left;'><span style='font-size: 18px; font-family: Spectral-Light-Italic;'>St. Andrew’s</span></p>";

	const bodyHtml = (
		<div
			style={{
				height        : "850px",
				width         : "100%",
				paddingBottom : "40px",
				// padding      : "70px",
				// paddingRight : "20px",
				// paddingLeft  : "20px",
			}}
		>

			<div
				style={{
					height         : "100%",
					width          : "100%",
					display        : "flex",
					justifyContent : "flex-end",
					alignItems     : "flex-end",
				}}
			>
				<div
					style={{
						width         : "35%",
						display       : "flex",
						flexDirection : "column",
						gap           : "20px",
					}}
				>
					<div
						style={{
							letterSpacing  : "3px",
							width          : "100%",
							display        : "flex",
							justifyContent : "flex-start",
							alignItems     : "flex-start",
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
							width          : "100%",
							display        : "flex",
							justifyContent : "flex-start",
							alignItems     : "flex-start",
						}}
					>
						<DividerLayoutPdf w="30px" />
					</div>
					<div
						style={{
							letterSpacing  : "0.5px",
							lineHeight     : "2px",
							width          : "100%",
							display        : "flex",
							justifyContent : "flex-start",
							alignItems     : "flex-start",
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

export default Mod52Pdf;
