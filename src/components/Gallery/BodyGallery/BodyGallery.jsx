import React from "react";

//Own components
import DropDoc   from "../DropDoc";
import PhotoCard from "../PhotoCard";
import "./BodyGallery.scss";

const BodyGallery = () => {
	const isAvailableDocs = true;

	const testPhotosData = [
		{
			image : "",
		},
		{
			image : "",
		},
		{
			image : "",
		},
		{
			image : "",
		},
		{
			image : "",
		},
		{
			image : "",
		},
		{
			image : "",
		},
		{
			image : "",
		},
	];

	return (
		<div className="BodyGallery">
			<div className="header-gallery-container">
				<div style={{ height : "26px", width : "100%" }}>&nbsp;</div>
				<h3>GALERÍA</h3>
			</div>
			{
				!isAvailableDocs && (
					<DropDoc />
				)
			}
			<div className="photo-grid">
				{
					testPhotosData.map((photo, index) => (
						<PhotoCard key={index} />
					))
				}
			</div>
		</div>
	);
};

export default BodyGallery;
