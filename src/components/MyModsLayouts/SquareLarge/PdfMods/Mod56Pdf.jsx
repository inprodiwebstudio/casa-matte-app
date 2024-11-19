import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

import { imgUrlPdf } from "helpers";


const Mod56Pdf = ({text, images}) => {

	const text01 = text[0] ? text[0] :  "<p style='text-align: right;'><span style='font-size: 46px; font-family: Aitana-Regular;'>ISLA NEGRA</span></p>";
	const text02 = text[1] ? text[1] :  "<p style='text-align: right;'><span style='font-size: 22px; font-family: Spectral-Light-Italic;'>Chile</span></p>";

	const bodyHtml = (
		<div
			style={{
				height        : "850px",
				width         : "100%",
				paddingTop    : "0px",
				paddingBottom : "50px",
			}}
		>
			<div
				style={{
					height        : "100%",
					width         : "100%",
					display       : "flex",
					flexDirection : "column",
					gap           : "50px",
				}}
			>
				<div
					style={{
						width      : "100%",
						height     : "80%",
						overflow   : "hidden",
						background : "#E3E3E3",
					}}
				>
					{
						images[0]?.url && (
							<img
								src={imgUrlPdf(images[1])}
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
						width         : "100%",
						display       : "flex",
						flexDirection : "column",
						gap           : "10px",
					}}
				>
					<div
						style={{
							width          : "100%",
							display        : "flex",
							justifyContent : "flex-end",
							alignItems     : "flex-end",
							paddingRight   : "50px",
						}}
					>
						<div
							style={{
								letterSpacing : "3px",
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
					</div>
					<div
						style={{
							width          : "100%",
							display        : "flex",
							justifyContent : "flex-end",
							alignItems     : "flex-end",
							paddingRight   : "50px",
						}}
					>
						<div
							style={{
								letterSpacing : "3px",
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
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod56Pdf;
