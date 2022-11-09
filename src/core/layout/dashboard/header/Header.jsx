import React from "react";
import "./Header.scss";

const Header = () => {
	return (
		<div id="Header">
			<div className="body-container">
				<h1 className="casa-matte-tittle">CASA MATTE</h1>
				<div>Tittle</div>
				<div className="icons-container">
					<div>Save</div>
					<div>Car</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
