
//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";


const Mod46Pdf = ({
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
					width          : "30%",
					height         : "100%",
					display        : "flex",
					flexDirection  : "column",
					gap            : "27px",
					justifyContent : "center",
					alignItems     : "center",
				}}>
					<div
						style={{
							width          : "100%",
							display        : "flex",
							flexDirection  : "column",
							gap            : "10px",
							justifyContent : "flex-start",
							alignItems     : "flex-start",
						}}
					>
						<div
							style={{
								width : "100%",
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
								width : "100%",
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
					</div>
					<div
						style={{
							width          : "100%",
							display        : "flex",
							flexDirection  : "column",
							gap            : "10px",
							justifyContent : "flex-start",
							alignItems     : "flex-start",
						}}
					>
						<div
							style={{
								width : "100%",
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
						<div
							style={{
								width : "100%",
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
					</div>
					<div
						style={{
							width          : "100%",
							display        : "flex",
							flexDirection  : "column",
							gap            : "10px",
							justifyContent : "flex-start",
							alignItems     : "flex-start",
						}}
					>
						<div
							style={{
								width : "100%",
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
						<div
							style={{
								width : "100%",
							}}
						>
							{
								textImages[5] && (
									<img
										src={textImages[5]}
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

export default Mod46Pdf;
