import React, { useEffect, useState } from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

import { imgUrlPdf, textToImage } from "helpers";


const Mod57Pdf = ({
	images,
	text,
	pageNo,
	modLayout,
}) => {

	const [imgSrc, setImgSrc] = useState({
		imgText01 : undefined,
	});

	const insertImg = async () => {
		const imgText01 = await textToImage(`${pageNo}-${modLayout}-text1`);

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
				height        : "595px",
				width         : "100%",
				paddingTop    : "0px",
				paddingBottom : "50px",
			}}
		>
			<div
				style={{
					height        : "100%",
					width         : "100%",
					display       : "flex",
					flexDirection : "column",
					gap           : "50px",
				}}
			>
				<div
					style={{
						width      : "100%",
						height     : "80%",
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
						width         : "100%",
						display       : "flex",
						alignItems    : "flex-end",
						flexDirection : "column",
						gap           : "0px",
					}}
				>
					<div
						style={{
							width : "93%",
						}}
					>
						{
							imgSrc.imgText01 &&
							<img
								src={imgSrc.imgText01}
								alt="Captura de texto"
								style={{ objectFit : "cover" }}
							/>
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

export default Mod57Pdf;
