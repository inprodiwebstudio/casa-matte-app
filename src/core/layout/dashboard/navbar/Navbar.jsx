

//Own components
import { DropedMenu, Button } from "core/components";
import { PlusIcon }           from "Resources/icons";
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
				Container
			</div>
			<Button
				icon={<PlusIcon size="20px" />}
			>
				Nueva
			</Button>
		</div>
	);
};

export default Navbar;
