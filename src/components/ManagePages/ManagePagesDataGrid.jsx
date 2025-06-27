import { Grid }                      from "@mantine/core";
import { useSelector, shallowEqual } from "react-redux";
import { useState }                  from "react";
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
import { SortableBookPage} from "./BookPage";
import { convertToArray }  from "helpers";
import photoBooksConfing   from "core/constants/photoBooksConfing";
// Ajusta la ruta según tu store

import "./ManagePagesDataGrid.scss";

const ManagePagesDataGrid = () => {
	// const dispatch = useDispatch();
	const { data: photoBookData } = useSelector((state) => state.workSpaceSlice, shallowEqual);
	const photoBookDataPages = photoBookData?.pages || {};
	const [activePage, setActivePage] = useState(null);

	// Configuración del libro
	const currentPhotoBookConfig = photoBooksConfing[photoBookData?.product]?.[photoBookData?.format]?.sizes?.[photoBookData?.sizePhotoBook];
	const aspectRatio = currentPhotoBookConfig?.aspectRatio ?? [1, 1];

	// Transformación inicial de datos
	const initialPages = convertToArray(photoBookDataPages)
		.map((pageData) =>
			Object.values(pageData)
				.filter(page => page?.pageNo)
				.map((page, index) => ({
					...page,
					id           : `${pageData?.id}-${page.pageNo}`, // ID único para DnD
					spreadPageId : pageData?.id,
					sheetId      : `sheet${index + 1}`,
				}))
		)
		.flat()
		.sort((a, b) => a.pageNo - b.pageNo);

	const [pages, setPages] = useState(initialPages);

	// Sensores para DnD (mouse/touch y teclado)
	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint : {
				distance : 5, // Retraso de 5px antes de iniciar el drag
			},
		}),
		useSensor(KeyboardSensor, {
			coordinateGetter : sortableKeyboardCoordinates,
		})
	);

	// Función al soltar un elemento
	const handleDragEnd = (event) => {
		const { active, over } = event;

		if (active.id !== over.id) {
			setPages((prevPages) => {
				const oldIndex = prevPages.findIndex((page) => page.id === active.id);
				const newIndex = prevPages.findIndex((page) => page.id === over.id);

				// Intercambiar las páginas directamente (swap)
				const newPages = [...prevPages];
				[newPages[oldIndex], newPages[newIndex]] = [newPages[newIndex], newPages[oldIndex]]; // Swap ES6

				// Actualizar Redux

				return newPages;
			});
		}
		setActivePage(null);
	};

	// Función al empezar a arrastrar
	const handleDragStart = (event) => {
		setActivePage(pages.find((page) => page.id === event.active.id));
	};

	return (
		<DndContext
			sensors={sensors}
			modifiers={[restrictToWindowEdges]}
			collisionDetection={closestCenter}
			onDragEnd={handleDragEnd}
			onDragStart={handleDragStart}
		>
			<SortableContext items={pages} strategy={rectSortingStrategy}>
				<Grid w="100%" gutter={12}>
					{pages.map((page, index) => (
						<SortableBookPage
							key={page.id}
							index={index}
							pageData={page}
							aspectRatio={aspectRatio}
						/>
					))}
				</Grid>
			</SortableContext>

			{/* Overlay durante el arrastre */}
			<DragOverlay adjustScale={false}>
				{activePage ? (
					<div
						style={{
							background  : "rgba(0, 0, 0, 0.29)",
							width       : "100%",
							boxShadow   : "0px 0px 15px rgba(0, 0, 0, 0.5)",
							aspectRatio : `${aspectRatio[0]} / ${aspectRatio[1]}`,
							opacity     : 0.9,
							transform   : "scale(1.05)",
							transition  : "transform 0.1s ease",
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
