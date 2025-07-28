import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

//Helpers
// eslint-disable-next-line import/extensions
import { imgUrlPdf } from "helpers";


const Mod3Pdf = ({images }) => {
	const bodyHtml = (
		<div
			style={{
				height       : "991px",
				width        : "100%",
				padding      : "11%",
				paddingRight : "18.21%",
				paddingLeft  : "18.21%",
			}}
		>
			<div
				style={{
					height     : "100%",
					width      : "100%",
					overflow   : "hidden",
					background : "white",
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
