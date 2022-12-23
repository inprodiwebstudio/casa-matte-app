import { useState } from "react";
import { connect }  from "react-redux";
import BodyGallery  from "components/Gallery/BodyGallery";

//Own components
import { gallerySlice }                          from "store/Slices";
import { genericApi }                            from "store/api/genericApi";
import { convertToArray, isValidArray, bindAll } from "helpers";
import { ArrowTop, FolderPlus, DropFile, Thrash} from "Resources/icons";
import "./SideBar.scss";

const SideBar = ({gallerySlice, galleryPath, selectedData}) => {
	const [ isfullSize, setIsFullSize ] = useState(false);

	const { data : myGalleryData, isFetching } = genericApi.useGetDataQuery({
		module : "gallery",
		params : {
			per_page   : 50,
			meta_key   : "parentid",
			meta_value : galleryPath?.id,
		},
	});


	const isAvailableDocs = isValidArray(myGalleryData);

	const isSelectedData = isValidArray(convertToArray(selectedData));

	return (
		<div id="SideBar" className={isAvailableDocs ? (isfullSize && "isFullSize") : "isNoData"}>
			{
				((!isFetching) && isAvailableDocs) && (
					<div className={`actions-sidebar-conatiner ${isfullSize && "isFullSize"}`}>
						<div className="icon-sidebar-action" onClick={() => setIsFullSize(!isfullSize)}>
							<ArrowTop size="18px" className="icon-arrow-action" />
						</div>
						<div className="icon-sidebar-action" onClick={() => gallerySlice.setTypeDropedView("addFiles")}>
							<DropFile size="18px" />
						</div>
						{
							galleryPath?.id === "route" && (
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
				<BodyGallery isFetching={isFetching} galleryData={myGalleryData} />
			</div>
		</div>
	);
};

const mapStateToProps = ({ gallerySlice }) => ({
	selectedData : gallerySlice?.selectedData ?? {},
	galleryPath  : gallerySlice?.galleryPathName ?? "route",
});

const mapDispatchToProps = bindAll({ gallerySlice : gallerySlice.actions});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
