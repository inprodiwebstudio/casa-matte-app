

//Own components
import { DropedMenu, Button } from "core/components";
import { PlusIcon }           from "Resources/icons";
import PaginatorBar           from "components/PaginatorBar";
import { bindAll }            from "helpers";
import { connect }            from "react-redux";
import { workSpaceSlice }     from "store/Slices";
import "./Navbar.scss";

const Navbar = ({workSpaceSlice}) => {
	return (
		<div className="Navbar">
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
		</div>
	);
};

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

export default connect(null, mapDispatchToProps) (Navbar);
