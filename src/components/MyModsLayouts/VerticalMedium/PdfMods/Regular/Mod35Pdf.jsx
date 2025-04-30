//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod35Pdf = ({
	text,
	modLayout,
	pageNo,
	textImages,
}) => {

	const bodyHtml = (
		<div
			style={{
				height         : "792px",
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
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod35Pdf;
