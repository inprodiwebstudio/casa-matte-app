import { isValidArray } from "helpers";

//Own omponents
import { MoreOption, PlusIcon } from "Resources/icons";

import "./Folder.scss";

const Folder = ({images, name, handleMovePhotos}) => {

	return (
		<div className="Folder">
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
				<div
					className="drager-place"
					onClick={() => handleMovePhotos()}
				>
					<div className="label-indicator-drager">
						<PlusIcon size="20px" />
						{
							!isValidArray(images) && (
								<p>
									AGREGAR FOTOS
								</p>
							)
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Folder;
