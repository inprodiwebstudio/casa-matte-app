import React from "react";

//Own components
import { resizerImage } from "helpers";
// eslint-disable-next-line import/extensions
import { selectPhotoUrl } from "components/LayoutHandler/ImgLayout/imgLayout.helpers";
import Html               from "react-pdf-html";
import ReactDOMServer     from "react-dom/server";


const Mod14Pdf = ({images}) => {
	const bodyHtml = (
		<div
			style={{
				height       : "991px",
				width        : "850px",
				padding      : "98px",
				paddingLeft  : "104px",
				paddingRight : "104px",
			}}
		>
			<div
				style={{
					height     : "calc(50% - 10px)",
					width      : "100%",
					overflow   : "hidden",
					background : "#E3E3E3",
				}}
			>
				{
					images[0]?.url && (
						<img
							src={resizerImage(selectPhotoUrl(images[0]), 622, 387)}
							alt="test"
							style={{
								height    : "991px",
								objectFit : "cover",
							}}
						/>
					)
				}
			</div>
			<div style={{height : "10px"}}>
				&nbsp;
			</div>
			<div
				style={{
					height     : "calc(50% - 10px)",
					width      : "100%",
					overflow   : "hidden",
					background : "#E3E3E3",
				}}
			>
				{
					images[1]?.url && (
						<img
							src={resizerImage(selectPhotoUrl(images[1]), 622, 387)}
							alt="test"
							style={{
								height    : "991px",
								objectFit : "cover",
							}}
						/>
					)
				}
			</div>
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod14Pdf;
