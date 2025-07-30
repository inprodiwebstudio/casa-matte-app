import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

import { imgUrlPdf } from "helpers";


const Mod15Pdf = ({images}) => {
	const bodyHtml = (
		<div
			style={{
				height  : "991px",
				width   : "100%",
				padding : "20px",
			}}
		>
			<div
				style={{
					height        : "100%",
					width         : "100%",
					display       : "flex",
					flexDirection : "column",
					gap           : "10px",
				}}
			>
				<div
					style={{
						width         : "100%",
						height        : "calc(50% - 5px)",
						display       : "flex",
						flexDirection : "row",
						gap           : "10px",
					}}
				>
					<div
						style={{
							width      : "calc(30% - 5px)",
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
										height    : "100%",
										objectFit : "cover",
									}}
								/>
							)
						}
					</div>
					<div
						style={{
							width      : "calc(70% - 5px)",
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
										height    : "100%",
										objectFit : "cover",
									}}
								/>
							)
						}
					</div>
				</div>
				<div
					style={{
						width      : "100%",
						height     : "calc(50% - 5px)",
						background : "#E3E3E3",
						overflow   : "hidden",
					}}
				>
					{
						images[2]?.url && (
							<img
								src={imgUrlPdf(images[2])}
								alt="test"
								style={{
									height    : "100%",
									objectFit : "cover",
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

export default Mod15Pdf;
