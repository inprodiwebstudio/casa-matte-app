import ManagePagesDataGrid from "components/ManagePages";
import "./ManagePagesView.scss";
const ManagePagesView = () => {
	return (
		<div id="ManagePagesView">
			<div className="manages-container">
				<ManagePagesDataGrid />
			</div>
		</div>
	);
};

export default ManagePagesView;
