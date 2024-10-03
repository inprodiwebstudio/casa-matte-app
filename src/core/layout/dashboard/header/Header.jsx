import { Button, Text, TextInput }                from "@mantine/core";
import { useEffect, useState }                    from "react";
import LogoCasaMatte                              from "Resources/images/casaMatteLogo.svg";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { workSpaceSlice }                         from "store/Slices";
import "./Header.scss";
//Mantine
// import { openContextModal } from "@mantine/modals";

//Own components
import { dayjs } from "helpers";


const Header = () => {
	const dispatch = useDispatch();

	const [isLoading, setIsLoading] = useState(false);

	const [ date, setDate ] = useState(undefined);

	const isPreviewActive = useSelector((state) => state.workSpaceSlice.isPreview, shallowEqual);
	const lastModified = useSelector((state) => state.workSpaceSlice.data.modified, shallowEqual);
	const isModifiedData = useSelector((state) => state.workSpaceSlice.data, shallowEqual);

	const handlerClickPreview = () => () => {
		dispatch(workSpaceSlice.actions.togglePreview());
	};

	const handlerLoadingFake = () => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	};

	useEffect(() => {
		if (lastModified) {
			setDate(lastModified);
		}
	}, []);

	useEffect(() => {
		setDate(new Date);
	}, [isModifiedData]);

	return (
		<div className="Header">
			<div className={`body-container ${isPreviewActive && "isActivePreview"}`}>
				<img src={LogoCasaMatte} width={120} />
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
								fontSize   : "14px",
								fontWeight : "400",
							}}
						/>
					</div>
				</div>
				<div className="icons-container">
					<div
						style={{
							textTransform : "uppercase",
							fontSize      : "10px",
						}}
					>
						{dayjs(date).format("DD [de] MMMM, YYYY, hh:mm A")}
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
