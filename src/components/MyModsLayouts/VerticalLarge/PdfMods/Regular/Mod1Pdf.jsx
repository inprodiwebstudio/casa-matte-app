import React from "react";

//Own components
// import { selectPhotoUrl } from "components/LayoutHandler/ImgLayout/imgLayout.helpers";
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";
// eslint-disable-next-line import/extensions
// import { selectPhotoUrl } from "components/LayoutHandler/ImgLayout/imgLayout.helpers";

const Mod1Pdf = ({images}) => {
	const constructorImg = (urlimg) => {
		if (!urlimg) return;
		const splitImage = urlimg.split("w_");
		const folderName = urlimg.split("/")[urlimg.split("/").length - 2];
		const fileName = urlimg.split("/")[urlimg.split("/").length - 1];

		return `${splitImage[0]}${folderName}/${fileName}`;
	};

	const bodyHtml = (
		<div
			style={{
				height   : "991px",
				width    : "850px",
				// marginLeft : "-100px",
				// marginLeft  : isRightPage ? "850px" : "0px",
				overflow : "hidden",
			}}
		>
			<div
				style={{
					height     : "991px",
					width      : "850px",
					// marginLeft : isRightPage ? "-850px" : "0px",
					// overflow   : "hidden",
					background : "#E3E3E3",
				}}
			>
				{
					images[0]?.url && (
						<img
							src={constructorImg(images[0]?.url)}
							alt="test"
							style={{
								height    : "991px",
								objectFit : "cover",
								// objectPosition : isRightPage ? "right" : "left",
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

export default Mod1Pdf;
