/* eslint-disable max-len */
import React from "react";

const CrossSelector = ({ size = "30px", className = "", style = {}, ...rest }) => (
	<svg
		style={{
			height : size,
			width  : size,
			...style,
		}}
		className={className}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 31 31"
		width="50px"
		height="42px"
		{...rest}
	>
		<g clipPath="url(#clip0_776_1672)">
			<path fillRule="evenodd" clipRule="evenodd" d="M12.5043 2.88086H2.7793H0.779297V4.88086V28.5V30.5H2.7793H26.3985H28.3985V28.5V18.7751C28.2618 18.6843 28.1321 18.5787 28.0117 18.4583L26.3985 16.8451V28.5H2.7793V4.88086H14.4343L12.8212 3.26775C12.7007 3.14727 12.5951 3.01754 12.5043 2.88086ZM22.8631 4.88086H21.5053L19.5053 2.88086H24.8631L22.8631 4.88086ZM26.3985 9.77399V8.41652L28.3985 6.41652V11.774L26.3985 9.77399Z" fill="currentColor" />
			<path fillRule="evenodd" clipRule="evenodd" d="M17.9577 8.40479H6.30273V24.9763H22.8742V13.3213L22.1838 12.6308L16.3563 18.4583C15.3799 19.4347 13.797 19.4347 12.8207 18.4583C11.8444 17.482 11.8444 15.8991 12.8207 14.9228L18.6482 9.09531L17.9577 8.40479Z" fill="currentColor" />
			<path d="M14.7793 16.5L29.7793 1.5M14.7793 1.5L29.7793 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="bevel" />
		</g>
		<defs>
			<clipPath id="clip0_776_1672">
				<rect width="30" height="30" fill="currentColor" transform="translate(0.779297 0.5)" />
			</clipPath>
		</defs>
	</svg>
);

export default CrossSelector;
