import React, { useEffect, useState } from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html             from "react-pdf-html";
import ReactDOMServer   from "react-dom/server";
import DividerLayoutPdf from "components/LayoutHandler/DividerLayoutPdf";
import { textToImage }  from "helpers";


const Mod38Pdf = ({
	text,
	keyIndex,
	modLayout,
	pageNo,
}) => {

	const [imgSrc, setImgSrc] = useState({
		imgText01 : undefined,
		imgText02 : undefined,
	});

	const insertImg = async () => {
		const imgText01 = await textToImage(`${pageNo}-${keyIndex}-${modLayout}-text1`);
		const imgText02 = await textToImage(`${pageNo}-${keyIndex}-${modLayout}-text2`);

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
				padding       : "60px",
				paddingBottom : "40px",
			}}
		>

			<div
				style={{
					height         : "100%",
					width          : "100%",
					display        : "flex",
					justifyContent : "flex-end",
					alignItems     : "end",
					gap            : "15px",
				}}
			>
				<div
					style={{
						width          : "100%",
						display        : "flex",
						justifyContent : "flex-end",
						alignItems     : "flex-end",
					}}
				>
					<DividerLayoutPdf w="7%" />
				</div>
				<div
					style={{
						display       : "flex",
						flexDirection : "column",
						gap           : "5px",
					}}
				>
					<div
						style={{width : "100%"}}
					>
						{imgSrc.imgText01 && <img src={imgSrc.imgText01} alt="Captura de texto" />}
					</div>
					<div
						style={{width : "100%"}}
					>
						{imgSrc.imgText02 && <img src={imgSrc.imgText02} alt="Captura de texto" />}
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

export default Mod38Pdf;
