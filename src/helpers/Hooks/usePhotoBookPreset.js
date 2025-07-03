import { useDispatch }    from "react-redux";
import { workSpaceSlice } from "store/Slices";
import convertToObject    from "helpers/convertToobject";

export const usePhotoBookPreset = () => {
	const dispatch = useDispatch();

	const createPresetPhotoBook = (productData) => {
		const meta = productData?.meta;
		const modified = productData?.modified;

		const formatAndSize = getFormatAndSize(meta?.tamano);
		const dimensions = getDimensions(meta?.tamano);
		const model = getModel(meta?.modelo);
		const price = meta?.precio_total?.replace("$", "") ?? "0";
		const numberOfPages = meta?.numero_de_paginas ? Number(meta?.numero_de_paginas) : 40;

		const configPhotoBookData = {
			postTypeId    : productData?.id ?? undefined,
			sizePhotoBook : formatAndSize.size,
			dimentions    : dimensions,
			product       : model.modelKey,
			productName   : model.productName,
			format        : formatAndSize.format,
			frontPage     : defaultFrontPage(),
			numberOfPages,
			minPages      : meta?.pasta === "Dura" ? 25 : 10,
			maxPages      : numberOfPages,
			currentPage   : "page1",
			projectTittle : "TITULO",
			basePrice     : price.replace(" ", ""),
			bound         : meta?.encuadernado ?? "",
			pasta         : meta?.pasta ?? "",
			maxRangePages : numberOfPages,
			pages         : convertToObject(generatePages(numberOfPages, model.modelKey === "layflat")),
		};

		try {
			dispatch(workSpaceSlice.actions.insertData({ ...configPhotoBookData, modified }));
		} catch (error) {
			console.error(error);
		}
	};

	return { createPresetPhotoBook };
};

const whiteListOfSizes = ["chico", "mediano", "grande"];
const whiteListOfFormats = ["horizontal", "vertical", "cuadrado"];

const getFormatAndSize = (tamano = "") => {
	const result = { format : "vertical", size : "grande" };
	const lower = tamano.toLowerCase();

	const sizeFound = whiteListOfSizes.find(word => lower.includes(word));
	const formatFound = whiteListOfFormats.find(word => lower.includes(word));

	if (sizeFound === "chico") {
		return { size : "chico", format : "cuadrado" };
	}

	if (sizeFound && formatFound) {
		return { size : sizeFound, format : formatFound };
	}

	return result;
};

const getDimensions = (tamano = "") => {
	const match = tamano.match(/\(\d+x\d+cm\)/);
	return match?.[0] ?? "30x35cm";
};

const getModel = (modelo = "") => {
	const parsedModel = modelo ? modelo.toUpperCase().replace("PHOTOBOOK", "").replace(/\s/g, "").toLowerCase() : "white";
	const productName = modelo || "WHITE PHOTOBOOK";
	return { modelKey : parsedModel, productName };
};

const defaultFrontPage = () => ({
	id     : "FrontLayout",
	sheet1 : {
		layoutType : "",
		text       : {},
		photos     : {
			"0" : { id : "", url : "" },
		},
	},
});

const generatePages = (numberOfPages, isLayflat) => {
	const totalPaginations = (numberOfPages - 1) / 2;
	const isEvenPages = totalPaginations % 2 === 0;
	const pageCount = isEvenPages ? totalPaginations : (numberOfPages / 2) + 1;

	if (isLayflat) {
		return Array(numberOfPages).fill(0).map((_, index) => {
			return {
				id     : `page${index + 1}`,
				sheet1 : {
					pageNo     : index + 1,
					layoutType : "",
					text       : {},
					photos     : { 0 : { id : "", url : "" } },
				},
				sheet2 : {
					pageNo     : index + 1,
					layoutType : "",
					text       : "",
					photos     : { 0 : { id : "", url : "" } },
				},
			};
		});
	}

	return Array(pageCount).fill(0).map((_, index) => {
		if (index === 0) {
			return {
				id     : "page1",
				sheet1 : {
					pageNo     : 1,
					layoutType : "",
					text       : "",
					photos     : { 0 : { id : "", url : "" } },
				},
			};
		}

		if (index === pageCount - 1 && !isEvenPages) {
			return {
				id     : `page${index + 1}`,
				sheet1 : {
					pageNo     : numberOfPages,
					layoutType : "",
					text       : {},
					photos     : { 0 : { id : "", url : "" } },
				},
			};
		}

		return {
			id     : `page${index + 1}`,
			sheet1 : {
				pageNo     : index * 2,
				layoutType : "",
				text       : {},
				photos     : { 0 : { id : "", url : "" } },
			},
			sheet2 : {
				pageNo     : (index * 2) + 1,
				layoutType : "",
				text       : "",
				photos     : { 0 : { id : "", url : "" } },
			},
		};
	});
};
