import { useState } from "react";

//Own components
import { shallowEqual, useSelector } from "react-redux";
import { ArrowTop }                  from "Resources/icons";
import { MenuItem }                  from "core/components";
// import { convertToArray, currencyFormat } from "helpers";
import "./DropedMenu.scss";
import { convertToArray, currencyFormat, counterSheets } from "helpers";

const DropedMenu = () => {
	const [ activeMenu, setActiveMenu ] = useState(false);

	// const [ extraPages, setExtraPages ] = useState(0);

	const loading = useSelector((state) => state.workSpaceSlice.loading, shallowEqual);
	const dataPages = useSelector((state) => state.workSpaceSlice.data, shallowEqual);

	const listOfPages = convertToArray(dataPages.pages);

	// const handlerPrice = () => {
	// 	const pageNumbers = listOfPages[listOfPages.length - 1]?.sheet2 ? listOfPages[listOfPages.length - 1]?.sheet2?.pageNo : listOfPages[listOfPages.length - 1]?.sheet1?.pageNo;

	// 	if (pageNumbers > 16) {
	// 		setExtraPages(extraPages + 1);
	// 	}
	// 	if (pageNumbers <= 16) {
	// 		setExtraPages(0);
	// 	}
	// };

	// useEffect(() => {
	// 	if (dataPages) {
	// 		handlerPrice();
	// 	}
	// }, [dataPages]);

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
					<MenuItem body="DURA" />
				</div>
				<div className="menu-item">
					<label>TAMAÑO</label>
					<MenuItem body="GRANDE" />
				</div>
				<div className="menu-item">
					<label>NÚMERO DE PÁGINAS</label>
					<MenuItem body={counterSheets(listOfPages)} />
				</div>
				<div className="menu-item">
					<label>Precio total</label>
					<MenuItem body={`${currencyFormat(100)}`} />
				</div>
			</div>
		</div>
	);
};

export default DropedMenu;
