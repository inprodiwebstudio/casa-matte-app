import React from "react";

//Own components
// eslint-disable-next-line import/extensions
import Html           from "react-pdf-html";
import ReactDOMServer from "react-dom/server";

import casaMatteLabLogo from "../../../Resources/images/casaMatteLogo.png";


const SpinePage = ({
	material,
	frontColor,
	productName,
	hexColorFront,
	engravingColor,
	hexColorEngraving,
	isAvailableSpineText,
}) => {
	const bodyHtml = (
		<div
			style={{
				height        : "100%",
				width         : "100%",
				display       : "flex",
				flexDirection : "column",
				gap           : "20px",
				padding       : "30px",
			}}
		>
			<img src={casaMatteLabLogo} alt="casaMatteLabLogo" style={{width : "200px"}} />
			<div
				style={{
					fontWeight : "bold",
					fontSize   : "20px",
				}}
			>
				Especificaciones de configuración
			</div>
			<div
				style={{
					display       : "flex",
					flexDirection : "column",
					gap           : "10px",
				}}
			>
				<div
					style={{
						display       : "flex",
						flexDirection : "row",
						gap           : "5px",
						fontSize      : "17px",
					}}
				>
					<div>Producto :</div>
					<div
						style={{
							fontWeight : "bold",
						}}
					>
						{productName}
					</div>
				</div>
				<div
					style={{
						display       : "flex",
						flexDirection : "row",
						gap           : "5px",
						fontSize      : "17px",
					}}
				>
					<div>Grabado en Lomo :</div>
					<div
						style={{
							fontWeight : "bold",
							color      : isAvailableSpineText ? "green" : "red",
						}}
					>
						{isAvailableSpineText ? "Si" : "No"}
					</div>
				</div>
				<div
					style={{
						display       : "flex",
						flexDirection : "row",
						gap           : "5px",
						fontSize      : "17px",
					}}
				>
					<div>Material de Forro :</div>
					<div
						style={{
							fontWeight : "bold",
						}}
					>
						{material}
					</div>
				</div>
				<div
					style={{
						display       : "flex",
						flexDirection : "row",
						gap           : "5px",
						fontSize      : "17px",
					}}
				>
					<div>Color de Forro :</div>
					<div
						style={{
							display       : "flex",
							flexDirection : "row",
							gap           : "2px",
							fontSize      : "17px",
						}}
					>
						<div
							style={{
								fontWeight : "bold",
							}}
						>
							{frontColor}
						</div>
						<div
							style={{
								width        : "20px",
								height       : "20px",
								borderRadius : "50%",
								border       : "1px solid black",
								background   : hexColorFront,
							}}
						>
							&nbsp;
						</div>
					</div>
				</div>
				<div
					style={{
						display       : "flex",
						flexDirection : "row",
						gap           : "5px",
						fontSize      : "17px",
					}}
				>
					<div>Color de Grabado :</div>
					<div
						style={{
							display       : "flex",
							flexDirection : "row",
							gap           : "2px",
							fontSize      : "17px",
						}}
					>
						<div
							style={{
								fontWeight : "bold",
							}}
						>
							{engravingColor}
						</div>
						<div
							style={{
								width        : "20px",
								height       : "20px",
								borderRadius : "50%",
								border       : "1px solid black",
								background   : hexColorEngraving,
							}}
						>
							&nbsp;
						</div>
					</div>
				</div>
			</div>
		</div>
	);

	const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

	return (
		<Html>{toPdfElement}</Html>
	);
};

export default SpinePage;
