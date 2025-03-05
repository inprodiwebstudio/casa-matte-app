import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

import { imgUrlPdf } from "helpers";


const Mod53Pdf = ({text, images}) => {

	const text01 = text[0] ? text[0] :  "<p style='text-align: right;'><span style='font-size: 38px; font-family: Aitana-Regular;'>ISLA NEGRA</span></p>";

	const text02 = text[1] ? text[1] : "<p style='text-align: right;'><span style='font-size: 15px; font-family: Spectral-Light-Italic;'>Chile</span></p>";

	const bodyHtml = (
		<div
			style={{
				height : "792px",
				width  : "100%",
			}}
		>
			<div
				style={{
					height        : "100%",
					width         : "100%",
					display       : "flex",
					flexDirection : "column",
					gap           : "30px",
				}}
			>
				<div
					style={{
						height     : "83%",
						width      : "100%",
						overflow   : "hidden",
						background : "#E3E3E3",
					}}
				>
					{
						images[0]?.url && (
							<img
								src={imgUrlPdf(images[0])}
								alt="test"
								style={{
									objectFit : "cover",
									height    : "100%",
								}}
							/>
						)
					}
				</div>
				<div
					style={{
						display       : "flex",
						flexDirection : "column",
						gap           : "10px",
						marginRight   : "70px",
						marginLeft    : "90px",
						background    : "red !important",
					}}
				>
					<div
						style={{
							letterSpacing  : "6.5px",
							textAlign      : "right !important",
							display        : "flex",
							justifyContent : "flex-end",
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
							letterSpacing  : "2px",
							textAlign      : "right !important",
							display        : "flex",
							justifyContent : "flex-end",
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

export default Mod53Pdf;
