import React from "react";

//Own components
import DropDoc from "../DropDoc";
import "./BodyGallery.scss";

const BodyGallery = () => {
	const isAvailableDocs = true;
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
				<div
					style={{
						background : "grey",
						width      : "157px",
						height     : "157px",
					}}
				>
					&nbsp;
				</div>
				<div
					style={{
						background : "grey",
						width      : "157px",
						height     : "157px",
					}}
				>
					&nbsp;
				</div>
				<div
					style={{
						background : "grey",
						width      : "157px",
						height     : "157px",
					}}
				>
					&nbsp;
				</div>
				<div
					style={{
						background : "grey",
						width      : "157px",
						height     : "157px",
					}}
				>
					&nbsp;
				</div>
				<div
					style={{
						background : "grey",
						width      : "157px",
						height     : "157px",
					}}
				>
					&nbsp;
				</div>
				<div
					style={{
						background : "grey",
						width      : "157px",
						height     : "157px",
					}}
				>
					&nbsp;
				</div>
				<div
					style={{
						background : "grey",
						width      : "157px",
						height     : "157px",
					}}
				>
					&nbsp;
				</div>
				<div
					style={{
						background : "grey",
						width      : "157px",
						height     : "157px",
					}}
				>
					&nbsp;
				</div>
			</div>
		</div>
	);
};

export default BodyGallery;
