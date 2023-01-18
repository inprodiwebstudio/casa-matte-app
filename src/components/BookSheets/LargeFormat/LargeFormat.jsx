import { connect }             from "react-redux";
import { useState, useEffect } from "react";

//Own components
import layouts                     from "components/global/LayoutsPage/LargeFormat";
import { convertToArray, bindAll } from "helpers";
import { workSpaceSlice }          from "store/Slices";
import FrontLayout                 from "components/global/LayoutsPage/FrontLayout";
import "./LargeFormat.scss";

const LargeFormat = ({pageData, workSpaceSlice, pageDataSelected, isInWorkSpcae}) => {
	const isSinglePage = ["Mod1", "Mod2", "Mod3", "FrontLayout"].includes(pageData?.sheet1?.layoutType);

	const LayoutPage1 = layouts[pageData?.sheet1?.layoutType];
	const LayoutPage2 = layouts[pageData?.sheet2?.layoutType];

	const [ currentSelectedPage, setCurrentSelectedPage ] = useState(null);

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
			return;
		}
		return;
	}, [pageDataSelected]);

	return (
		<div className="LargeFormat">
			<div
				className={
					`page-body ${(currentSelectedPage === "sheet1") && "isActivePage"}`
				}
				{
					...(isInWorkSpcae && {
						onClick : () => handlerSelectedData("sheet1"),
					})
				}
			>
				{
					!LayoutPage1 ? (
						(pageData?.sheet1?.layoutType !== "") ? (
							<FrontLayout />
						) : (
							<div />
						)
					) : (
						<LayoutPage1 images={photoList("sheet1")} />
					)
				}
			</div>
			{
				!isSinglePage && (
					<div className="spacer" />
				)
			}
			{
				!isSinglePage && (
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
							!LayoutPage2 ? (
								<div />
							) : (
								<LayoutPage2 images={photoList("sheet2")} />
							)
						}
					</div>
				)
			}
		</div>
	);
};

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

const mapStateToProps = ({ workSpaceSlice }) => ({
	pageDataSelected : workSpaceSlice?.pageDataSelected ?? null,
});

export default connect(mapStateToProps, mapDispatchToProps) (LargeFormat);
