import { isValidArray, convertToArray } from "helpers";
import { connect }                      from "react-redux";


//Own omponents
import { MoreOption, PlusIcon } from "Resources/icons";

import "./Folder.scss";

const Folder = ({images, name, handleMovePhotos, onSelectedFolder, gallerySelectedData}) => {

	const isSelectedData = isValidArray(convertToArray(gallerySelectedData));

	return (
		<div
			className={`Folder ${!isValidArray(images) && "cursor-regular"}`}
			{
				...(isValidArray(images) && {onDoubleClick : onSelectedFolder})
			}
		>
			<div className="header-folder">
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
							backgroundImage : images[0] ? `url(${images[0]?.image})` : null,
						}}
					/>
					<div
						className={`photo-indicator ${images[1] && "full-size"}`}
						style={{
							backgroundImage : images[1] ? `url(${images[1]?.image})` : null,
						}}
					/>
					<div
						className={`photo-indicator ${images[2] && "full-size"}`}
						style={{
							backgroundImage : images[2] ? `url(${images[2]?.image})` : null,
						}}
					/>
					<div
						className={`photo-indicator ${images[3] && "full-size"}`}
						style={{
							backgroundImage : images[3] ? `url(${images[3]?.image})` : null,
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
					((isSelectedData || (!isValidArray(images))) && (
						<div className={`overlay-add-photos ${!isValidArray(images) && "none-background"}`} onClick={() => handleMovePhotos()}>
							<PlusIcon size="20px" />
							<p>
								{
									!isValidArray(images) && "Primero selecciona las fotos para agregar a ésta carpeta"
								}
								{
									isValidArray(images) && "Haz click aquí para agregar las fotos seleccionadas"
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

export default connect(mapStateToProps) (Folder);
