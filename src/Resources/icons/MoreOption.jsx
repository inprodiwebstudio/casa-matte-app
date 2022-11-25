/* eslint-disable max-len */
import React from "react";

const MoreOption = ({ size = "20px", className = "", style = {}, ...rest }) => (
	<svg
		style={{
			height : size,
			width  : size,
			...style,
		}}
		className={className}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1 20"
		width="50px"
		height="50px"
		{...rest}
	>
		<ellipse cx="2.00033" cy="1.33333" rx="1.33333" ry="1.33333" fill="currentColor" />
		<circle cx="2.00033" cy="9.99999" r="1.33333" fill="currentColor" />
		<circle cx="2.00033" cy="18.6667" r="1.33333" fill="currentColor" />
	</svg>
);

export default MoreOption;
