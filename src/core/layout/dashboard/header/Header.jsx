import { Button, Text, TextInput }                from "@mantine/core";
import { useEffect, useState }                    from "react";
import LogoCasaMatte                              from "Resources/images/casaMatteLogo.png";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { workSpaceSlice } from "store/Slices";

import "./Header.scss";
//Mantine
// import { openContextModal } from "@mantine/modals";

//Own components
import { useParams }        from "react-router";
import { dayjs }            from "helpers";
import { openContextModal } from "@mantine/modals";


const Header = () => {
	const dispatch = useDispatch();

	const { postId } = useParams();

	const [isLoading, setIsLoading] = useState(false);

	const [ date, setDate ] = useState(undefined);

	const [ projectName, setProjectName ] = useState(undefined);

	const isPreviewActive = useSelector((state) => state.workSpaceSlice.isPreview, shallowEqual);
	const productName = useSelector((state) => state.workSpaceSlice.data.productName, shallowEqual);
	const projectTitle = useSelector((state) => state.workSpaceSlice.data.projectTittle, shallowEqual);
	const lastModified = useSelector((state) => state.workSpaceSlice.data.modified, shallowEqual);
	const isModifiedData = useSelector((state) => state.workSpaceSlice.data, shallowEqual);
	const isLoggedIn = useSelector((state) => state.authSlice.loggedIn, shallowEqual);
	const userName = useSelector((state) => state.authSlice?.user?.username, shallowEqual);
	const userEmail = useSelector((state) => state.authSlice?.user?.email, shallowEqual);
	const isLoadingWorspaceData = useSelector((state) => state.workSpaceSlice.loading, shallowEqual);

	const isAdminAccount = (userName === "casamatteadmin") && (userEmail === "info@casamatte.com");
	const isDevAccount = (userName === "demo") && (userEmail === "demo44@demo.com");

	const handlerShowTestPdf = isAdminAccount || isDevAccount;
	const handlerClickPreview = () => () => {
		dispatch(workSpaceSlice.actions.togglePreview());
	};

	const handlerLoadingFake = () => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	};

	const handlerChangeTitleProject = async (valueName) => {
		setProjectName(valueName);
		dispatch(workSpaceSlice.actions.handleChangepRrojectTitle(valueName));
	};

	useEffect(() => {
		if (lastModified) {
			setDate(lastModified);
		}
	}, []);

	useEffect(() => {
		setDate(new Date);
	}, [isModifiedData]);

	useEffect(() => {
		if (projectTitle && (projectTitle !== "")) {
			setProjectName(projectTitle);
		}
	}, [projectTitle]);

	return (
		<div className="Header">
			<div className={`body-container ${isPreviewActive && "isActivePreview"}`}>
				<a href="https://casamatte.wip-inprodi.com/">
					<img src={LogoCasaMatte} width={120} />
				</a>
				{
					isLoggedIn && (
						<>
							<div className="title-container">
								<div className="product-name-title">{productName ?? ""}</div>
								<div>/</div>
								<div
									style={{width : "65%"}}
								>
									<TextInput
										// variant="unstyled"
										value={projectName}
										onChange={(e) => handlerChangeTitleProject(e.target.value)}
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
									loading={isLoadingWorspaceData}
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
									onClick={() => openContextModal({
										modal      : "confirmationToPrint",
										innerProps : {
											postId,
										},
									})}
									disabled={false}
									loading={isLoadingWorspaceData}
								>
									<Text
										weight={400}
										color="whiteCasaMatte"
										sx={{
											fontFamily : "Helvetica",
										}}
									>
										Imprimir
									</Text>
								</Button>
								{
									(handlerShowTestPdf) && (
										<Button
											radius={12}
											size="xs"
											color="darkCasaMatte"
											onClick={() => openContextModal({
												modal      : "testPdf",
												innerProps : {},
											})}
											disabled={false}
											loading={isLoadingWorspaceData}
										>
											<Text
												weight={400}
												color="whiteCasaMatte"
												sx={{
													fontFamily : "Helvetica",
												}}
											>
												TestPdf
											</Text>
										</Button>
									)
								}
							</div>
						</>
					)
				}
			</div>
		</div>
	);
};

export default Header;
