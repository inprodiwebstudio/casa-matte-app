import { useEffect, useState } from "react";

//Own components
import { shallowEqual, useSelector } from "react-redux";
import { ArrowTop }                  from "Resources/icons";
import { MenuItem }                  from "core/components";
// import { convertToArray, currencyFormat } from "helpers";
import "./DropedMenu.scss";
import { convertToArray, currencyFormat, counterSheets } from "helpers";

const DropedMenu = () => {
	const [ activeMenu, setActiveMenu ] = useState(false);

	const [ extraPages, setExtraPages ] = useState(0);

	const loading = useSelector((state) => state.workSpaceSlice.loading, shallowEqual);
	const pasta = useSelector((state) => state.workSpaceSlice.data.pasta, shallowEqual);
	const sizePhotoBook = useSelector((state) => state.workSpaceSlice.data.sizePhotoBook, shallowEqual);
	const dataPages = useSelector((state) => state.workSpaceSlice.data, shallowEqual);
	const maxRangePages = useSelector((state) => state.workSpaceSlice.data?.maxRangePages, shallowEqual);
	const basePrice = useSelector((state) => state.workSpaceSlice.data?.basePrice, shallowEqual);
	// const extraCost = useSelector((state) => state.workSpaceSlice.data?.extraCost, shallowEqual);

	const listOfPages = convertToArray(dataPages.pages);
	const counterPages = () => counterSheets(listOfPages);

	const handlerCost = () => {
		let extraCost = 0;
		if ((sizePhotoBook === "chico") || (sizePhotoBook === "mediano")) {
			extraCost = 15;
		}
		extraCost = 22;
		const cost = extraPages * Number(extraCost);
		if (basePrice && basePrice !== "") {
			const formatStringPrice = basePrice.replace(",", "");
			const basePriceNumber = Number(formatStringPrice);
			return currencyFormat(cost + basePriceNumber);
		}
		return extraCost;
	};

	useEffect(() => {
		if (counterPages() > Number(maxRangePages)) {
			setExtraPages(counterPages() - Number(maxRangePages));
			return;
		}
		setExtraPages(0);
	}, [dataPages.pages]);

	return (
		<div id="DropedMenu">
			<div className={`selector-container ${!activeMenu && "hidden"}`}>
				<div
					className={`action-droped ${loading && "loading"}`}
					{
						...(!loading && {
							onClick : () => setActiveMenu(!activeMenu),
						})
					}
				>
					<h3 className="tittle-action-droped">PROYECTO</h3>
					{
						!loading && (
							<div className={`icon-arrow-container ${!activeMenu && "hidden"}`}>
								<ArrowTop size="12px" />
							</div>
						)
					}
				</div>
			</div>
			<div className={`menu ${!activeMenu && "hidden"}`}>
				<div className="menu-item">
					<label>PASTA</label>
					<MenuItem body={pasta ?? ""} />
				</div>
				<div className="menu-item">
					<label>TAMAÑO</label>
					<MenuItem body={sizePhotoBook ?? ""} />
				</div>
				<div className="menu-item">
					<label>NÚMERO DE PÁGINAS</label>
					<MenuItem body={counterPages()} />
				</div>
				<div className="menu-item">
					<label>Precio total</label>
					<MenuItem body={`${handlerCost()}`} />
				</div>
			</div>
		</div>
	);
};

export default DropedMenu;
