import { useState } from "react";
import BodyGallery  from "components/Gallery/BodyGallery";

//Own components
import { ArrowTop, FolderPlus, DropFile} from "Resources/icons";
import "./SideBar.scss";

const SideBar = () => {
	const [ isfullSize, setIsFullSize ] = useState(false);

	// const isAvailableDocs = true;

	return (
		<div id="SideBar" className={isfullSize && "isFullSize"}>
			<div className={`action-sidebar-conatiner ${isfullSize && "isFullSize"}`}>
				<ArrowTop size="18px" className="icon-arrow-action isFullSize" onClick={() => setIsFullSize(!isfullSize)} />
				<DropFile size="18px" />
				<FolderPlus size="20px" />
			</div>
			<div className="body-sidebar">
				<BodyGallery />
			</div>
		</div>
	);
};

export default SideBar;
