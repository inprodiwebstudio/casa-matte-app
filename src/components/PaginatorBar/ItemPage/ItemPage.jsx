//Redux
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useContext }                             from "react";
//Router
//External components
// import { workSpaceSlice } from "store/Slices";
import { Draggable } from "react-beautiful-dnd";
//Own Components
import "./ItemPage.scss";
import SpreadLayoutsThumbNail            from "components/SpreadLayoutsThumbNail";
import { workSpaceSlice }                from "store/Slices";
import { currentConfigPhotoBookContext } from "contexts/configContext";

const ItemPage = ({
	index,
	pageData,
	isFixedPage,
	draggableId,
	handleDelete,
}) => {
	const {currentConfigPhotoBook, setCurrentConfigPhotoBook} = useContext(currentConfigPhotoBookContext);

	const dispatch = useDispatch();

	const photoBookFormat = useSelector((state) => state.workSpaceSlice?.data?.format, shallowEqual);
	const currentPageId = useSelector((state) => state.workSpaceSlice.data?.currentPage, shallowEqual);
	const isAvailableProduct = useSelector((state) => state.workSpaceSlice?.data?.product, shallowEqual);
	const isFixedVersionLayflat = useSelector((state) => state.workSpaceSlice?.data?.isFixedPagesLayflat, shallowEqual);

	const isCurrentPage = currentPageId === draggableId;

	const handlerSelectPage = () => {
		dispatch(workSpaceSlice.actions.updatePageContent({
			currentConfigPhotoBook,
		}));
		dispatch(workSpaceSlice.actions.setSelectePageData({
			pageId      : pageData.id,
			currentPage : "sheet1",
		}));
		console.log("Pass set selected page dispatch");
		setCurrentConfigPhotoBook({
			pageId : undefined,
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

	const handlerPageData = () => {
		if (currentConfigPhotoBook?.pageId === pageData?.id) {
			const constructorData = {
				sheet1 : {
					layoutType : currentConfigPhotoBook?.sheet1?.modlayoutId,
					texts      : currentConfigPhotoBook?.sheet1?.texts,
					photos     : currentConfigPhotoBook?.sheet1?.photos,
				},
				...(currentConfigPhotoBook?.sheet2 && {
					sheet2 : {
						layoutType : currentConfigPhotoBook?.sheet2?.modlayoutId,
						texts      : currentConfigPhotoBook?.sheet2?.texts,
						photos     : currentConfigPhotoBook?.sheet2?.photos,
					},
				}),
			};
			return constructorData;
		}
		return pageData;
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
							<SpreadLayoutsThumbNail pageData={handlerPageData()} />
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
