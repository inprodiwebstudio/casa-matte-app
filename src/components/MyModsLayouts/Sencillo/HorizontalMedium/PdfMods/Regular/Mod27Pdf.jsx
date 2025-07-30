import React from "react";

//Own components
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";
import { imgUrlPdf }  from "helpers";
// eslint-disable-next-line import/extensions

const Mod27Pdf = ({images}) => {

	const bodyHtml = (
		<div
			style={{
				height  : "615px",
				padding : "10%",
				width   : "100%",
			}}
		>
			<div
				style={{
					display       : "flex",
					flexDirection : "row",
					gap           : "10px",
					height        : "100%",
					width         : "100%",
					overflow      : "hidden",
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
								alt={images[0]?.url}
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
						display       : "flex",
						flexDirection : "column",
						width         : "calc(50% - 5px)",
						height        : "100%",
						gap           : "10px",
						overflow      : "hidden",
					}}
				>
					<div
						style={{
							height     : "calc(50% - 5px)",
							width      : "100%",
							overflow   : "hidden",
							background : "#E3E3E3",
						}}
					>
						{
							images[1]?.url && (
								<img
									src={imgUrlPdf(images[1])}
									alt={images[1]?.url}
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
							height     : "calc(50% - 5px)",
							width      : "100%",
							overflow   : "hidden",
							background : "#E3E3E3",
						}}
					>
						{
							images[2]?.url && (
								<img
									src={imgUrlPdf(images[2])}
									alt={images[2]?.url}
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

export default Mod27Pdf;
