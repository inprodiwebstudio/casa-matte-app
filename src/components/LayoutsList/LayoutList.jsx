import { useState, useEffect }       from "react";
import { useSelector, shallowEqual } from "react-redux";

//Own components
import photoBooksConfing from "core/constants/photoBooksConfing";
import LoadingLayouts    from "./LoadingLayouts";
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
	const sizePhotoBook = useSelector((state) => state.workSpaceSlice?.data?.sizePhotoBook, shallowEqual);

	const objLayouts = photoBooksConfing[productPhotoBook]?.[formatPhotoBook]?.sizes?.[sizePhotoBook]?.layoutMods ?? {};

	const layouts = convertToArray(objLayouts) ?? [];

	useEffect(() => {
		if ((filterLayouts?.type === "all") && (filterLayouts?.photosQuantity?.value === "all")) {
			const noCoverList = layouts.filter(layout => layout.cat !== "portadas");
			setLayoutList(noCoverList);
			return;
		}
		if ((filterLayouts?.type === "all") || (filterLayouts?.photosQuantity?.value === "all")) {
			const newListLayouts = layouts.filter(layout => (
				(layout.cat === filterLayouts.type) || (layout.numberPhotos === filterLayouts.photosQuantity.value)
			));
			if (filterLayouts?.type !== "portadas") {
				const noCoverList = newListLayouts.filter(layout => layout.cat !== "portadas");
				setLayoutList(noCoverList);
				return;
			}
			const noCoverList = newListLayouts.filter(layout => layout.cat === "portadas");
			setLayoutList(noCoverList);
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
						(layoutList && isValidArray(layoutList) && !loading) && (
							layoutList.map((item, index) => (
								<ItemLayout key={index} layoutData={objLayouts[item?.id]} />
							))
						)
					}
					{
						(!isValidArray(layoutList) && !loading) && (
							<div className="not-found">
								No se encontraron layouts
							</div>
						)
					}
					{
						loading && (
							<LoadingLayouts />
						)
					}
				</div>
			</div>
		</ScrollBar>
	);
};

export default LayoutList;
