// eslint-disable-next-line import/no-extraneous-dependencies
import { PDFViewer, Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const TestPdf = () => {
	const styles = StyleSheet.create({
		page : {
			flexDirection   : "row",
			backgroundColor : "white",
		},
		section : {
			margin   : 10,
			padding  : 10,
			flexGrow : 1,
		},
	});
	return (
		<div style={{height : "80vh"}}>
			<PDFViewer style={{height : "80vh", width : "100%"}}>
				<Document>
					<Page size={[300, 300]} style={styles.page}>
						<View style={styles.section}>
							<Text>Section #1</Text>
						</View>
					</Page>
				</Document>
			</PDFViewer>
		</div>
	);
};

export default TestPdf;
