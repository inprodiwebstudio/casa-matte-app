//Onw components
import "./ItemLayout.scss";
import LargeFormat from "components/global/LayoutsPage/LargeFormat";

const ItemLayout = ({isFullSize, layout}) => {
	const Layout = LargeFormat[layout];
	return (
		<div
			className={
				`ItemLayout ${isFullSize && "isFullSize"}`
			}
		>
			<Layout />
		</div>
	);
};

export default ItemLayout;
