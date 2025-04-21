
//Own Components
import { shallowEqual, useSelector, useDispatch } from "react-redux";

import { workSpaceSlice } from "store/Slices";
import "./FrontPage.scss";
import BookPages          from "components/BookPages";

const FrontPage = () => {
	const isLoading = useSelector((state) => state.workSpaceSlice?.loading, shallowEqual);
	const currentPageId = useSelector((state) => state.workSpaceSlice?.data?.currentPage, shallowEqual);

	const dispatch = useDispatch();

	const workSpaceFrontPage = useSelector((state) => state.workSpaceSlice.data?.frontPage, shallowEqual);
	const isAvailableProduct = useSelector((state) => state.workSpaceSlice.data?.product, shallowEqual);

	const photoBookFormat = useSelector((state) => state.workSpaceSlice?.data?.format, shallowEqual);

	const handlerSelectPage = () => {
		dispatch(workSpaceSlice.actions.setSelectePageData({
			pageId      : "frontpage",
			currentPage : "sheet1",
		}));
		dispatch(workSpaceSlice.actions.handleChangePage("frontpage"));
	};

	return (
		<div
			className={`FrontPage ${(currentPageId === "frontpage") && "isInThisPage"}`}
			onClick={() => handlerSelectPage()}
		>
			<div
				className="my-page-container"
			>
				<div>
					<div
						className={
							`withe-page-container frontPage-thumbnail-${photoBookFormat}`
						}
					>
						{
							(workSpaceFrontPage && (isAvailableProduct !== "")) && (
								<BookPages
									isInWorkSpcae={false}
									isInPaginator={true}
									loading={isLoading}
									pageData={workSpaceFrontPage}
								/>
							)
						}
					</div>
					<div className="pages-book-conatier">
						<p>ATRÁS</p>
						<p>FRENTE</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FrontPage;
