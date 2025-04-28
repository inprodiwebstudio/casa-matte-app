import React, { useEffect, useState } from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html            from "react-pdf-html";
import ReactDOMServer  from "react-dom/server";
import { textToImage } from "helpers";


const Mod37Pdf = ({
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
				height         : "615px",
				width          : "100%",
				padding        : "4%",
				paddingBottom  : "3%",
				display        : "flex",
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
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod37Pdf;
