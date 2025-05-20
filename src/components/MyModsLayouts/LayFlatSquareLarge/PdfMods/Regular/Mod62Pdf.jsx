import React from "react";

//Own components
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";
import { imgUrlPdf }  from "helpers";
// eslint-disable-next-line import/extensions

const Mod62Pdf = ({images}) => {
	const bodyHtml = (
		<div
			style={{
				height      : "100%",
				width       : "100%",
				paddingLeft : "25%",
			}}
		>
			<div
				style={{
					height   : "100%",
					width    : "100%",
					position : "relative",
				}}
			>
				<div
					style={{
						height     : "100%",
						width      : "100%",
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
						height        : "47%",
						width         : "40%",
						position      : "absolute",
						top           : "28%",
						right         : "87%",
						display       : "flex",
						flexDirection : "row",
						gap           : "10px",
					}}
				>
					<div
						style={{
							width      : "calc(50% - 5px)",
							height     : "100%",
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
							width      : "calc(50% - 5px)",
							height     : "100%",
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

export default Mod62Pdf;
