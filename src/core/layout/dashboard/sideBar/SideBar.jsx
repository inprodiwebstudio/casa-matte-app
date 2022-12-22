import { useState, useEffect } from "react";
import { connect }             from "react-redux";
import BodyGallery             from "components/Gallery/BodyGallery";

//Own components
import { gallerySlice }                                           from "store/Slices";
import { genericApi }                                             from "store/api/genericApi";
import { convertToArray, isValidArray, bindAll, convertToObject } from "helpers";
import { ArrowTop, FolderPlus, DropFile, Thrash}                  from "Resources/icons";
import "./SideBar.scss";

const SideBar = ({galleryData, gallerySlice, galleryPath, selectedData}) => {
	const [ isfullSize, setIsFullSize ] = useState(false);

	const { data : myGalleryData, isFetching } = genericApi.useGetDataQuery({
		module : "gallery",
		params : {
			per_page   : 50,
			meta_key   : "parentid",
			meta_value : galleryPath?.id,
		},
	});


	const isAvailableDocs = isValidArray(convertToArray(galleryData));

	const isSelectedData = isValidArray(convertToArray(selectedData));

	useEffect(() => {
		if (isValidArray(myGalleryData)) {
			const parseDataGallery = convertToObject(myGalleryData);
			gallerySlice.setGalleryData(parseDataGallery);
		}
	}, [myGalleryData]);

	useEffect(() => {
		if (isValidArray(myGalleryData)) {
			const parseDataGallery = convertToObject(myGalleryData);
			gallerySlice.newGalleryData(parseDataGallery);
		}
	}, [galleryPath, myGalleryData]);

	return (
		<div id="SideBar" className={isAvailableDocs ? (isfullSize && "isFullSize") : "isNoData"}>
			{
				((!isFetching && !isFetching) && isAvailableDocs) && (
					<div className={`actions-sidebar-conatiner ${isfullSize && "isFullSize"}`}>
						<div className="icon-sidebar-action" onClick={() => setIsFullSize(!isfullSize)}>
							<ArrowTop size="18px" className="icon-arrow-action" />
						</div>
						<div className="icon-sidebar-action" onClick={() => gallerySlice.setTypeDropedView("addFiles")}>
							<DropFile size="18px" />
						</div>
						{
							galleryPath === "route" && (
								<div className="icon-sidebar-action" onClick={() => gallerySlice.setTypeDropedView("addFolder")}>
									<FolderPlus size="20px" />
								</div>
							)
						}
						{
							isSelectedData && (
								<div className="icon-sidebar-action" onClick={() => gallerySlice.deleteData(selectedData)}>
									<Thrash size="20px" />
								</div>
							)
						}
					</div>
				)
			}
			<div className="body-sidebar">
				<BodyGallery isFetching={isFetching} />
			</div>
		</div>
	);
};

const mapStateToProps = ({ gallerySlice }) => ({
	galleryData  : gallerySlice?.data ?? {},
	selectedData : gallerySlice?.selectedData ?? {},
	galleryPath  : gallerySlice?.galleryPathName ?? "route",
});

const mapDispatchToProps = bindAll({ gallerySlice : gallerySlice.actions});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
