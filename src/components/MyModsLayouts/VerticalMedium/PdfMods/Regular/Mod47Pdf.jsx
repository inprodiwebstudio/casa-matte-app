import React, { useEffect, useState } from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html            from "react-pdf-html";
import ReactDOMServer  from "react-dom/server";
import { textToImage } from "helpers";


const Mod47Pdf = ({
	text,
	keyIndex,
	modLayout,
	pageNo,
}) => {

	const [imgSrc, setImgSrc] = useState({
		imgText01 : undefined,
		imgText02 : undefined,
		imgText03 : undefined,
		imgText04 : undefined,
		imgText05 : undefined,
		imgText06 : undefined,
	});

	const insertImg = async () => {
		const imgText01 = await textToImage(`${pageNo}-${keyIndex}-${modLayout}-text1`);
		const imgText02 = await textToImage(`${pageNo}-${keyIndex}-${modLayout}-text2`);
		const imgText03 = await textToImage(`${pageNo}-${keyIndex}-${modLayout}-text3`);
		const imgText04 = await textToImage(`${pageNo}-${keyIndex}-${modLayout}-text4`);
		const imgText05 = await textToImage(`${pageNo}-${keyIndex}-${modLayout}-text5`);
		const imgText06 = await textToImage(`${pageNo}-${keyIndex}-${modLayout}-text6`);

		setImgSrc({
			imgText01 : imgText01,
			imgText02 : imgText02,
			imgText03 : imgText03,
			imgText04 : imgText04,
			imgText05 : imgText05,
			imgText06 : imgText06,
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
				padding : "20px",
			}}
		>

			<div
				style={{
					height         : "100%",
					width          : "100%",
					display        : "flex",
					justifyContent : "center",
					alignItems     : "center",
				}}
			>
				<div style={{
					width          : "30%",
					height         : "100%",
					display        : "flex",
					flexDirection  : "column",
					gap            : "30px",
					justifyContent : "center",
					alignItems     : "center",
				}}>
					<div
						style={{
							width          : "100%",
							display        : "flex",
							flexDirection  : "column",
							gap            : "10px",
							justifyContent : "flex-start",
							alignItems     : "flex-start",
						}}
					>
						<div>
							{imgSrc.imgText01 && <img src={imgSrc.imgText01} alt="Captura de texto" />}
						</div>
						<div>
							{imgSrc.imgText02 && <img src={imgSrc.imgText02} alt="Captura de texto" />}
						</div>
					</div>
					<div
						style={{
							width          : "100%",
							display        : "flex",
							flexDirection  : "column",
							gap            : "10px",
							justifyContent : "flex-start",
							alignItems     : "flex-start",
						}}
					>
						<div>
							{imgSrc.imgText03 && <img src={imgSrc.imgText03} alt="Captura de texto" />}
						</div>
						<div>
							{imgSrc.imgText04 && <img src={imgSrc.imgText04} alt="Captura de texto" />}
						</div>
					</div>
					<div
						style={{
							width          : "100%",
							display        : "flex",
							flexDirection  : "column",
							gap            : "10px",
							justifyContent : "flex-start",
							alignItems     : "flex-start",
						}}
					>
						<div>
							{imgSrc.imgText05 && <img src={imgSrc.imgText05} alt="Captura de texto" />}
						</div>
						<div>
							{imgSrc.imgText06 && <img src={imgSrc.imgText06} alt="Captura de texto" />}
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

export default Mod47Pdf;
