import { useState, useEffect }        from "react";
import { connect }                    from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

//Own components
import ItemPage                                                   from "./ItemPage";
import { workSpaceSlice }                                         from "store/Slices";
import { convertToArray, isValidArray, convertToObject, bindAll } from "helpers";
import { ScrollBar }                                              from "core/components";
import FrontPage                                                  from "./FrontPage";
import "./PaginatorBar.scss";

const PaginatorBar = ({ pagesData, workSpaceSlice }) => {
	const [ pageList, setPageList ] = useState({
		pages    : {},
		pagesIds : [],
	});

	let counter = 1;

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
		const reOrderPages = convertToArray(newPagesList.pages).map((pageData, index) => {
			const newData = {
				id     : pageData?.id,
				sheet1 : {...newPagesList.pages[newPagesList.pagesIds[index]].sheet1},
				...(newPagesList.pages[newPagesList.pagesIds[index]]?.sheet2 ? {
					sheet2 : {...newPagesList.pages[newPagesList.pagesIds[index]].sheet2},
				} : {}),
			};
			return newData;
		});

		const newList = reOrderPages.map((page, index) => {
			const newElement = {
				...page,
				sheet1 : {
					...page.sheet1,
					pageNo : counter + 1,
				},
				...(page.sheet2 ? {
					sheet2 : { ...page.sheet2, pageNo : counter + 2},
				} : {}),
			};
			counter += 1;
			if (page.sheet2) {
				counter += 1;
			}
			return newElement;
		});
		setPageList(newPagesList);
		workSpaceSlice.newListPages(convertToObject(newList));
	};

	useEffect(() => {
		const dataList = convertToArray(pagesData);
		if (isValidArray(dataList)) {
			const newData = {
				pages : {
					...pagesData,
				},
				pagesIds : dataList.map(page => page?.id),
			};
			setPageList(newData);
			return;
		}
	}, [pagesData]);

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
									pageList?.pagesIds?.map((pageId, index) => (
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

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

const mapStateToProps = ({ workSpaceSlice }) => ({
	pagesData : workSpaceSlice?.data?.pages ?? {},
});

export default connect(mapStateToProps, mapDispatchToProps) (PaginatorBar);
