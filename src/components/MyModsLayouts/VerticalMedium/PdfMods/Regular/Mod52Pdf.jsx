import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

import { imgUrlPdf } from "helpers";

const Mod52Pdf = ({text, images}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: right;'><span style='font-size: 38px; font-family: Aitana-Regular;'>SANTIAGO</span></p>";

	const text02 = text[1] ? text[1] : "<p style='text-align: left;'><span style='font-size: 15px; font-family: Inter-Lifght;'>CHILE</span></p>";

	const bodyHtml = (
		<div
			style={{
				height        : "991px",
				width         : "100%",
				paddingTop    : "60px",
				paddingBottom : "60px",
				paddingLeft   : "30px",
				paddingRight  : "0px",
			}}
		>
			<div
				style={{
					height     : "100%",
					width      : "100%",
					display    : "flex",
					alignItems : "flex-end",
				}}
			>
				<div
					style={{
						width         : "68%",
						height        : "100%",
						display       : "flex",
						flexDirection : "column",
						gap           : "35px !important",
					}}
				>
					<div
						style={{
							width        : "100%",
							paddingRight : "50px",
							display      : "flex",
							alignItems   : "flex-end",
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
					</div>
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
							width      : "100%",
							display    : "flex",
							alignItems : "flex-start",
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

export default Mod52Pdf;
