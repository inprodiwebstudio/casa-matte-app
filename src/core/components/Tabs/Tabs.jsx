import { useEffect, useState }                    from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

//Own components
import { Loading }        from "core/components";
import { workSpaceSlice } from "store/Slices";
import { useParams }      from "react-router";

import "./Tabs.scss";

const Tabs = ({tabList, loading}) => {
	const { pageId } = useParams();

	const [ currentTab, setCurrentTab ] = useState(tabList[0]?.label);

	const dispatch = useDispatch();

	// const currentFileterLayout = useSelector((state) => state.workSpaceSlice.layoutFilter, shallowEqual);
	const isLoggin = useSelector((state) => state.authSlice.loggedIn, shallowEqual);


	const onActionTab = (tabName, filterName) => {
		dispatch(workSpaceSlice.actions.setLayoutFilter({
			type           : filterName,
			photosQuantity : {
				label : "Todos",
				value : "all",
			},
		}));
		setCurrentTab(tabName);
	};

	useEffect(() => {
		if (pageId === "frontpage") {
			setCurrentTab("PORTADAS");
			return;
		}
		setCurrentTab("TODOS");
	}, [pageId]);

	return (
		<div className="Tabs">
			{
				(loading || !isLoggin) ? (
					<Loading />
				) : (
					tabList.map((tab, index) => (
						<div
							className={`box-tab ${(currentTab === tab.label) && "active"}`}
							onClick={() => onActionTab(tab.label, tab.filter)}
							key={index}
						>
							<h4>
								{tab.label}
							</h4>
						</div>
					))
				)
			}
		</div>
	);
};

export default Tabs;
