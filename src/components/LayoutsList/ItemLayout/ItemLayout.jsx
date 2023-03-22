import { connect }   from "react-redux";
import { useParams } from "react-router-dom";

//Onw components
import LargeFormat        from "components/global/LayoutsPage/LargeFormat";
import SquareFormat       from "components/global/LayoutsPage/SquareFormat";
import { workSpaceSlice } from "store/Slices";
import { bindAll }        from "helpers";
import "./ItemLayout.scss";

const ItemLayout = ({
	pagesData,
	layoutData,
	formatPage,
	workSpaceSlice,
	pageDataSelected,
}) => {
	// const LayoutLarge = LargeFormat[layout]?.["layout"];
	// const LayoutSquare = SquareFormat[layout]?.["layout"];

	const isFullSize = () => {
		switch (formatPage) {
			case "LargeFormat":
				return ["Mod1", "Mod2", "Mod3"].includes(layoutData?.id);
			case "SquareFormat":
				return ["Mod6", "Mod7"].includes(layoutData?.id);
			default :
				return false;
		}
	};

	const { pageId } = useParams();

	const currentLayoutSelected = {
		sheet1 : pagesData[pageId]?.sheet1?.layoutType,
		sheet2 : pagesData[pageId]?.sheet2?.layoutType,
	};

	const isSelectedLayout = (currentLayoutSelected.sheet1 === layoutData?.id) || (currentLayoutSelected.sheet2 === layoutData?.id);

	const handleSelectedLayout = (e) => {
		e.stopPropagation();
		if (pageDataSelected) {
			workSpaceSlice.addLayout({
				layout       : layoutData?.id,
				pageId       : pageDataSelected.pageId,
				numberPhotos : layoutData?.numberPhotos,
				sheetId      : pageDataSelected.currentPage,
			});
			workSpaceSlice.clearSelectedPageData();
		}
	};

	const uiConstructor = (layoutId) => {
		const LayoutLarge = LargeFormat[layoutId]?.["layout"];
		const LayoutSquare = SquareFormat[layoutId]?.["layout"];
		switch (formatPage) {
			case "SquareFormat" :
				return (
					<LayoutSquare />
				);
			case "LargeFormat" :
				return (
					<LayoutLarge />
				);
			default:
				(<div />);
		}
	};

	return (
		<div
			onClick={(e) => handleSelectedLayout(e)}
			className={
				`ItemLayout ${isFullSize() && "isFullSize"} ${isSelectedLayout && "isActive"} ${formatPage}`
			}
		>
			{uiConstructor(layoutData?.id)}
		</div>
	);
};

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

const mapStateToProps = ({ workSpaceSlice }) => ({
	pageDataSelected : workSpaceSlice?.pageDataSelected ?? null,
	pagesData        : workSpaceSlice?.data?.pages ?? {},
	formatPage       : workSpaceSlice?.data?.sizePhotoBook ?? "LargeFormat",
});

export default connect(mapStateToProps, mapDispatchToProps) (ItemLayout);
