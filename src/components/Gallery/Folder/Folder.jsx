import { connect }             from "react-redux";
import { useState, useEffect } from "react";

//Own omponents
import { apiImageKit }                from "store/api/imageKitApi";
import { MutationSpinner, TextInput } from "core/components";
import { gallerySlice }               from "store/Slices";
import { Thrash, PlusIcon }           from "Resources/icons";
import {
	bindAll,
	isValidArray,
	resizerImage,
	convertToArray,
} from "helpers";

import "./Folder.scss";

const Folder = ({
	name,
	userName,
	folderId,
	gallerySlice,
	galleryMutation,
	onSelectedFolder,
	gallerySelectedData,
	loadingMutationGallery,
	galleryImagesMutationMove,
}) => {
	const selectedData = convertToArray(gallerySelectedData);
	const isSelectedData = isValidArray(selectedData);

	const [ folderName, setFolderName ] = useState("");

	const {data : imageKitData} = apiImageKit.useGetDirentsListQuery({
		params : {
			limit      : 5,
			folderName : name,
			userName   : userName,
		},
	});

	const isAvailableImages = (imageKitData && isValidArray(imageKitData)) ?? null;

	const folderNoSelectable = (!isAvailableImages && !isSelectedData) || loadingMutationGallery;

	const imageData = (index) => {
		if (isAvailableImages) {
			if (imageKitData[index]) {
				return `url(${resizerImage(imageKitData[index]?.url)})`;
			}
			return null;
		}
		return null;
	};

	const handleMoveInfolder = () => {
		const arrayOfPromises = selectedData.map(async (data, index) => {
			return await galleryImagesMutationMove({
				sourceFilePath  : data?.filePath,
				destinationPath : `/${userName}/${name}/`,
				tags            : (selectedData.length - 1 === index) ? ["gallery"] : ["null"],
			});
		});

		Promise.allSettled([...arrayOfPromises]).then((values) => {
			gallerySlice.clearSelectedData();
		}, reason => {
			console.error(reason);
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
				<div className="more-icon-container">
					<Thrash size="15px" />
				</div>
			</div>
			<div className="body-indicator-conatiner">
				<div className="photo-thumb-nail-container">
					<div
						className={`photo-indicator ${imageData(0) && "full-size"}`}
						style={{
							backgroundImage : imageData(0),
						}}
					/>
					<div
						className={`photo-indicator ${imageData(1) && "full-size"}`}
						style={{
							backgroundImage : imageData(1),
						}}
					/>
					<div
						className={`photo-indicator ${imageData(2) && "full-size"}`}
						style={{
							backgroundImage : imageData(2),
						}}
					/>
					<div
						className={`photo-indicator ${imageData(3) && "full-size"}`}
						style={{
							backgroundImage : imageData(3),
						}}
					/>
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
					((isSelectedData || (imageKitData && !isValidArray(imageKitData)) || loadingMutationGallery) && (
						<div
							className={`overlay-add-photos ${imageKitData && !isValidArray(imageKitData) && "none-background"}`}
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
									((imageKitData && !isValidArray(imageKitData)) && !loadingMutationGallery) && "selecciona fotos para agregar a ésta carpeta"
								}
								{
									((imageKitData && isValidArray(imageKitData)) && !loadingMutationGallery) && "Haz click aquí para agregar las fotos seleccionadas"
								}
							</p>
						</div>
					))
				}
			</div>
		</div>
	);
};

const mapStateToProps = ({ gallerySlice, authSlice }) => ({
	gallerySelectedData : gallerySlice?.selectedData ?? {},
	userName            : authSlice?.user?.username ?? undefined,
});

const mapDispatchToProps = bindAll({ gallerySlice : gallerySlice.actions});

export default connect(mapStateToProps, mapDispatchToProps) (Folder);
