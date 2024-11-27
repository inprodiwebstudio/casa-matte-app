import { useSelector, shallowEqual, useDispatch } from "react-redux";
//Router
import { useParams } from "react-router-dom";
//Constants
import photoBooksConfing from "core/constants/photoBooksConfing";
//Slices
import { workSpaceSlice } from "store/Slices";
import "./ItemLayout.scss";

const ItemLayout = ({
	layoutData,
}) => {
	const { pageId } = useParams();

	const dispatch = useDispatch();

	const pageDataSelected = useSelector((state) => state.workSpaceSlice?.pageDataSelected, shallowEqual);
	const pagesData = useSelector((state) => state.workSpaceSlice?.data?.pages, shallowEqual);
	const frontPageData = useSelector((state) => state.workSpaceSlice?.data?.frontPage, shallowEqual);
	const productPhotoBook = useSelector((state) => state.workSpaceSlice?.data?.product, shallowEqual);
	const formatPhotoBook = useSelector((state) => state.workSpaceSlice?.data?.format, shallowEqual);
	const sizePhotoBook = useSelector((state) => state.workSpaceSlice?.data?.sizePhotoBook, shallowEqual);

	const aspectRatio = photoBooksConfing[productPhotoBook]?.[formatPhotoBook]?.sizes?.[sizePhotoBook]?.aspectRatio;

	const myConfigPhotoBook = photoBooksConfing[productPhotoBook]?.[formatPhotoBook]?.sizes?.[sizePhotoBook];

	const Layout = myConfigPhotoBook?.layoutMods[layoutData?.id]?.layout;

	const isInDoublePage = myConfigPhotoBook?.modsInDoublePage?.includes(layoutData?.id);


	const currentLayoutSelected = () => {
		if (pageId === "frontpage") {
			return {
				sheet1 : frontPageData?.sheet1?.layoutType,
			};
		}
		return {
			sheet1 : pagesData[pageId]?.sheet1?.layoutType,
			sheet2 : pagesData[pageId]?.sheet2?.layoutType,
		};
	};

	const isSelectedLayout = (currentLayoutSelected()?.sheet1 === layoutData?.id) || (currentLayoutSelected()?.sheet2 === layoutData?.id);

	const handleSelectedLayout = (e) => {
		e.stopPropagation();
		if (layoutData?.cat === "portadas") {
			dispatch(workSpaceSlice.actions.addLayout({
				layout       : layoutData?.id,
				pageId       : "FrontLayout",
				numberPhotos : layoutData?.numberPhotos,
				numberText   : layoutData?.numberText,
				sheetId      : 1,
			}));
		}
		if (pageDataSelected) {
			dispatch(workSpaceSlice.actions.addLayout({
				layout       : layoutData?.id,
				pageId       : pageDataSelected.pageId,
				numberPhotos : layoutData?.numberPhotos,
				numberText   : layoutData?.numberText,
				sheetId      : pageDataSelected.currentPage,
			}));
			dispatch(workSpaceSlice.actions.clearSelectedPageData());
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
			<Layout isThumbNail={true} />
		</div>
	);
};

export default ItemLayout;
