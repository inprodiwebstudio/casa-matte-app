import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

import { imgUrlPdf } from "helpers";

const Mod44Pdf = ({text, images}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: center;'><span style='font-size: 30px; font-family: JosefinSans-Light;'>Título 1</span></p>";

	const bodyHtml = (
		<div
			style={{
				height       : "615px",
				width        : "100%",
				padding      : "0%",
				paddingLeft  : "20%",
				paddingRight : "20%",
			}}
		>
			<div
				style={{
					width          : "100%",
					height         : "100%",
					display        : "flex",
					flexDirection  : "column",
					justifyContent : "center",
					alignItems     : "center",
					gap            : "60px",
				}}
			>
				<div
					style={{
						height     : "60%",
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
						width          : "100%",
						maxHeight      : "6%",
						display        : "flex",
						justifyContent : "center",
						alignItems     : "center",
						overflow       : "hidden",
					}}
				>
					<div
						style={{
							textTransform : "uppercase",
							letterSpacing : "2px",
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
			</div>
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod44Pdf;
