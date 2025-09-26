//Redux
import { useSelector, shallowEqual, useDispatch } from "react-redux";
//Router
//External components
import { workSpaceSlice } from "store/Slices";
import { Draggable }      from "react-beautiful-dnd";
//Own Components
//Resources
import { Thrash }                           from "Resources/icons";
import { closeAllModals, openContextModal } from "@mantine/modals";
import "./ItemPage.scss";
import BookPages                            from "components/BookPages";

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
	const isAvailableProduct = useSelector((state) => state.workSpaceSlice?.data?.product, shallowEqual);
	const isFixedVersionLayflat = useSelector((state) => state.workSpaceSlice?.data?.isFixedPagesLayflat, shallowEqual);

	const isCurrentPage = currentPageId === draggableId;

	const handlerSelectPage = () => {
		dispatch(workSpaceSlice.actions.setSelectePageData({
			pageId      : draggableId,
			currentPage : "sheet1",
		}));
		dispatch(workSpaceSlice.actions.handleChangePage(draggableId));
	};

	const onDeletePage = () => {
		const myhandlerSucessDelete = () => {
			closeAllModals();
			handleDelete(pageData?.id);
		};
		openContextModal({
			modal      : "deletePageConfirm",
			innerProps : {
				handdleSuccess : () => myhandlerSucessDelete(),
			},
		});
	};

	const NumbPages = () => {
		if (!isFixedVersionLayflat && (isAvailableProduct === "layflat")) {
			return (
				<div
					className="numbPages-container"
					style={{
						justifyContent : "center",
					}}
				>
					<p>{Number(pageData?.id?.split("page")[1])}</p>
				</div>
			);
		}
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
				(pageData?.id !== "page1") && (
					<div
						className="delete-icon"
						onClick={() => onDeletePage()}
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
