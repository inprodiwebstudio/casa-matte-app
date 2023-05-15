import { useState } from "react";
import LayoutsList  from "components/LayoutsList";


//Owwn components
import { Tabs, SelectorMenuItem } from "core/components";
import { ArrowTop }               from "Resources/icons";
import "./Footer.scss";

const Footer = () => {
	const [ dropedToggle, setDropedToggle ] = useState(false);
	const myValue = {
		label : "Todos",
		value : "Todos",
	};
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
						width     : "125px",
					}}
				>
					<SelectorMenuItem
						type="filled"
						placeholder="FOTOS"
						options={[
							{
								label : "1 Foto",
								value : "1 Foto",
							},
							{
								label : "2 Fotos",
								value : "2 Fotos",
							},
							{
								label : "3 Fotos",
								value : "3 Fotos",
							},
							{
								label : "4 Fotos",
								value : "4 Fotos",
							},
							{
								label : "5 Fotos",
								value : "5 Fotos",
							},
							{
								label : "6 Fotos",
								value : "6 Fotos",
							},
							{
								label : "7 Fotos",
								value : "7 Fotos",
							},
							{
								label : "8 Fotos",
								value : "8 Fotos",
							},
							{
								label : "9 Fotos",
								value : "9 Fotos",
							},
							{
								label : "Todos",
								value : "Todos",
							},
						]}
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
