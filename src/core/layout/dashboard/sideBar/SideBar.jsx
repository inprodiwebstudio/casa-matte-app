import { useState } from "react";
import { connect }  from "react-redux";
import BodyGallery  from "components/Gallery/BodyGallery";

//Own components
import { gallerySlice }                          from "store/Slices";
import { genericApi }                            from "store/api/genericApi";
import { apiImageKit }                           from "store/api/imageKitApi";
import { convertToArray, isValidArray, bindAll } from "helpers";
import { deleteImageKitIo }                      from "./SideBar.helpers";
import { ArrowTop, FolderPlus, DropFile, Thrash} from "Resources/icons";
import "./SideBar.scss";

const SideBar = ({gallerySlice, galleryPath, selectedData}) => {
	const [ isfullSize, setIsFullSize ] = useState(false);

	const [galleryMutation, galleryMutationResult] = genericApi.useSubmitDataMutation();

	const {data : imageKitData, isFetching : imageKitFetching} = apiImageKit.useGetDirentsListQuery({
		params : {
			limit : 100,
		},
	});

	const loadingMutationGallery = galleryMutationResult.isLoading;

	const isAvailableDocs = isValidArray(imageKitData);

	const isSelectedData = isValidArray(convertToArray(selectedData));

	const deleteImages = () => {
		const listOfSelectedImages = convertToArray(selectedData).map( image => (image?.fileId));
		deleteImageKitIo(listOfSelectedImages);
	};

	return (
		<div id="SideBar" className={isAvailableDocs ? (isfullSize && "isFullSize") : "isNoData"}>
			{
				((!imageKitFetching) && isAvailableDocs) && (
					<div className={`actions-sidebar-conatiner ${isfullSize && "isFullSize"} ${loadingMutationGallery && "is-loading"}`}>
						<div
							className="icon-sidebar-action"
							{
								...(!loadingMutationGallery && {
									onClick : () => setIsFullSize(!isfullSize),
								})
							}
						>
							<ArrowTop size="18px" className="icon-arrow-action" />
						</div>
						<div
							className="icon-sidebar-action"
							{
								...(!loadingMutationGallery && {
									onClick : () => gallerySlice.setTypeDropedView("addFiles"),
								})
							}
						>
							<DropFile size="18px" />
						</div>
						{
							galleryPath?.id === "route" && (
								<div
									className="icon-sidebar-action"
									{
										...(!loadingMutationGallery && {
											onClick : () => gallerySlice.setTypeDropedView("addFolder"),
										})
									}
								>
									<FolderPlus size="20px" />
								</div>
							)
						}
						{
							isSelectedData && (
								<div
									className="icon-sidebar-action"
									{
										...(!loadingMutationGallery && {
											onClick : () =>  deleteImages(),
										})
									}
								>
									<Thrash size="20px" />
								</div>
							)
						}
					</div>
				)
			}
			<div className="body-sidebar">
				<BodyGallery
					isFetching={imageKitFetching}
					galleryData={imageKitData}
					galleryMutation={galleryMutation}
					loadingMutationGallery={loadingMutationGallery}
				/>
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
