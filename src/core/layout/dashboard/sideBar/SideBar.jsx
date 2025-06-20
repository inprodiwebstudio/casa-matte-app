import { connect } from "react-redux";
import BodyGallery from "components/Gallery/BodyGallery";
//Mantine
import { closeAllModals, openContextModal } from "@mantine/modals";

//Own components
import { gallerySlice, workSpaceSlice }                             from "store/Slices";
import { apiImageKit }                                              from "store/api/imageKitApi";
import { convertToArray, isValidArray, bindAll }                    from "helpers";
import { ArrowTop, FolderPlus, DropFile, Thrash, MoveFolder, Cross} from "Resources/icons";
import "./SideBar.scss";
import { useEffect }                                                from "react";
import { useParams }                                                from "react-router";

const { useLazyGetDirentsListQuery } = apiImageKit;

const SideBar = ({
	isLoadingGalleryData,
	isLoadingMutation,
	isFullSizeSideBar,
	workSpaceSlice,
	selectedData,
	gallerySlice,
	typeDropView,
	galleryData,
	galleryPath,
	isLoggedIn,
	isPreview,
	userName,
	filter,
}) => {
	const [ fetchGallery ] = useLazyGetDirentsListQuery();
	const { postId } = useParams();

	const [galleryImagesMutationMove] = apiImageKit.useMoveFileMutation();
	const [galleryImagesMutastionDelete] = apiImageKit.useDeleteImagesMutation();

	const isAvailableDocs = isValidArray(convertToArray(galleryData));

	const isSelectedData = isValidArray(convertToArray(selectedData));

	const selectedDataQuantity = convertToArray(selectedData).length;

	const handlerDeletePhotos = async () => {
		gallerySlice.setLoadingMutationGallery(true);
		const mySelectedData = convertToArray(selectedData);
		const publicIdsPhotos = mySelectedData.map(photo => photo?.public_id);
		// const listOfIds = mySelectedData.map(photo => photo?.id);
		try {
			await galleryImagesMutastionDelete(publicIdsPhotos);
			// workSpaceSlice.removePhotosDeleted({imagesIds : listOfIds});
			gallerySlice.deleteDataGallery(selectedData);
			gallerySlice.setLoadingMutationGallery(false);
			closeAllModals();
		} catch (error) {
			gallerySlice.setLoadingMutationGallery(false);
			closeAllModals();
			console.error(error);
		}
	};

	const handleMoveOutFolder = () => {
		const mySelectedData = convertToArray(selectedData);
		const arrayOfPromises = mySelectedData.map(async (data, index) => {
			return await galleryImagesMutationMove({
				sourceFilePath  : data?.filePath,
				destinationPath : `/${userName}/`,
			});
		});

		Promise.allSettled([...arrayOfPromises]).then((values) => {
			gallerySlice.clearSelectedData();
		}, reason => {
			console.error(reason);
		});
	};

	const handlerGetGallery = async () => {
		gallerySlice.setLoadingGalleryData(true);
		try {
			const resp = await fetchGallery({
				params : {
					limit      : 500,
					userName   : `${userName}/${postId}`,
					folderName : (galleryPath?.name === "route") ? null : galleryPath?.name,
					...((filter && (filter?.value !== "DESC_CAPTURE")) ? {sort : filter?.value} : {}),
				},
			});
			gallerySlice.getGalleryData(resp.data);
			gallerySlice.setLoadingGalleryData(false);
		} catch (error) {
			console.error(error);
			gallerySlice.setLoadingGalleryData(false);
		}
	};

	useEffect(() => {
		if (isLoggedIn) {
			handlerGetGallery();
		}
		return;
	}, [filter, isLoggedIn, galleryPath]);

	return (
		<div id="SideBar" className={`${isAvailableDocs ? (isFullSizeSideBar && "isFullSize") : "isNoData"} ${isPreview && "isInpreview"}`}>
			{
				((!isLoadingGalleryData) && isAvailableDocs) && (
					<div className={`actions-sidebar-conatiner ${isFullSizeSideBar && "isFullSize"} ${isLoadingGalleryData && "is-loading"}`}>
						<div
							className="icon-sidebar-action"
							{
								...(!isLoadingMutation && {
									onClick : () => gallerySlice.toggleFullSizeSideBar(),
								})
							}
						>
							<ArrowTop size="16px" className="icon-arrow-action" />
						</div>
						<div
							className="icon-sidebar-action"
							{
								...(!isLoadingMutation && {
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
										...(!isLoadingMutation && {
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
										...(!isLoadingMutation && {
											onClick : () =>  openContextModal({
												modal      : "confirmationDelete",
												innerProps : {
													photoQuantity  : selectedDataQuantity,
													handdleSuccess : () => handlerDeletePhotos(),
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
										...(!isLoadingMutation && {
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
										...(!isLoadingMutation && {
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
				<BodyGallery />
			</div>
		</div>
	);
};

const mapStateToProps = ({ gallerySlice, authSlice, workSpaceSlice }) => ({
	selectedData         : gallerySlice?.selectedData ?? {},
	galleryData          : gallerySlice?.data ?? {},
	isFullSizeSideBar    : gallerySlice?.isFullSizeSideBar ?? false,
	isLoadingGalleryData : gallerySlice?.isLoadingData ?? false,
	isLoadingMutation    : gallerySlice?.isLoadingMutation ?? false,
	typeDropView         : gallerySlice?.typeDropedView ?? null,
	galleryPath          : gallerySlice?.galleryPathName ?? "route",
	userName             : authSlice?.user?.username ?? undefined,
	filter               : gallerySlice?.filter ?? undefined,
	isPreview            : workSpaceSlice?.isPreview ?? undefined,
	photoBookData        : workSpaceSlice?.data ?? undefined,
	isLoggedIn           : authSlice?.loggedIn ?? false,
});

const mapDispatchToProps = bindAll({ gallerySlice : gallerySlice.actions, workSpaceSlice : workSpaceSlice.actions});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
