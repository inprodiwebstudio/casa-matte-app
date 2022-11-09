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
			<div className="shell-container">
				<div className="header-container">Header</div>
				<div className="footer-and-nav-grouped">
					<div className="nav-menu">Nav Menu</div>
					<div className="footer-nav">Footer</div>
					<div className="side-bar">Side Bar</div>
				</div>
			</div>
		</div>
	);
};

export default AppShell;
