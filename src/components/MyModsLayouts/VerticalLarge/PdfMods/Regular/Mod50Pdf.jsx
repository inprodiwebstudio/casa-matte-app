
//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod50Pdf = ({
	text,
	modLayout,
	pageNo,
	textImages,
}) => {

	const bodyHtml = (
		<div
			style={{
				height        : "991px",
				width         : "100%",
				paddingTop    : "60px",
				paddingBottom : "60px",
				paddingLeft   : "30px",
				paddingRight  : "30px",
			}}
		>
			<div
				style={{
					height         : "100%",
					width          : "100%",
					display        : "flex",
					gap            : "40px",
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
				<div
					style={{
						height     : "100%",
						width      : "60%",
						overflow   : "hidden",
						background : "#E3E3E3",
					}}
				>
					{
						textImages[1] && (
							<img
								src={textImages[1]}
								alt="Captura de texto"
								style={{ objectFit : "cover" }}
							/>
						)
					}
				</div>
				<div
					style={{
						width : "60%",
					}}
				>
					{
						textImages[2] && (
							<img
								src={textImages[2]}
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

export default Mod50Pdf;
