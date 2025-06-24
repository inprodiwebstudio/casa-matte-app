// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector, shallowEqual, connect } from "react-redux";
import { PDFViewer, Page, Document, View}     from "@react-pdf/renderer";
import BookPages                              from "components/BookPages";

//Own components
import { convertToArray, isValidArray } from "helpers";
import horizontalLarge                  from "components/MyModsLayouts/HorizontalLarge";
import horizontalMedium                 from "components/MyModsLayouts/HorizontalMedium";
import VerticalLarge                    from "components/MyModsLayouts/VerticalLarge";
import VerticalMedium                   from "components/MyModsLayouts/VerticalMedium";
import SpinePhotoBook                   from "components/MyModsLayouts/SpinePdf";
import SquareSmall                      from "components/MyModsLayouts/SquareSmall";
import TravelCoffeeTable                from "components/MyModsLayouts/TravelCoffeeTable";
import layflatSquareLarge               from "components/MyModsLayouts/LayFlatSquareLarge";
import layflatVerticalMedium            from "components/MyModsLayouts/LayFlat";
import layflatHorizontalMedium          from "components/MyModsLayouts/LayFlatHorizontalMedium";
import SquareLarge                      from "components/MyModsLayouts/SquareLarge";

import "./TestPdf.scss";
import { useEffect, useState } from "react";


const TestPdf = ({photoBookData}) => {
	const listPages = convertToArray(photoBookData?.pages);

	const workSpaceData = useSelector((state) => state.workSpaceSlice.data?.pages, shallowEqual);
	const productPhotoBook = useSelector((state) => state.workSpaceSlice.data?.product, shallowEqual);
	const workSpaceFormatPage = useSelector((state) => state.workSpaceSlice.data?.format, shallowEqual);
	const workSpaceSizePage = useSelector((state) => state.workSpaceSlice.data?.sizePhotoBook, shallowEqual);
	const isLoading = useSelector((state) => state.workSpaceSlice?.loading, shallowEqual);

	const [ textPages, setTextPages ] = useState(undefined);

	const handlerFormat = (productType, format) => {
		if ( productType === "travelcoffeetable ") {
			return "travelcoffeetable";
		}
		if ( (productType === "layflat") && format ) {
			return `${productType}${format.charAt(0).toUpperCase() + format.slice(1).toLowerCase()}`;
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
		layflatHorizontal : {
			mediano : {
				size                  : [1584, 576],
				isInDoublePageLayouts : [
					"FrontLayout",
					"Mod32",
					"Mod33",
					"Mod34",
					"Mod35",
					"Mod36",
					"Mod37",
					"Mod38",
					"Mod39",
					"Mod40",
					"Mod41",
					"Mod42",
					"Mod43",
					"Mod44",
					"Mod45",
					"Mod46",
					"Mod47",
					"Mod48",
					"Mod49",
					"Mod50",
					"Mod51",
					"Mod52",
					"Mod53",
					"Mod54",
					"Mod55",
					"Mod55",
					"Mod56",
					"Mod57",
					"Mod58",
					"Mod59",
					"Mod60",
					"Mod61",
					"Mod62",
					"Mod63",
					"Mod64",
				],
				modLayouts : {...layflatHorizontalMedium},
			},
		},
		layflatCuadrado : {
			grande : {
				size                  : [1700, 850],
				isInDoublePageLayouts : [
					"FrontLayout",
					"Mod44",
					"Mod45",
					"Mod46",
					"Mod47",
					"Mod48",
					"Mod49",
					"Mod50",
					"Mod51",
					"Mod52",
					"Mod53",
					"Mod54",
					"Mod55",
					"Mod56",
					"Mod57",
					"Mod58",
					"Mod59",
					"Mod60",
					"Mod61",
					"Mod62",
					"Mod63",
					"Mod64",
					"Mod65",
					"Mod66",
					"Mod67",
					"Mod68",
					"Mod69",
					"Mod70",
					"Mod71",
					"Mod72",
					"Mod73",
					"Mod74",
					"Mod75",
					"Mod76",
					"Mod77",
					"Mod78",
				],
				modLayouts : {...layflatSquareLarge},
			},
		},
		layflatVertical : {
			mediano : {
				size                  : [1218, 790],
				isInDoublePageLayouts : [
					"FrontLayout",
					"Mod33",
					"Mod34",
					"Mod35",
					"Mod36",
					"Mod37",
					"Mod38",
					"Mod39",
					"Mod40",
					"Mod41",
					"Mod42",
					"Mod43",
					"Mod44",
					"Mod45",
					"Mod46",
					"Mod47",
					"Mod48",
					"Mod49",
					"Mod50",
					"Mod51",
					"Mod52",
					"Mod53",
					"Mod54",
					"Mod55",
					"Mod56",
					"Mod57",
					"Mod58",
					"Mod59",
					"Mod60",
					"Mod61",
					"Mod62",
					"Mod63",
					"Mod64",
				],
				modLayouts : {...layflatVerticalMedium},
			},
		},
	};

	const isLayoutDoublePage = (modLayout, witheList) => {
		const isAvailableDouble = witheList.includes(modLayout);
		return isAvailableDouble;
	};

	const SheetFrontLayout = photoBookTypes[handlerFormat(photoBookData?.product)]?.[photoBookData?.sizePhotoBook]?.modLayouts[photoBookData?.frontPage?.sheet1?.layoutType]?.pdfLayout;

	const SheetSpineLayout = SpinePhotoBook;

	const sizeFrontPage = photoBookTypes[handlerFormat(photoBookData?.product)]?.[photoBookData?.sizePhotoBook]?.frontSize;

	const getComponent = (pageData, index) => {
		const Sheet1Layout = photoBookTypes[handlerFormat(photoBookData?.product, photoBookData?.format)]?.[photoBookData?.sizePhotoBook]?.modLayouts[pageData?.sheet1?.layoutType]?.pdfLayout;

		const Sheet2Layout = photoBookTypes[handlerFormat(photoBookData?.product, photoBookData?.format)]?.[photoBookData?.sizePhotoBook]?.modLayouts[pageData?.sheet2?.layoutType]?.pdfLayout;

		const sizePages = photoBookTypes[handlerFormat(photoBookData?.product, photoBookData?.format)]?.[photoBookData?.sizePhotoBook]?.size;

		const isInDoublePageLayout = isLayoutDoublePage(pageData?.sheet1?.layoutType, photoBookTypes[handlerFormat(photoBookData?.product, photoBookData?.format)]?.[photoBookData?.sizePhotoBook]?.isInDoublePageLayouts);

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
		if ( photoBookData?.product === "layflat" ) {
			return (
				<Page
					size={sizePages}
					style={{display : "flex", flexDirection : "row"}}
				>
					<View
						style={{
							width  : isInDoublePageLayout ? "100%" : "50%",
							height : "100%",
						}}
					>
						{
							Sheet1Layout ? (
								<Sheet1Layout
									images={pageData?.sheet1?.photos}
									text={pageData?.sheet1?.text}
									modLayout={pageData?.sheet1?.layoutType}
									pageNo={pageData?.sheet1?.pageNo}
								/>
							) : (
								""
							)
						}
					</View>
					{
						!isInDoublePageLayout && (
							<View
								style={{
									width  : "50%",
									height : "100%",
								}}
							>
								{
									Sheet2Layout ? (
										<Sheet2Layout
											images={pageData?.sheet2?.photos}
											text={pageData?.sheet2?.text}
											modLayout={pageData?.sheet2?.layoutType}
											pageNo={pageData?.sheet2?.pageNo}
										/>
									) : (
										""
									)
								}
							</View>
						)
					}
				</Page>
			);
		}

		return (
			<>
				<Page size={sizePages}>
					{
						Sheet1Layout ? (
							<Sheet1Layout
								images={pageData?.sheet1?.photos}
								text={pageData?.sheet1?.text}
								modLayout={pageData?.sheet1?.layoutType}
								pageNo={pageData?.sheet1?.pageNo}
							/>
						) : (
							""
						)
					}
				</Page>
				{pageData.sheet2 ? (
					<Page size={sizePages}>
						{
							Sheet2Layout ? (
								<Sheet2Layout
									images={pageData?.sheet2?.photos}
									text={pageData?.sheet2?.text}
									modLayout={pageData?.sheet2?.layoutType}
									pageNo={pageData?.sheet2?.pageNo}
								/>
							) : (
								""
							)
						}
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

	const handlerTypeProductFormat = () => {
		if (productPhotoBook === "travelcoffeetable ") {
			return "travel-coffee-table";
		}
		return `${workSpaceFormatPage}-${workSpaceSizePage}`;
	};

	useEffect(() => {
		if (workSpaceData && isValidArray(convertToArray({...workSpaceData}))) {
			const myTextPages = convertToArray({...workSpaceData}).filter(myPage => {
				const availableText1 = myPage?.sheet1?.text && (myPage?.sheet1?.text !== "") && myPage?.sheet1?.text[0];
				const availableText2 = myPage?.sheet2?.text && (myPage?.sheet2?.text !== "") && myPage?.sheet2?.text[0];

				return availableText1 || availableText2;
			});
			setTextPages(myTextPages);
		}
	}, [workSpaceData]);


	return (
		<div style={{height : "90vh", overflow : "hidden"}}>
			{
				textPages && (
					<PDFViewer style={{height : "100%", width : "100%"}}>
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
				)
			}
			{
				(textPages && isValidArray(textPages)) && (
					<div style={{height : "100%", width : "100%"}}>
						<div
							style={{
								height   : "0px",
								width    : "100%",
								overflow : "hidden",
							}}
						>
							<div
								className="PreviewPages"
							>
								{
									textPages.map((page, index) => (
										<div className="photoBookContainer" key={index}>
											<div className={`pagesPreviewPhotoBook ${handlerTypeProductFormat()}-preview`}>
												<BookPages
													isInWorkSpcae={true}
													loading={isLoading}
													pageData={page}
												/>
											</div>
										</div>
									))
								}
							</div>
						</div>
					</div>
				)
			}
		</div>
	);
};

const mapStateToProps = ({ workSpaceSlice }) => ({
	photoBookData : workSpaceSlice?.data ?? null,
});

export default connect(mapStateToProps) (TestPdf);
