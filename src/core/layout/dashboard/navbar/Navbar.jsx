

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

const Navbar = ({workSpaceSlice}) => {
	const dispatch = useDispatch();

	const loading = useSelector((state) => state.workSpaceSlice.loading, shallowEqual);
	const maxRangePages = useSelector((state) => state.workSpaceSlice.data?.maxRangePages, shallowEqual);
	const photoBookProduct = useSelector((state) => state.workSpaceSlice.data.product, shallowEqual);
	const dataPages = useSelector((state) => state.workSpaceSlice.data, shallowEqual);
	const statusViewPage = useSelector((state) => state.workSpaceSlice?.statusViewPage, shallowEqual);

	const isManagePagesView = statusViewPage === "managePages";


	const listOfPages = convertToArray(dataPages.pages);
	const counterPages = () => counterSheets(listOfPages, photoBookProduct === "layflat");

	const insertNewPage = () => {
		if (photoBookProduct === "layflat") {
			workSpaceSlice.addSpread();
		} else {
			workSpaceSlice.addPage();
		}
		closeAllModals();
	};

	const handlerAddPage = () => {
		if (counterPages() >= 400) {
			openContextModal({
				modal      : "noMorePages",
				innerProps : {},
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
		workSpaceSlice.addPage();
	};

	const toggleManagePagesView = () => {
		if (statusViewPage === "managePages") {
			return dispatch(workSpaceSlice.changeStatusViewPage("workspace"));
		}
		dispatch(workSpaceSlice.changeStatusViewPage("managePages"));
	};

	return (
		<div className={`Navbar ${(statusViewPage === "preview") && "isPreviewActive"}`}>
			{
				(statusViewPage !== "preview") &&
				<>
					<DropedMenu />
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
