import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

import { imgUrlPdf } from "helpers";


const Mod37Pdf = ({images}) => {
	const bodyHtml = (
		<div
			style={{
				height  : "595px",
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
						height        : "181.667px",
						display       : "flex",
						flexDirection : "row",
						gap           : "10px",
					}}
				>
					<div
						style={{
							height     : "100%",
							width      : "181.667px",
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
							width      : "181.667px",
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
							width      : "181.667px",
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
				<div
					style={{
						width         : "100%",
						height        : "181.667px",
						display       : "flex",
						flexDirection : "row",
						gap           : "10px",
					}}
				>
					<div
						style={{
							height     : "100%",
							width      : "181.667px",
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
							width      : "181.667px",
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
							width      : "181.667px",
							background : "#E3E3E3",
							overflow   : "hidden",
						}}
					>
						{
							images[5]?.url && (
								<img
									src={imgUrlPdf(images[5])}
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
						width         : "100%",
						height        : "181.667px",
						display       : "flex",
						flexDirection : "row",
						gap           : "10px",
					}}
				>
					<div
						style={{
							height     : "100%",
							width      : "181.667px",
							background : "#E3E3E3",
							overflow   : "hidden",
						}}
					>
						{
							images[6]?.url && (
								<img
									src={imgUrlPdf(images[6])}
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
							width      : "181.667px",
							background : "#E3E3E3",
							overflow   : "hidden",
						}}
					>
						{
							images[7]?.url && (
								<img
									src={imgUrlPdf(images[7])}
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
							width      : "181.667px",
							background : "#E3E3E3",
							overflow   : "hidden",
						}}
					>
						{
							images[8]?.url && (
								<img
									src={imgUrlPdf(images[8])}
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

export default Mod37Pdf;
