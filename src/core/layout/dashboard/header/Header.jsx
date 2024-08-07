import { Button, Text } from "@mantine/core";
import LogoCasaMatte    from "Resources/images/casaMatteLogo.svg";
import React            from "react";
import "./Header.scss";
//Mantine
// import { openContextModal } from "@mantine/modals";

//Own components

const Header = () => {
	return (
		<div className="Header">
			<div className="body-container">
				<img src={LogoCasaMatte} width={170} />
				<div className="title-container">
					<div>WHITE PHOTOBOOK</div>
					<div>/</div>
					<div className="text-title">SIN TÍTULO</div>
				</div>
				<div className="icons-container">
					<Button
						radius={12}
						size="xs"
					>
						<Text weight={400}>
							VISTA PREVIA
						</Text>
					</Button>
					<Button
						radius={12}
						size="xs"
					>
						<Text weight={400}>
							GUARDAR
						</Text>
					</Button>
					<Button
						radius={12}
						size="xs"
						color="darkCasaMatte"
					>
						<Text weight={400} color="whiteCasaMatte">
							TERMINAR
						</Text>
					</Button>
					<div
						// className="icon-container"
						// onClick={() => openContextModal({
						// 	modal : "testPdf",
						// })}
					>
						{/* <CarIcon size="20px" /> */}
						<></>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
