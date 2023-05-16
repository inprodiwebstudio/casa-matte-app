import { useState } from "react";
import LayoutsList  from "components/LayoutsList";

//Constants
import { filterTabs, optionsPhotoQuantity } from "./footerConstants";
//Owwn components
import { Tabs, SelectorMenuItem } from "core/components";
import { ArrowTop }               from "Resources/icons";
import "./Footer.scss";

const Footer = () => {
	const [ dropedToggle, setDropedToggle ] = useState(false);
	const myValue = {
		label : "8 Fotos",
		value : "8 Fotos",
	};
	return (
		<div id="Footer" className={`${dropedToggle && "full-size"}`}>
			<div className={`droped-container-action ${dropedToggle && "downArrow"}`} onClick={() => setDropedToggle(!dropedToggle)}>
				<ArrowTop size="20px" />
			</div>
			<div className="header-in-footer-container">
				<Tabs tabList={filterTabs} />
			</div>
			<div className="body-layouts-container">
				<div
					style={{
						marginTop : "15px",
						width     : "103px",
					}}
				>
					<SelectorMenuItem
						type="filled"
						placeholder="FOTOS"
						options={optionsPhotoQuantity}
						value={myValue}
						dropTopMenu
					/>
				</div>
				<div className="LayoutsContainer">
					<LayoutsList />
				</div>
			</div>
		</div>
	);
};

export default Footer;
