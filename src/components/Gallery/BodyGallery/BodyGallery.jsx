import React from "react";

//Own components
import DropDoc from "../DropDoc";
import "./BodyGallery.scss";

const BodyGallery = () => {
	return (
		<div className="BodyGallery">
			<div className="header-gallery-container">
				<div style={{ height : "26px", width : "100%" }}>&nbsp;</div>
				<h3>GALERÍA</h3>
			</div>
			<DropDoc />
		</div>
	);
};

export default BodyGallery;
