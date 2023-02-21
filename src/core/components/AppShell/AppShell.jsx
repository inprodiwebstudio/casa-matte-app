import { connect } from "react-redux";

//Own component;
import { bindAll }        from "helpers";
import { workSpaceSlice } from "store/Slices";
import "./AppShell.scss";

const AppShell = ({
	Body,
	header,
	navbar,
	footer,
	sidebar,
	workSpaceSlice,
	isSelectedPage,
}) => {
	return (
		<div
			id="AppShell"
			{
				...(isSelectedPage && {
					onClick : () => workSpaceSlice.clearSelectedPageData(),
				})
			}
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
					<div>
						{sidebar}
					</div>
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

const mapStateToProps = ({ workSpaceSlice }) => ({
	isSelectedPage : workSpaceSlice?.pageDataSelected ?? null,
});

export default connect(mapStateToProps, mapDispatchToProps) (AppShell);
