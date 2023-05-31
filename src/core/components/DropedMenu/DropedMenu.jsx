import { useState } from "react";

//Own components
import { shallowEqual, useSelector } from "react-redux";
import { ArrowTop }                  from "Resources/icons";
import { MenuItem }                  from "core/components";
import "./DropedMenu.scss";

const DropedMenu = () => {
	const [ activeMenu, setActiveMenu ] = useState(false);

	const loading = useSelector((state) => state.workSpaceSlice.loading, shallowEqual);

	return (
		<div id="DropedMenu">
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
					<MenuItem body="20" />
				</div>
				<div className="menu-item">
					<label>Precio total</label>
					<MenuItem body="$ 2,350.00" />
				</div>
			</div>
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
		</div>
	);
};

export default DropedMenu;
