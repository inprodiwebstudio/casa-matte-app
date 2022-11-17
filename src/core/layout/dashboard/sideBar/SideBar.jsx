import { useState } from "react";
import BodyGallery  from "components/Gallery/BodyGallery";

//Own components
import { ArrowTop } from "Resources/icons";
import "./SideBar.scss";

const SideBar = () => {
	const [ isfullSize, setIsFullSize ] = useState(false);

	return (
		<div id="SideBar" className={isfullSize && "isFullSize"}>
			<div className={`action-sidebar-conatiner ${isfullSize && "isFullSize"}`} onClick={() => setIsFullSize(!isfullSize)}>
				<ArrowTop size="20px" className="icon-arrow-action isFullSize" />
			</div>
			<div className="body-sidebar">
				<BodyGallery />
			</div>
		</div>
	);
};

export default SideBar;
