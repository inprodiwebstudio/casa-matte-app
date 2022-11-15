import { useState }                   from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
// import PerfectScrollbar               from "react-perfect-scrollbar";

//Own components
import ItemPage from "components/ItemPage";
import "./PaginatorBar.scss";


const PaginatorBar = () => {
	const [ pageList, setPageList ] = useState([
		{
			id       : "drager-1",
			leftPage : {
				page : 1,
			},
			rightPage : {
				page : 2,
			},
		},
		{
			id       : "drager-2",
			leftPage : {
				page : 3,
			},
			rightPage : {
				page : 4,
			},
		},
		{
			id       : "drager-3",
			leftPage : {
				page : 5,
			},
			rightPage : {
				page : 6,
			},
		},
		{
			id       : "drager-4",
			leftPage : {
				page : 7,
			},
			rightPage : {
				page : 8,
			},
		},
		{
			id       : "drager-5",
			leftPage : {
				page : 9,
			},
			rightPage : {
				page : 10,
			},
		},
		{
			id       : "drager-6",
			leftPage : {
				page : 11,
			},
			rightPage : {
				page : 12,
			},
		},
		{
			id       : "drager-7",
			leftPage : {
				page : 13,
			},
			rightPage : {
				page : 14,
			},
		},
		{
			id       : "drager-8",
			leftPage : {
				page : 15,
			},
			rightPage : {
				page : 16,
			},
		},
	]);

	const dragerChangePosition = result => {
		const { destination, source } = result;

		if (!destination) {
			return;
		}

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return;
		}

		const pageDataSource = pageList[source.index];

		const clonePagesList = [...pageList];

		clonePagesList.splice(source.index, 1);
		clonePagesList.splice(destination.index, 0, pageDataSource);

		setPageList(clonePagesList);
	};

	return (
		<DragDropContext
			onDragEnd={dragerChangePosition}
		>
			<div id="PaginatorBar">
				<h3 className="header-ittle-paginator">PAGINADO</h3>
				<Droppable droppableId="box-droppable-1">
					{(provided) => (
						<div
							className="navbar-paginator-container"
							ref={provided.innerRef}
							{...provided.droppableProps}
						>
							{
								pageList.map((pageData, index) => (
									<ItemPage
										index={index}
										key={pageData?.id}
										pageData={pageData}
										draggableId={pageData?.id}
									/>
								))
							}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</div>
		</DragDropContext>
	);
};

export default PaginatorBar;
