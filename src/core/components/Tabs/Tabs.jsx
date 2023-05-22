import { useState }                               from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

//Own components
import { workSpaceSlice } from "store/Slices";

import "./Tabs.scss";

const Tabs = ({tabList}) => {
	const [ currentTab, setCurrentTab ] = useState(tabList[0].label);

	const dispatch = useDispatch();

	const currentFileterLayout = useSelector((state) => state.workSpaceSlice.layoutFilter, shallowEqual);

	const onActionTab = (tabName, filterName) => {
		dispatch(workSpaceSlice.actions.setLayoutFilter({
			type           : filterName,
			photosQuantity : currentFileterLayout.photosQuantity,
		}));
		setCurrentTab(tabName);
	};

	return (
		<div className="Tabs">
			{
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
			}
		</div>
	);
};

export default Tabs;
