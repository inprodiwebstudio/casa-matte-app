import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";
import { imgUrlPdf }  from "helpers";


const Mod11FrontPdf = ({text, images}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: right;'><span style='font-size: 48px; font-family: Aitana-Regular;'>TÍTULO</span></p>";

	const text02 = text[1] ? text[1] : "<p style='text-align: left;'><span style='font-size: 18px; font-family: Inter-Lifght;'>SUBTÍTULO</span></p>";

	const bodyHtml = (
		<div
			style={{
				height : "850px",
				width  : "100%",
			}}
		>
			<div
				style={{
					display       : "flex",
					flexDirection : "row",
					position      : "relative",
				}}
			>
				<div
					style={{
						height     : "100%px",
						width      : "750px",
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
						display        : "flex",
						flexDirection  : "row",
						justifyContent : "space-between",
						position       : "absolute",
						top            : "0px",
						left           : "0px",
						bottom         : "0px",
						right          : "0px",
						width          : "100%",
						paddingTop     : "90.6%",
						paddingLeft    : "8%",
						paddingRight   : "8%",
						transform      : "rotate(-90deg)",
						overflow       : "hidden",
					}}
				>
					<div
						style={{
							textTransform : "uppercase",
							overflow      : "hidden",
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
							textTransform : "uppercase",
							marginTop     : "2%",
							overflow      : "hidden",
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

export default Mod11FrontPdf;
