

//Own components
import { useSelector, shallowEqual, connect }     from "react-redux";
import { DropedMenu }                             from "core/components";
import { PlusIcon }                               from "Resources/icons";
import PaginatorBar                               from "components/PaginatorBar";
import { bindAll, convertToArray, counterSheets } from "helpers";
import { workSpaceSlice }                         from "store/Slices";
import "./Navbar.scss";
import { Text, Button }                           from "@mantine/core";
import { closeAllModals, openContextModal }       from "@mantine/modals";

const Navbar = ({workSpaceSlice}) => {
	const loading = useSelector((state) => state.workSpaceSlice.loading, shallowEqual);
	const isPreview = useSelector((state) => state.workSpaceSlice.isPreview, shallowEqual);
	const maxRangePages = useSelector((state) => state.workSpaceSlice.data?.maxRangePages, shallowEqual);
	const dataPages = useSelector((state) => state.workSpaceSlice.data, shallowEqual);
	const orderId = useSelector((state) => state.workSpaceSlice?.data?.orderId, shallowEqual);

	const listOfPages = convertToArray(dataPages.pages);
	const counterPages = () => counterSheets(listOfPages);

	const insertNewPage = () => {
		workSpaceSlice.addPage();
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

	return (
		<div className={`Navbar ${isPreview && "isPreviewActive"}`}>
			{
				!isPreview &&
				<>
					<DropedMenu />
					<div
						style={{
							overflowY : "hidden",
							flexGrow  : 3,
							width     : "190px",
						}}
					>
						<PaginatorBar />
					</div>
					{
						!orderId && (
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
						)
					}
				</>
			}
		</div>
	);
};

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

export default connect(null, mapDispatchToProps) (Navbar);
