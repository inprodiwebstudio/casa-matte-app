//Own omponents
import { MoreOption, PlusIcon } from "Resources/icons";
import "./Folder.scss";

const Folder = () => {
	return (
		<div className="Folder">
			<div className="header-folder">
				<h4>NUEVA CARPETA</h4>
				<div className="more-icon-container">
					<MoreOption size="20px" />
				</div>
			</div>
			<div className="drager-body-container">
				<div className="body-container">
					<PlusIcon size="20px" />
					<p className="text-container">
						ARRASTRA AQUÍ TUS FOTOGRAFÍAS
					</p>
				</div>
			</div>
		</div>
	);
};

export default Folder;
