import { useContext }                             from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
//Constants
import photoBooksConfing                 from "core/constants/photoBooksConfing";
import { currentConfigPhotoBookContext } from "contexts/configContext";
//Helpers
//Slices
import { workSpaceSlice } from "store/Slices";
import "./ItemLayout.scss";

const ItemLayout = ({
	layoutData,
}) => {
	const dispatch = useDispatch();
	const {currentConfigPhotoBook} = useContext(currentConfigPhotoBookContext);

	const pageDataSelected = useSelector((state) => state.workSpaceSlice?.pageDataSelected, shallowEqual);
	const currentPageId = useSelector((state) => state.workSpaceSlice.data?.currentPage, shallowEqual);
	const frontPageData = useSelector((state) => state.workSpaceSlice?.data?.frontPage, shallowEqual);
	const productPhotoBook = useSelector((state) => state.workSpaceSlice?.data?.product, shallowEqual);
	const formatPhotoBook = useSelector((state) => state.workSpaceSlice?.data?.format, shallowEqual);
	const sizePhotoBook = useSelector((state) => state.workSpaceSlice?.data?.sizePhotoBook, shallowEqual);

	const aspectRatio = photoBooksConfing[productPhotoBook]?.[formatPhotoBook]?.sizes?.[sizePhotoBook]?.aspectRatio;

	const myConfigPhotoBook = photoBooksConfing[productPhotoBook]?.[formatPhotoBook]?.sizes?.[sizePhotoBook];

	const Layout = () => {
		const ModLayout = myConfigPhotoBook?.layoutMods[layoutData?.id]?.layoutThumbNail;

		if (ModLayout) {
			return (
				<ModLayout />
			);
		}

		return <></>;
	};

	const isInDoublePage = myConfigPhotoBook?.modsInDoublePage?.includes(layoutData?.id);

	const currentLayoutSelected = () => {
		if (currentPageId === "frontpage") {
			return {
				sheet1 : frontPageData?.sheet1?.layoutType,
			};
		}
		return {
			sheet1 : currentConfigPhotoBook?.sheet1?.modlayoutId,
			sheet2 : currentConfigPhotoBook?.sheet2?.modlayoutId,
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
				defaultTexts : undefined,
				sheetId      : 1,
			}));
		}
		if (pageDataSelected) {
			const defaultTexts = layoutData?.defaultTexts;

			const handlerAnotherSheetKey = (pageDataSelected.currentPage === "sheet1") ? "sheet2" : "sheet1";

			const dataAnotherSheet = currentConfigPhotoBook[handlerAnotherSheetKey] ?? undefined;

			dispatch(workSpaceSlice.actions.addLayout({
				layout           : layoutData?.id,
				pageId           : pageDataSelected.pageId,
				sheetId          : pageDataSelected.currentPage,
				numberPhotos     : layoutData?.numberPhotos,
				anotherSheetKey  : dataAnotherSheet && handlerAnotherSheetKey,
				anotherSheetData : dataAnotherSheet,
				defaultTexts,
			}));
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
			<Layout />
		</div>
	);
};

export default ItemLayout;
