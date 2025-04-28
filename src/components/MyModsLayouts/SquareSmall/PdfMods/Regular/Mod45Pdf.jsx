import React, { useEffect, useState } from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html             from "react-pdf-html";
import ReactDOMServer   from "react-dom/server";
import DividerLayoutPdf from "components/LayoutHandler/DividerLayoutPdf";
import { textToImage }  from "helpers";


const Mod45Pdf = ({
	text,
	pageNo,
	modLayout,
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
				height        : "595px",
				width         : "100%",
				padding       : "30px",
				paddingBottom : "25px",
			}}
		>

			<div
				style={{
					height         : "100%",
					width          : "100%",
					display        : "flex",
					justifyContent : "flex-end",
					alignItems     : "flex-end",
					gap            : "20px",
				}}
			>
				<div style={{
					width          : "100%",
					height         : "100%",
					display        : "flex",
					alignItems     : "flex-end",
					justifyContent : "flex-end",
				}}>
					<div
						style={{
							width         : "300px",
							display       : "flex",
							flexDirection : "column",
							gap           : "4px",
						}}
					>
						<div
							style={{
								width          : "100%",
								display        : "flex",
								flexDirection  : "column",
								justifyContent : "center",
								alignItems     : "center",
								gap            : "0px",
							}}
						>
							<div
								style={{
									width : "90%",
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
									width : "90%",
								}}
							>
								<DividerLayoutPdf w="10%" />
							</div>
						</div>
						<div
							style={{
								display        : "flex",
								justifyContent : "center",
								alignItems     : "center",
								width          : "100%",
							}}
						>
							<div
								style={{
									width : "90%",
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
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod45Pdf;
