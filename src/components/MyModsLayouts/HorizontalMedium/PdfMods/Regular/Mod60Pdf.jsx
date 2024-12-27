import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

import { imgUrlPdf } from "helpers";

const Mod60Pdf = ({text, images}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: right;'><span style='font-size: 14px; font-family: JosefinSans-Light;'>Subtítulo 2</span></p>";

	const bodyHtml = (
		<div
			style={{
				height       : "615px",
				width        : "100%",
				padding      : "10%",
				paddingLeft  : "11%",
				paddingRight : "11%",
			}}
		>
			<div
				style={{
					display        : "flex",
					justifyContent : "flex-end",
					alignItems     : "flex-end",
					flexDirection  : "column",
					gap            : "15px",
					height         : "100%",
					width          : "100%",
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
						gap            : "10px",
					}}
				>
					<div
						style={{
							width          : "100%",
							height         : "calc(50% - 5px)",
							display        : "flex",
							flexDirection  : "row",
							gap            : "10px",
							justifyContent : "center",
							alignItems     : "center",
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
								images[1]?.url && (
									<img
										src={imgUrlPdf(images[1])}
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
							height         : "calc(50% - 5px)",
							display        : "flex",
							flexDirection  : "row",
							gap            : "10px",
							justifyContent : "center",
							alignItems     : "center",
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
								images[2]?.url && (
									<img
										src={imgUrlPdf(images[2])}
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
								images[3]?.url && (
									<img
										src={imgUrlPdf(images[3])}
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
				<div
					style={{
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

export default Mod60Pdf;
