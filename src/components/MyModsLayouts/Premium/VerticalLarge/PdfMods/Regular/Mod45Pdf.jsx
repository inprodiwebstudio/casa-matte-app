import React, { useEffect, useState } from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html            from "react-pdf-html";
import ReactDOMServer  from "react-dom/server";
import { textToImage } from "helpers";


const Mod45Pdf = ({
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
					width          : "47%",
					height         : "100%",
					display        : "flex",
					flexDirection  : "column",
					gap            : "35px !important",
					justifyContent : "center",
				}}>
					<div
						style={{
							width          : "100%",
							display        : "flex",
							flexDirection  : "column",
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
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod45Pdf;
