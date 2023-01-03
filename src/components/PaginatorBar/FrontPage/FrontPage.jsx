
//Own Components
import {Reload} from "Resources/icons";
import "./FrontPage.scss";

const FrontPage = () => {
	return (
		<div
			className="FrontPage"
		>
			<div
				className="my-page-container"
			>
				<div className="drag-icon-conatainer">
					<div style={{width : "15px"}}>&nbsp;</div>
				</div>
				<div>
					<div className="withe-page-container">&nbsp;</div>
					<div className="pages-book-conatier">
						<p>ATRÁS</p>
						<p>FRENTE</p>
					</div>
				</div>
				<div className="cross-icon-conatiner">
					<Reload size="9px" />
				</div>
			</div>
		</div>
	);
};

export default FrontPage;
