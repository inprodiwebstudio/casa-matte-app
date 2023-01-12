import { useState } from "react";

//Owwn components
import { Tabs, SelectorMenuItem } from "core/components";
import { ArrowTop }               from "Resources/icons";
import "./Footer.scss";

const Footer = () => {
	const [ dropedToggle, setDropedToggle ] = useState(false);
	return (
		<div id="Footer" className={`${dropedToggle && "full-size"}`}>
			<div className={`droped-container-action ${dropedToggle && "downArrow"}`} onClick={() => setDropedToggle(!dropedToggle)}>
				<ArrowTop size="20px" />
			</div>
			<div className="header-in-footer-container">
				<Tabs tabList={["TODOS", "SOLO FOTOS", "SOLO TEXTO", "FOTOS Y TEXTO", "PÁGINA SENCILLA", "PÁGINA DOBLE"]} />
			</div>
			<div className="body-layouts-container">
				<div
					style={{
						width : "120px",
					}}
				>
					<SelectorMenuItem
						type="filled"
						placeholder="PAGINAS"
					/>
				</div>
			</div>
		</div>
	);
};

export default Footer;
