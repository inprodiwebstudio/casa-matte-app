import { isValidArray }                     from "helpers";
import {createContext, useState, useEffect} from "react";
import { useSelector, shallowEqual }        from "react-redux";

//Hooks
import { useHandlerConfigBook } from "helpers/Hooks/useHandlerConfigBook";

export const currentConfigPhotoBookContext = createContext();

export const CurrentConfigPhotoBookProvider = ({children}) => {
	const photoCurrentPageData = useSelector((state) => state.workSpaceSlice.currentPageData, shallowEqual);


	const {layoutMods} = useHandlerConfigBook() ?? {};

	const defaultDataConfig = {
		modlayoutId : undefined,
		texts       : undefined,
		photos      : undefined,
	};
	const [currentConfigPhotoBook, setCurrentConfigPhotoBook] = useState({
		pageId : undefined,
		sheet1 : defaultDataConfig,
		sheet2 : defaultDataConfig,
	});

	useEffect(() => {
		if (photoCurrentPageData && layoutMods) {
			const parseTextsObject = (textObject, modLayout) => {
				if (!textObject || !modLayout) {
					return undefined;
				}

				const listOfTexts = Object.values(textObject);

				if (!isValidArray(listOfTexts)) {
					return undefined;
				}

				const isAvailableNewKeys = textObject[0]?.position;

				if (isAvailableNewKeys) {
					return textObject;
				}

				const layoutModConfig = layoutMods[modLayout];

				const defaultTexts = layoutModConfig?.defaultTexts;

				const newListOfTexts = listOfTexts.map((item, index) => {
					const textPresetConfig = defaultTexts?.[index];
					const {position, sizes, text, letterSpacing, gapSpacing, lineHeight } = textPresetConfig;
					return {
						text,
						position,
						sizes,
						letterSpacing,
						gapSpacing,
						lineHeight,
					};
				});

				const newTextObject = newListOfTexts.reduce((acc, item, index) => {
					acc[index] = item;
					return acc;
				}, {});

				return newTextObject;

				//The sizes and position format is position : {x:0, y:0} and sizes : {width:0, height:0}
			};

			setCurrentConfigPhotoBook({
				pageId : photoCurrentPageData?.id ?? undefined,
				sheet1 : {
					modlayoutId : photoCurrentPageData?.sheet1?.layoutType ?? undefined,
					texts       : parseTextsObject(photoCurrentPageData?.sheet1?.text ?? undefined, photoCurrentPageData?.sheet1?.layoutType ?? undefined),
					photos      : photoCurrentPageData?.sheet1?.photos ?? undefined,
				},
				...(photoCurrentPageData?.sheet2 && {
					sheet2 : {
						modlayoutId : photoCurrentPageData?.sheet2?.layoutType ?? undefined,
						texts       : parseTextsObject(photoCurrentPageData?.sheet2?.text ?? undefined, photoCurrentPageData?.sheet2?.layoutType ?? undefined),
						photos      : photoCurrentPageData?.sheet2?.photos ?? undefined,
					},
				}),
			});
		}
	}, [photoCurrentPageData, layoutMods]);

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
