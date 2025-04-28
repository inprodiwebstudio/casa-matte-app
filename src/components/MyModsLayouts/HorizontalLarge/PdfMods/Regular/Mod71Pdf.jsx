import React, { useEffect, useState } from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html            from "react-pdf-html";
import ReactDOMServer  from "react-dom/server";
import { textToImage } from "helpers";


const Mod71Pdf = ({
	text,
	images,
	modLayout,
	pageNo,
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
				height         : "850px",
				paddingLeft    : "23%",
				paddingRight   : "23%",
				width          : "100%",
				display        : "flex",
				alignItems     : "center",
				justifyContent : "center",
			}}
		>
			<div
				style={{
					width : "98%",
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

export default Mod71Pdf;
