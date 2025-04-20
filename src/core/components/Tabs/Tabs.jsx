import { useEffect, useState }                    from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

//Own components
import { Loading }        from "core/components";
import { workSpaceSlice } from "store/Slices";

import "./Tabs.scss";

const Tabs = ({tabList, loading}) => {

	const [ currentTab, setCurrentTab ] = useState(tabList[0]?.label);

	const dispatch = useDispatch();

	// const currentFileterLayout = useSelector((state) => state.workSpaceSlice.layoutFilter, shallowEqual);
	const currentPageId = useSelector((state) => state.workSpaceSlice.data?.currentPage, shallowEqual);
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
		if (currentPageId === "frontpage") {
			setCurrentTab("PORTADAS");
			return;
		}
		setCurrentTab("TODOS");
	}, [currentPageId]);

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
