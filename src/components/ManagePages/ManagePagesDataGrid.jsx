import { Grid, Group }               from "@mantine/core";
import { useSelector, shallowEqual } from "react-redux";
import { useState, useMemo }         from "react";
import {
	DndContext,
	closestCenter,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
	DragOverlay,
} from "@dnd-kit/core";
// eslint-disable-next-line import/no-extraneous-dependencies
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
// eslint-disable-next-line import/no-extraneous-dependencies
import {
	SortableContext,
	sortableKeyboardCoordinates,
	rectSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableBookPage } from "./BookPage";
import { convertToArray }   from "helpers";
import photoBooksConfing    from "core/constants/photoBooksConfing";
import "./ManagePagesDataGrid.scss";

const ManagePagesDataGrid = () => {
	const { data: photoBookData } = useSelector((state) => state.workSpaceSlice, shallowEqual);
	const photoBookDataPages = photoBookData?.pages || {};
	const [activePage, setActivePage] = useState(null);

	// Configuración del libro
	const currentPhotoBookConfig = photoBooksConfing[photoBookData?.product]?.[photoBookData?.format]?.sizes?.[photoBookData?.sizePhotoBook];
	const aspectRatio = currentPhotoBookConfig?.aspectRatio ?? [1, 1];

	// Transformación inicial de datos y agrupación en spreads
	const spreads = useMemo(() => {
		const initialPages = convertToArray(photoBookDataPages)
			.map((pageData) =>
				Object.values(pageData)
					.filter(page => page?.pageNo)
					.map((page, index) => ({
						...page,
						id           : `${pageData?.id}-${page.pageNo}`,
						spreadPageId : pageData?.id,
						sheetId      : `sheet${index + 1}`,
					}))
			)
			.flat()
			.sort((a, b) => a.pageNo - b.pageNo);

		const spreads = [];

		// Primera página siempre sola
		if (initialPages.length > 0) {
			spreads.push({
				id    : `spread-${initialPages[0].id}`,
				pages : [initialPages[0]],
				type  : "single",
			});
		}

		// Agrupar el resto en pares (spreads)
		for (let i = 1; i < initialPages.length; i += 2) {
			const currentPage = initialPages[i];
			const nextPage = initialPages[i + 1];

			spreads.push({
				id    : `spread-${currentPage.id}`,
				pages : nextPage ? [currentPage, nextPage] : [currentPage],
				type  : nextPage ? "double" : "single",
			});
		}

		return spreads;
	}, [photoBookDataPages]);

	const [spreadsState, setSpreadsState] = useState(spreads);

	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint : {
				distance : 5,
			},
		}),
		useSensor(KeyboardSensor, {
			coordinateGetter : sortableKeyboardCoordinates,
		})
	);

	const handleDragEnd = (event) => {
		const { active, over } = event;

		if (active?.id && over?.id && active.id !== over.id) {
			setSpreadsState((prevSpreads) => {
				// Reconstruir el array plano para el reordenamiento
				const flatPages = prevSpreads.flatMap(spread => spread.pages);
				const oldIndex = flatPages.findIndex((page) => page.id === active.id);
				const newIndex = flatPages.findIndex((page) => page.id === over.id);

				// Intercambiar las páginas
				const newFlatPages = [...flatPages];
				[newFlatPages[oldIndex], newFlatPages[newIndex]] = [newFlatPages[newIndex], newFlatPages[oldIndex]];

				// Actualizar los números de página
				newFlatPages.forEach((page, idx) => {
					page.pageNo = idx + 1;
				});

				// Volver a agrupar en spreads
				return groupPagesIntoSpreads(newFlatPages);
			});
		}
		setActivePage(null);
	};

	const groupPagesIntoSpreads = (pagesArray) => {
		const newSpreads = [];

		if (pagesArray.length > 0) {
			newSpreads.push({
				id    : `spread-${pagesArray[0].id}`,
				pages : [pagesArray[0]],
				type  : "single",
			});
		}

		for (let i = 1; i < pagesArray.length; i += 2) {
			const currentPage = pagesArray[i];
			const nextPage = pagesArray[i + 1];

			newSpreads.push({
				id    : `spread-${currentPage.id}`,
				pages : nextPage ? [currentPage, nextPage] : [currentPage],
				type  : nextPage ? "double" : "single",
			});
		}

		return newSpreads;
	};

	const handleDragStart = (event) => {
		const activeId = event.active.id;
		const allPages = spreadsState.flatMap(spread => spread.pages);
		setActivePage(allPages.find((page) => page.id === activeId));
	};

	return (
		<DndContext
			sensors={sensors}
			modifiers={[restrictToWindowEdges]}
			collisionDetection={closestCenter}
			onDragEnd={handleDragEnd}
			onDragStart={handleDragStart}
		>
			<SortableContext items={spreadsState.flatMap(s => s.pages)} strategy={rectSortingStrategy}>
				<Grid
					w="100%"
					gutter={20}
				>
					{spreadsState.map((spread, index) => (
						<Grid.Col key={spread.id} span={4}>
							<Group
								position="center"
								spacing="0px"
							>
								{spread.pages.map((page) => (
									<SortableBookPage
										key={page.id}
										pageData={page}
										aspectRatio={aspectRatio}
									/>
								))}
							</Group>
						</Grid.Col>
					))}
				</Grid>
			</SortableContext>

			<DragOverlay adjustScale={false}>
				{activePage ? (
					<div
						style={{
							background     : "rgba(0, 0, 0, 0.37)",
							boxShadow      : "0px 5px 15px rgba(0, 0, 0, 0.2)",
							aspectRatio    : `${aspectRatio[0]} / ${aspectRatio[1]}`,
							opacity        : 0.9,
							transform      : "scale(1.03)",
							transition     : "transform 0.1s ease",
							borderRadius   : "2px",
							display        : "flex",
							justifyContent : "center",
							alignItems     : "center",
						}}
					>
						&nbsp;
					</div>
				) : null}
			</DragOverlay>
		</DndContext>
	);
};

export default ManagePagesDataGrid;
