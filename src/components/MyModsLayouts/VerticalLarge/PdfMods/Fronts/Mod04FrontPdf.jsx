import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

import { imgUrlPdf } from "helpers";

const Mod04FrontPdf = ({text, images}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: right;'><span style='font-size: 42px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	const text02 = text[1] ? text[1] : "<p style='text-align: right;'><span style='font-size: 18px; font-family: Inter-Light;'>SUBTÍTULO</span></p>";

	const bodyHtml = (
		<div
			style={{
				height       : "991px",
				width        : "100%",
				paddingTop   : "8%",
				paddingRight : "8%",
			}}
		>
			<div
				style={{
					height        : "100%",
					width         : "100%",
					display       : "flex",
					flexDirection : "column",
					gap           : "20px",
				}}
			>
				<div
					style={{
						width          : "100%",
						display        : "flex",
						justifyContent : "flex-end",
						alignItems     : "flex-end",
						flexDirection  : "column",
						gap            : "10px",
					}}
				>
					<div
						style={{
							width : "auto",
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
					<div
						style={{
							width : "auto",
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
                                 ${text02}`,
							}}
						/>
					</div>
				</div>
				<div
					style={{
						height         : "100%",
						width          : "83%",
						overflow       : "hidden",
						display        : "flex",
						justifyContent : "flex-start",
						alignItems     : "flex-start",
						background     : "#E3E3E3",
					}}
				>
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
				</div>
			</div>
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod04FrontPdf;
