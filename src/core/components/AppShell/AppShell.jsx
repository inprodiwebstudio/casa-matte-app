//Own components
import "./AppShell.scss";

const AppShell = ({Body, header}) => {
	return (
		<div
			id="AppShell"
		>
			<div className="bodyContainer">
				<Body />
			</div>
			<div className="header-container">Header</div>
		</div>
	);
};

export default AppShell;
