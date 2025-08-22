import React from "react";

//Own components
import { resizerImage }   from "helpers";
import { selectPhotoUrl } from "../../ModsConstants";
import Html               from "react-pdf-html";
import ReactDOMServer     from "react-dom/server";


const Mod14Pdf = ({images}) => {
	const bodyHtml = (
		<div
			style={{
				height        : "991px",
				width         : "850px",
				padding       : "202",
				paddingLeft   : "15px",
				paddingRight  : "15px",
				display       : "flex",
				flexDirection : "row",
			}}
		>
			<div
				style={{
					width      : "calc(50% - 10px)",
					height     : "100%",
					overflow   : "hidden",
					background : "white",
				}}
			>
				{
					images[0]?.url && (
						<img
							src={resizerImage(selectPhotoUrl(images[0]), 385, 587)}
							alt="test"
							style={{
								height    : "991px",
								objectFit : "cover",
							}}
						/>
					)
				}
			</div>
			<div style={{width : "10px"}}>
				&nbsp;
			</div>
			<div
				style={{
					width      : "calc(50% - 10px)",
					height     : "100%",
					overflow   : "hidden",
					background : "white",
				}}
			>
				{
					images[1]?.url && (
						<img
							src={resizerImage(selectPhotoUrl(images[1]), 385, 587)}
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
