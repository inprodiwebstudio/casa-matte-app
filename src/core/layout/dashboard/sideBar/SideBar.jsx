import { useState } from "react";
import BodyGallery  from "components/Gallery/BodyGallery";

//Own components
import { ArrowTop, FolderPlus, DropFile} from "Resources/icons";
import "./SideBar.scss";

const SideBar = () => {
	const [ isfullSize, setIsFullSize ] = useState(false);

	const isAvailableDocs = true;

	return (
		<div id="SideBar" className={isAvailableDocs ? (isfullSize && "isFullSize") : "isNoData"}>
			{
				isAvailableDocs && (
					<div className={`actions-sidebar-conatiner ${isfullSize && "isFullSize"}`}>
						<div className="icon-sidebar-action" onClick={() => setIsFullSize(!isfullSize)}>
							<ArrowTop size="18px" className="icon-arrow-action" />
						</div>
						<div className="icon-sidebar-action">
							<DropFile size="18px" />
						</div>
						<div className="icon-sidebar-action">
							<FolderPlus size="20px" />
						</div>
					</div>
				)
			}
			<div className="body-sidebar">
				<BodyGallery />
			</div>
		</div>
	);
};

export default SideBar;
