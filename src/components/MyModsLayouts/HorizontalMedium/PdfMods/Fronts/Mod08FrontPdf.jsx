import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

import { imgUrlPdf } from "helpers";

const Mod05FrontPdf = ({text, images}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: center;'><span style='font-size: 42px; font-family: Aitana-Regular;'>TÍTULO GRANDE</span></p>";

	const bodyHtml = (
		<div
			style={{
				height     : "615px",
				width      : "100%",
				paddingTop : "5%",
			}}
		>
			<div
				style={{
					height         : "100%",
					width          : "100%",
					display        : "flex",
					flexDirection  : "column",
					gap            : "20px",
					justifyContent : "center",
					alignItems     : "center",
				}}
			>
				<div
					style={{
						width          : "100%",
						display        : "flex",
						justifyContent : "center",
						alignItems     : "center",
						flexDirection  : "column",
						gap            : "0px",
					}}
				>
					<div
						style={{
							width : "80%",
						}}
					>
						<div
							style={{
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
				</div>
				<div
					style={{
						height     : "100%",
						width      : "100%",
						overflow   : "hidden",
						background : "white",
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
			</div>
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod05FrontPdf;
