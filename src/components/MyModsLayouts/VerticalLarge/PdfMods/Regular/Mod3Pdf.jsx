import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

//Helpers
// eslint-disable-next-line import/extensions
import { selectPhotoUrl } from "components/LayoutHandler/ImgLayout/imgLayout.helpers";
import { resizerImage }   from "helpers";

const Mod3Pdf = ({images, isRightPage}) => {
	const bodyHtml = (
		<div
			style={{
				height       : "991px",
				width        : "850px",
				padding      : "74px",
				paddingRight : isRightPage ? "89px" : "0px",
				paddingLeft  : isRightPage ? "0px" : "89px",
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
						<div
							style={{
								background : "gray",
								width      : "100%",
								position   : "absolute",
							}}
						>
							<img
								src={resizerImage(selectPhotoUrl(images[0]), 1522, 843)}
								alt="test"
								style={{
									height         : "991px",
									objectFit      : "cover",
									objectPosition : isRightPage ? "right" : "left",
								}}
							/>
						</div>
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
