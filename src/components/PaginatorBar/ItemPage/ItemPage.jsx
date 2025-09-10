//Redux
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useContext }                             from "react";
//Router
//External components
// import { workSpaceSlice } from "store/Slices";
import { Draggable } from "react-beautiful-dnd";
//Own Components
import "./ItemPage.scss";
import BookPages                         from "components/BookPages";
import { workSpaceSlice }                from "store/Slices";
import { currentConfigPhotoBookContext } from "contexts/configContext";

const ItemPage = ({
	index,
	pageData,
	isFixedPage,
	draggableId,
}) => {
	const {currentConfigPhotoBook, setCurrentConfigPhotoBook} = useContext(currentConfigPhotoBookContext);

	const dispatch = useDispatch();

	const photoBookFormat = useSelector((state) => state.workSpaceSlice?.data?.format, shallowEqual);
	const currentPageId = useSelector((state) => state.workSpaceSlice.data?.currentPage, shallowEqual);
	const isAvailableProduct = useSelector((state) => state.workSpaceSlice?.data?.product, shallowEqual);
	const photoBookProduct = useSelector((state) => state.workSpaceSlice?.data?.product, shallowEqual);

	const isCurrentPage = currentPageId === draggableId;

	const handlerSelectPage = () => {
		dispatch(workSpaceSlice.actions.updatePageContent({
			currentConfigPhotoBook,
		}));
		dispatch(workSpaceSlice.actions.setSelectePageData({
			pageId      : pageData.id,
			currentPage : "sheet1",
		}));
		setCurrentConfigPhotoBook({
			sheet1 : {
				modlayoutId : undefined,
				texts       : undefined,
				photos      : undefined,
			},
			sheet2 : {
				modlayoutId : undefined,
				texts       : undefined,
				photos      : undefined,
			},
		});
		dispatch(workSpaceSlice.actions.handleChangePage(draggableId));
	};

	const NumbPages = () => {
		if (photoBookProduct === "layflat") {
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
