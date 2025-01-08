import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

import { imgUrlPdf } from "helpers";

const Mod36Pdf = ({text, images}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: right;'><span style='font-size: 32px; font-family: Aitana-Regular;'>SANTIAGO</span></p>";

	const text02 = text[1] ? text[1] : "<p style='text-align: left;'><span style='font-size: 15px; font-family: Inter-Lifght;'>CHILE</span></p>";

	const bodyHtml = (
		<div
			style={{
				height        : "850px",
				width         : "100%",
				paddingTop    : "15%",
				display       : "flex",
				alignItems    : "flex-end",
				flexDirection : "column",
			}}
		>
			<div
				style={{
					width    : "70%",
					height   : "80%",
					overflow : "hidden",
				}}
			>
				<div
					style={{
						width          : "100%",
						height         : "100%",
						display        : "flex",
						justifyContent : "flex-start",
						flexDirection  : "column",
						gap            : "30px",
					}}
				>
					<div
						style={{
							width         : "100%",
							height        : "100%",
							display       : "flex",
							flexDirection : "column",
							gap           : "50px",
						}}
					>
						<div
							style={{
								width          : "100%",
								display        : "flex",
								alignItems     : "flex-end",
								justifyContent : "flex-end",
								paddingRight   : "10%",
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
					</div>
					<div
						style={{
							width          : "100%",
							display        : "flex",
							alignItems     : "flex-start",
							justifyContent : "flex-start",
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

export default Mod36Pdf;
