import { connect } from "react-redux";

//Own omponents
import { apiImageKit }          from "store/api/imageKitApi";
import { MutationSpinner }      from "core/components";
import { gallerySlice }         from "store/Slices";
import { MoreOption, PlusIcon } from "Resources/icons";
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
}) => {
	const selectedData = convertToArray(gallerySelectedData);
	const isSelectedData = isValidArray(selectedData);

	const [galleryImagesMutation] = apiImageKit.useMoveFileMutation();


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
			return await galleryImagesMutation({
				sourceFilePath  : data?.filePath,
				destinationPath : `/${userName}/${name}/`,
				tags            : (selectedData.length - 1 === index) ? ["gallery"] : ["null"],
			});
		});

		Promise.allSettled([...arrayOfPromises]).then((values) => {
		}, reason => {
			console.error(reason);
		});
	};

	return (
		<div
			className={`Folder ${folderNoSelectable && "cursor-regular"} ${!loadingMutationGallery && "isAvailable"}`}
			{
				...(!folderNoSelectable && {onDoubleClick : onSelectedFolder})
			}
		>
			<div className={`header-folder ${loadingMutationGallery && "loading"}`}>
				<h4>{name}</h4>
				<div className="more-icon-container">
					<MoreOption size="20px" />
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
									((imageKitData && !isValidArray(imageKitData)) && !loadingMutationGallery) && "Primero selecciona las fotos para agregar a ésta carpeta"
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
