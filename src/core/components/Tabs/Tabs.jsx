import { useState } from "react";

//Own components
import "./Tabs.scss";

const Tabs = ({tabList}) => {
	const [ currentTab, setCurrentTab ] = useState("TODOS");

	const onActionTab = (tabName) => {
		setCurrentTab(tabName);
	};
	return (
		<div className="Tabs">
			{
				tabList.map((tab, index) => (
					<div
						className={`box-tab ${(currentTab === tab) && "active"}`}
						onClick={() => onActionTab(tab)}
						key={index}
					>
						<h4>
							{tab}
						</h4>
					</div>
				))
			}
		</div>
	);
};

export default Tabs;
