import { convertToArray, convertToObject }        from "helpers";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { Thrash }                                 from "Resources/icons";
import { closeAllModals, openContextModal }       from "@mantine/modals";
import { workSpaceSlice }                         from "store/Slices";

const DeletePageActionButton = ({
	pageData,
	isLeftSide,
}) => {

	const dispatch = useDispatch();

	const pageId = pageData?.id ?? undefined;

	const sheetKey = isLeftSide ? "sheet1" : "sheet2";

	const myPages = useSelector((state) => state.workSpaceSlice.data.pages, shallowEqual);

	const product = useSelector((state) => state.workSpaceSlice.data.product, shallowEqual);

	const currentPages = useSelector((state) => state.workSpaceSlice.data.numberOfPages, shallowEqual);

	const minPages = useSelector((state) => state.workSpaceSlice.data.minPages, shallowEqual);

	const handlerDeleteSpread = () => {
		if (!pageId || !sheetKey) return;

		const clonePages = { ...myPages };

		delete clonePages[pageId];

		const listOfPages = convertToArray(clonePages).filter((page) => page.id !== "FrontLayout");
		const newListPagesParsed = listOfPages.map((page, index) => {
			const newDataPage = {
				...page,
				id     : `page${index + 1}`,
				sheet1 : {
					...page?.sheet1,
					pageNo : index === 0 ? 1 : (index * 2) + 1,
				},
				sheet2 : {
					...page?.sheet2,
					pageNo : (index + 1) * 2,
				},
			};
			return newDataPage;
		});

		const newObjPages = convertToObject(newListPagesParsed);

		dispatch(workSpaceSlice.actions.newListPages(newObjPages));
		if (!newObjPages[pageId]) {
			const listOfPages = newListPagesParsed;
			dispatch(workSpaceSlice.actions.handleChangePage(listOfPages[listOfPages.length - 1].id));
		}
		closeAllModals();
	};

	const handlerDeletePage = () => {
		if (!pageId || !sheetKey) return;

		const clonePages = { ...myPages };
		const listPages = convertToArray(clonePages).filter((page) => page.id !== "FrontLayout");
		const pageIndex = listPages.findIndex((page) => page.id === pageId);

		const firstPagesSlice = listPages.slice(0, pageIndex);
		const lastPagesSlice = listPages.slice(pageIndex, listPages.length);

		const cleanSheetSeetData = {
			layoutType : undefined,
			photos     : undefined,
			text       : undefined,
		};

		lastPagesSlice[0] = {
			...lastPagesSlice[0],
			[sheetKey] : {
				...lastPagesSlice[0]?.[sheetKey],
				...cleanSheetSeetData,
			},
		};

		const lastPage = lastPagesSlice[lastPagesSlice.length - 1];

		const isAvailableSecondSheet = lastPage.sheet2;

		let cloneDataLastSheet = undefined;

		if (!isAvailableSecondSheet) {
			cloneDataLastSheet = {
				layoutType : lastPage?.sheet1?.layoutType,
				photos     : lastPage?.sheet1?.photos,
				text       : lastPage?.sheet1?.text,
			};
			lastPagesSlice.pop();
		} else {
			cloneDataLastSheet = {
				layoutType : lastPage?.sheet2?.layoutType,
				photos     : lastPage?.sheet2?.photos,
				text       : lastPage?.sheet2?.text,
			};
			lastPagesSlice[lastPagesSlice.length - 1] = {
				id     : lastPagesSlice[lastPagesSlice.length - 1].id,
				sheet1 : {...lastPagesSlice[lastPagesSlice.length - 1].sheet1},
			};
		}

		const newReOrderLastPages = lastPagesSlice.map((page, index) => {
			const isNotChangedSheet1 = (sheetKey === "sheet2") && (index === 0);

			const sheet1HandlerData = {...page.sheet1, ...(page?.sheet2 ? {
				layoutType : page?.sheet2?.layoutType,
				photos     : page?.sheet2?.photos,
				text       : page?.sheet2?.text,
			} : {...cloneDataLastSheet})};
			const sheet2HandlerData = {...page.sheet2, ...(lastPagesSlice[index + 1]?.sheet1 ? {
				layoutType : lastPagesSlice[index + 1]?.sheet1?.layoutType,
				photos     : lastPagesSlice[index + 1]?.sheet1?.photos,
				text       : lastPagesSlice[index + 1]?.sheet1?.text,
			} : {...cloneDataLastSheet})};

			return {
				...page,
				sheet1 : isNotChangedSheet1 ? page.sheet1 : sheet1HandlerData,
				...(page.sheet2 && {sheet2 : sheet2HandlerData}),
			};
		});

		const newPagesSliceObj = convertToObject(newReOrderLastPages);

		const firstPagesSliceObj = convertToObject(firstPagesSlice);

		const constructorNewPages = {
			...firstPagesSliceObj,
			...newPagesSliceObj,
		};

		dispatch(workSpaceSlice.actions.newListPages(constructorNewPages));
		dispatch(workSpaceSlice.actions.deletePage());
		if (!constructorNewPages[pageId]) {
			const listOfPages = convertToArray(constructorNewPages);
			dispatch(workSpaceSlice.actions.handleChangePage(listOfPages[listOfPages.length - 1].id));
		}
		closeAllModals();
	};

	const onClickDelete = () => {
		if (currentPages === minPages) {
			openContextModal({
				modal : "minPagesLimit",
			});
			return;
		}
		openContextModal({
			modal      : "deletePageConfirm",
			innerProps : {
				handdleSuccess : (product === "layflat") ? handlerDeleteSpread : handlerDeletePage,
			},
		});
	};

	return (
		<div
			className={`delete-container-button ${isLeftSide && "left-sheet"}`}
			onClick={onClickDelete}
			style={{
				marginLeft : (product === "layflat") && "20px",
			}}
		>
			<Thrash size="15px" />
		</div>
	);
};

export default DeletePageActionButton;
