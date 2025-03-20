import React, { useEffect, useState } from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html            from "react-pdf-html";
import ReactDOMServer  from "react-dom/server";
import { textToImage } from "helpers";


const Mod41Pdf = ({
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
				height  : "991px",
				width   : "100%",
				padding : "60px",
			}}
		>

			<div
				style={{
					height         : "100%",
					width          : "100%",
					display        : "flex",
					justifyContent : "flex-end",
					alignItems     : "end",
					gap            : "20px",
				}}
			>
				<div style={{
					width      : "100%",
					display    : "flex",
					alignItems : "flex-end",
				}}>
					<div
						style={{
							width         : "385px",
							display       : "flex",
							flexDirection : "column",
							gap           : "20px",
						}}
					>
						<div
							style={{
								width         : "100%",
								display       : "flex",
								flexDirection : "column",
								alignItems    : "flex-start",
								gap           : "10px",
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

export default Mod41Pdf;
