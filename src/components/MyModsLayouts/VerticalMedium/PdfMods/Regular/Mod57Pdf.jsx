import React, { useEffect, useState } from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

import { imgUrlPdf, textToImage } from "helpers";


const Mod57Pdf = ({
	text,
	images,
	keyIndex,
	modLayout,
	pageNo,
}) => {

	const [imgSrc, setImgSrc] = useState({
		imgText01 : undefined,
	});

	const insertImg = async () => {
		const imgText01 = await textToImage(`${pageNo}-${keyIndex}-${modLayout}-text1`);

		setImgSrc({
			imgText01 : imgText01,
		});
	};

	useEffect(() => {
		insertImg();
	}, []);

	const bodyHtml = (
		<div
			style={{
				height  : "792px",
				width   : "100%",
				padding : "10%",
			}}
		>
			<div
				style={{
					height        : "100%",
					width         : "100%",
					display       : "flex",
					flexDirection : "column",
					gap           : "20px",
				}}
			>
				<div
					style={{
						width          : "100%",
						display        : "flex",
						justifyContent : "center",
						alignItems     : "center",
					}}
				>
					<div
						style={{
							width : "65%",
						}}
					>
						{imgSrc.imgText01 &&
						<img
							src={imgSrc.imgText01}
							alt="Captura de texto"
							style={{ objectFit : "cover" }}
						/>}
					</div>
				</div>
				<div
					style={{
						display       : "flex",
						height        : "100%",
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
								height     : "100%",
								width      : "calc(50% - 5px)",
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
			</div>
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod57Pdf;
