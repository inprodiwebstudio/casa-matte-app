import { connect }             from "react-redux";
import { useState, useEffect } from "react";
import { Skeleton }            from "@mantine/core";

//Own components
import LayoutMod                   from "components/LayoutMod/LayoutMod";
import photoBooksConfing           from "core/constants/photoBooksConfing";
import { convertToArray, bindAll } from "helpers";
import { workSpaceSlice }          from "store/Slices";
import FrontLayout                 from "components/global/LayoutsPage/FrontLayout";
import "./BookPages.scss";

const BookPages = ({
	loading,
	pageData,
	photoBookData,
	isInWorkSpcae,
	workSpaceSlice,
	pageDataSelected,
}) => {
	const [ currentSelectedPage, setCurrentSelectedPage ] = useState(null);

	const currentPhotoBook = photoBookData?.product ?? "white";

	const photoBookFormat = photoBookData?.format ?? "vertical";

	const modsInDoublePage = photoBooksConfing[currentPhotoBook][photoBookFormat]?.modsInDoublePage;

	const isInDoublePage = modsInDoublePage.includes(pageData?.sheet1?.layoutType);

	const aspectRatio = photoBooksConfing[currentPhotoBook].aspectRatio;

	const photoList = (sheetId) => {
		const sheetData = pageData[sheetId];
		const listOfImages = convertToArray(sheetData.photos);
		return listOfImages;
	};

	const handlerSelectedData = (currentPage) => {
		setCurrentSelectedPage(currentPage);
		workSpaceSlice.setSelectePageData({
			pageId      : pageData.id,
			currentPage : currentPage,
		});
	};

	useEffect(() => {
		if (!pageDataSelected) {
			setCurrentSelectedPage(null);
		}
	}, [pageDataSelected]);

	if (loading) {
		return (
			<Skeleton className="BookPages isSinglePage" />
		);
	}
	return (
		<div
			className="BookPages"
			style={{
				aspectRatio : isInDoublePage ? `${aspectRatio[0]*2}/${aspectRatio[1]}` : `${aspectRatio[0]}/${aspectRatio[1]}`,
			}}
		>
			<div
				className={
					`page-body ${(currentSelectedPage === "sheet1") && "isActivePage"}`
				}
				style={{
					aspectRatio : isInDoublePage ? `${aspectRatio[0]*2}/${aspectRatio[1]}` : `${aspectRatio[0]}/${aspectRatio[1]}`,
				}}
				{
					...(isInWorkSpcae && {
						onClick : () => handlerSelectedData("sheet1"),
					})
				}
			>
				{
					(pageData?.sheet1?.layoutType === "FrontLayout") && (
						<FrontLayout />
					)
				}
				{
					(pageData?.sheet1?.layoutType !== "") && (
						<LayoutMod
							images={photoList}
							sheetNo={"sheet1"}
							isInWorkSpcae={isInWorkSpcae}
							modLayout={pageData?.sheet1?.layoutType}
						/>
					)
				}
			</div>
			{
				(!isInDoublePage && pageData?.sheet2) && (
					<>
						<div className="spacer" />
						<div
							className={
								`page-body ${(currentSelectedPage === "sheet2") && "isActivePage"}`
							}
							{
								...(isInWorkSpcae && {
									onClick : () => handlerSelectedData("sheet2"),
								})
							}
						>
							{
								(pageData?.sheet2?.layoutType !== "") && (
									<LayoutMod
										images={photoList}
										sheetNo={"sheet2"}
										isInWorkSpcae={isInWorkSpcae}
										modLayout={pageData?.sheet2?.layoutType}
									/>
								)
							}
						</div>
					</>
				)
			}
		</div>
	);
};

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

const mapStateToProps = ({ workSpaceSlice }) => ({
	pageDataSelected : workSpaceSlice?.pageDataSelected ?? null,
	loading          : workSpaceSlice?.loading ?? true,
	photoBookData    : workSpaceSlice?.data ?? null,
});

export default connect(mapStateToProps, mapDispatchToProps) (BookPages);
