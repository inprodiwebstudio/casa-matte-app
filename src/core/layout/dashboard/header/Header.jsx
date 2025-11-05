import { Button, Text, TextInput }                from "@mantine/core";
import { useEffect, useState }                    from "react";
import LogoCasaMatte                              from "Resources/images/casaMatteLogo.png";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { workSpaceSlice, authSlice } from "store/Slices";

import { genericApi } from "store/api/genericApi";

import "./Header.scss";
//Mantine
// import { openContextModal } from "@mantine/modals";

//Own components
import { useParams }        from "react-router";
import { PostingConfig }    from "Notifications";
import { dayjs }            from "helpers";
import { openContextModal } from "@mantine/modals";


const Header = () => {
	const dispatch = useDispatch();

	const { postId } = useParams();

	const [ date, setDate ] = useState(undefined);

	const [ projectName, setProjectName ] = useState(undefined);

	const productName = useSelector((state) => state.workSpaceSlice.data.productName, shallowEqual);
	const projectTitle = useSelector((state) => state.workSpaceSlice.data.projectTittle, shallowEqual);
	const lastModified = useSelector((state) => state.workSpaceSlice.data.modified, shallowEqual);
	const isModifiedData = useSelector((state) => state.workSpaceSlice.data, shallowEqual);
	const isLoggedIn = useSelector((state) => state.authSlice.loggedIn, shallowEqual);
	const userName = useSelector((state) => state.authSlice?.user?.username, shallowEqual);
	const userEmail = useSelector((state) => state.authSlice?.user?.email, shallowEqual);
	const isLoadingWorspaceData = useSelector((state) => state.workSpaceSlice.loading, shallowEqual);
	const statusViewPage = useSelector((state) => state.workSpaceSlice?.statusViewPage, shallowEqual);

	const isPreviewActive = statusViewPage === "preview";

	const [dataMutation, dataMutationResult] = genericApi.useSubmitDataMutation();

	const isAdminAccount = (userName === "casamatteadmin") && (userEmail === "info@casamatte.com");
	const isDevAccount = (userName === "demo") && (userEmail === "demo44@demo.com");

	const handlerShowTestPdf = isAdminAccount || isDevAccount;
	const handlerClickPreview = () => () => {
		if (statusViewPage === "preview") {
			dispatch(workSpaceSlice.actions.changeStatusViewPage("workspace"));
			return;
		}
		dispatch(workSpaceSlice.actions.changeStatusViewPage("preview"));
	};

	const handlerChangeTitleProject = async (valueName) => {
		setProjectName(valueName);
		dispatch(workSpaceSlice.actions.handleChangepRrojectTitle(valueName));
	};

	const parseSendData = (data) => {
		const myData = data;
		const stringData = JSON.stringify(myData);
		return stringData;
	};

	const submitData = async () => {
		try {
			await dataMutation({
				module : "wp-json/wp/v2/photobook-2-0",
				data   : {
					title : {
						rendered : isModifiedData?.projectTittle ?? "TITULO",
						raw      : isModifiedData?.projectTittle ?? "TITULO",
					},
					status : "publish",
					meta   : {
						config : parseSendData({...isModifiedData, minPages : (isModifiedData?.pasta === "Dura") ? 25 : 10}),
					},
				},
				id     : postId,
				method : "POST",
			}).unwrap();
			setDate(new Date);
		} catch (error) {
			PostingConfig["post"][500]();
		}
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

	useEffect(() => {
		if (dataMutationResult.isUninitialized) return;

		if (dataMutationResult.isError) {
			const status = dataMutationResult.error?.status;

			switch (status) {
				case 403:
					PostingConfig["post"][403]();
					dispatch(authSlice.actions.clearUserData());
					break;
				default:
					PostingConfig["post"][500]();
					break;
			}
		}
	}, [dataMutationResult]);

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
									loading={dataMutationResult.isLoading}
									color="gray"
									onClick={() => submitData()}
									sx={{
										fontFamily : "Helvetica",
										fontWeight : "400",
									}}
								>
									{dataMutationResult.isLoading ? "GUARDANDO..." : "GUARDAR"}
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
