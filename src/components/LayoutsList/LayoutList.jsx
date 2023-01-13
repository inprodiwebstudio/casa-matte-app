//Own components
import ItemLayout  from "./ItemLayout";
import LargeFormat from "components/global/LayoutsPage/LargeFormat";
import "./LayoutList.scss";
import {
	ScrollBar,
} from "core/components";

const LayoutList = () => {
	const layouts = Object.keys(LargeFormat);
	const isFullSize = (layout) => ["Mod1", "Mod2", "Mod3"].includes(layout);
	return (
		<ScrollBar>
			<div className="LayoutList">
				<div className="body-layout">
					{
						layouts.map(item => (
							<ItemLayout
								key={item}
								layout={item}
								isFullSize={isFullSize(item)}
							/>
						))
					}
				</div>
			</div>
		</ScrollBar>
	);
};

export default LayoutList;
