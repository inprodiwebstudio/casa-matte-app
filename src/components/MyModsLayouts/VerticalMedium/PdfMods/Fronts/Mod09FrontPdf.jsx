import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";
import { imgUrlPdf }  from "helpers";


const Mod09FrontPdf = ({text, images}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: center;'><span style='font-size: 50px; font-family: Aitana-Regular;'>TÍTULO GRANDE</span></p>";

	const bodyHtml = (
		<div
			style={{
				height : "792px",
				width  : "100%",
			}}
		>
			<div
				style={{
					display       : "flex",
					height        : "100%",
					flexDirection : "row",
					position      : "relative",
				}}
			>
				<div
					style={{
						height     : "100%",
						width      : "530px",
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
				<div
					style={{
						position      : "absolute",
						top           : "0px",
						left          : "0px",
						bottom        : "0px",
						right         : "0px",
						textTransform : "uppercase",
						width         : "792px",
						transform     : "rotate(-90deg)",
						paddingTop    : "68%",
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
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod09FrontPdf;
