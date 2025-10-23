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
		1 : textImgs[`${pageNo}-${modLayout}-text2`]?.textImg ?? null,
	};

	const bodyHtml = (
		<div
			style={{
				height  : "792px",
				width   : "100%",
				padding : "20px",
			}}
		>

			<div
				style={{
					height         : "100%",
					width          : "100%",
					display        : "flex",
					justifyContent : "center",
					alignItems     : "center",
				}}
			>
				<div style={{
					width         : "45%",
					display       : "flex",
					flexDirection : "column",
					gap           : "17px",
				}}>
					<div
						style={{
							width : "100%",
						}}
					>
						{myTextImgsMod[0] && <img src={myTextImgsMod[0]} alt="Captura de texto" />}
					</div>
					{myTextImgsMod[1] && <img src={myTextImgsMod[1]} alt="Captura de texto" />}
				</div>
			</div>
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod42Pdf;
