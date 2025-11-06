//Own components
import { shallowEqual, useSelector } from "react-redux";
import "./SideBar.scss";
import GalleryEditor                 from "components/GalleryEditor";

const SideBar = () => {
	const statusViewPage = useSelector((state) => state.workSpaceSlice?.statusViewPage, shallowEqual);

	const isPreviewActive = statusViewPage === "preview";

	return (
		<div
			id="SideBar"
		>
			<div className={`body-sidebar ${isPreviewActive && "isPreviewActive"}`}>
				<GalleryEditor />
			</div>
		</div>
	);
};

export default SideBar;
