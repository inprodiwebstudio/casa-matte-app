import { DropedMenu } from "core/components";
import React          from "react";
import "./Navbar.scss";

const Navbar = () => {
	return (
		<div className="Navbar">
			<DropedMenu />
			<div
				style={{
					background : "red",
					overflow   : "hidden",
					flexGrow   : 3,
				}}
			>
				Container
			</div>
			<div>Button Add</div>
		</div>
	);
};

export default Navbar;
