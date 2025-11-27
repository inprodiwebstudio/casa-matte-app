import CoverBook                         from "components/CoverBook";
import { currentConfigPhotoBookContext } from "contexts/configContext";
import { useContext }                    from "react";
import { useDispatch }                   from "react-redux";
import { workSpaceSlice }                from "store/Slices";


const CoverBookItem = () => {
	const {currentConfigPhotoBook} = useContext(currentConfigPhotoBookContext);
	const dispatch = useDispatch();

	const handlerSelectPage = () => {
		dispatch(workSpaceSlice.actions.updatePageContent({
			currentConfigPhotoBook,
		}));
		dispatch(workSpaceSlice.actions.setSelectePageData({
			pageId      : "frontpage",
			currentPage : "sheet1",
		}));
		dispatch(workSpaceSlice.actions.handleChangePage("frontpage"));
	};

	return (
		<div
			style={{
				height         : "100px",
				display        : "flex",
				flexDirection  : "column",
				justifyContent : "center",
				alignItems     : "center",
				width          : "100%",
				cursor         : "pointer",
			}}
			onClick={handlerSelectPage}
		>
			<CoverBook isInPaginator />
		</div>
	);
};

export default CoverBookItem;
