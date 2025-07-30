// eslint-disable-next-line import/no-extraneous-dependencies
// import domtoimage from "dom-to-image";

import { useEffect, useState } from "react";

import { textToImage } from "helpers";


//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod42Pdf = ({
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
					width         : "45%",
					display       : "flex",
					flexDirection : "column",
					gap           : "17px",
				}}>
					<div
						style={{
							width : "100%",
						}}
					>
						{imgSrc.imgText01 && <img src={imgSrc.imgText01} alt="Captura de texto" />}
					</div>
					{imgSrc.imgText02 && <img src={imgSrc.imgText02} alt="Captura de texto" />}
				</div>
			</div>
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod42Pdf;
