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
				height        : "792px",
				width         : "100%",
				// paddingRight  : "50px",
				paddingBottom : "40px",
				paddingRight  : "50px",
			}}
		>

			<div
				style={{
					height         : "100%",
					width          : "100%",
					display        : "flex",
					justifyContent : "flex-end",
					alignItems     : "end",
					gap            : "0px",
				}}
			>
				<div style={{
					width      : "100%",
					display    : "flex",
					alignItems : "flex-end",
				}}>
					<div
						style={{
							width         : "50%",
							display       : "flex",
							flexDirection : "column",
							gap           : "15px",
						}}
					>
						<div
							style={{
								width         : "100%",
								display       : "flex",
								flexDirection : "column",
								alignItems    : "flex-start",
								gap           : "0px",
							}}
						>
							<div
								style={{
									width : "100%",
								}}
							>
								{imgSrc.imgText01 && <img style={{ objectFit : "cover" }} src={imgSrc.imgText01} alt="Captura de texto" />}
							</div>
						</div>
						<div
							style={{
								width : "100%",
							}}
						>
							{imgSrc.imgText02 && <img style={{ objectFit : "cover" }} src={imgSrc.imgText02} alt="Captura de texto" />}
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
