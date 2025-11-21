import { useState, useEffect, useContext } from "react";
import { connect }                         from "react-redux";
import { DragDropContext, Droppable }      from "react-beautiful-dnd";

//Own components
import ItemPage                                                   from "./ItemPage";
import LoadingPaginator                                           from "./LoadingPaginator";
import { workSpaceSlice }                                         from "store/Slices";
import { convertToArray, isValidArray, bindAll, convertToObject } from "helpers";
import { ScrollBar }                                              from "core/components";
import { Group }                                                  from "@mantine/core";
import CoverBookItem                                              from "./CoverBookItem";
import "./PaginatorBar.scss";
import { currentConfigPhotoBookContext }                          from "contexts/configContext";

const PaginatorBar = ({ pagesData, workSpaceSlice, minPages, numberOfPages, loading, productType}) => {
	const {currentConfigPhotoBook} = useContext(currentConfigPhotoBookContext);

	const [ pageList, setPageList ] = useState({
		pages    : {},
		pagesIds : [],
	});

	const firstPageData = pagesData[convertToArray(pagesData)[0]?.id];

	const dragerChangePosition = result => {
		const listOfPages = convertToArray(pageList?.pages);

		const isAvailableChangePosition = listOfPages[result?.destination?.index]?.sheet2;
		const notMovePage = !listOfPages[result?.source?.index]?.sheet2;

		if (notMovePage || !isAvailableChangePosition) {
			return;
		}

		const {destination, source} = result;
		const newPages = [...listOfPages];

		const destinationData = {
			...newPages[destination?.index],
			sheet1 : {
				...newPages[destination?.index]?.sheet1,
				layoutType      : newPages[source?.index]?.sheet1?.layoutType,
				photos          : newPages[source?.index]?.sheet1?.photos,
				text            : newPages[source?.index]?.sheet1?.text,
				linesDecoration : newPages[source?.index]?.sheet1?.linesDecoration,
			},
			sheet2 : {
				...newPages[destination?.index]?.sheet2,
				layoutType      : newPages[source?.index]?.sheet2?.layoutType,
				photos          : newPages[source?.index]?.sheet2?.photos,
				text            : newPages[source?.index]?.sheet2?.text,
				linesDecoration : newPages[source?.index]?.sheet2?.linesDecoration,
			},
		};

		const sourceData = {
			...newPages[source?.index],
			sheet1 : {
				...newPages[source?.index]?.sheet1,
				layoutType      : newPages[destination?.index]?.sheet1?.layoutType,
				photos          : newPages[destination?.index]?.sheet1?.photos,
				text            : newPages[destination?.index]?.sheet1?.text,
				linesDecoration : newPages[destination?.index]?.sheet1?.linesDecoration,
			},
			sheet2 : {
				...newPages[source?.index]?.sheet2,
				layoutType      : newPages[destination?.index]?.sheet2?.layoutType,
				photos          : newPages[destination?.index]?.sheet2?.photos,
				text            : newPages[destination?.index]?.sheet2?.text,
				linesDecoration : newPages[destination?.index]?.sheet2?.linesDecoration,
			},
		};

		newPages[destination?.index] = destinationData;
		newPages[source?.index] = sourceData;

		const newObjPages = convertToObject(newPages);
		workSpaceSlice.insertPages(newObjPages);
	};

	const handlerDragStart = () => {
		workSpaceSlice.updatePageContent({
			currentConfigPhotoBook,
		});
	};

	useEffect(() => {
		const dataList = convertToArray(pagesData).slice(1, convertToArray(pagesData).length);
		const dataListLeaveFrontPage = dataList.filter(page => (page?.id !== "FrontLayout"));
		if (isValidArray(dataListLeaveFrontPage)) {
			const newPagesData = { ...pagesData };
			if (newPagesData?.FrontLayout) {
				delete newPagesData.FrontLayout;
			}
			delete newPagesData[convertToArray(pagesData)[0]?.id];
			const newData = {
				pages : {
					...newPagesData,
				},
				pagesIds : dataListLeaveFrontPage.map(page => page?.id),
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
							onDragStart={handlerDragStart}
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
