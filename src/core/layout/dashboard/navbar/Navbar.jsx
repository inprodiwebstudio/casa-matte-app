

//Own components
import { DropedMenu, Button } from "core/components";
import { PlusIcon }           from "Resources/icons";
import PaginatorBar           from "components/PaginatorBar";
import "./Navbar.scss";

const Navbar = () => {
	return (
		<div className="Navbar">
			<DropedMenu />
			<div
				style={{
					overflow : "hidden",
					flexGrow : 3,
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
				>
					Nueva
				</Button>
			</div>
		</div>
	);
};

export default Navbar;
