import { connect } from "react-redux";

//Own omponents
import { MutationSpinner }      from "core/components";
import { gallerySlice }         from "store/Slices";
import { MoreOption, PlusIcon } from "Resources/icons";
import {
	bindAll,
	isValidArray,
	resizerImage,
	convertToArray,
} from "helpers";

import { UpdateThumbNails } from "./Folder.helpers";

import "./Folder.scss";

const Folder = ({
	name,
	images,
	folderId,
	gallerySlice,
	galleryMutation,
	onSelectedFolder,
	gallerySelectedData,
	loadingMutationGallery,
}) => {
	const isSelectedData = isValidArray(convertToArray(gallerySelectedData));

	const moveIntoFolder = async (currenTPhotos, photosSelected) => {
		const isUpdatedableFolder = (images.length < 4) ? true : false;
		const parseObjToArr = convertToArray(photosSelected);

		const promisesPhotos = parseObjToArr.map(async (photo, index) => {
			return await galleryMutation({
				module : `gallery/${photo?.id}`,
				tags   : (!isUpdatedableFolder && (index === parseObjToArr?.length - 1)) ? ["gallery"] : ["null"],
				data   : {
					status : "publish",
					meta   : {
						parentid : folderId,
					},
				},
				method : "POST",
			});
		});

		Promise.allSettled([...promisesPhotos]).then(async (values) => {}, reason => {
			console.error(reason);
		});
		if (isUpdatedableFolder) {
			const newThumbNails = UpdateThumbNails(currenTPhotos, photosSelected);
			await galleryMutation({
				module : `gallery/${folderId}`,
				tags   : ["gallery"],
				data   : {
					status : "publish",
					meta   : {
						thumbimages : [...newThumbNails],
					},
				},
				method : "POST",
			});
		}
		gallerySlice.clearSelectedData();
	};

	return (
		<div
			className={`Folder ${((!isValidArray(images) && !isSelectedData) || loadingMutationGallery) && "cursor-regular"} ${!loadingMutationGallery && "isAvailable"}`}
			{
				...((isValidArray(images) && !loadingMutationGallery) && {onDoubleClick : onSelectedFolder})
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
						className={`photo-indicator ${images[0] && "full-size"}`}
						style={{
							backgroundImage : images[0] ? `url(${resizerImage(images[0])})` : null,
						}}
					/>
					<div
						className={`photo-indicator ${images[1] && "full-size"}`}
						style={{
							backgroundImage : images[1] ? `url(${resizerImage(images[1])})` : null,
						}}
					/>
					<div
						className={`photo-indicator ${images[2] && "full-size"}`}
						style={{
							backgroundImage : images[2] ? `url(${resizerImage(images[2])})` : null,
						}}
					/>
					<div
						className={`photo-indicator ${images[3] && "full-size"}`}
						style={{
							backgroundImage : images[3] ? `url(${resizerImage(images[3])})` : null,
						}}
					/>
				</div>
				{
					isValidArray(images) && (
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
					((isSelectedData || (!isValidArray(images)) || loadingMutationGallery) && (
						<div
							className={`overlay-add-photos ${!isValidArray(images) && "none-background"}`}
							{
								...((!loadingMutationGallery && isSelectedData) && {onClick : () => moveIntoFolder(images, gallerySelectedData)})
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
									!isValidArray(images) && "Primero selecciona las fotos para agregar a ésta carpeta"
								}
								{
									(isValidArray(images) && !loadingMutationGallery) && "Haz click aquí para agregar las fotos seleccionadas"
								}
							</p>
						</div>
					))
				}
			</div>
		</div>
	);
};

const mapStateToProps = ({ gallerySlice }) => ({
	gallerySelectedData : gallerySlice?.selectedData ?? {},
});

const mapDispatchToProps = bindAll({ gallerySlice : gallerySlice.actions});

export default connect(mapStateToProps, mapDispatchToProps) (Folder);
