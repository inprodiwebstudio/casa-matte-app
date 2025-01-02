import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

//Helpers
// eslint-disable-next-line import/extensions
import { imgUrlPdf } from "helpers";


const Mod3Pdf = ({images }) => {
	const bodyHtml = (
		<div
			style={{
				height  : "850px",
				width   : "100%",
				padding : "130px",
			}}
		>
			<div
				style={{
					height     : "100%",
					width      : "100%",
					overflow   : "hidden",
					background : "#E3E3E3",
				}}
			>
				{
					images[0]?.url && (
						<img
							src={imgUrlPdf(images[0])}
							alt="test"
							style={{
								height    : "100%",
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

export default Mod3Pdf;
