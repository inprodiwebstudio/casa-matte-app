import { useState } from "react";

//Own components
import { ArrowTop } from "Resources/icons";
import { MenuItem } from "core/components";
import "./DropedMenu.scss";

const DropedMenu = () => {
	const [ activeMenu, setActiveMenu ] = useState(false);
	return (
		<div id="DropedMenu">
			<div className={`menu ${!activeMenu && "hidden"}`}>
				<div className="menu-item">
					<label>PASTA</label>
					<MenuItem />
				</div>
				<div className="menu-item">
					<label>PASTA</label>
					<MenuItem />
				</div>
				<div className="menu-item">
					<label>PASTA</label>
					<MenuItem />
				</div>
				<div className="menu-item">
					<label>PASTA</label>
					<MenuItem />
				</div>
			</div>
			<div className="selector-container">
				<div className="action" onClick={() => setActiveMenu(!activeMenu)}>
					<p>PROYECTO</p>
					<div className={`icon-arrow-container ${!activeMenu && "hidden"}`}>
						<ArrowTop size="15px" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default DropedMenu;
