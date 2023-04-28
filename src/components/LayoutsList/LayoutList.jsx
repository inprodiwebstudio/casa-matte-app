import { useState, useEffect } from "react";
import { BarLoader }           from "react-spinners";

//Own components
import LargeFormat  from "components/global/LayoutsPage/LargeFormat";
import SquareFormat from "components/global/LayoutsPage/SquareFormat";
import ItemLayout   from "./ItemLayout";
import "./LayoutList.scss";
import {
	ScrollBar,
} from "core/components";
import { connect }      from "react-redux";
import { isValidArray } from "helpers";

const LayoutList = ({filterLayouts, formatPage, loading}) => {
	const [ layoutList, setLayoutList ] = useState([]);

	// const isFullSize = (layout) => {
	// 	switch (formatPage) {
	// 		case "LargeFormat":
	// 			return ["Mod1", "Mod2", "Mod3"].includes(layout);
	// 		case "SquareFormat":
	// 			return  ["Mod6", "Mod7"].includes(layout);
	// 	}
	// };

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
	}, [filterLayouts, formatPage]);

	return (
		<ScrollBar>
			<div className="LayoutList">
				<div className="body-layout">
					{
						(layoutList && isValidArray(layoutList) && !loading) ? (
							layoutList.map((item, index) => (
								<ItemLayout key={index} layoutData={identifyFormatPage(item?.id)} />
							))
						) : (
							<div
								style={{
									display        : "flex",
									width          : "100%",
									justifyContent : "center",
									alignItems     : "center",
								}}
							>
								<BarLoader color={"#B2AFA6"} />
							</div>
						)
					}
				</div>
			</div>
		</ScrollBar>
	);
};

const mapStateToProps = ({ workSpaceSlice }) => ({
	filterLayouts : workSpaceSlice?.layoutFilter ?? {},
	formatPage    : workSpaceSlice?.data?.sizePhotoBook ?? "LargeFormat",
	loading       : workSpaceSlice?.loading ?? true,
});

export default connect(mapStateToProps) (LayoutList);
