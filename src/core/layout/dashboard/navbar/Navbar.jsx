

//Own components
import { useSelector, shallowEqual, connect, useDispatch } from "react-redux";
import { DropedMenu }                                      from "core/components";
import { PlusIcon }                                        from "Resources/icons";
import PaginatorBar                                        from "components/PaginatorBar";
import { bindAll, convertToArray, counterSheets }          from "helpers";
import { workSpaceSlice }                                  from "store/Slices";
import "./Navbar.scss";
import { Text, Button, Center }                            from "@mantine/core";
import { closeAllModals, openContextModal }                from "@mantine/modals";
import { currentConfigPhotoBookContext }                   from "contexts/configContext";
import { useContext }                                      from "react";

const Navbar = ({workSpaceSlice}) => {
	const dispatch = useDispatch();
	const {currentConfigPhotoBook} = useContext(currentConfigPhotoBookContext);

	const loading = useSelector((state) => state.workSpaceSlice.loading, shallowEqual);
	const maxRangePages = useSelector((state) => state.workSpaceSlice.data?.maxRangePages, shallowEqual);
	const photoBookProduct = useSelector((state) => state.workSpaceSlice.data.product, shallowEqual);
	const dataPages = useSelector((state) => state.workSpaceSlice.data, shallowEqual);
	const statusViewPage = useSelector((state) => state.workSpaceSlice?.statusViewPage, shallowEqual);
	const isFixedVersionLayflat = useSelector((state) => state.workSpaceSlice?.data?.isFixedPagesLayflat, shallowEqual);

	const isManagePagesView = statusViewPage === "managePages";

	const isDisabledAddPageButton = (photoBookProduct === "layflat") && !isFixedVersionLayflat;

	const listOfPages = convertToArray(dataPages.pages);
	const counterPages = () => counterSheets(listOfPages, false);

	const insertNewPage = () => {
		dispatch(workSpaceSlice.updatePageContent({
			currentConfigPhotoBook,
		}));
		if (photoBookProduct === "layflat") {
			workSpaceSlice.addSpread();
		} else {
			workSpaceSlice.addPage();
		}
		closeAllModals();
	};

	const handlerAddPage = () => {
		if ((photoBookProduct === "couplescoffeetablebook") && (dataPages?.postTypeId !== "163325") && (counterPages() >= Number(maxRangePages))) {
			openContextModal({
				modal      : "noMorePages",
				innerProps : {
					quantity : 100,
				},
			});
			return;
		}
		if ((photoBookProduct === "layflat") && (counterPages() >= 120)) {
			openContextModal({
				modal      : "noMorePages",
				innerProps : {
					quantity : 120,
				},
			});
			return;
		}
		if (counterPages() >= 400) {
			openContextModal({
				modal      : "noMorePages",
				innerProps : {
					quantity : 400,
				},
			});
			return;
		}
		if (counterPages() >= Number(maxRangePages)) {
			openContextModal({
				modal      : "addNewPageConfirmation",
				innerProps : {
					confirmationFn : () => insertNewPage(),
				},
			});
			return;
		}
		dispatch(workSpaceSlice.updatePageContent({
			currentConfigPhotoBook,
		}));
		insertNewPage();
	};

	const toggleManagePagesView = () => {
		if (statusViewPage === "managePages") {
			return dispatch(workSpaceSlice.changeStatusViewPage("workspace"));
		}
		dispatch(workSpaceSlice.updatePageContent({
			currentConfigPhotoBook,
		}));
		dispatch(workSpaceSlice.changeStatusViewPage("managePages"));
	};

	return (
		<div className={`Navbar ${(statusViewPage === "preview") && "isPreviewActive"}`}>
			{
				(statusViewPage !== "preview") &&
				<>
					<DropedMenu />
					{
						(photoBookProduct !== "layflat") && (
							<Center>
								<Button
									radius={5}
									size="xs"
									color="gray"
									sx={{marginTop : "15px", textTransform : "uppercase"}}
									loading={loading}
									onClick={() => toggleManagePagesView()}
								>
									{isManagePagesView ? "Regresar" : "Ordenar Paginas"}
								</Button>
							</Center>
						)
					}
					<div
						style={{
							overflowY : "hidden",
							flexGrow  : 3,
							width     : "190px",
						}}
					>
						<PaginatorBar />
					</div>
					<div className="body-action-container">
						<Button
							radius={5}
							size="xs"
							color="darkCasaMatte"
							leftIcon={<PlusIcon size="15px" />}
							sx={{marginTop : "15px"}}
							loading={loading}
							onClick={() => handlerAddPage()}
							disabled={isDisabledAddPageButton}
						>
							<Text
								weight={400}
								color="whiteCasaMatte"
								sx={{
									textTransform : "uppercase",
								}}
							>
								Nueva Página
							</Text>
						</Button>
					</div>
				</>
			}
		</div>
	);
};

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

export default connect(null, mapDispatchToProps) (Navbar);
