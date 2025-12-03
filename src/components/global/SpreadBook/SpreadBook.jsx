//redux
import { shallowEqual, useSelector, useDispatch } from "react-redux";

// import DeletePageActionButton from "./DeletePageAction";


import { workSpaceSlice } from "store/Slices";

import "./SpreadBook.scss";
import { useContext, useState }          from "react";
import { currentConfigPhotoBookContext } from "contexts/configContext";
import { useHandlerTypeConfigBooks }     from "helpers/Hooks/useHandlerTypeConfigBooks";
import DeletePageActionButton            from "./DeletePageAction";

const SpreadBook = ({
	isWorkSpace = false,
	isAvailableRightSheet = true,
	contents,
	shadowDisabled = false,
	isThumbNail = false,
	pageData = undefined,
}) => {
	const {currentConfigPhotoBook} = useContext(currentConfigPhotoBookContext);

	const photoBooksConfig = useHandlerTypeConfigBooks();

	const dispatch = useDispatch();
	const [ currentSelectedPage, setCurrentSelectedPage ] = useState(undefined);

	const {ContentSheet1, ContentSheet2, layoutTypeSheet1} = contents;

	const photoBookData = useSelector((state) => state.workSpaceSlice.data, shallowEqual);
	const statusViewPage = useSelector((state) => state.workSpaceSlice.statusViewPage, shallowEqual);

	const isInPreviewPage = statusViewPage === "preview";

	const {sizePhotoBook, format, product} = photoBookData;

	const photoBookConfigProperties = photoBooksConfig[product]?.[format]?.sizes?.[sizePhotoBook];

	const {aspectRatio} = photoBookConfigProperties;

	const photobookSize = photoBookData?.sizePhotoBook ?? "grande";

	const photoBookFormat = photoBookData?.format ?? "vertical";

	const currentPhotoBook = (photoBookData?.product === "" || !photoBookData?.product) ? "white" : photoBookData?.product;

	const modsInDoublePage = photoBooksConfig[currentPhotoBook]?.[photoBookFormat]?.sizes?.[photobookSize]?.modsInDoublePage;

	const isInDoublePage = modsInDoublePage?.includes(layoutTypeSheet1);

	const handlerAspectRatio = `${aspectRatio[0]*(isInDoublePage ? 2 : 1)}/${aspectRatio[1]}`;

	const handlerSelectedData = (currentPage) => {
		setCurrentSelectedPage(currentPage);
		dispatch(workSpaceSlice.actions.setSelectePageData({
			pageId      : currentConfigPhotoBook?.pageId,
			currentPage : currentPage,
		}));
	};

	return (
		<div
			className="SpreadBook"
			id="spreadBook-snap-container"
		>
			<div
				className={
					`page-body ${(currentSelectedPage === "sheet1") && "isActivePage"} ${shadowDisabled && "shadowDisabled"}`
				}
				style={{
					aspectRatio : handlerAspectRatio,
					position    : "relative",
					transition  : "all 0.2s ease-in-out",
				}}
				id="draggable-zone-sheet1"
				{
					...((isWorkSpace && !isInPreviewPage) && {
						onClick : () => handlerSelectedData("sheet1"),
					})
				}
			>
				{
					(isThumbNail && (pageData?.sheet1?.pageNo !== 1) && (product !== "layflat")) && (
						<DeletePageActionButton
							isLeftSide
							pageData={pageData}
						/>
					)
				}
				{ContentSheet1 && <ContentSheet1 />}
			</div>
			{
				(isAvailableRightSheet && !isInDoublePage) && (
					<div
						className={
							`page-body ${(currentSelectedPage === "sheet2") && "isActivePage"} ${shadowDisabled && "shadowDisabled"}`
						}
						style={{
							aspectRatio : handlerAspectRatio,
							position    : "relative",
							transition  : "all 0.2s ease-in-out",
						}}
						id="draggable-zone-sheet2"
						{
							...((isWorkSpace && !isInPreviewPage) && {
								onClick : () => handlerSelectedData("sheet2"),
							})
						}
					>
						{
							isThumbNail && (
								<DeletePageActionButton
									pageData={pageData}
								/>
							)
						}
						{ContentSheet2 && <ContentSheet2 />}
					</div>
				)
			}
		</div>
	);
};

export default SpreadBook;
