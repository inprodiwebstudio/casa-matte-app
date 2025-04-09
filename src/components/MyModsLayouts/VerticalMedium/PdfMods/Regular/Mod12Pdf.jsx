import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

import { imgUrlPdf } from "helpers";


const Mod12Pdf = ({images}) => {
	const bodyHtml = (
		<div
			style={{
				height         : "832px",
				width          : "652px",
				display        : "flex",
				justifyContent : "center",
				alignItems     : "center",
				position       : "relative",
			}}
		>
			<div
				style={{
					position     : "absolute",
					top          : "0",
					left         : "0",
					width        : "20px",
					height       : "20px",
					borderBottom : "1px solid black",
					borderRight  : "1px solid black",
				}}
			>
				&nbsp;
			</div>
			<div
				style={{
					position     : "absolute",
					top          : "0",
					left         : "632px",
					width        : "20px",
					height       : "20px",
					borderBottom : "1px solid black",
					borderLeft   : "1px solid black",
				}}
			>
				&nbsp;
			</div>
			<div
				style={{
					position   : "absolute",
					top        : "812px",
					left       : "632px",
					width      : "20px",
					height     : "20px",
					borderTop  : "1px solid black",
					borderLeft : "1px solid black",
				}}
			>
				&nbsp;
			</div>
			<div
				style={{
					position    : "absolute",
					top         : "812px",
					left        : "0",
					width       : "20px",
					height      : "20px",
					borderTop   : "1px solid black",
					borderRight : "1px solid black",
				}}
			>
				&nbsp;
			</div>
			<div
				style={{
					height  : "792px",
					width   : "612px",
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
								width    : "calac(50% - 5px)",
								height   : "100%",
								overflow : "hidden",
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
								width    : "calac(50% - 5px)",
								height   : "100%",
								overflow : "hidden",
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
							width    : "100%",
							height   : "calc(50% - 5px)",
							overflow : "hidden",
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
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod12Pdf;
