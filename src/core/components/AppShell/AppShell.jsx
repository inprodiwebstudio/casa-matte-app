//Own components
import "./AppShell.scss";

const AppShell = ({Body, header, navbar, footer}) => {
	return (
		<div
			id="AppShell"
		>
			<div className="bodyContainer">
				<Body />
			</div>
			<div className="shell-container">
				<div className="header-container">
					{header}
				</div>
				<div className="footer-and-nav-grouped">
					<div className="nav-menu">
						{navbar}
					</div>
					<div className="footer-nav">
						{footer}
					</div>
					<div className="side-bar">&nbsp;</div>
				</div>
			</div>
		</div>
	);
};

export default AppShell;
