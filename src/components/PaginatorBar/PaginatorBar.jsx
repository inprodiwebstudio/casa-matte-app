import { useState }                   from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

//Own components
import ItemPage      from "./ItemPage";
import { ScrollBar } from "core/components";
import FrontPage     from "./FrontPage";
import "./PaginatorBar.scss";

// const datapaginator = {
// 	pages : {
// 		"drager-1" : { id : "drager-1", lefpage : 1, rightPage : 2},
// 		"drager-2" : { id : "drager-2", lefpage : 3, rightPage : 4},
// 		"drager-3" : { id : "drager-3", lefpage : 5, rightPage : 6},
// 		"drager-4" : { id : "drager-4", lefpage : 7, rightPage : 8},
// 		"drager-5" : { id : "drager-5", lefpage : 9, rightPage : 10},
// 		"drager-6" : { id : "drager-6", lefpage : 11, rightPage : 12},
// 		"drager-7" : { id : "drager-7", lefpage : 13, rightPage : 14},
// 		"drager-8" : { id : "drager-8", lefpage : 15, rightPage : 16},
// 	},
// 	pagesIds : ["drager-1", "drager-2", "drager-3", "drager-4", "drager-5", "drager-6", "drager-7", "drager-8"],
// };


const PaginatorBar = () => {
	const [ pageList, setPageList ] = useState({
		pages : {
			"drager-1" : { id : "drager-1", leftPage : 1, rightPage : 2},
			"drager-2" : { id : "drager-2", leftPage : 3, rightPage : 4},
			"drager-3" : { id : "drager-3", leftPage : 5, rightPage : 6},
			"drager-4" : { id : "drager-4", leftPage : 7, rightPage : 8},
			"drager-5" : { id : "drager-5", leftPage : 9, rightPage : 10},
			"drager-6" : { id : "drager-6", leftPage : 11, rightPage : 12},
			"drager-7" : { id : "drager-7", leftPage : 13, rightPage : 14},
			"drager-8" : { id : "drager-8", leftPage : 15, rightPage : 16},
		},
		pagesIds : ["drager-1", "drager-2", "drager-3", "drager-4", "drager-5", "drager-6", "drager-7", "drager-8"],
	});

	const dragerChangePosition = result => {
		const { destination, source, draggableId } = result;

		if (!destination) {
			return;
		}

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return;
		}

		const newpagesIds = Array.from(pageList.pagesIds);

		newpagesIds.splice(source.index, 1);
		newpagesIds.splice(destination.index, 0, draggableId);

		const newPagesList = {
			pages : {
				...pageList.pages,
			},
			pagesIds : [...newpagesIds],
		};

		setPageList(newPagesList);
	};

	const handleDelete = (pageId, index) => {
		setPageList(prev => {
			const newData = {...prev};
			delete newData.pages[pageId];
			newData.pagesIds.splice(index, 1);
			return newData;
		});
	};

	return (
		<div id="PaginatorBar">
			<h3 className="header-ittle-paginator">PAGINADO</h3>
			<DragDropContext
				onDragEnd={dragerChangePosition}
			>
				<Droppable droppableId="box-droppable-1">
					{(provided) => (
						<ScrollBar>
							<div
								className="navbar-paginator-container"
								ref={provided.innerRef}
								{...provided.droppableProps}
							>
								<FrontPage />
								{
									pageList.pagesIds.map((pageId, index) => (
										<ItemPage
											index={index}
											key={pageId}
											handleDelete={handleDelete}
											pageData={pageList.pages[pageId]}
											draggableId={pageId}
										/>
									))
								}
								{provided.placeholder}
							</div>
						</ScrollBar>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	);
};

export default PaginatorBar;
