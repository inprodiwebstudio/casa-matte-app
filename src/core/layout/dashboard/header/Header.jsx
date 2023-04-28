import React from "react";
import "./Header.scss";
//Mantine
import { openContextModal } from "@mantine/modals";

//Own components
import { CarIcon } from "Resources/icons";

const Header = () => {
	return (
		<div className="Header">
			<div className="body-container">
				<img src="https://casamatte.com/wp-content/uploads/2021/02/logo_casamatte-768x86.png" width="127" height="15" />
				<div>WHITE / SIN TÍTULO</div>
				<div className="icons-container">
					<div
						className="icon-container"
						onClick={() => openContextModal({
							modal : "testPdf",
						})}
					>
						<CarIcon size="20px" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
