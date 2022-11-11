import { useState } from "react";

//Owwn components
import { ArrowTop } from "Resources/icons";
import "./Footer.scss";

const Footer = () => {
	const [ dropedToggle, setDropedToggle ] = useState(false);
	return (
		<div id="Footer" className={`${dropedToggle && "full-size"}`}>
			<div className="droped-container-action" onClick={() => setDropedToggle(!dropedToggle)}>
				<ArrowTop size="20px" className={`${dropedToggle && "downArrow"}`} />
			</div>
			<div className="header-in-footer-container">&nbsp;</div>
			<div className="body-layouts-container">&nbsp;</div>
		</div>
	);
};

export default Footer;
