import React, { useEffect, useState } from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

import { imgUrlPdf, textToImage } from "helpers";

const Mod52Pdf = ({
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
				height        : "792px",
				width         : "100%",
				paddingTop    : "45px",
				paddingBottom : "45px",
				paddingLeft   : "30px",
				paddingRight  : "0px",
			}}
		>
			<div
				style={{
					height     : "100%",
					width      : "100%",
					display    : "flex",
					alignItems : "flex-end",
				}}
			>
				<div
					style={{
						width         : "68%",
						height        : "100%",
						display       : "flex",
						flexDirection : "column",
						gap           : "15px !important",
					}}
				>
					<div
						style={{
							width        : "100%",
							paddingRight : "50px",
							display      : "flex",
							alignItems   : "flex-end",
						}}
					>
						<div
							style={{
								width : "90%",
							}}
						>
							{imgSrc.imgText01 && <img style={{ objectFit : "cover" }} src={imgSrc.imgText01} alt="Captura de texto" />}
						</div>
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
							width      : "100%",
							display    : "flex",
							alignItems : "flex-start",
						}}
					>
						<div
							style={{
								width : "50%",
							}}
						>
							{imgSrc.imgText02 && <img style={{ objectFit : "cover" }} src={imgSrc.imgText02} alt="Captura de texto" />}
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

export default Mod52Pdf;
