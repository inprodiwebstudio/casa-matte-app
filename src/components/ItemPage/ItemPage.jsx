import { Draggable } from "react-beautiful-dnd";

//Own Components
import { DragIcon, Cross } from "Resources/icons";
import "./ItemPage.scss";

const ItemPage = ({
	index,
	pageData,
	draggableId,
}) => {
	return (
		<Draggable
			draggableId={draggableId}
			index={index}
		>
			{(provided, snapShot) => (
				<div
					className="ItemPage"
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
							<div className="withe-page-container">&nbsp;</div>
							<div className="pages-book-conatier">
								<p>{pageData?.leftPage?.page}</p>
								<p>{pageData?.rightPage?.page}</p>
							</div>
						</div>
						<div className="cross-icon-conatiner">
							<Cross size="9px" />
						</div>
					</div>
				</div>
			)}
		</Draggable>
	);
};

export default ItemPage;
