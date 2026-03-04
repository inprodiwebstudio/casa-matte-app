import { Button, Group, Stack, Text, TextInput }  from "@mantine/core";
import { useContext, useEffect, useState }        from "react";
import LogoCasaMatte                              from "Resources/images/casaMatteLogo.png";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { workSpaceSlice, authSlice } from "store/Slices";

import { genericApi } from "store/api/genericApi";

const { useLazyGetDataQuery } = genericApi;

//Own components
import { useParams }                     from "react-router";
import { PostingConfig }                 from "Notifications";
import { IoSaveOutline }                 from "react-icons/io5";
import { dayjs }                         from "helpers";
import { openContextModal }              from "@mantine/modals";
import { currentConfigPhotoBookContext } from "contexts/configContext";
import { RedoArrow }                     from "Resources/icons";

import "./Header.scss";

const Header = () => {
	const dispatch = useDispatch();

	const { postId } = useParams();

	const [ date, setDate ] = useState(undefined);

	const [ currentIndexHistory, setCurrentIndexHistory ] = useState(0);

	const {currentConfigPhotoBook, historyChanges} = useContext(currentConfigPhotoBookContext);

	const [ getPostIds ] = useLazyGetDataQuery();

	const [ getDataUser ] = useLazyGetDataQuery();


	const productName = useSelector((state) => state.workSpaceSlice.data.productName, shallowEqual);
	const projectTitle = useSelector((state) => state.workSpaceSlice.projectTittle, shallowEqual);
	const lastModified = useSelector((state) => state.workSpaceSlice.data.modified, shallowEqual);
	const isModifiedData = useSelector((state) => state.workSpaceSlice.data, shallowEqual);
	const isLoggedIn = useSelector((state) => state.authSlice.loggedIn, shallowEqual);
	const userName = useSelector((state) => state.authSlice?.user?.username, shallowEqual);
	const userEmail = useSelector((state) => state.authSlice?.user?.email, shallowEqual);
	const isLoadingWorspaceData = useSelector((state) => state.workSpaceSlice.loading, shallowEqual);
	const statusViewPage = useSelector((state) => state.workSpaceSlice?.statusViewPage, shallowEqual);
	const statusProject = useSelector((state) => state.workSpaceSlice?.data?.status, shallowEqual);

	const isPreviewActive = statusViewPage === "preview";

	const [dataMutation, dataMutationResult] = genericApi.useSubmitDataMutation();

	const availableDevButton = (userName && userEmail) && ((userName === "joab27") && (userEmail === "dev@casamatte.com"));

	const isAvailableUndo = historyChanges[currentIndexHistory - 1];
	const isAvailableRedo = historyChanges[currentIndexHistory + 1];


	const handleUndo = () => {
		if (historyChanges[currentIndexHistory - 1]) {
			dispatch(workSpaceSlice.actions.updatePageContent({currentConfigPhotoBook : historyChanges[currentIndexHistory - 1]}));
			setCurrentIndexHistory(currentIndexHistory - 1);
		}
	};
	const handleRedo = () => {
		if (historyChanges[currentIndexHistory + 1]) {
			dispatch(workSpaceSlice.actions.updatePageContent({currentConfigPhotoBook : historyChanges[currentIndexHistory + 1]}));
			setCurrentIndexHistory(currentIndexHistory + 1);
		}
	};

	const handlerClickPreview = () => () => {
		if (statusViewPage === "preview") {
			dispatch(workSpaceSlice.actions.changeStatusViewPage("workspace"));
			return;
		}
		dispatch(workSpaceSlice.actions.changeStatusViewPage("preview"));
	};

	const handlerChangeTitleProject = (valueName) => {
		dispatch(workSpaceSlice.actions.handleChangepRrojectTitle(valueName));
	};

	const parseSendData = (data) => {
		const myData = data;
		const stringData = JSON.stringify(myData);
		return stringData;
	};

	const submitData = async () => {
		dispatch(workSpaceSlice.actions.updatePageContent({
			currentConfigPhotoBook,
		}));

		try {
			await dataMutation({
				module : "wp-json/wp/v2/photobook-2-0",
				data   : {
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

	// const handlerOpenValidateImages = () => {
	// 	openContextModal({
	// 		modal      : "validateImages",
	// 		innerProps : {},
	// 	});
	// };

	const handlerPrintClick = () => {
		dispatch(workSpaceSlice.actions.updatePageContent({
			currentConfigPhotoBook,
		}));
		openContextModal({
			modal      : "confirmationToPrint",
			innerProps : {
				postId,
			},
		});
	};

	const isEndBook = (statusProject === "48");

	useEffect(() => {
		if (lastModified) {
			setDate(lastModified);
		}
	}, []);

	useEffect(() => {
		setDate(new Date);
	}, [isModifiedData]);

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

	useEffect(() => {
		if (historyChanges.length > 0) {
			setCurrentIndexHistory(historyChanges.length - 1);
		}
	}, [historyChanges]);

	const getPostIdsEnd = async (pageNo) => {
		try {
			const listPagesPostIds = await getPostIds({ module : `wp-json/wp/v2/photobook-2-0?per_page=100&page=${pageNo}`}).unwrap();

			const endPostIds = listPagesPostIds.filter((postIdData) => postIdData?.meta?.status === "48");
			const listOfPrintedPostIds = endPostIds.filter(postIdData => {
				if (!postIdData?.meta?.fecha_de_termino || postIdData?.meta?.fecha_de_termino === "") return true;
				const endDate = new Date(postIdData?.meta?.fecha_de_termino);
				const maxDate = new Date("2025-12-15");
				return endDate < maxDate;
			});

			const listOfPostIdsWithUserName = listOfPrintedPostIds.map(async postIdData => {
				const userId = postIdData?.author;

				const respUserData = await getDataUser({ module : `wp-json/wp/v2/users/${userId}` }).unwrap();
				return {
					...postIdData,
					userName : respUserData?.name,
				};
			});

			const listOfPostIdsWithUserNameData = await Promise.all(listOfPostIdsWithUserName);

			const listOfPostIds = listOfPostIdsWithUserNameData.map(postIdData => `${postIdData?.userName}/${postIdData?.id}`);

			if (listOfPostIds.length > 0) {
				downloadTxtFile(listOfPostIds, pageNo);
			} else {
				console.log("No hay datos para descargar");
			}
		} catch (error) {
			console.error(error);
		}
	};

	const downloadTxtFile = (data, pagNo) => {
		const textContent = data.join("\n");

		const blob = new Blob([textContent], { type : "text/plain" });

		const url = URL.createObjectURL(blob);

		const link = document.createElement("a");
		link.href = url;
		link.download = `postIds${pagNo}.txt`;
		link.style.display = "none";

		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);

		URL.revokeObjectURL(url);
	};

	return (
		<div className="Header">
			<div className={`body-container ${isPreviewActive && "isActivePreview"}`}>
				<a href="https://casamatte.com/">
					<img src={LogoCasaMatte} width={130} />
				</a>
				<Group
					spacing={20}
					style={{
						flexWrap : "nowrap",
					}}
					align="center"
				>
					<Stack
						align="center"
						spacing={0}
						style={{
							cursor     : isAvailableUndo ? "pointer" : "not-allowed",
							userSelect : "none",
							color      : isAvailableUndo ? "black" : "gray",
						}}
						{
							...(isAvailableUndo && {
								onClick : handleUndo,
							})
						}
					>
						<RedoArrow style={{transform : "scaleX(-1)"}} size="14px" />
						<Text
							weight={300}
							size={10}
							color={isAvailableUndo ? "darkCasaMatte.7" : "darkCasaMatte.2"}
						>
							Deshacer
						</Text>
					</Stack>
					<Stack
						align="center"
						spacing={0}
						style={{
							cursor     : isAvailableRedo ? "pointer" : "not-allowed",
							userSelect : "none",
							color      : isAvailableRedo ? "black" : "gray",
						}}
						{
							...(isAvailableRedo && {
								onClick : handleRedo,
							})
						}
					>
						<RedoArrow size="14px" />
						<Text
							weight={300}
							size={10}
							color={isAvailableRedo ? "darkCasaMatte.7" : "darkCasaMatte.2"}
						>
							Rehacer
						</Text>
					</Stack>
				</Group>
				{
					isLoggedIn && (
						<>
							<div className="title-container">
								<div className="product-name-title">{productName ?? ""}</div>
								<div>/</div>
								<div>
									<TextInput
										value={projectTitle ?? ""}
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
										textAlign     : "center",
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
									color="darkCasaMatte"
									onClick={() => handlerPrintClick()}
									disabled={isEndBook}
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
								{/* <Button
									radius={12}
									size="xs"
									onClick={() => handlerOpenValidateImages()}
									loading={isLoadingWorspaceData}
									rightIcon={<IoImagesOutline size={18} color="gray" />}
								>
									<Text
										weight={400}
										sx={{
											fontFamily : "Helvetica",
										}}
									>
										Validar Fotos
									</Text>
								</Button> */}
								<Button
									radius={12}
									size="xs"
									loading={dataMutationResult.isLoading}
									color="gray"
									onClick={() => submitData()}
									rightIcon={<IoSaveOutline size={18} />}
									sx={{
										fontFamily : "Helvetica",
										fontWeight : "400",
									}}
								>
									{dataMutationResult.isLoading ? "GUARDANDO..." : "GUARDAR"}
								</Button>
								{
									availableDevButton && (
										<Button
											radius={12}
											size="xs"
											color="darkCasaMatte"
											onClick={() => getPostIdsEnd(2)}
											disabled={false}
										>
											PostIdsEnd
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
