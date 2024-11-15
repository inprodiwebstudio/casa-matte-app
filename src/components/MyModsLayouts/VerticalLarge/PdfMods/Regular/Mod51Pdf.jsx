import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

import { imgUrlPdf } from "helpers";

const Mod51Pdf = ({text, images}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: center;'><span style='font-size: 38px; font-family: JosefinSans-Light;'>SANTIAGO</span></p>";

	const text02 = text[1] ? text[1] : "<p style='text-align: center;'><span style='font-size: 15px; font-family: Inter-Lifght;'>CHILE</span></p>";

	const bodyHtml = (
		<div
			style={{
				height        : "991px",
				width         : "100%",
				paddingTop    : "80px",
				paddingBottom : "80px",
				paddingLeft   : "30px",
				paddingRight  : "30px",
			}}
		>
			<div
				style={{
					height         : "100%",
					width          : "100%",
					display        : "flex",
					gap            : "40px",
					justifyContent : "center",
					alignItems     : "center",
				}}
			>
				<div
					style={{
						letterSpacing : "6.5px",
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
						height     : "100%",
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
                                 ${text02}`,
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

export default Mod51Pdf;
