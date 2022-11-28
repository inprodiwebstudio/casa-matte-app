import { useState }     from "react";
import { isValidArray } from "helpers";

//Own omponents
import { MoreOption, PlusIcon } from "Resources/icons";
import imageTest                from "Resources/images/testingImage01.jpg";

import "./Folder.scss";

const Folder = () => {
	const [ myImagesList, setMyImagesList ] = useState([]);

	return (
		<div className="Folder">
			<div className="header-folder">
				<h4>NUEVA CARPETA</h4>
				<div className="more-icon-container">
					<MoreOption size="20px" />
				</div>
			</div>
			<div className="body-indicator-conatiner">
				<div className="photo-thumb-nail-container">
					<div
						className={`photo-indicator ${myImagesList[0] && "full-size"}`}
						style={{
							backgroundImage : myImagesList[0] ? `url(${myImagesList[0]?.image})` : null,
						}}
					/>
					<div
						className={`photo-indicator ${myImagesList[1] && "full-size"}`}
						style={{
							backgroundImage : myImagesList[1] ? `url(${myImagesList[1]?.image})` : null,
						}}
					/>
					<div
						className={`photo-indicator ${myImagesList[2] && "full-size"}`}
						style={{
							backgroundImage : myImagesList[2] ? `url(${myImagesList[2]?.image})` : null,
						}}
					/>
					<div
						className={`photo-indicator ${myImagesList[3] && "full-size"}`}
						style={{
							backgroundImage : myImagesList[3] ? `url(${myImagesList[3]?.image})` : null,
						}}
					/>
				</div>
				<div
					className="drager-place"
					onClick={() => setMyImagesList([...myImagesList, {image : imageTest}])}
				>
					<div className="label-indicator-drager">
						<PlusIcon size="20px" />
						{
							!isValidArray(myImagesList) && (
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
