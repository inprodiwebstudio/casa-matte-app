import { useState, useEffect }       from "react";
import { BarLoader }                 from "react-spinners";
import { useSelector, shallowEqual } from "react-redux";

//Own components
import photoBooksConfing from "core/constants/photoBooksConfing";
import ItemLayout        from "./ItemLayout";
import "./LayoutList.scss";
import {
	ScrollBar,
} from "core/components";
//helpers
import { convertToArray, isValidArray } from "helpers";

const LayoutList = () => {
	const [ layoutList, setLayoutList ] = useState([]);

	const loading = useSelector((state) => state.workSpaceSlice.loading, shallowEqual);
	const filterLayouts = useSelector((state) => state.workSpaceSlice.layoutFilter, shallowEqual);
	const productPhotoBook = useSelector((state) => state.workSpaceSlice.data?.product, shallowEqual);
	const formatPhotoBook = useSelector((state) => state.workSpaceSlice.data?.format, shallowEqual);

	const objLayouts = photoBooksConfing[productPhotoBook]?.[formatPhotoBook]?.layoutMods ?? {};

	const layouts = convertToArray(objLayouts) ?? [];

	useEffect(() => {
		if ((filterLayouts?.type === "all") && (filterLayouts?.photosQuantity?.value === "all")) {
			setLayoutList(layouts);
			return;
		}
		if ((filterLayouts?.type === "all") || (filterLayouts?.photosQuantity?.value === "all")) {
			const newListLayouts = layouts.filter(layout => (
				(layout.cat === filterLayouts.type) || (layout.numberPhotos === filterLayouts.photosQuantity.value)
			));
			setLayoutList(newListLayouts);
			return;
		}
		const newListLayouts = layouts.filter(layout => (
			(layout.cat === filterLayouts.type) && (layout.numberPhotos === filterLayouts.photosQuantity.value)
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

export default LayoutList;
