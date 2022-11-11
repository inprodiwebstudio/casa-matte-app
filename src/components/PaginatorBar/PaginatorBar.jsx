//Own components
import ItemPage from "components/ItemPage";
import "./PaginatorBar.scss";

const PaginatorBar = () => {
	return (
		<div id="PaginatorBar">
			<h3 className="header-ittle-paginator">PAGINADO</h3>
			<div className="navbar-paginator-container">
				<ItemPage />
				<ItemPage />
				<ItemPage />
				<ItemPage />
				<ItemPage />
				<ItemPage />
				<ItemPage />
			</div>
		</div>
	);
};

export default PaginatorBar;
