import { useState } from "react";

//Own components
import { bindAll }        from "helpers";
import { workSpaceSlice } from "store/Slices";


import "./Tabs.scss";
import { connect } from "react-redux";

const Tabs = ({tabList, workSpaceSlice}) => {
	const [ currentTab, setCurrentTab ] = useState(tabList[0].label);

	const onActionTab = (tabName, filterName) => {
		workSpaceSlice.setLayoutFilter({
			type           : filterName,
			photosQuantity : "all",
		});
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

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

export default connect(null, mapDispatchToProps) (Tabs);
