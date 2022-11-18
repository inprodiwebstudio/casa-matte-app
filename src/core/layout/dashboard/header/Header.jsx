import React from "react";
import "./Header.scss";

//Own components
import { CarIcon } from "Resources/icons";

const Header = () => {
	return (
		<div className="Header">
			<div className="body-container">
				<h1 className="casa-matte-tittle">CASA MATTE</h1>
				<div>WHITE / SIN TÍTULO</div>
				<div className="icons-container">
					<div className="icon-container">
						<CarIcon size="20px" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
