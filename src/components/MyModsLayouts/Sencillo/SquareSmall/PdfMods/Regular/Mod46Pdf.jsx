import React, { useEffect, useState } from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html            from "react-pdf-html";
import ReactDOMServer  from "react-dom/server";
import { textToImage } from "helpers";


const Mod46Pdf = ({
	text,
	pageNo,
	modLayout,
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
				height         : "595px",
				width          : "100%",
				padding        : "60px",
				paddingBottom  : "50px",
				display        : "flex",
				justifyContent : "center",
				alignItems     : "center",
			}}
		>
			<div
				style={{
					width         : "80%",
					display       : "flex",
					flexDirection : "column",
					gap           : "4px",
					alignItems    : "center",
				}}
			>
				<div
					style={{
						width : "95%",
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
						width : "95%",
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

export default Mod46Pdf;
