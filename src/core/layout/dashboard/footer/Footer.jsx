import { useState } from "react";
import LayoutsList  from "components/LayoutsList";

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
				<Tabs tabList={[
					{
						label  : "TODOS",
						filter : "all",
					},
					{
						label  : "SOLO FOTOS",
						filter : "fotos",
					},
					{
						label  : "SOLO TEXTO",
						filter : "texto",
					},
					{
						label  : "FOTOS Y TEXTO",
						filter : "fotosytexto",
					},
				]} />
			</div>
			<div className="body-layouts-container">
				<div
					style={{
						marginTop : "15px",
						width     : "110px",
					}}
				>
					<SelectorMenuItem
						type="filled"
						placeholder="FOTOS"
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
