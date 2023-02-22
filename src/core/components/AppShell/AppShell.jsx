import { connect }   from "react-redux";
import { useEffect } from "react";

//Own component;
import { bindAll }        from "helpers";
import { genericApi }     from "store/api/genericApi";
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
	const { data : photobookData } = genericApi.useGetDataQuery({
		module : "photobook/7099",
	});

	// const [colorMutation, colorMutationResult] = genericApi.useSubmitDataMutation();


	useEffect(() => {
		if (photobookData?.meta?.config) {
			const myData = photobookData?.meta?.config;
			const myReplacerString = myData.replace(/'/g, "\"");
			const parseJSON = JSON.parse(myReplacerString);
			workSpaceSlice.insertData(parseJSON);
		}
	}, [photobookData]);

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
