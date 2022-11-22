import React from "react";

//Own components
import "./Button.scss";

const Button = ({
	icon,
	type,
	width,
	height,
	fullSize,
	fontSize,
	children,
	...rest
}) => {
	return (
		<button
			className={
				`Button
				${type && type}
				${fullSize && "fullSize"}
				`
			}
			style={{
				width,
				height,
				fontSize,
			}}
			{...rest}
		>
			<div className="button-body">
				{
					icon && (
						icon
					)
				}
				<p>
					{children}
				</p>
			</div>
		</button>
	);
};

export default Button;
