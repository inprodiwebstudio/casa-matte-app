import React, { useEffect, useState } from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html            from "react-pdf-html";
import ReactDOMServer  from "react-dom/server";
import { textToImage } from "helpers";


const Mod64Pdf = ({
	text,
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
				height       : "850px",
				width        : "100%",
				padding      : "10%",
				paddingLeft  : "30%",
				paddingRight : "30%",
				overflow     : "hidden",
			}}
		>
			<div
				style={{
					minWidth       : "100%",
					height         : "100%",
					display        : "flex",
					justifyContent : "center",
					alignItems     : "center",
				}}
			>
				<div
					style={{
						width          : "90%",
						display        : "flex",
						flexDirection  : "column",
						gap            : "10px",
						justifyContent : "center",
						alignItems     : "center",
					}}
				>
					<div
						style={{
							width : "100%",
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
							width : "100%",
						}}
					>
						<div
							style={{
								width : "100%",
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
			</div>
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod64Pdf;
