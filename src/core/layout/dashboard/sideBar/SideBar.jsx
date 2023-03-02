import { useState } from "react";
import { connect }  from "react-redux";
import BodyGallery  from "components/Gallery/BodyGallery";

//Own components
import { gallerySlice }                                      from "store/Slices";
import { genericApi }                                        from "store/api/genericApi";
import { apiImageKit }                                       from "store/api/imageKitApi";
import { convertToArray, isValidArray, bindAll }             from "helpers";
import { ArrowTop, FolderPlus, DropFile, Thrash, MoveFolder} from "Resources/icons";
import "./SideBar.scss";

const SideBar = ({gallerySlice, galleryPath, selectedData, userName, filter}) => {
	const [ isfullSize, setIsFullSize ] = useState(false);

	const [galleryMutation, galleryMutationResult] = genericApi.useSubmitDataMutation();

	const {data : imageKitData, isFetching : imageKitFetching} = apiImageKit.useGetDirentsListQuery({
		params : {
			limit      : 100,
			userName   : userName,
			folderName : (galleryPath?.id === "route") ? null : galleryPath?.name,
			...((filter && (filter?.value !== "DESC_CAPTURE")) ? {sort : filter?.value} : {}),
		},
	});

	const [galleryImagesMutation, galleryImagesMutationResult] = apiImageKit.useDeleteImagesMutation();
	const [galleryImagesMutationMove, galleryImagesMutationMoveResult] = apiImageKit.useMoveFileMutation();


	const loadingMutationGallery = galleryMutationResult.isLoading || galleryImagesMutationResult.isLoading || galleryImagesMutationMoveResult.isLoading;

	const isAvailableDocs = isValidArray(imageKitData);

	const isSelectedData = isValidArray(convertToArray(selectedData));

	const deleteImages = async () => {
		const listOfSelectedImages = convertToArray(selectedData).map( image => (image?.fileId));
		await galleryImagesMutation({
			data : {
				imageIds : listOfSelectedImages,
			},
		}).unwrap();
		gallerySlice.clearSelectedData();
	};

	const handleMoveOutFolder = () => {
		const mySelectedData = convertToArray(selectedData);
		const arrayOfPromises = mySelectedData.map(async (data, index) => {
			return await galleryImagesMutationMove({
				sourceFilePath  : data?.filePath,
				destinationPath : `/${userName}/`,
				tags            : (mySelectedData.length - 1 === index) ? ["gallery"] : ["null"],
			});
		});

		Promise.allSettled([...arrayOfPromises]).then((values) => {
			gallerySlice.clearSelectedData();
		}, reason => {
			console.error(reason);
		});
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
						{
							isSelectedData && (
								<div
									className="icon-sidebar-action"
									{
										...(!loadingMutationGallery && {
											onClick : () => handleMoveOutFolder(),
										})
									}
								>
									<MoveFolder size="20px" />
								</div>
							)
						}
					</div>
				)
			}
			<div className="body-sidebar">
				<BodyGallery
					galleryData={imageKitData}
					isFetching={imageKitFetching}
					galleryMutation={galleryMutation}
					loadingMutationGallery={loadingMutationGallery}
					galleryImagesMutationMove={galleryImagesMutationMove}
				/>
			</div>
		</div>
	);
};

const mapStateToProps = ({ gallerySlice, authSlice }) => ({
	selectedData : gallerySlice?.selectedData ?? {},
	galleryPath  : gallerySlice?.galleryPathName ?? "route",
	userName     : authSlice?.user?.username ?? undefined,
	filter       : gallerySlice?.filter ?? undefined,
});

const mapDispatchToProps = bindAll({ gallerySlice : gallerySlice.actions});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
