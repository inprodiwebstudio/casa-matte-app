// eslint-disable-next-line import/no-extraneous-dependencies
import Html                          from "react-pdf-html";
import ReactDOMServer                from "react-dom/server";
import { PDFViewer, Page, Document } from "@react-pdf/renderer";
import { connect }                   from "react-redux";

const TestPdf = ({photoBookData}) => {
	console.log(photoBookData);

	// const isSinglePage = (["Mod6", "Mod7", "FrontLayout"].includes(pageData?.sheet1?.layoutType));
	// const isSinglePage = (["Mod1", "Mod2", "Mod3", "FrontLayout"].includes(pageData?.sheet1?.layoutType));

	// const styles = StyleSheet.create({
	// 	page : {
	// 		flexDirection : "row",
	// 	},
	// 	section : {
	// 		margin          : 10,
	// 		padding         : 10,
	// 		flexGrow        : 1,
	// 		backgroundColor : "red",
	// 	},
	// });
	// const canvas = document.createElement("canvas");
	// const ctx = canvas.getContext("2d");
	// const img = new Image();
	// img.src = "https://media.istockphoto.com/id/1336419039/es/foto/peque%C3%B1o-grupo-de-dise%C3%B1adores-discutiendo-ideas-dentro-de-una-f%C3%A1brica-sostenible.jpg?s=1024x1024&w=is&k=20&c=d8OQRXdYcL7vu6di4i1zTIM6rP-WpY1TcB4giaPt9X8=";
	// canvas.width = img.width / 2;
	// canvas.height = img.height;
	// ctx.drawImage(img, 0, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
	// const imgDataLeft = canvas.toDataURL("image/jpeg", 1.0);
	// ctx.clearRect(0, 0, canvas.width, canvas.height);
	// ctx.drawImage(img, canvas.width, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
	// const imgDataRight = canvas.toDataURL("image/jpeg", 1.0);

	// console.log(imgDataLeft);
	const element = (
		<div
			style={{
				height : "991px",
				width  : "850px",
			}}
		>
			<div
				style={{
					height   : "100%",
					width    : "100%",
					overflow : "hidden",
				}}
			>
				<img
					src="https://media.istockphoto.com/id/1336419039/es/foto/peque%C3%B1o-grupo-de-dise%C3%B1adores-discutiendo-ideas-dentro-de-una-f%C3%A1brica-sostenible.jpg?s=1024x1024&w=is&k=20&c=d8OQRXdYcL7vu6di4i1zTIM6rP-WpY1TcB4giaPt9X8="
					alt="test"
					style={{
						height         : "991px",
						objectFit      : "cover",
						transform      : "scale(1.33)",
						objectPosition : "left",
					}}
				/>
			</div>
		</div>
	);

	const complete = (
		<div
			style={{
				height : "991px",
				width  : "850px",
				// padding : "10px",
				// paddingBottom : "30px",
			}}
		>
			<div
				style={{
					height   : "100%",
					width    : "100%",
					overflow : "hidden",
				}}
			>
				<img
					src="https://media.istockphoto.com/id/1336419039/es/foto/peque%C3%B1o-grupo-de-dise%C3%B1adores-discutiendo-ideas-dentro-de-una-f%C3%A1brica-sostenible.jpg?s=1024x1024&w=is&k=20&c=d8OQRXdYcL7vu6di4i1zTIM6rP-WpY1TcB4giaPt9X8="
					alt="test"
					style={{
						height         : "991px",
						objectFit      : "cover",
						objectPosition : "right",
						transform      : "scale(1.33)",
						// paddingRight   : "150px",
					}}
				/>
			</div>
		</div>
	);

	const html = ReactDOMServer.renderToStaticMarkup(element);
	const html2 = ReactDOMServer.renderToStaticMarkup(complete);

	return (
		<div style={{height : "80vh"}}>
			<PDFViewer style={{height : "80vh", width : "100%"}}>
				<Document>
					<Page size={[850, 991]}>
						<Html>{html}</Html>
					</Page>
					<Page size={[850, 991]}>
						<Html>{html2}</Html>
					</Page>
				</Document>
			</PDFViewer>
		</div>
	);
};

const mapStateToProps = ({ workSpaceSlice }) => ({
	photoBookData : workSpaceSlice?.data ?? null,
});

export default connect(mapStateToProps) (TestPdf);
