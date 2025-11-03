import { useSelector, shallowEqual }    from "react-redux";
import { useEffect, useMemo, useState } from "react";

const useWorkspaceScale = () => {
	const product = useSelector((state) => state.workSpaceSlice.data?.product, shallowEqual);
	const format = useSelector((state) => state.workSpaceSlice.data?.format, shallowEqual);
	const size = useSelector((state) => state.workSpaceSlice.data?.sizePhotoBook, shallowEqual);
	const currentPageData = useSelector((state) => state.workSpaceSlice.currentPageData, shallowEqual);

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
				if (width <= 1199) return onePageBigTablet ?? onePageBase;
				if (width <= 1501) return onePageLaptop ?? onePageBase;
				if (width <= 1800) return onePageBigLaptop ?? onePageBase;
				return onePageBase;
			} else {
				if (width <= 1199) return bigTablet ?? base;
				if (width <= 1501) return laptop ?? base;
				if (width <= 1800) return bigLaptop ?? base;
				return base;
			}
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
			case "travelcoffeetable-vertical-grande":
				return getScale(0.73, 0.53, 0.67, 0.3, 0.75, 0.55, 0.7, 0.35);
			case "horizontal-grande":
				return getScale(0.6, 0.4, 0.45, 0.3, 0.75, 0.53, 0.6, 0.35);
			case "horizontal-mediano":
				return getScale(0.75, 0.52, 0.65, 0.45, 0.95, 0.7, 0.95, 0.65);
			case "horizontal-mediano-layflat":
				return getScale(0.75, 0.54, 0.65, 0.45, 0.95, 0.7, 0.95, 0.65);
			case "vertical-mediano":
				return getScale(0.8, 0.6, 0.6, 0.45, 0.8, 0.6, 0.6, 0.45);
			case "cuadrado-chico":
				return getScale(1, 0.65, 0.85, 0.75, 0.95, 0.75, 0.85, 0.7);
			case "cuadrado-mediano":
				return getScale(0.55, 0.4, 0.52, 0.42, 0.55, 0.4, 0.52, 0.42);
			case "cuadrado-grande":
				return getScale(0.6, 0.45, 0.57, 0.47, 0.6, 0.45, 0.57, 0.47);
			default:
				return getScale(0.6, 0.43, 0.55, 0.45, 0.6, 0.43, 0.55, 0.45);
		}
	}, [product, format, size, isOnePage, windowWidth]);

	return scale;
};

export default useWorkspaceScale;
