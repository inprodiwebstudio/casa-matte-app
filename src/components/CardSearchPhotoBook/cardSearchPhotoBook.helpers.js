import { convertToArray, isValidArray } from "helpers";
import highQualityImg                   from "helpers/Functions/highQualityImg";
export const loadImageWithRetry = (url, maxAttempts = 3) => {
	return new Promise((resolve, reject) => {
		let attempts = 0;

		const tryLoad = () => {
			const img = new Image();
			img.src = highQualityImg(url || null);

			img.onload = () => resolve(url);

			img.onerror = () => {
				attempts++;
				if (attempts < maxAttempts) {
					setTimeout(tryLoad, 500);
				} else {
					reject(new Error(`No se pudo cargar la imagen: ${url}`));
				}
			};
		};

		tryLoad();
	});
};

export const listTextPagesAvailable = (pages) => {
	const listOfPages = convertToArray(pages);
	const handlerIsAvailableTextInSheet = (sheetData) => {
		const texts = sheetData?.text;
		const listOfTexts = convertToArray(texts);
		if (!isValidArray(listOfTexts)) {
			return false;
		}
		const isAvailableText = listOfTexts.some((text) => text !== "");
		return isAvailableText;
	};
	const pagesAvailableText = listOfPages.filter((page) => {
		const isAvailableSheet1 = handlerIsAvailableTextInSheet(page?.sheet1);
		const isAvailableSheet2 = handlerIsAvailableTextInSheet(page?.sheet2);
		return isAvailableSheet1 || isAvailableSheet2;
	});
	const insertCleanSheet = (pageNo) => {
		return {
			pageNo,
			layoutType : "",
			text       : {},
			photos     : {},
		};
	};
	const textPagesWithoutImages = pagesAvailableText.map((page) => {
		return {
			id     : page?.id,
			sheet1 : handlerIsAvailableTextInSheet(page?.sheet1) ? page?.sheet1 : insertCleanSheet(page?.sheet1?.pageNo),
			...(page?.sheet2 && { sheet2 : handlerIsAvailableTextInSheet(page?.sheet2) ? page?.sheet2 : insertCleanSheet(page?.sheet2?.pageNo) }),
		};
	});
	return textPagesWithoutImages;
};

export const handlerIdsTextPages = (listPages, configProductPhotoBook) => {
	let idsTextPages = [];
	const handlerGenerateIdsPage = (sheetData) => {
		const modLayoutId = sheetData?.layoutType;
		const pageNo = sheetData?.pageNo;
		const numberTextImgs = configProductPhotoBook[modLayoutId]?.numberTextImgs;
		const arrayNumberTextImgs = Array.from({ length : numberTextImgs }, (_, i) => i);
		const listOfIdsTexts = arrayNumberTextImgs.map((numberText) => `${pageNo}-${modLayoutId}-text${numberText+1}`);
		return listOfIdsTexts;
	};

	listPages.forEach((page) => {
		const listOfIdsSheet1 = page?.sheet1?.layoutType ? handlerGenerateIdsPage(page?.sheet1) : [];
		const listOfIdsSheet2 = (page?.sheet2 && page?.sheet2?.layoutType) ? handlerGenerateIdsPage(page?.sheet2) : [];
		idsTextPages = [...idsTextPages, ...listOfIdsSheet1, ...listOfIdsSheet2];
	});
	return idsTextPages;
};
