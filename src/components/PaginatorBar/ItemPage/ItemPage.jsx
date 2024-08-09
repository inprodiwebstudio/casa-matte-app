//Router
import { useNavigate, useParams } from "react-router-dom";
//External components
import { Draggable } from "react-beautiful-dnd";
//Own Components
import BookPages from "components/BookPages";
//Resources
import { Thrash } from "Resources/icons";
import "./ItemPage.scss";

const ItemPage = ({
	index,
	pageData,
	isFixedPage,
	draggableId,
	handleDelete,
}) => {
	const { pageId } = useParams();
	const navigate = useNavigate();

	const isCurrentPage = pageId === draggableId;

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
			onClick={() => navigate(draggableId)}
			{
				...(provided && {
					ref : provided.innerRef,
					...provided.dragHandleProps,
					...provided.draggableProps,
				})
			}
		>
			<div className="page-container">
				<div
					style={{height : "100px"}}
				>
					<BookPages isInPaginator={true} pageData={pageData} />
				</div>
				<NumbPages />
			</div>
			{
				(pageData?.id !== "page1") && (
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
			isDragDisabled={!pageData?.sheet2}
			disableInteractiveElementBlocking={true}
		>
			{(provided) => (
				<RenderView provided={provided} />
			)}
		</Draggable>
	);
};

export default ItemPage;
