import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import PerfectScrollbar                          from "react-perfect-scrollbar";

//Own components
import ItemPage from "components/ItemPage";
import "./PaginatorBar.scss";

const PaginatorBar = () => {
	return (
		<DragDropContext>
			<div id="PaginatorBar">
				<h3 className="header-ittle-paginator">PAGINADO</h3>
				<Droppable droppableId="box-droppable-1">
					{(provided) => (
						<PerfectScrollbar>
							<div
								className="navbar-paginator-container"
								ref={provided.innerRef}
								{...provided.droppableProps}
							>
								<Draggable draggableId="darg-1" index={0}>
									{(otherProvided, snapShot) => (
										<ItemPage
											draggableProps={otherProvided.draggableProps}
											dragHandleProps={otherProvided.dragHandleProps}
											innerRef={otherProvided.innerRef}
											snapShot={snapShot}
										/>
									)}
								</Draggable>
								<Draggable draggableId="darg-2" index={1}>
									{(otherProvided, snapShot) => (
										<ItemPage
											draggableProps={otherProvided.draggableProps}
											dragHandleProps={otherProvided.dragHandleProps}
											innerRef={otherProvided.innerRef}
											snapShot={snapShot}
										/>
									)}
								</Draggable>
								<Draggable draggableId="darg-3" index={2}>
									{(otherProvided, snapShot) => (
										<ItemPage
											draggableProps={otherProvided.draggableProps}
											dragHandleProps={otherProvided.dragHandleProps}
											innerRef={otherProvided.innerRef}
											snapShot={snapShot}
										/>
									)}
								</Draggable>
								<Draggable draggableId="darg-4" index={3}>
									{(otherProvided, snapShot) => (
										<ItemPage
											draggableProps={otherProvided.draggableProps}
											dragHandleProps={otherProvided.dragHandleProps}
											innerRef={otherProvided.innerRef}
											snapShot={snapShot}
										/>
									)}
								</Draggable>
								{provided.placeholder}
							</div>
						</PerfectScrollbar>
					)}
				</Droppable>
			</div>
		</DragDropContext>
	);
};

export default PaginatorBar;
