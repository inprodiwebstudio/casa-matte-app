/* eslint-disable max-len */
import React from "react";

const Check = ({ size = "15px", className = "", style = {}, ...rest }) => (
	<svg
		style={{
			height : size,
			width  : size,
			...style,
		}}
		className={className}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 17 17"
		width="15px"
		height="15px"
		{...rest}
	>
		<path
			fill="currentColor"
			d="M15.1344 0.122391C15.4718 0.351342 15.5679 0.822958 15.3495 1.1761L6.38667 15.6522C6.26253 15.8522 6.05648 15.9802 5.82895 15.9977C5.81075 15.9992 5.79291 16 5.77543 16C5.5672 16 5.3677 15.9063 5.22864 15.7413L0.714453 10.3726C0.449063 10.0564 0.478551 9.57528 0.780346 9.29719C1.08214 9.01909 1.5423 9.05033 1.80805 9.36576L5.68697 13.9794L14.127 0.347532C14.3458 -0.00598899 14.7958 -0.105798 15.1344 0.122391Z"
		/>
	</svg>
);

export default Check;
