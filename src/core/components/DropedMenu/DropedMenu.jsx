import { useState } from "react";

//Own components
import { ArrowTop }                   from "Resources/icons";
import { MenuItem, SelectorMenuItem } from "core/components";
import "./DropedMenu.scss";

const DropedMenu = () => {
	const [ activeMenu, setActiveMenu ] = useState(false);
	return (
		<div id="DropedMenu">
			<div className={`menu ${!activeMenu && "hidden"}`}>
				<div className="menu-item">
					<label>PASTA</label>
					<MenuItem body="DURA" />
				</div>
				<div className="menu-item">
					<label>TAMAÑO</label>
					<SelectorMenuItem />
				</div>
				<div className="menu-item">
					<label>NÚMERO DE PÁGINAS</label>
					<SelectorMenuItem />
				</div>
				<div className="menu-item">
					<label>ENCUADERNADO</label>
					<MenuItem body="SEMIFLAT" />
				</div>
			</div>
			<div className={`selector-container ${!activeMenu && "hidden"}`}>
				<div className="action-droped" onClick={() => setActiveMenu(!activeMenu)}>
					<h3 className="tittle-action-droped">PROYECTO</h3>
					<div className={`icon-arrow-container ${!activeMenu && "hidden"}`}>
						<ArrowTop size="15px" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default DropedMenu;
