import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod36Pdf = ({
	text,
	modLayout,
	pageNo,
	textImages,
}) => {

	const bodyHtml = (
		<div
			style={{
				height       : "792px",
				width        : "100%",
				padding      : "20px",
				paddingRight : "35px",
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
					style={{ width : "50%" }}
				>
					{
						textImages[0] && (
							<img
								src={textImages[0]}
								alt="Captura de texto"
								style={{ objectFit : "cover" }}
							/>
						)
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

export default Mod36Pdf;
