import { Button, Text, TextInput }                from "@mantine/core";
import { useState }                               from "react";
import LogoCasaMatte                              from "Resources/images/casaMatteLogo.svg";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { workSpaceSlice }                         from "store/Slices";
import "./Header.scss";
//Mantine
// import { openContextModal } from "@mantine/modals";

//Own components

const Header = () => {
	const dispatch = useDispatch();

	const [isLoading, setIsLoading] = useState(false);

	const isPreviewActive = useSelector((state) => state.workSpaceSlice.isPreview, shallowEqual);

	const handlerClickPreview = () => () => {
		dispatch(workSpaceSlice.actions.togglePreview());
	};

	const handlerLoadingFake = () => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	};

	return (
		<div className="Header">
			<div className="body-container">
				<img src={LogoCasaMatte} width={150} />
				<div className="title-container">
					<div>WHITE PHOTOBOOK</div>
					<div>/</div>
					<div
						style={{width : "100px"}}
					>
						<TextInput
							variant="unstyled"
							defaultValue="PROYECTO 01"
							sx={{
								fontSize   : "24px",
								fontWeight : "400",
							}}
						/>
					</div>
				</div>
				<div className="icons-container">
					<div
						style={{
							textTransform : "uppercase",
							fontSize      : "11px",
						}}
					>
						Ultima actualización: 14 de Agosto, 2024
					</div>
					<Button
						radius={12}
						size="xs"
						onClick={handlerClickPreview()}
					>
						<Text
							weight={400}
							sx={{
								fontFamily : "Helvetica",
							}}
						>
							{isPreviewActive ? "SALIR DE VISTA PREVIA" : "VISTA PREVIA"}
						</Text>
					</Button>
					<Button
						radius={12}
						size="xs"
						loading={isLoading}
						color="gray"
						onClick={() => handlerLoadingFake()}
						sx={{
							fontFamily : "Helvetica",
							fontWeight : "400",
						}}
					>
						{isLoading ? "GUARDANDO..." : "GUARDAR"}
					</Button>
					<Button
						radius={12}
						size="xs"
						color="darkCasaMatte"
					>
						<Text
							weight={400}
							color="whiteCasaMatte"
							sx={{
								fontFamily : "Helvetica",
							}}
						>
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
