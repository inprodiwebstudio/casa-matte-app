
//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod57Pdf = ({
	text,
	modLayout,
	pageNo,
	textImages,
}) => {

	const bodyHtml = (
		<div
			style={{
				height  : "991px",
				width   : "100%",
				padding : "10%",
			}}
		>
			<div
				style={{
					height        : "100%",
					width         : "100%",
					display       : "flex",
					flexDirection : "column",
					gap           : "20px",
				}}
			>
				<div
					style={{
						width          : "100%",
						display        : "flex",
						justifyContent : "center",
						alignItems     : "center",
					}}
				>
					<div
						style={{
							width : "65%",
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
				<div
					style={{
						display       : "flex",
						height        : "100%",
						flexDirection : "column",
						gap           : "10px",
					}}
				>
					<div
						style={{
							height        : "calc(50% - 5px)",
							width         : "100%",
							display       : "flex",
							flexDirection : "row",
							gap           : "10px",
						}}
					>
						<div
							style={{
								width      : "calc(50% - 5px)",
								height     : "100%",
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
								width      : "calc(50% - 5px)",
								height     : "100%",
								overflow   : "hidden",
								background : "#E3E3E3",
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
					<div
						style={{
							height        : "calc(50% - 5px)",
							width         : "100%",
							display       : "flex",
							flexDirection : "row",
							gap           : "10px",
						}}
					>
						<div
							style={{
								height     : "100%",
								width      : "calc(50% - 5px)",
								overflow   : "hidden",
								background : "#E3E3E3",
							}}
						>
							{
								textImages[3] && (
									<img
										src={textImages[3]}
										alt="Captura de texto"
										style={{ objectFit : "cover" }}
									/>
								)
							}
						</div>
						<div
							style={{
								height     : "100%",
								width      : "calc(50% - 5px)",
								overflow   : "hidden",
								background : "#E3E3E3",
							}}
						>
							{
								textImages[4] && (
									<img
										src={textImages[4]}
										alt="Captura de texto"
										style={{ objectFit : "cover" }}
									/>
								)
							}
						</div>
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

export default Mod57Pdf;
