// eslint-disable-next-line import/no-extraneous-dependencies
import { PDFViewer, Page, Document} from "@react-pdf/renderer";
import { connect }                  from "react-redux";
//Own components
import { convertToArray } from "helpers";
import horizontalLarge    from "components/MyModsLayouts/HorizontalLarge";
import horizontalMedium   from "components/MyModsLayouts/HorizontalMedium";
import VerticalLarge      from "components/MyModsLayouts/VerticalLarge";
import VerticalMedium     from "components/MyModsLayouts/VerticalMedium";
import SpinePhotoBook     from "components/MyModsLayouts/SpinePdf";
import SquareSmall        from "components/MyModsLayouts/SquareSmall";
import TravelCoffeeTable  from "components/MyModsLayouts/TravelCoffeeTable";
import SquareLarge        from "components/MyModsLayouts/SquareLarge";


const TestPdf = ({photoBookData}) => {
	const listPages = convertToArray(photoBookData?.pages);

	const handlerFormat = (productType) => {
		if ( productType === "travelcoffeetable ") {
			return "travelcoffeetable";
		}
		return photoBookData?.format;
	};


	const photoBookTypes = {
		vertical : {
			mediano : {
				size                  : [612, 792],
				frontSize             : [612, 792],
				isInDoublePageLayouts : ["FrontLayout"],
				modLayouts            : {...VerticalMedium},
			},
			grande : {
				size                  : [850, 991],
				frontSize             : [850, 991],
				isInDoublePageLayouts : ["FrontLayout"],
				modLayouts            : {...VerticalLarge},
			},
		},
		horizontal : {
			grande : {
				size                  : [992, 850],
				frontSize             : [992, 850],
				isInDoublePageLayouts : ["FrontLayout"],
				modLayouts            : {...horizontalLarge},
			},
			mediano : {
				size                  : [790, 615],
				frontSize             : [790, 615],
				isInDoublePageLayouts : ["FrontLayout"],
				modLayouts            : {...horizontalMedium},
			},
		},
		cuadrado : {
			grande : {
				size                  : [850, 850],
				frontSize             : [850, 850],
				isInDoublePageLayouts : ["FrontLayout"],
				modLayouts            : {...SquareLarge},
			},
			chico : {
				size                  : [595, 595],
				frontSize             : [595, 595],
				isInDoublePageLayouts : ["FrontLayout"],
				modLayouts            : {...SquareSmall},
			},
		},
		chico : {
			size                  : [595, 595],
			isInDoublePageLayouts : ["FrontLayout"],
			modLayouts            : {...SquareSmall},
		},
		travelcoffeetable : {
			grande : {
				size                  : [708, 850],
				isInDoublePageLayouts : ["FrontLayout"],
				modLayouts            : {...TravelCoffeeTable},
			},
		},
	};

	// const isLayoutDoublePage = (modLayout, witheList) => {
	// 	const isAvailableDouble = witheList.includes(modLayout);
	// 	return isAvailableDouble;
	// };

	const SheetFrontLayout = photoBookTypes[handlerFormat(photoBookData?.product)]?.[photoBookData?.sizePhotoBook]?.modLayouts[photoBookData?.frontPage?.sheet1?.layoutType]?.pdfLayout;

	const SheetSpineLayout = SpinePhotoBook;

	const sizeFrontPage = photoBookTypes[handlerFormat(photoBookData?.product)]?.[photoBookData?.sizePhotoBook]?.frontSize;

	const getComponent = (pageData) => {
		const Sheet1Layout = photoBookTypes[handlerFormat(photoBookData?.product)]?.[photoBookData?.sizePhotoBook]?.modLayouts[pageData?.sheet1?.layoutType]?.pdfLayout;

		const Sheet2Layout = photoBookTypes[handlerFormat(photoBookData?.product)]?.[photoBookData?.sizePhotoBook]?.modLayouts[pageData?.sheet2?.layoutType]?.pdfLayout;

		const sizePages = photoBookTypes[handlerFormat(photoBookData?.product)]?.[photoBookData?.sizePhotoBook]?.size;

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

		return (
			<>
				{Sheet1Layout ? (
					<Page size={sizePages}>
						<Sheet1Layout images={pageData?.sheet1?.photos} text={pageData?.sheet1?.text} />
					</Page>
				) : undefined}
				{Sheet2Layout ? (
					<Page size={sizePages}>
						<Sheet2Layout images={pageData?.sheet2?.photos} text={pageData?.sheet2?.text} />
					</Page>
				) : undefined}
			</>
		);
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
					{
						(photoBookData?.product === "white") && (
							<Page size={sizeFrontPage}>
								<SheetSpineLayout text={photoBookData?.bound} />
							</Page>
						)
					}
					{
						(photoBookData?.product === "white") && (
							<Page size={sizeFrontPage}>
								<SheetFrontLayout images={photoBookData?.frontPage?.sheet1?.photos} text={photoBookData?.frontPage?.sheet1?.text} />
							</Page>
						)
					}
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
