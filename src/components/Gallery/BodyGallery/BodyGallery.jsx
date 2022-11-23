import React from "react";

//Own components
import DropDoc       from "../DropDoc";
import PhotoCard     from "../PhotoCard";
import { ScrollBar } from "core/components";
import imageTest     from "Resources/images/testingImage01.jpg";
import "./BodyGallery.scss";

const BodyGallery = () => {
	const isAvailableDocs = true;

	const testPhotosData = [
		{
			image : imageTest,
		},
		{
			image : imageTest,
		},
		{
			image : imageTest,
		},
		{
			image : imageTest,
		},
		{
			image : imageTest,
		},
		{
			image : imageTest,
		},
		{
			image : imageTest,
		},
		{
			image : imageTest,
		},
		{
			image : imageTest,
		},
		{
			image : imageTest,
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
			{
				isAvailableDocs && (
					<ScrollBar>
						<div className="docs-list">
							<div className="photo-grid">
								{
									testPhotosData.map((photo, index) => (
										<PhotoCard key={index} image={photo?.image} />
									))
								}
							</div>
						</div>
					</ScrollBar>
				)
			}
		</div>
	);
};

export default BodyGallery;
