import { useSelector, shallowEqual }    from "react-redux";
import { useEffect, useMemo, useState } from "react";

const useWorkspaceScale = () => {
	const product = useSelector((state) => state.workSpaceSlice.data?.product, shallowEqual);
	const format = useSelector((state) => state.workSpaceSlice.data?.format, shallowEqual);
	const size = useSelector((state) => state.workSpaceSlice.data?.sizePhotoBook, shallowEqual);
	const statusViewPage = useSelector((state) => state.workSpaceSlice?.statusViewPage, shallowEqual);
	const currentPageData = useSelector((state) => state.workSpaceSlice.currentPageData, shallowEqual);

	const isInPreview = statusViewPage === "preview";

	const isOnePage = !currentPageData?.sheet2 && currentPageData?.id !== "FrontLayout";

	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const scale = useMemo(() => {
	  const width = windowWidth;

		// Función helper para calcular scale basado en breakpoints
		const getScale = (
			base,
			laptop,
			bigLaptop,
			bigTablet,
			onePageBase,
			onePageLaptop,
			onePageBigLaptop,
			onePageBigTablet
		) => {
			if (isOnePage) {
				if (width <= 1200) return onePageBigTablet ?? onePageBase;
				if (width <= 1500) return onePageLaptop ?? onePageBase;
				if (width <= 1800) return onePageBigLaptop ?? onePageBase;
				return onePageBase;
			} else {
				if (width <= 1200) return bigTablet ?? base;
				if (width <= 1500) return laptop ?? base;
				if (width <= 1800) return bigLaptop ?? base;
				return base;
			}
		};

		const scalesProducts = {
			"vertical-grande-workSpace" : {
				"workSpaceScales" : getScale(0.6, 0.43, 0.55, 0.45, 0.6, 0.43, 0.55, 0.45),
				"previewScales"   : getScale(0.77, 0.6, 0.6, 0.5, 0.77, 0.6, 0.6, 0.5),
			},
			"travel-coffee-table" : {
				"workSpaceScales" : getScale(0.6, 0.43, 0.45, 0.4, 0.6, 0.45, 0.45, 0.4),
				"previewScales"   : getScale(0.6, 0.43, 0.45, 0.4, 0.6, 0.45, 0.45, 0.4),
			},
			"horizontal-grande" : {
				"workSpaceScales" : getScale(0.6, 0.4, 0.45, 0.3, 0.75, 0.53, 0.6, 0.35),
				"previewScales"   : getScale(0.8, 0.6, 0.65, 0.5, 0.8, 0.7, 0.75, 0.55),
			},
			"horizontal-mediano" : {
				"workSpaceScales" : getScale(0.75, 0.52, 0.65, 0.45, 0.95, 0.7, 0.95, 0.65),
				"previewScales"   : getScale(0.95, 0.8, 0.8, 0.7, 0.95, 0.9, 0.9, 0.7),
			},
			"horizontal-mediano-layflat" : {
				"workSpaceScales" : getScale(0.75, 0.54, 0.65, 0.45, 0.95, 0.7, 0.95, 0.65),
				"previewScales"   : getScale(1, 0.8, 0.85, 0.7, 0.95, 0.7, 0.95, 0.65),
			},
			"vertical-mediano" : {
				"workSpaceScales" : getScale(0.8, 0.6, 0.6, 0.45, 0.8, 0.6, 0.6, 0.45),
				"previewScales"   : getScale(0.9, 0.75, 0.8, 0.65, 0.9, 0.75, 0.8, 0.65),
			},
			"cuadrado-chico" : {
				"workSpaceScales" : getScale(1, 0.65, 0.85, 0.75, 0.95, 0.75, 0.85, 0.7),
				"previewScales"   : getScale(1, 0.9, 0.95, 0.85, 1, 0.9, 0.95, 0.85),
			},
			"cuadrado-mediano" : {
				"workSpaceScales" : getScale(0.55, 0.4, 0.52, 0.42, 0.55, 0.4, 0.52, 0.42),
				"previewScales"   : getScale(0.75, 0.6, 0.65, 0.55, 0.75, 0.6, 0.65, 0.55),
			},
			"cuadrado-grande" : {
				"workSpaceScales" : getScale(0.6, 0.45, 0.57, 0.47, 0.6, 0.45, 0.57, 0.47),
				"previewScales"   : getScale(0.8, 0.65, 0.7, 0.6, 0.8, 0.65, 0.7, 0.6),
			},
		};

		const handlerGetCales = (keyScale) => {
			if (isInPreview) {
				return scalesProducts[keyScale]["previewScales"];
			}
			return scalesProducts[keyScale]["workSpaceScales"];
		};

		// Mapeo de casos basado en product-format-size (replicando WorkSpace.scss)
		const keyConstructor = () => {
			if (product === "travelcoffeetable") {
				return "travel-coffee-table";
			}
			if ((product === "layflat") && (format === "horizontal") && (size === "mediano")) {
				return `${format}-${size}-layflat`;
			}
			return `${format}-${size}`;
		};
		const key = keyConstructor();
		switch (key) {
			case "travel-coffee-table":
				return handlerGetCales("travel-coffee-table");
			case "horizontal-grande":
				return handlerGetCales("horizontal-grande");
			case "horizontal-mediano":
				return handlerGetCales("horizontal-mediano");
			case "horizontal-mediano-layflat":
				return handlerGetCales("horizontal-mediano-layflat");
			case "vertical-mediano":
				return handlerGetCales("vertical-mediano");
			case "cuadrado-chico":
				return handlerGetCales("cuadrado-chico");
			case "cuadrado-mediano":
				return handlerGetCales("cuadrado-mediano");
			case "cuadrado-grande":
				return handlerGetCales("cuadrado-grande");
			default:
				return handlerGetCales("vertical-grande-workSpace");
		}
	}, [product, format, size, isOnePage, windowWidth]);

	console.log("scale", scale);

	return scale;
};

export default useWorkspaceScale;
