//Own components
import "./SideBar.scss";
import GalleryEditor from "components/GalleryEditor";

const SideBar = () => {
	return (
		<div
			id="SideBar"
		>
			<div className="body-sidebar">
				<GalleryEditor />
			</div>
		</div>
	);
};

export default SideBar;
