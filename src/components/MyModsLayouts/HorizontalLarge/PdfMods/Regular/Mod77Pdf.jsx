import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

import { imgUrlPdf } from "helpers";

const Mod77Pdf = ({text, images}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: right;'><span style='font-size: 18px; font-family: JosefinSans-Light;'>Subtítulo 2</span></p>";

	const bodyHtml = (
		<div
			style={{
				height       : "850px",
				width        : "100%",
				padding      : "14%",
				paddingLeft  : "12%",
				paddingRight : "12%",
			}}
		>
			<div
				style={{
					display        : "flex",
					justifyContent : "flex-end",
					alignItems     : "flex-end",
					flexDirection  : "column",
					gap            : "10px",
					height         : "100%",
					width          : "100%",
				}}
			>
				<div
					style={{
						width          : "100%",
						height         : "100%",
						display        : "flex",
						flexDirection  : "row",
						justifyContent : "center",
						alignItems     : "center",
						gap            : "10px",
					}}
				>
					<div
						style={{
							width      : "calc(50% - 5px)",
							height     : "100%",
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
							width      : "calc(50% - 5px)",
							height     : "100%",
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
				</div>
				<div
					style={{
						marginTop      : "10px",
						width          : "100%",
						maxHeight      : "6%",
						display        : "flex",
						justifyContent : "flex-end",
						alignItems     : "flex-end",
						overflow       : "hidden",
					}}
				>
					<div
						style={{
							letterSpacing : "0.5px",
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

export default Mod77Pdf;
