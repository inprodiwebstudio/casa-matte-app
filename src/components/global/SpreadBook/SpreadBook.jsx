//redux
import { shallowEqual, useSelector, useDispatch } from "react-redux";

import photoBooksConfing from "core/constants/photoBooksConfing";

import { workSpaceSlice } from "store/Slices";

import "./SpreadBook.scss";
import { useContext, useState }          from "react";
import { currentConfigPhotoBookContext } from "contexts/configContext";

const SpreadBook = ({
	isWorkSpace = false,
	isAvailableRightSheet = true,
	contents,
}) => {
	const {currentConfigPhotoBook} = useContext(currentConfigPhotoBookContext);

	const dispatch = useDispatch();
	const [ currentSelectedPage, setCurrentSelectedPage ] = useState(undefined);

	const {ContentSheet1, ContentSheet2} = contents;

	const photoBookData = useSelector((state) => state.workSpaceSlice.data, shallowEqual);

	const {sizePhotoBook, format, product} = photoBookData;

	const photoBookConfigProperties = photoBooksConfing[product]?.[format]?.sizes?.[sizePhotoBook];

	const {aspectRatio} = photoBookConfigProperties;

	const handlerAspectRatio = `${aspectRatio[0]}/${aspectRatio[1]}`;

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
		>
			<div
				className={
					`page-body ${(currentSelectedPage === "sheet1") && "isActivePage"}`
				}
				style={{
					aspectRatio : handlerAspectRatio,
					position    : "relative",
					transition  : "all 0.2s ease-in-out",
				}}
				id="draggable-zone-sheet1"
				{
					...(isWorkSpace && {
						onClick : () => handlerSelectedData("sheet1"),
					})
				}
			>
				{ContentSheet1 && <ContentSheet1 />}
			</div>
			{
				isAvailableRightSheet && (
					<div
						className={
							`page-body ${(currentSelectedPage === "sheet2") && "isActivePage"}`
						}
						style={{
							aspectRatio : handlerAspectRatio,
							position    : "relative",
							transition  : "all 0.2s ease-in-out",
						}}
						id="draggable-zone-sheet2"
						{
							...(isWorkSpace && {
								onClick : () => handlerSelectedData("sheet2"),
							})
						}
					>
						{ContentSheet2 && <ContentSheet2 />}
					</div>
				)
			}
		</div>
	);
};

export default SpreadBook;
