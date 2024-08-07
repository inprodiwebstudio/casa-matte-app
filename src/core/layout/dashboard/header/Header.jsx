import { Button, Text, TextInput }                from "@mantine/core";
import LogoCasaMatte                              from "Resources/images/casaMatteLogo.svg";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { workSpaceSlice }                         from "store/Slices";
import React                                      from "react";
import "./Header.scss";
//Mantine
// import { openContextModal } from "@mantine/modals";

//Own components

const Header = () => {
	const dispatch = useDispatch();

	const isPreviewActive = useSelector((state) => state.workSpaceSlice.isPreview, shallowEqual);

	const handlerClickPreview = () => () => {
		dispatch(workSpaceSlice.actions.togglePreview());
	};

	return (
		<div className="Header">
			<div className="body-container">
				<img src={LogoCasaMatte} width={170} />
				<div className="title-container">
					<div>WHITE PHOTOBOOK</div>
					<div>/</div>
					<TextInput
						variant="unstyled"
						defaultValue="PROYECTO 01"
						sx={{
							fontSize   : "24px",
							fontWeight : "400",
						}}
					/>
				</div>
				<div className="icons-container">
					<Button
						radius={12}
						size="xs"
						onClick={handlerClickPreview()}
					>
						<Text weight={400}>
							{isPreviewActive ? "SALIR DE VISTA PREVIA" : "VISTA PREVIA"}
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
