import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

import { imgUrlPdf } from "helpers";


const Mod57Pdf = ({text, images}) => {

	const text01 = text[0] ? text[0] :  "<p style='text-align: right;'><span style='font-size: 26px; font-family: Aitana-Regular;'>SANTIAGO</span></p>";
	const text02 = text[1] ? text[1] :  "<p style='text-align: right;'><span style='font-size: 15px; font-family: Inter-Lifght;'>CHILE</span></p>";

	const bodyHtml = (
		<div
			style={{
				height        : "595px",
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
							paddingRight   : "30px",
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
							paddingRight   : "30px",
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

export default Mod57Pdf;
