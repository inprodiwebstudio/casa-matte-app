import { isValidArray }                     from "helpers";
import {createContext, useState, useEffect} from "react";
import { useSelector, shallowEqual }        from "react-redux";

export const currentConfigPhotoBookContext = createContext();

export const CurrentConfigPhotoBookProvider = ({children}) => {
	const photoCurrentPageData = useSelector((state) => state.workSpaceSlice.currentPageData, shallowEqual);

	const defaultDataConfig = {
		modlayoutId : undefined,
		texts       : undefined,
		photos      : undefined,
	};
	const [currentConfigPhotoBook, setCurrentConfigPhotoBook] = useState({
		sheet1 : defaultDataConfig,
		sheet2 : defaultDataConfig,
	});

	useEffect(() => {
		if (photoCurrentPageData) {
			const parseTextsObject = (textObject) => {
				if (!textObject) {
					return undefined;
				}

				const listOfTexts = Object.values(textObject);

				if (!isValidArray(listOfTexts)) {
					return undefined;
				}

				const isAvailableNewKeys = textObject?.position;

				if (isAvailableNewKeys) {
					return textObject;
				}

				const newListOfTexts = listOfTexts.map((text) => ({
					text,
					position : undefined,
					sizes    : undefined,
				}));

				const newTextObject = newListOfTexts.reduce((acc, item, index) => {
					acc[index] = item;
					return acc;
				}, {});

				return newTextObject;

				//The sizes and position format is position : {x:0, y:0} and sizes : {width:0, height:0}
			};

			setCurrentConfigPhotoBook({
				sheet1 : {
					modlayoutId : photoCurrentPageData?.sheet1?.layoutType ?? undefined,
					texts       : parseTextsObject(photoCurrentPageData?.sheet1?.text ?? undefined),
					photos      : photoCurrentPageData?.sheet1?.photos ?? undefined,
				},
				...(photoCurrentPageData?.sheet2 && {
					sheet2 : {
						modlayoutId : photoCurrentPageData?.sheet2?.layoutType ?? undefined,
						texts       : parseTextsObject(photoCurrentPageData?.sheet2?.text ?? undefined),
						photos      : photoCurrentPageData?.sheet2?.photos ?? undefined,
					},
				}),
			});
		}
	}, [photoCurrentPageData]);

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
