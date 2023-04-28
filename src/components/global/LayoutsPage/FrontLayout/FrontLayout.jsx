//Own components
import { PhotoGallery } from "Resources/icons";
import "./FrontLayout.scss";

const FrontLayout = () => {
	return (
		<div className="body-front-layout">
			<div className="back-book" />
			<div className="spacer-front-book">
				<div className="spine-text">WEDDING BELLS</div>
			</div>
			<div className="front-book">
				<div className="body-front-container">
					<div className="photo-drager-container">
						<div className="photo-content">
							<PhotoGallery size="5em" />
						</div>
					</div>
					<h3>WEDDING BELLS</h3>
				</div>
			</div>
		</div>
	);
};

export default FrontLayout;
