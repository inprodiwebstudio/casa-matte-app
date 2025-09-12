import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Skeleton }                               from "@mantine/core";
import { useState, useEffect, useContext }        from "react";

//ContextProvider
import {currentConfigPhotoBookContext} from "contexts/configContext";

//Own components
import photoBooksConfing      from "core/constants/photoBooksConfing";
import { workSpaceSlice }     from "store/Slices";
import FrontLayout            from "components/global/LayoutsPage/FrontLayout";
import DeletePageActionButton from "./DeletePageActionButton";
import "./BookPages.scss";

const BookPages = ({
	pageData,
	isThumbNail,
	isInPaginator,
	isInWorkSpcae,
}) => {
	const {currentConfigPhotoBook} = useContext(currentConfigPhotoBookContext);
	const [ currentSelectedPage, setCurrentSelectedPage ] = useState(undefined);
	const [ showModLayout, setShowModLayout ] = useState(false);

	const dispatch = useDispatch();

	const pageDataSelected = useSelector((state) => state.workSpaceSlice.pageDataSelected, shallowEqual);
	// const currentPageData = useSelector((state) => state.workSpaceSlice.pageDataSelected, shallowEqual);
	const loading = useSelector((state) => state.workSpaceSlice.loading, shallowEqual);
	const photoBookData = useSelector((state) => state.workSpaceSlice.data, shallowEqual);

	const photobookSize = photoBookData?.sizePhotoBook ?? "grande";

	const currentPhotoBook = (photoBookData?.product === "" || !photoBookData?.product) ? "white" : photoBookData?.product;

	const photoBookFormat = photoBookData?.format ?? "vertical";

	const modsInDoublePage = photoBooksConfing[currentPhotoBook]?.[photoBookFormat]?.sizes?.[photobookSize]?.modsInDoublePage;

	const isInDoublePage = modsInDoublePage?.includes(pageData?.sheet1?.layoutType || pageData?.id);

	const aspectRatio = photoBooksConfing[currentPhotoBook]?.[photoBookFormat]?.sizes?.[photobookSize]?.aspectRatio;

	const handleLayoutMod = (layoutData, sheetNo) => {
		if (layoutData?.layoutType) {
			const handlerSlectCurrentModLayout = () => {
				const isConsumeDataFromContext = isInWorkSpcae || (isInPaginator && (pageData?.id === pageDataSelected?.pageId));

				if (isConsumeDataFromContext) {
					return currentConfigPhotoBook?.[`sheet${sheetNo}`]?.modlayoutId;
				}
				return layoutData?.layoutType;
			};
			const LayoutMod = photoBooksConfing[currentPhotoBook]?.[photoBookFormat]?.sizes?.[photobookSize]?.layoutMods[handlerSlectCurrentModLayout()]?.layout;

			const modLayout = pageData?.[`sheet${sheetNo}`]?.layoutType;
			const pageNo = pageData?.[`sheet${sheetNo}`]?.pageNo;

			return (
				<div
					style={{
						width      : "100%",
						height     : "100%",
						transition : "all 0.2s ease-in-out",
						...(isInWorkSpcae && {opacity : showModLayout ? 1 : 0 }),
					}}>
					{
						LayoutMod && (
							<LayoutMod
								pageNo={pageNo}
								modLayout={modLayout}
								isThumbNail={isThumbNail}
								isInPaginator={isInPaginator}
								data={layoutData}
								isInWorkSpace={isInWorkSpcae}
								sheetNo={sheetNo}
							/>
						)
					}
				</div>
			);
		}
	};

	const handlerSelectedData = (currentPage) => {
		setCurrentSelectedPage(currentPage);
		dispatch(workSpaceSlice.actions.setSelectePageData({
			pageId      : pageData.id,
			currentPage : currentPage,
		}));
	};

	useEffect(() => {
		if (!pageDataSelected) {
			setCurrentSelectedPage(null);
			return;
		}
		if (isInWorkSpcae && pageDataSelected) {
			setCurrentSelectedPage(pageDataSelected.currentPage);
			return;
		}
	}, [pageDataSelected]);

	if (loading) {
		return (
			<Skeleton className="BookPages isSinglePage" />
		);
	}

	useEffect(() => {
		setTimeout(() => {
			setShowModLayout(true);
		}, 10);
	}, []);

	return (
		<div
			className="BookPages"
			style={{
				aspectRatio : (isInDoublePage || pageData?.sheet2 || pageData?.sheet1?.layoutType?.includes("Front")) ? `${aspectRatio[0]*2}/${aspectRatio[1]}` : `${aspectRatio[0]}/${aspectRatio[1]}`,
			}}
		>
			<div
				className={
					`page-body ${(currentSelectedPage === "sheet1") && "isActivePage"}`
				}
				style={{
					aspectRatio : (isInDoublePage || pageData?.sheet1?.layoutType?.includes("Front")) ? `${aspectRatio[0]*2}/${aspectRatio[1]}` : `${aspectRatio[0]}/${aspectRatio[1]}`,
					position    : "relative",
				}}
				id="draggable-zone-sheet1"
				{
					...(isInWorkSpcae && {
						onClick : () => handlerSelectedData("sheet1"),
					})
				}
			>
				{
					(pageData?.id.includes("Front")) && (
						<FrontLayout
							pageData={pageData}
							isThumbNail={isThumbNail}
							isInPaginator={isInPaginator}
							isInWorkSpcae={isInWorkSpcae}
						/>
					)
				}
				{
					((pageData?.sheet1?.layoutType !== "") && (!pageData?.sheet1?.layoutType?.includes("Front"))) && (
						handleLayoutMod(pageData?.sheet1, 1)
					)
				}
				{
					isInPaginator && (
						<DeletePageActionButton
							isLeftSide
							pageData={pageData}
						/>
					)
				}
			</div>
			{
				isInWorkSpcae && (
					<div
						className="spacer"
						style={{
							background : (isInDoublePage || !pageData?.sheet2) && "transparent",
						}}
					>
						&nbsp;
					</div>
				)
			}
			{
				(!isInDoublePage && pageData?.sheet2) && (
					<div
						className={
								`page-body ${(currentSelectedPage === "sheet2") && "isActivePage"}`
						}
						style={{
							aspectRatio : isInDoublePage ? `${aspectRatio[0]*2}/${aspectRatio[1]}` : `${aspectRatio[0]}/${aspectRatio[1]}`,
							position    : "relative",
						}}
						id="draggable-zone-sheet2"
						{
							...(isInWorkSpcae && {
								onClick : () => handlerSelectedData("sheet2"),
							})
						}
					>
						{
							(pageData?.sheet2?.layoutType !== "") && (
								handleLayoutMod(pageData?.sheet2, 2)
							)
						}
						{
							isInPaginator && (
								<DeletePageActionButton
									pageData={pageData}
								/>
							)
						}
					</div>
				)
			}
		</div>
	);
};

export default BookPages;
