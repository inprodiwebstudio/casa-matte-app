import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html                          from "react-pdf-html";
import ReactDOMServer                from "react-dom/server";
import { shallowEqual, useSelector } from "react-redux";


const Mod49Pdf = ({
	text,
	modLayout,
	pageNo,
}) => {

	const textImgsDictionary = useSelector((state) => state.workSpaceSlice.textsImgs, shallowEqual);
	const myTextImgsMod = {
		0 : textImgsDictionary[`${pageNo}-${modLayout}-text1`]?.textImg ?? null,
		1 : textImgsDictionary[`${pageNo}-${modLayout}-text2`]?.textImg ?? null,
	};

	const bodyHtml = (
		<div
			style={{
				height       : "991px",
				width        : "100%",
				padding      : "70px",
				paddingRight : "70px",
				paddingLeft  : "20px",
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
				<div
					style={{
						width         : "27%",
						display       : "flex",
						flexDirection : "column",
						gap           : "15px",
					}}
				>
					<div
						style={{
							width : "100%",
						}}
					>
						{
							myTextImgsMod[0] &&
							<img
								src={myTextImgsMod[0]}
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
							myTextImgsMod[1] &&
							<img
								src={myTextImgsMod[1]}
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

export default Mod49Pdf;
