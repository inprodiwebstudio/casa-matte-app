

//Own components
import { useSelector, shallowEqual, connect } from "react-redux";
import { DropedMenu, Button }                 from "core/components";
import { PlusIcon }                           from "Resources/icons";
import PaginatorBar                           from "components/PaginatorBar";
import { bindAll }                            from "helpers";
import { workSpaceSlice }                     from "store/Slices";
import "./Navbar.scss";

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
							isLoading={loading}
							icon={<PlusIcon size="15px" />}
							fontSize="16px"
							type="subtle"
							width={117}
							height={39}
							onClick={() => workSpaceSlice.insertPage()}
						>
							Nueva
						</Button>
					</div>
				</>
			}
		</div>
	);
};

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

export default connect(null, mapDispatchToProps) (Navbar);
