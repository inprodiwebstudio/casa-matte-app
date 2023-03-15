import { connect }   from "react-redux";
import { useParams } from "react-router-dom";

//Onw components
import { workSpaceSlice } from "store/Slices";
import LargeFormat        from "components/global/LayoutsPage/LargeFormat";
import SquareFormat       from "components/global/LayoutsPage/SquareFormat";
import { bindAll }        from "helpers";
import "./ItemLayout.scss";

const ItemLayout = ({
	layout,
	pagesData,
	layoutData,
	typeFormat,
	isFullSize,
	workSpaceSlice,
	pageDataSelected,
}) => {
	const LayoutLarge = LargeFormat[layout]?.layout;
	const LayoutSquare = SquareFormat[layout]?.layout;

	const myLayout = () => {
		switch (typeFormat) {
			case "LargeFormat":
				return <LayoutLarge />;
			case "SquareFormat":
				return <LayoutSquare />;
		}
	};

	const { pageId } = useParams();

	const currentLayoutSelected = {
		sheet1 : pagesData[pageId]?.sheet1?.layoutType,
		sheet2 : pagesData[pageId]?.sheet2?.layoutType,
	};

	const isSelectedLayout = (currentLayoutSelected.sheet1 === layout) || (currentLayoutSelected.sheet2 === layout);

	const handleSelectedLayout = (e) => {
		e.stopPropagation();
		if (pageDataSelected) {
			workSpaceSlice.addLayout({
				pageId       : pageDataSelected.pageId,
				sheetId      : pageDataSelected.currentPage,
				layout       : layout,
				numberPhotos : layoutData?.numberPhotos,
			});
			workSpaceSlice.clearSelectedPageData();
		}
	};

	return (
		<div
			onClick={(e) => handleSelectedLayout(e)}
			className={
				`ItemLayout ${isFullSize && "isFullSize"} ${isSelectedLayout && "isActive"} ${typeFormat}`
			}
		>
			{myLayout()}
		</div>
	);
};

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

const mapStateToProps = ({ workSpaceSlice }) => ({
	pageDataSelected : workSpaceSlice?.pageDataSelected ?? null,
	pagesData        : workSpaceSlice?.data?.pages ?? {},
});

export default connect(mapStateToProps, mapDispatchToProps) (ItemLayout);
