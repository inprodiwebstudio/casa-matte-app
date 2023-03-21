import { useState, useEffect } from "react";

//Own components
import ItemLayout   from "./ItemLayout";
import LargeFormat  from "components/global/LayoutsPage/LargeFormat";
import SquareFormat from "components/global/LayoutsPage/SquareFormat";
import "./LayoutList.scss";
import {
	ScrollBar,
} from "core/components";
import { connect } from "react-redux";

const LayoutList = ({filterLayouts, formatPage}) => {
	const [ layoutList, setLayoutList ] = useState([]);

	const isFullSize = (layout) => {
		switch (formatPage) {
			case "LargeFormat":
				return ["Mod1", "Mod2", "Mod3"].includes(layout);
			case "SquareFormat":
				return  ["Mod6", "Mod7"].includes(layout);
		}
	};

	const myLayouts = () => {
		switch (formatPage) {
			case "LargeFormat":
				return Object.values(LargeFormat);
			case "SquareFormat":
				return Object.values(SquareFormat);
		}
	};

	const identifyFormatPage = (layoutId) => {
		switch (formatPage) {
			case "LargeFormat":
				return LargeFormat[layoutId];
			case "SquareFormat":
				return SquareFormat[layoutId];
		}
	};

	useEffect(() => {
		const layouts = myLayouts();
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
								isFullSize={isFullSize(item?.id)}
								typeFormat={formatPage ?? "LargeFormat"}
								layoutData={identifyFormatPage(item?.id)}
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
	formatPage    : workSpaceSlice?.data?.sizePhotoBook ?? "LargeFormat",
});

export default connect(mapStateToProps) (LayoutList);
