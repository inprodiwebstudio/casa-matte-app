import { connect } from "react-redux";
//Router
import { useParams } from "react-router-dom";
//Constants
import photoBooksConfing from "core/constants/photoBooksConfing";
import LayoutMod         from "components/LayoutMod/LayoutMod";
//Slices
import { workSpaceSlice } from "store/Slices";
//Helpers
import { bindAll } from "helpers";
import "./ItemLayout.scss";

const ItemLayout = ({
	pagesData,
	layoutData,
	workSpaceSlice,
	formatPhotoBook,
	productPhotoBook,
	pageDataSelected,
}) => {
	const { pageId } = useParams();

	const aspectRatio = photoBooksConfing[productPhotoBook]?.[formatPhotoBook]?.aspectRatio;

	const myConfigPhotoBook = photoBooksConfing[productPhotoBook]?.[formatPhotoBook];

	const isInDoublePage = myConfigPhotoBook?.modsInDoublePage?.includes(layoutData?.id);

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

	return (
		<div
			onClick={(e) => handleSelectedLayout(e)}
			className={
				`ItemLayout ${isSelectedLayout && "isActive"}`
			}
			style={{
				aspectRatio : isInDoublePage ? `${aspectRatio[0]*2}/${aspectRatio[1]}` : `${aspectRatio[0]}/${aspectRatio[1]}`,
			}}
		>
			<LayoutMod
				modLayout={layoutData?.id}
			/>
		</div>
	);
};

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

const mapStateToProps = ({ workSpaceSlice }) => ({
	pageDataSelected : workSpaceSlice?.pageDataSelected ?? null,
	pagesData        : workSpaceSlice?.data?.pages ?? {},
	productPhotoBook : workSpaceSlice?.data?.product ?? "white",
	formatPhotoBook  : workSpaceSlice?.data?.format ?? "vertical",
});

export default connect(mapStateToProps, mapDispatchToProps) (ItemLayout);
