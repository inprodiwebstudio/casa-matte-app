import { useState, useEffect }        from "react";
import { connect }                    from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

//Own components
import ItemPage                                                   from "./ItemPage";
import LoadingPaginator                                           from "./LoadingPaginator";
import { workSpaceSlice }                                         from "store/Slices";
import { convertToArray, isValidArray, convertToObject, bindAll } from "helpers";
import { ScrollBar }                                              from "core/components";
import FrontPage                                                  from "./FrontPage";
import "./PaginatorBar.scss";

const PaginatorBar = ({ pagesData, workSpaceSlice, minPages, numberOfPages, loading }) => {
	const [ pageList, setPageList ] = useState({
		pages    : {},
		pagesIds : [],
	});

	let counter = 1;

	const firstPageData = pagesData[convertToArray(pagesData)[0]?.id];

	const dragerChangePosition = result => {
		const { destination, source, draggableId } = result;
		const idCurrentDestination = pageList.pagesIds[destination.index];

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

		if (!pageList.pages[idCurrentDestination].sheet2) {
			return;
		}

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

		const newList = reOrderPages.map((page) => {
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

		const listToSend = [
			{...pagesData[convertToArray(pagesData)[0]?.id]},
			...newList,
		];
		workSpaceSlice.newListPages(convertToObject(listToSend));
	};

	useEffect(() => {
		const dataList = convertToArray(pagesData).slice(1, convertToArray(pagesData).length);
		if (isValidArray(dataList)) {
			const newPagesData = { ...pagesData };
			delete newPagesData[convertToArray(pagesData)[0]?.id];
			const newData = {
				pages : {
					...newPagesData,
				},
				pagesIds : dataList.map(page => page?.id),
			};
			setPageList(newData);
			return;
		}
	}, [pagesData]);

	const handleDelete = (pageId, index) => {
		if (numberOfPages !== minPages) {
			const myPagesData = {...pagesData};
			const dataDelete = {...myPagesData[pageId]};
			delete myPagesData[pageId];
			const listOfpages = convertToArray(myPagesData);
			const newlistData = listOfpages.map((data, index) => {
				if (index === 0) {
					return data;
				}
				return {
					...data,
					id     : `page${index + 1}`,
					sheet1 : {
						...data.sheet1,
						pageNo : index * 2,
					},
					...(data?.sheet2 && {
						sheet2 : {
							...data.sheet2,
							pageNo : (index * 2) + 1,
						},
					}),
				};
			});
			const newPagesData = convertToObject(newlistData);
			workSpaceSlice.newListPages(newPagesData);
			if (dataDelete.sheet2) {
				workSpaceSlice.deletePage({quantityDelete : 2});
				return;
			}
			workSpaceSlice.deletePage({quantityDelete : 1});
			return;
		}
	};

	return (
		<div id="PaginatorBar">
			<h3 className={`header-ittle-paginator ${loading && "loading"}`}>PAGINADO</h3>
			{
				loading ? (
					<ScrollBar>
						<LoadingPaginator />
					</ScrollBar>
				) : (
					<ScrollBar>
						<FrontPage />
						<ItemPage
							isFixedPage
							handleDelete={handleDelete}
							draggableId={convertToArray(pagesData)[0]?.id}
							pageData={firstPageData}
						/>
						<DragDropContext
							onDragEnd={dragerChangePosition}
						>
							<Droppable droppableId="box-droppable-1">
								{(provided) => (
									<div
										className="navbar-paginator-container"
										ref={provided.innerRef}
										{...provided.droppableProps}
									>
										{
											pageList?.pagesIds?.map((pageId, index) => (
												<ItemPage
													index={index}
													key={pageId}
													handleDelete={handleDelete}
													pageData={pagesData[pageId]}
													draggableId={pageId}
												/>
											))
										}
										{provided.placeholder}
									</div>
								)}
							</Droppable>
						</DragDropContext>
					</ScrollBar>
				)
			}
		</div>
	);
};

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

const mapStateToProps = ({ workSpaceSlice }) => ({
	loading       : workSpaceSlice.loading ?? true,
	pagesData     : workSpaceSlice?.data?.pages ?? {},
	minPages      : workSpaceSlice?.data?.minPages ?? 0,
	numberOfPages : workSpaceSlice?.data?.numberOfPages ?? 0,
});

export default connect(mapStateToProps, mapDispatchToProps) (PaginatorBar);
