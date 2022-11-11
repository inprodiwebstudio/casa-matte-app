//Own Components
import { DragIcon, Cross } from "Resources/icons";
import "./ItemPage.scss";

const ItemPage = () => {
	return (
		<div id="ItemPage">
			<div className="my-page-container">
				<div className="drag-icon-conatainer">
					<DragIcon size="15px" />
				</div>
				<div>
					<div className="withe-page-container">&nbsp;</div>
					<div className="pages-book-conatier">
						<p>1</p>
						<p>2</p>
					</div>
				</div>
				<div className="cross-icon-conatiner">
					<Cross size="9px" />
				</div>
			</div>
		</div>
	);
};

export default ItemPage;
