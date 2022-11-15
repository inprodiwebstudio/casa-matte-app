import { DragDropContext, Droppable } from "react-beautiful-dnd";
import PerfectScrollbar               from "react-perfect-scrollbar";

//Own components
import ItemPage from "components/ItemPage";
import "./PaginatorBar.scss";

//data Fake
const pageslist = [
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
];

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
								{
									pageslist.map((pageData, index) => (
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
						</PerfectScrollbar>
					)}
				</Droppable>
			</div>
		</DragDropContext>
	);
};

export default PaginatorBar;
