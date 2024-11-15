import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

import { imgUrlPdf } from "helpers";


const Mod32Pdf = ({images}) => {
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
					flexDirection : "row",
					gap           : "10px",
				}}
			>
				<div
					style={{
						width         : "calc(60% - 5px)",
						height        : "100%",
						display       : "flex",
						flexDirection : "column",
						gap           : "10px",
					}}
				>
					<div
						style={{
							height     : "calc(33.33% - 6.667px)",
							width      : "100%",
							gap        : "10px",
							background : "#E3E3E3",
							overflow   : "hidden",
						}}
					>
						{
							images[0]?.url && (
								<img
									src={imgUrlPdf(images[0])}
									alt="test"
									style={{
										height    : "310.333px",
										objectFit : "cover",
									}}
								/>
							)
						}
					</div>
					<div
						style={{
							height     : "calc(33.33% - 6.667px)",
							width      : "100%",
							gap        : "10px",
							background : "#E3E3E3",
							overflow   : "hidden",
						}}
					>
						{
							images[1]?.url && (
								<img
									src={imgUrlPdf(images[1])}
									alt="test"
									style={{
										height    : "310.333px",
										objectFit : "cover",
									}}
								/>
							)
						}
					</div>
					<div
						style={{
							height     : "calc(33.33% - 6.667px)",
							width      : "100%",
							gap        : "10px",
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
										height    : "310.333px",
										objectFit : "cover",
									}}
								/>
							)
						}
					</div>
				</div>
				<div
					style={{
						width         : "calc(40% - 5px)",
						height        : "100%",
						display       : "flex",
						flexDirection : "column",
						gap           : "10px",
					}}
				>
					<div
						style={{
							height     : "calc(50% - 5px)",
							width      : "100%",
							background : "#E3E3E3",
							overflow   : "hidden",
						}}
					>
						{
							images[3]?.url && (
								<img
									src={imgUrlPdf(images[3])}
									alt="test"
									style={{
										height    : "470.5px",
										objectFit : "cover",
									}}
								/>
							)
						}
					</div>
					<div
						style={{
							height     : "calc(50% - 5px)",
							width      : "100%",
							background : "#E3E3E3",
							overflow   : "hidden",
						}}
					>
						{
							images[4]?.url && (
								<img
									src={imgUrlPdf(images[4])}
									alt="test"
									style={{
										height    : "470.5px",
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


export default Mod32Pdf;
