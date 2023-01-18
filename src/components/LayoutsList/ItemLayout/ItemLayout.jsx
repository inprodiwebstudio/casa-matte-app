import { connect } from "react-redux";


//Onw components
import { workSpaceSlice } from "store/Slices";
import LargeFormat        from "components/global/LayoutsPage/LargeFormat";
import { bindAll }        from "helpers";
import "./ItemLayout.scss";

const ItemLayout = ({isFullSize, layout, pagesData, pageDataSelected, workSpaceSlice}) => {
	const Layout = LargeFormat[layout];

	const handleSelectedLayout = (e) => {
		e.stopPropagation();
		if (pageDataSelected) {
			workSpaceSlice.addLayout({
				pageId  : pageDataSelected.pageId,
				sheetId : pageDataSelected.currentPage,
				layout  : layout,
			});
			workSpaceSlice.clearSelectedPageData();
		}
	};
	return (
		<div
			onClick={(e) => handleSelectedLayout(e)}
			className={
				`ItemLayout ${isFullSize && "isFullSize"}`
			}
		>
			<Layout />
		</div>
	);
};

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

const mapStateToProps = ({ workSpaceSlice }) => ({
	pageDataSelected : workSpaceSlice?.pageDataSelected ?? null,
	pagesData        : workSpaceSlice?.data?.pages ?? {},
});

export default connect(mapStateToProps, mapDispatchToProps) (ItemLayout);
