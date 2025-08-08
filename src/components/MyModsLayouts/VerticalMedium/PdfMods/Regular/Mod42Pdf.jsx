// eslint-disable-next-line import/no-extraneous-dependencies
// import domtoimage from "dom-to-image";


//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod42Pdf = ({
	text,
	textImgs,
	modLayout,
	pageNo,
}) => {
	const myTextImgsMod = {
		0 : textImgs[`${pageNo}-${modLayout}-text1`]?.textImg ?? null,
	};

	const bodyHtml = (
		<div
			style={{
				height  : "792px",
				width   : "100%",
				padding : "20px",
			}}
		>

			{
				myTextImgsMod[0] && 
				<img
					src={myTextImgsMod[0]}
					alt="Captura de texto"
					style={{ objectFit : "contain", height : "auto", width : "100%" }}
				/>
			}
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod42Pdf;
