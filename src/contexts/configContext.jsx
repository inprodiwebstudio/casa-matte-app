import {createContext, useState, useEffect} from "react";
import { useSelector, shallowEqual }        from "react-redux";

//Hooks
import { useHandlerConfigBook } from "helpers/Hooks/useHandlerConfigBook";

export const currentConfigPhotoBookContext = createContext();

export const CurrentConfigPhotoBookProvider = ({children}) => {
	const photoCurrentPageData = useSelector((state) => state.workSpaceSlice.currentPageData, shallowEqual);
	const currentPageId = useSelector((state) => state.workSpaceSlice.data.currentPage, shallowEqual);

	const {layoutMods} = useHandlerConfigBook() ?? {};

	const defaultDataConfig = {
		modlayoutId     : undefined,
		texts           : undefined,
		linesDecoration : undefined,
		photos          : undefined,
	};
	const [currentConfigPhotoBook, setCurrentConfigPhotoBook] = useState({
		pageId : undefined,
		sheet1 : defaultDataConfig,
		sheet2 : defaultDataConfig,
	});

	const [historyChanges, setHistoryChanges] = useState([]);

	const handlerHistoryChanges = (data) => {
		if (historyChanges.length <= 9) {
			setHistoryChanges([...historyChanges, data]);
		}
	};

	useEffect(() => {
		if (photoCurrentPageData && layoutMods) {
			setCurrentConfigPhotoBook({
				pageId : photoCurrentPageData?.id ?? undefined,
				sheet1 : {
					modlayoutId     : photoCurrentPageData?.sheet1?.layoutType ?? undefined,
					texts           : photoCurrentPageData?.sheet1?.text ?? undefined,
					photos          : photoCurrentPageData?.sheet1?.photos ?? undefined,
					linesDecoration : photoCurrentPageData?.sheet1?.linesDecoration ?? undefined,
				},
				...(photoCurrentPageData?.sheet2 && {
					sheet2 : {
						modlayoutId     : photoCurrentPageData?.sheet2?.layoutType ?? undefined,
						texts           : photoCurrentPageData?.sheet2?.text ?? undefined,
						photos          : photoCurrentPageData?.sheet2?.photos ?? undefined,
						linesDecoration : photoCurrentPageData?.sheet2?.linesDecoration ?? undefined,
					},
				}),
			});
		}
	}, [photoCurrentPageData, layoutMods]);


	useEffect(() => {
		if ((currentConfigPhotoBook?.pageId !== undefined)) {
			handlerHistoryChanges(currentConfigPhotoBook);
		}
	}, [currentConfigPhotoBook]);

	useEffect(() => {
		if (currentPageId !== photoCurrentPageData?.id) {
			setHistoryChanges([]);
		}
	}, [currentPageId]);

	console.log(historyChanges);

	return (
		<currentConfigPhotoBookContext.Provider
			value={{
				currentConfigPhotoBook,
				setCurrentConfigPhotoBook,
			}}
		>
			{children}
		</currentConfigPhotoBookContext.Provider>
	);
};
