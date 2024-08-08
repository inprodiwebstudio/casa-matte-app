

//Own components
import { useSelector, shallowEqual, connect } from "react-redux";
import { DropedMenu }                         from "core/components";
import { PlusIcon }                           from "Resources/icons";
import PaginatorBar                           from "components/PaginatorBar";
import { bindAll }                            from "helpers";
import { workSpaceSlice }                     from "store/Slices";
import "./Navbar.scss";
import { Text, Button }                       from "@mantine/core";

const Navbar = ({workSpaceSlice}) => {
	const loading = useSelector((state) => state.workSpaceSlice.loading, shallowEqual);
	const isPreview = useSelector((state) => state.workSpaceSlice.isPreview, shallowEqual);

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
					<div className="body-action-container">
						<Button
							radius={5}
							size="xs"
							color="darkCasaMatte"
							leftIcon={<PlusIcon size="15px" />}
							sx={{marginTop : "15px"}}
							loading={loading}
							onClick={() => workSpaceSlice.insertPage()}
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
