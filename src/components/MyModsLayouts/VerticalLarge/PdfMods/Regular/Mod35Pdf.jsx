import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html                          from "react-pdf-html";
import ReactDOMServer                from "react-dom/server";
import { shallowEqual, useSelector } from "react-redux";


const Mod35Pdf = ({
	text,
	modLayout,
	pageNo,
}) => {

	const textImgsDictionary = useSelector((state) => state.workSpaceSlice.textsImgs, shallowEqual);
	const myTextImgsMod = {
		0 : textImgsDictionary[`${pageNo}-${modLayout}-text1`]?.textImg ?? null,
	};

	const bodyHtml = (
		<div
			style={{
				height         : "991px",
				width          : "100%",
				display        : "flex",
				flexDirection  : "center",
				justifyContent : "center",
				alignItems     : "center",
			}}
		>
			<div
				style={{
					width : "70%",
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
			</div>
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod35Pdf;
