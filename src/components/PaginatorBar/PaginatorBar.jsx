import { useState, useEffect }        from "react";
import { connect }                    from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

//Own components
import ItemPage                                                   from "./ItemPage";
import LoadingPaginator                                           from "./LoadingPaginator";
import { workSpaceSlice }                                         from "store/Slices";
import { convertToArray, isValidArray, convertToObject, bindAll } from "helpers";
import { ScrollBar }                                              from "core/components";
// import FrontPage                                                  from "./FrontPage";
import "./PaginatorBar.scss";
import CoverBookItem from "./CoverBookItem";
import { Group }     from "@mantine/core";

const PaginatorBar = ({ pagesData, workSpaceSlice, minPages, numberOfPages, loading, productType}) => {
	const [ pageList, setPageList ] = useState({
		pages    : {},
		pagesIds : [],
	});


	let counter = 1;

	const firstPageData = pagesData[convertToArray(pagesData)[0]?.id];

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

	return (
		<div id="PaginatorBar">
			<h3 className={`header-ittle-paginator ${loading && "loading"}`}>Páginas</h3>
			{
				loading ? (
					<ScrollBar>
						<LoadingPaginator />
					</ScrollBar>
				) : (
					<ScrollBar>
						<CoverBookItem />
						<Group
							position="center"
							mb="10px"
							mt="5px"
						>
							<p
								style={{
									fontSize : "12px",
								}}
							>
								PORTADA
							</p>
						</Group>
						<ItemPage
							isFixedPage
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
	productType   : workSpaceSlice?.data?.product ?? 0,
});

export default connect(mapStateToProps, mapDispatchToProps) (PaginatorBar);
