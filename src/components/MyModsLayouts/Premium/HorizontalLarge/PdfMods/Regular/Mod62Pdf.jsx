import React, { useEffect, useState } from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html            from "react-pdf-html";
import ReactDOMServer  from "react-dom/server";
import { textToImage } from "helpers";


const Mod62Pdf = ({
	text,
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
		const imgText01 = await textToImage(`${pageNo}-${modLayout}-text1`);
		const imgText02 = await textToImage(`${pageNo}-${modLayout}-text2`);
		const imgText03 = await textToImage(`${pageNo}-${modLayout}-text3`);
		const imgText04 = await textToImage(`${pageNo}-${modLayout}-text4`);
		const imgText05 = await textToImage(`${pageNo}-${modLayout}-text5`);
		const imgText06 = await textToImage(`${pageNo}-${modLayout}-text6`);

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
				height   : "850px",
				width    : "100%",
				padding  : "4%",
				overflow : "hidden",
			}}
		>

			<div
				style={{
					height         : "100%",
					width          : "100%",
					display        : "flex",
					justifyContent : "flex-end",
					alignItems     : "flex-end",
				}}
			>
				<div style={{
					width          : "20%",
					height         : "100%",
					display        : "flex",
					flexDirection  : "column",
					gap            : "10px",
					justifyContent : "flex-end",
					alignItems     : "flex-start",
				}}>
					<div
						style={{
							width          : "100%",
							display        : "flex",
							flexDirection  : "column",
							gap            : "0px",
							justifyContent : "flex-start",
							alignItems     : "flex-start",
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
					<div
						style={{
							width          : "100%",
							display        : "flex",
							flexDirection  : "column",
							gap            : "0px",
							justifyContent : "flex-start",
							alignItems     : "flex-start",
						}}
					>
						<div
							style={{
								width : "100%",
							}}
						>
							{
								imgSrc.imgText03 &&
								<img
									src={imgSrc.imgText03}
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
							{
								imgSrc.imgText04 &&
								<img
									src={imgSrc.imgText04}
									alt="Captura de texto"
									style={{ objectFit : "cover" }}
								/>
							}
						</div>
					</div>
					<div
						style={{
							width          : "100%",
							display        : "flex",
							flexDirection  : "column",
							gap            : "0px",
							justifyContent : "flex-start",
							alignItems     : "flex-start",
						}}
					>
						<div
							style={{
								width : "100%",
							}}
						>
							{
								imgSrc.imgText05 &&
								<img
									src={imgSrc.imgText05}
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
							{
								imgSrc.imgText06 &&
								<img
									src={imgSrc.imgText06}
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

export default Mod62Pdf;
