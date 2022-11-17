import React from "react";

//Own components
import { DropFile } from "Resources/icons";
import "./DropDoc.scss";

const DropDoc = () => {
	return (
		<div className="DropDoc">
			<div className="indicator-drop-container">
				<DropFile size="40px" />
				<p>
					ARRASTRA AQUÍ LAS FOTOGRAFÍAS QUE
					QUIERAS AGREGAR A TU PROYECTO
				</p>
			</div>
		</div>
	);
};

export default DropDoc;
