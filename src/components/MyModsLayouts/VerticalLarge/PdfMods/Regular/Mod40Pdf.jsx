import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html                          from "react-pdf-html";
import ReactDOMServer                from "react-dom/server";
import DividerLayoutPdf              from "components/LayoutHandler/DividerLayoutPdf";
import { shallowEqual, useSelector } from "react-redux";


const Mod40Pdf = ({
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
					gap            : "10px",
				}}
			>
				<div
					style={{
						width          : "100%",
						display        : "flex",
						justifyContent : "flex-end",
						alignItems     : "flex-end",
					}}
				>
					<DividerLayoutPdf w="8%" />
				</div>
				<div style={{
					width      : "100%",
					display    : "flex",
					alignItems : "flex-end",
				}}>
					<div
						style={{
							width : "47%",
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
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod40Pdf;
