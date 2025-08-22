import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

import { imgUrlPdf } from "helpers";


const Mod21Pdf = ({images}) => {
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
						height        : "calc(50% - 5px)",
						width         : "100%",
						display       : "flex",
						flexDirection : "row",
						gap           : "10px",
					}}
				>
					<div
						style={{
							height     : "100%",
							width      : "calc(50% - 5px)",
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
										height    : "100%",
										objectFit : "cover",
									}}
								/>
							)
						}
					</div>
					<div
						style={{
							height     : "100%",
							width      : "calc(50% - 5px)",
							overflow   : "hidden",
							background : "white",
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
						height        : "calc(50% - 5px)",
						width         : "100%",
						display       : "flex",
						flexDirection : "row",
						gap           : "10px",
					}}
				>
					<div
						style={{
							height     : "100%",
							width      : "calc(50% - 5px)",
							overflow   : "hidden",
							background : "white",
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
					<div
						style={{
							height     : "100%",
							width      : "calc(50% - 5px)",
							overflow   : "hidden",
							background : "white",
						}}
					>
						{
							images[3]?.url && (
								<img
									src={imgUrlPdf(images[3])}
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
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod21Pdf;
