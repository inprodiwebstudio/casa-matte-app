import { connect }             from "react-redux";
import { useState, useEffect } from "react";

//Functions
import { changeResolutionImgUrl } from "helpers/Functions/changeResolutionImgUrl";

//Own omponents
import { apiImageKit }                  from "store/api/imageKitApi";
import { MutationSpinner, TextInput }   from "core/components";
import { gallerySlice, workSpaceSlice } from "store/Slices";
import { Thrash, PlusIcon }             from "Resources/icons";
import {
	bindAll,
	isValidArray,
	convertToArray,
} from "helpers";

import "./Folder.scss";
import { openContextModal, closeAllModals } from "@mantine/modals";


const Folder = ({
	name,
	folderId,
	userName,
	thumbNails,
	postTypeId,
	gallerySlice,
	workSpaceSlice,
	onSelectedFolder,
	gallerySelectedData,
	loadingMutationGallery,
}) => {
	const selectedData = convertToArray(gallerySelectedData);
	const isSelectedData = isValidArray(selectedData);

	const [ folderName, setFolderName ] = useState("");

	const [galleryFolderMutation] = apiImageKit.useDeleteFolderMutation();

	const [galleryImagesMutationMove] = apiImageKit.useMoveFileMutation();

	const hadleDeleteFolder = async () => {
		gallerySlice.setLoadingMutationGallery(true);
		try {
			const resp = await galleryFolderMutation({
				data : {
					userName,
					postTypeId,
					folderName,
				},
			});
			const { data } = resp;
			const listOfIdsDeleted = data?.idsDeletedImages ?? [];
			workSpaceSlice.removePhotosDeleted({imagesIds : listOfIdsDeleted});
			gallerySlice.setLoadingMutationGallery(false);
			gallerySlice.deleteDataGallery({
				[folderId] : true,
			});
			closeAllModals();
		} catch (error) {
			console.error(error);
			gallerySlice.setLoadingMutationGallery(false);
		}
	};

	const isAvailableImages = (thumbNails && isValidArray(thumbNails)) ?? null;

	const folderNoSelectable = (!isAvailableImages && !isSelectedData) || loadingMutationGallery;

	const handleMoveInfolder = () => {
		gallerySlice.setLoadingMutationGallery(true);
		const arrayOfPromises = selectedData.map(async (data, index) => {
			return await galleryImagesMutationMove({
				sourceFilePath  : data?.filePath,
				destinationPath : `/${userName}/${postTypeId}/${name}/`,
				tags            : (selectedData.length - 1 === index) ? ["gallery"] : ["null"],
			});
		});

		Promise.allSettled([...arrayOfPromises]).then((values) => {
			gallerySlice.clearSelectedData();
			gallerySlice.setLoadingMutationGallery(false);

			const imagesData = selectedData.map((image) => ({
				url : image?.url,
				id  : image?.id,
			}));
			gallerySlice.moveToFolder({
				folderId           : folderId,
				iamgesSelectedData : imagesData,
			});
		}, reason => {
			console.error(reason);
			gallerySlice.setLoadingMutationGallery(false);
		});
	};

	const handleEditFolderName = (e) => {
		const value = e.target.value;
		setFolderName(value);
	};

	useEffect(() => {
		setFolderName(name);
	}, [name]);

	return (
		<div
			className={`Folder ${folderNoSelectable && "cursor-regular"} ${!loadingMutationGallery && "isAvailable"}`}
			{
				...(!folderNoSelectable && {onDoubleClick : onSelectedFolder})
			}
		>
			<div className={`header-folder ${loadingMutationGallery && "loading"}`}>
				<TextInput
					// isDisabled={true}
					value={folderName}
					variant="invisible"
					onChange={(e) => handleEditFolderName(e)}
				/>
				<div
					className="more-icon-container"
					onClick={() => openContextModal({
						modal      : "confirmationDeleteFolder",
						innerProps : {
							handdleSuccess : () => hadleDeleteFolder(),
						},
					})}
				>
					<Thrash size="15px" />
				</div>
			</div>
			<div className="body-indicator-conatiner">
				<div className="photo-thumb-nail-container">
					{
						isAvailableImages && (
							<>
								<div
									className={`photo-indicator ${thumbNails[0] && "full-size"}`}
									style={{
										backgroundImage : "url(\"" + changeResolutionImgUrl(thumbNails[0], {
											width : 300,
										}) + "\")",
									}}
								/>
								<div
									className={`photo-indicator ${thumbNails[1] && "full-size"}`}
									style={{
										backgroundImage : "url(\"" + changeResolutionImgUrl(thumbNails[1], {
											width : 300,
										}) + "\")",
									}}
								/>
								<div
									className={`photo-indicator ${thumbNails[2] && "full-size"}`}
									style={{
										backgroundImage : "url(\"" + changeResolutionImgUrl(thumbNails[2], {
											width : 300,
										}) + "\")",
									}}
								/>
								<div
									className={`photo-indicator ${thumbNails[3] && "full-size"}`}
									style={{
										backgroundImage : "url(\"" + changeResolutionImgUrl(thumbNails[3], {
											width : 300,
										}) + "\")",
									}}
								/>
							</>
						)
					}
				</div>
				{
					isAvailableImages && (
						<div
							className="drager-place"
						>
							<div>
								<PlusIcon size="20px" />
							</div>
						</div>
					)
				}
				{
					((isSelectedData || (thumbNails && !isValidArray(thumbNails)) || loadingMutationGallery) && (
						<div
							className={`overlay-add-photos ${thumbNails && !isValidArray(thumbNails) && "none-background"}`}
							{
								...((!loadingMutationGallery && isSelectedData) && {onClick : () => handleMoveInfolder()})
							}
						>
							{
								loadingMutationGallery ? (
									<MutationSpinner />
								) : (
									<PlusIcon size="20px" />
								)
							}
							<p>
								{
									((thumbNails && !isValidArray(thumbNails)) && !loadingMutationGallery) && "selecciona fotos para agregar a ésta carpeta"
								}
								{
									((thumbNails && isValidArray(thumbNails)) && !loadingMutationGallery) && "Haz click aquí para agregar las fotos seleccionadas"
								}
							</p>
						</div>
					))
				}
			</div>
		</div>
	);
};

const mapStateToProps = ({ gallerySlice, authSlice, workSpaceSlice }) => ({
	gallerySelectedData : gallerySlice?.selectedData ?? {},
	userName            : authSlice?.user?.username ?? undefined,
	postTypeId          : workSpaceSlice?.data?.postTypeId ?? undefined,
});

const mapDispatchToProps = bindAll({ gallerySlice : gallerySlice.actions, workSpaceSlice : workSpaceSlice.actions});

export default connect(mapStateToProps, mapDispatchToProps) (Folder);
