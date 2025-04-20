//Redux
import { useSelector, shallowEqual, useDispatch } from "react-redux";
//Router
//External components
import { workSpaceSlice } from "store/Slices";
import { Draggable }      from "react-beautiful-dnd";
//Own Components
//Resources
import { Thrash } from "Resources/icons";
import "./ItemPage.scss";
import BookPages  from "components/BookPages";

const ItemPage = ({
	index,
	pageData,
	isFixedPage,
	draggableId,
	handleDelete,
}) => {
	const dispatch = useDispatch();

	const photoBookFormat = useSelector((state) => state.workSpaceSlice?.data?.format, shallowEqual);
	const currentPageId = useSelector((state) => state.workSpaceSlice.data?.currentPage, shallowEqual);
	const orderId = useSelector((state) => state.workSpaceSlice?.data?.orderId, shallowEqual);
	const isAvailableProduct = useSelector((state) => state.workSpaceSlice?.data?.product, shallowEqual);

	const isCurrentPage = currentPageId === draggableId;

	const handlerSelectPage = () => {
		dispatch(workSpaceSlice.actions.setSelectePageData({
			pageId      : draggableId,
			currentPage : "sheet1",
		}));
		dispatch(workSpaceSlice.actions.handleChangePage(draggableId));
	};

	const NumbPages = () => {
		return (
			<div
				className="numbPages-container"
				style={{
					justifyContent : pageData?.sheet2?.pageNo ? "space-between" : "center",
				}}
			>
				<p>{pageData?.sheet1?.pageNo}</p>
				{pageData?.sheet2?.pageNo && (
					<p>{pageData?.sheet2?.pageNo}</p>
				)}
			</div>
		);
	};

	const RenderView = ({ provided }) => (
		<div
			className={`ItemPage ${isCurrentPage && "isActivePage"} ${isFixedPage && "isFixed"}`}
			onClick={() => handlerSelectPage()}
			{
				...(provided && {
					ref : provided.innerRef,
					...provided.dragHandleProps,
					...provided.draggableProps,
				})
			}
		>
			<div className="page-container">
				<div className={`sheets-container ${photoBookFormat}`}>
					{
						(isAvailableProduct !== "") && (
							<BookPages
								isThumbNail={false}
								isInPaginator={true}
								pageData={pageData}
							/>
						)
					}
				</div>
				<NumbPages />
			</div>
			{
				((pageData?.id !== "page1") && !orderId) && (
					<div
						className="delete-icon"
						onClick={() => handleDelete(pageData?.id)}
					>
						<Thrash size="15px" />
					</div>
				)
			}
		</div>
	);

	if (isFixedPage) {
		return <RenderView />;
	}

	return (
		<Draggable
			index={index}
			draggableId={draggableId}
			disableInteractiveElementBlocking={true}
		>
			{(provided) => (
				<RenderView provided={provided} />
			)}
		</Draggable>
	);
};

export default ItemPage;
