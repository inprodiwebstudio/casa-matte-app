import { useNavigate, useParams } from "react-router-dom";
import { Draggable }              from "react-beautiful-dnd";

//Own Components
import FormatPage          from "components/FormatPage";
import { DragIcon, Cross } from "Resources/icons";
import "./ItemPage.scss";

const ItemPage = ({
	index,
	pageData,
	draggableId,
	handleDelete,
}) => {
	const isDoublePage = ["Mod1", "Mod2", "Mod3", "FrontLayout"].includes(pageData?.sheet1?.layoutType);
	const navigate = useNavigate();

	const { pageId } = useParams();

	const isCurrentPage = pageId === draggableId;

	return (
		<Draggable
			draggableId={draggableId}
			index={index}
		>
			{(provided, snapShot) => (
				<div
					className={`ItemPage ${isCurrentPage && "isActivePage"}`}
					onClick={() => navigate(draggableId)}
					ref={provided.innerRef}
					{...provided.dragHandleProps}
					{...provided.draggableProps}
				>
					<div
						className="my-page-container"
						style={{
							background : snapShot?.isDragging && "#E9E4D9",
						}}
					>
						<div className="drag-icon-conatainer">
							<DragIcon size="15px" />
						</div>
						<div>
							<div className="withe-page-container">
								{
									(!isDoublePage && pageData.sheet2) && (
										<div className="spacer-paginator" />
									)
								}
								<FormatPage
									typeFormat="LargeFormat"
									pageData={pageData}
								/>
							</div>
							<div className="pages-book-conatier">
								<p>{(index+1)*2 - 1}</p>
								<p>{(index+1)*2}</p>
							</div>
						</div>
						<div className="cross-icon-conatiner" onClick={() => handleDelete(pageData?.id, index)}>
							<Cross size="9px" />
						</div>
					</div>
				</div>
			)}
		</Draggable>
	);
};

export default ItemPage;
