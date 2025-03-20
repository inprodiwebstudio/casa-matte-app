import React, { useEffect, useState } from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

import { imgUrlPdf, textToImage } from "helpers";

const Mod51Pdf = ({
	text,
	images,
	modLayout,
	pageNo,
}) => {

	const [imgSrc, setImgSrc] = useState({
		imgText01 : undefined,
		imgText02 : undefined,
	});

	const insertImg = async () => {
		const imgText01 = await textToImage(`${pageNo}-${modLayout}-text1`);
		const imgText02 = await textToImage(`${pageNo}-${modLayout}-text2`);

		setImgSrc({
			imgText01 : imgText01,
			imgText02 : imgText02,
		});
	};

	useEffect(() => {
		insertImg();
	}, []);

	const bodyHtml = (
		<div
			style={{
				height        : "991px",
				width         : "100%",
				paddingTop    : "75px",
				paddingBottom : "75px",
				paddingLeft   : "30px",
				paddingRight  : "30px",
			}}
		>
			<div
				style={{
					height         : "100%",
					width          : "100%",
					display        : "flex",
					gap            : "40px",
					justifyContent : "center",
					alignItems     : "center",
				}}
			>
				<div
					style={{
						width : "70%",
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
				<div
					style={{
						height     : "100%",
						width      : "100%",
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
						width : "60%",
					}}
				>
					{
						imgSrc.imgText02 &&
							<img
								src={imgSrc.imgText02}
								alt="Captura de texto"
								style={{ objectFit : "cover" }}
							/>
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

export default Mod51Pdf;
