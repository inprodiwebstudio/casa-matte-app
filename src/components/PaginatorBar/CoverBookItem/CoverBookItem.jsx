import CoverBook          from "components/CoverBook";
import { useDispatch }    from "react-redux";
import { workSpaceSlice } from "store/Slices";


const CoverBookItem = () => {
	const dispatch = useDispatch();

	const handlerSelectPage = () => {
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
