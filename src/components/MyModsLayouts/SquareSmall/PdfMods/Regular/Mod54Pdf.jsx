import React, { useEffect, useState } from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html            from "react-pdf-html";
import ReactDOMServer  from "react-dom/server";
import { textToImage } from "helpers";


const Mod54Pdf = ({
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
				height         : "595px",
				width          : "100%",
				display        : "flex",
				alignItems     : "center",
				justifyContent : "center",
			}}
		>
			<div
				style={{
					width : "60%",
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

export default Mod54Pdf;
