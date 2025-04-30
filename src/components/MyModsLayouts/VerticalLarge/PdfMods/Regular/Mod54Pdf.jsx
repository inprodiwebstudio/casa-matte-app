
//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod54Pdf = ({
	text,
	modLayout,
	pageNo,
	textImages,
}) => {

	const bodyHtml = (
		<div
			style={{
				height : "991px",
				width  : "100%",
			}}
		>
			<div
				style={{
					height        : "100%",
					width         : "100%",
					display       : "flex",
					flexDirection : "column",
					gap           : "25px",
				}}
			>
				<div
					style={{
						height     : "83%",
						width      : "100%",
						overflow   : "hidden",
						background : "#E3E3E3",
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
						display       : "flex",
						alignItems    : "flex-end",
						flexDirection : "column",
						gap           : "0px",
						marginBottom  : "50px",
						width         : "100%",
						paddingRight  : "70px",
					}}
				>
					<div
						style={{
							width : "75%",
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
							width : "75%",
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
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default Mod54Pdf;
