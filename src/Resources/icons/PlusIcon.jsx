/* eslint-disable max-len */
import React from "react";

const PlusIcon = ({ size = "20px", className = "", style = {}, ...rest }) => (
	<svg
		style={{
			height : size,
			width  : size,
			...style,
		}}
		className={className}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		width="50px"
		height="50px"
		{...rest}
	>
		<path
			fill="currentColor"
			d="M10.5 0.5C10.3275 0.5 10.1875 0.64 10.1875 0.8125V10.1875H0.8125C0.64 10.1875 0.5 10.3275 0.5 10.5C0.5 10.6725 0.64 10.8125 0.8125 10.8125H10.1875V20.1875C10.1875 20.36 10.3275 20.5 10.5 20.5C10.6725 20.5 10.8125 20.36 10.8125 20.1875V10.8125H20.1875C20.36 10.8125 20.5 10.6725 20.5 10.5C20.5 10.3275 20.36 10.1875 20.1875 10.1875H10.8125V0.8125C10.8125 0.64 10.6725 0.5 10.5 0.5Z"
		/>
	</svg>
);

export default PlusIcon;
