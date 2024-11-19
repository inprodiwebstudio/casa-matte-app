// eslint-disable-next-line import/no-extraneous-dependencies
import { PDFViewer, Page, Document} from "@react-pdf/renderer";
import { connect }                  from "react-redux";
//Own components
import { convertToArray } from "helpers";
import VerticalLarge      from "components/MyModsLayouts/VerticalLarge";
import SquareSmall        from "components/MyModsLayouts/SquareSmall";
import SquareLarge        from "components/MyModsLayouts/SquareLarge";


const TestPdf = ({photoBookData}) => {
	const listPages = convertToArray(photoBookData?.pages);

	const photoBookTypes = {
		vertical : {
			grande : {
				size                  : [850, 991],
				isInDoublePageLayouts : ["FrontLayout"],
				modLayouts            : {...VerticalLarge},
			},
		},
		cuadrado : {
			grande : {
				size                  : [850, 850],
				isInDoublePageLayouts : ["FrontLayout"],
				modLayouts            : {...SquareLarge},
			},
			chico : {
				size                  : [595, 595],
				isInDoublePageLayouts : ["FrontLayout"],
				modLayouts            : {...SquareSmall},
			},
		},
	};

	// const isLayoutDoublePage = (modLayout, witheList) => {
	// 	const isAvailableDouble = witheList.includes(modLayout);
	// 	return isAvailableDouble;
	// };

	const getComponent = (pageData) => {
		const Sheet1Layout = photoBookTypes[photoBookData?.format]?.[photoBookData?.sizePhotoBook]?.modLayouts[pageData?.sheet1?.layoutType]?.pdfLayout;
		const Sheet2Layout = photoBookTypes[photoBookData?.format]?.[photoBookData?.sizePhotoBook]?.modLayouts[pageData?.sheet2?.layoutType]?.pdfLayout;

		// const isInDoublePageLayout = isLayoutDoublePage(pageData?.sheet1?.layoutType, photoBookTypes[photoBookData?.sizePhotoBook]?.isInDoublePageLayouts);

		// if ((Sheet1Layout && Sheet2Layout) || isInDoublePageLayout) {
		// 	if (Sheet1Layout && isInDoublePageLayout) {
		// 		return (
		// 			<>
		// 				<Page size={[850, 991]}>
		// 					<Sheet1Layout images={pageData?.sheet1?.photos} />
		// 				</Page>
		// 				<Page size={[850, 991]}>
		// 					<Sheet1Layout images={pageData?.sheet1?.photos} isRightPage />
		// 				</Page>
		// 			</>
		// 		);
		// 	}
		// }

		if (Sheet1Layout) {
			return (
				<>
					<Page size={[850, 850]}>
						<Sheet1Layout images={pageData?.sheet1?.photos} text={pageData?.sheet1?.text} />
					</Page>
					{Sheet2Layout ? (
						<Page size={[850, 850]}>
							<Sheet2Layout images={pageData?.sheet2?.photos} text={pageData?.sheet2?.text} />
						</Page>
					) : undefined}
				</>
			);
		}
	};

	// const testerInsert = (pageData, index) => {
	// 	if (index !== 0) {
	// 		return getComponent(pageData);
	// 	}
	// };

	return (
		<div style={{height : "80vh"}}>
			<PDFViewer style={{height : "80vh", width : "100%"}}>
				<Document>
					<>
						{
							listPages.map((pageData, index) => getComponent(pageData, index))
						}
					</>
				</Document>
			</PDFViewer>
		</div>
	);
};

const mapStateToProps = ({ workSpaceSlice }) => ({
	photoBookData : workSpaceSlice?.data ?? null,
});

export default connect(mapStateToProps) (TestPdf);
