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
	isLoading,
	typeButton,
	...rest
}) => {
	return (
		<button
			className={
				`Button
				${type && type}
				${fullSize && "fullSize"}
				${isLoading && "is-loading"}
				`
			}
			style={{
				width,
				height,
				fontSize,
			}}
			{...(typeButton && {
				type : typeButton,
			})}
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
