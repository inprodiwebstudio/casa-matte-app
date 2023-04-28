/* eslint-disable max-len */
import React from "react";

const BigPlus = ({ size = "80px", className = "", style = {}, ...rest }) => (
	<svg
		style={{
			height : size,
			width  : size,
			...style,
		}}
		className={className}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 80 81"
		width="80px"
		height="80px"
		{...rest}
	>
		<line x1="1.5" y1="41.5" x2="79.5" y2="41.5" strokeWidth="2" strokeLinecap="round" />
		<line x1="39.5" y1="1.5" x2="39.5" y2="79.5" strokeWidth="2" strokeLinecap="round" />
	</svg>
);

export default BigPlus;
