import { useState } from "react";
import { connect }  from "react-redux";
import BodyGallery  from "components/Gallery/BodyGallery";
//Mantine
import { openContextModal, closeAllModals } from "@mantine/modals";

//Own components
import { gallerySlice, workSpaceSlice }                                      from "store/Slices";
import { genericApi }                                                        from "store/api/genericApi";
import { apiImageKit }                                                       from "store/api/imageKitApi";
import { convertToArray, isValidArray, bindAll, coordinatesPhotoInWorkSpce } from "helpers";
import { ArrowTop, FolderPlus, DropFile, Thrash, MoveFolder, Cross}          from "Resources/icons";
import "./SideBar.scss";

// cloudinary.config({
// 	cloud_name : "casaMatte",
// 	api_key    : "864322584227584",
// 	api_secret : "E8Hmvqo50hhgo-XAoZHdXTajh4c",
// });

const SideBar = ({
	gallerySlice,
	typeDropView,
	workSpaceSlice,
	galleryPath,
	selectedData,
	isPreview,
	userName,
	filter,
	workspaceData,
}) => {

	const [ isfullSize, setIsFullSize ] = useState(false);

	const [galleryMutation, galleryMutationResult] = genericApi.useSubmitDataMutation();

	const {data : imageKitData, isFetching : imageKitFetching, refetch} = apiImageKit.useGetDirentsListQuery({
		params : {
			limit      : 500,
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

	const selectedDataQuantity = convertToArray(selectedData).length;

	const deleteImages = async () => {
		let coordinatesLister = [];
		const listOfSelectedImages = convertToArray(selectedData).map( image => {
			coordinatesLister = [...coordinatesLister, ...coordinatesPhotoInWorkSpce(image?.public_id, workspaceData)];
			return (
				image?.public_id
			);
		});
		await galleryImagesMutation({
			data : {
				imageIds : listOfSelectedImages,
			},
		}).unwrap();
		closeAllModals();
		gallerySlice.clearSelectedData();
		workSpaceSlice.removePhotoById(coordinatesLister);
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
		<div id="SideBar" className={`${isAvailableDocs ? (isfullSize && "isFullSize") : "isNoData"} ${isPreview && "isInpreview"}`}>
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
							<ArrowTop size="16px" className="icon-arrow-action" />
						</div>
						<div
							className="icon-sidebar-action"
							{
								...(!loadingMutationGallery && {
									onClick : () => gallerySlice.setTypeDropedView("addFiles"),
								})
							}
						>
							<DropFile size="16px" />
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
									<FolderPlus size="16px" />
								</div>
							)
						}
						{
							isSelectedData && (
								<div
									className="icon-sidebar-action"
									{
										...(!loadingMutationGallery && {
											onClick : () =>  openContextModal({
												modal      : "confirmationDelete",
												innerProps : {
													photoQuantity  : selectedDataQuantity,
													handdleSuccess : () => deleteImages(),
												},
											}),
										})
									}
								>
									<Thrash size="16px" />
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
									<MoveFolder size="16px" />
								</div>
							)
						}
						{
							typeDropView !== null && (
								<div
									className="icon-sidebar-action"
									{
										...(!loadingMutationGallery && {
											onClick : () => gallerySlice.setTypeDropedView(null),
										})
									}
								>
									<Cross size="16px" />
								</div>
							)
						}
					</div>
				)
			}
			<div className="body-sidebar">
				<BodyGallery
					refetch={refetch}
					isfullSize={isfullSize}
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

const mapStateToProps = ({ gallerySlice, authSlice, workSpaceSlice }) => ({
	selectedData  : gallerySlice?.selectedData ?? {},
	typeDropView  : gallerySlice?.typeDropedView ?? null,
	galleryPath   : gallerySlice?.galleryPathName ?? "route",
	userName      : authSlice?.user?.username ?? undefined,
	filter        : gallerySlice?.filter ?? undefined,
	workspaceData : workSpaceSlice?.data ?? undefined,
	isPreview     : workSpaceSlice?.isPreview ?? undefined,
});

const mapDispatchToProps = bindAll({ gallerySlice : gallerySlice.actions, workSpaceSlice : workSpaceSlice.actions});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
