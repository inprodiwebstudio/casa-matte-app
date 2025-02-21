import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod68Pdf = ({text, images}) => {

	const text01 = text[0] ? text[0] : "<p style='text-align: center;'><span style='font-size: 15px; font-family: Inter-Lifght;'>Odi pullerit. Actus nes consid fur, senatus, essendi enatrum pra, us consum, que quam, ve, quo potimorta trurs con hosus ore dumus ommorunum dium oporat, elum hocul verobu</span></p>";

	const bodyHtml = (
		<div
			style={{
				height         : "850px",
				width          : "100%",
				display        : "flex",
				justifyContent : "center",
				alignItems     : "center",
			}}
		>
			<div
				style={{
					width          : "45%",
					maxHeight      : "70%",
					display        : "flex",
					justifyContent : "center",
					alignItems     : "ceneter",
					lineHeight     : "1.5px",
				}}
			>
				<div
					dangerouslySetInnerHTML={{
						__html : `<style>
                                   p {
                                     margin: 0;
                                     padding: 0;
                                   }
                                 </style>
                                 ${text01}`,
					}}
				/>
			</div>
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod68Pdf;
