import React from "react";

//Own components
import "./Button.scss";

const Button = ({
	icon,
	width,
	height,
	fontSize,
	children,
}) => {
	return (
		<button
			className="Button"
			style={{
				width,
				height,
				fontSize,
			}}
		>
			<div className="button-body">
				{
					icon && (
						icon
					)
				}
				<div>
					{children}
				</div>
			</div>
		</button>
	);
};

export default Button;
