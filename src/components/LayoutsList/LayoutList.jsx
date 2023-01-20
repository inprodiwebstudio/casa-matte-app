import { useState, useEffect } from "react";

//Own components
import ItemLayout  from "./ItemLayout";
import LargeFormat from "components/global/LayoutsPage/LargeFormat";
import "./LayoutList.scss";
import {
	ScrollBar,
} from "core/components";
import { connect } from "react-redux";

const LayoutList = ({filterLayouts}) => {
	const [ layoutList, setLayoutList ] = useState([]);

	const isFullSize = (layout) => ["Mod1", "Mod2", "Mod3"].includes(layout);

	useEffect(() => {
		const layouts = Object.values(LargeFormat);
		if ((filterLayouts?.type === "all") && (filterLayouts?.photosQuantity === "all")) {
			setLayoutList(layouts);
			return;
		}
		if ((filterLayouts?.type === "all") || (filterLayouts?.photosQuantity === "all")) {
			const newListLayouts = layouts.filter(layout => (
				(layout.cat === filterLayouts.type) || (layout.numberPhotos === filterLayouts.photosQuantity)
			));
			setLayoutList(newListLayouts);
			return;
		}
		const newListLayouts = layouts.filter(layout => (
			(layout.cat === filterLayouts.type) && (layout.numberPhotos === filterLayouts.photosQuantity)
		));
		setLayoutList(newListLayouts);
	}, [filterLayouts]);
	return (
		<ScrollBar>
			<div className="LayoutList">
				<div className="body-layout">
					{
						layoutList.map((item, index) => (
							<ItemLayout
								key={index}
								layout={item?.id}
								layoutData={LargeFormat[item?.id]}
								isFullSize={isFullSize(item?.id)}
							/>
						))
					}
				</div>
			</div>
		</ScrollBar>
	);
};

const mapStateToProps = ({ workSpaceSlice }) => ({
	filterLayouts : workSpaceSlice?.layoutFilter ?? {},
});

export default connect(mapStateToProps) (LayoutList);
