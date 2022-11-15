import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

//Own components
import ItemPage from "components/ItemPage";
import "./PaginatorBar.scss";

const PaginatorBar = () => {
	const onDragEnd = () => {
		console.log("endDrag");
	};
	return (
		<DragDropContext
			onDragEnd={()=> onDragEnd()}
		>
			<div id="PaginatorBar">
				<h3 className="header-ittle-paginator">PAGINADO</h3>
				<Droppable droppableId="box-droppable-1">
					{(provided, snapshot) => (
						<div
							className="navbar-paginator-container"
							ref={provided.innerRef}
							{...provided.droppableProps}
						>
							<Draggable draggableId="darg-1" index={0}>
								{(otherProvided) => (
									<ItemPage
										draggableProps={otherProvided.draggableProps}
										dragHandleProps={otherProvided.dragHandleProps}
										innerRef={otherProvided.innerRef}
									/>
								)}
							</Draggable>
							<Draggable draggableId="darg-2" index={1}>
								{(otherProvided) => (
									<ItemPage
										draggableProps={otherProvided.draggableProps}
										dragHandleProps={otherProvided.dragHandleProps}
										innerRef={otherProvided.innerRef}
									/>
								)}
							</Draggable>
							<Draggable draggableId="darg-3" index={2}>
								{(otherProvided) => (
									<ItemPage
										draggableProps={otherProvided.draggableProps}
										dragHandleProps={otherProvided.dragHandleProps}
										innerRef={otherProvided.innerRef}
									/>
								)}
							</Draggable>
							<Draggable draggableId="darg-4" index={3}>
								{(otherProvided) => (
									<ItemPage
										draggableProps={otherProvided.draggableProps}
										dragHandleProps={otherProvided.dragHandleProps}
										innerRef={otherProvided.innerRef}
									/>
								)}
							</Draggable>
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</div>
		</DragDropContext>
	);
};

export default PaginatorBar;
