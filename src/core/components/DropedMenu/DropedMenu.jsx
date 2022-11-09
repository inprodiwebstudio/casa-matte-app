import React from "react";
import "./DropedMenu.scss";

//Own components
import { ArrowTop } from "Resources/icons";
import { MenuItem } from "core/components";

const DropedMenu = () => {
	return (
		<div id="DropedMenu">
			<div className="menu">
				<div className="menu-item">
					<label>Pasta</label>
					<MenuItem />
				</div>
				<div className="menu-item">
					<label>Pasta</label>
					<MenuItem />
				</div>
				<div className="menu-item">
					<label>Pasta</label>
					<MenuItem />
				</div>
				<div className="menu-item">
					<label>Pasta</label>
					<MenuItem />
				</div>
			</div>
			<div className="selector-container">
				<div className="action">
					<p>PROYECTO</p>
					<ArrowTop size="15px" />
				</div>
			</div>
		</div>
	);
};

export default DropedMenu;
