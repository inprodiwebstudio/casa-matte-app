import { useState, useEffect } from "react";
import { BarLoader }           from "react-spinners";

//Own components
import photoBooksConfing from "core/constants/photoBooksConfing";
import ItemLayout        from "./ItemLayout";
import "./LayoutList.scss";
import {
	ScrollBar,
} from "core/components";
import { connect } from "react-redux";
//helpers
import { convertToArray, isValidArray } from "helpers";

const LayoutList = ({filterLayouts, productPhotoBook, loading, formatPhotoBook}) => {
	const [ layoutList, setLayoutList ] = useState([]);

	const objLayouts = photoBooksConfing[productPhotoBook]?.[formatPhotoBook]?.layoutMods ?? {};

	const layouts = convertToArray(objLayouts) ?? [];

	useEffect(() => {
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
	}, [filterLayouts, formatPhotoBook]);

	return (
		<ScrollBar>
			<div className="LayoutList">
				<div className="body-layout">
					{
						(layoutList && isValidArray(layoutList) && !loading) ? (
							layoutList.map((item, index) => (
								<ItemLayout key={index} layoutData={objLayouts[item?.id]} />
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
	filterLayouts    : workSpaceSlice?.layoutFilter ?? {},
	productPhotoBook : (workSpaceSlice?.data?.product === "") ? "white" : workSpaceSlice?.data?.product,
	formatPhotoBook  : (workSpaceSlice?.data?.format === "") ? "vertical" : workSpaceSlice?.data?.format,
	loading          : workSpaceSlice?.loading ?? true,
});

export default connect(mapStateToProps) (LayoutList);
