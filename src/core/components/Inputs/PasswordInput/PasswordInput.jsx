//Own components
import "./PasswordInput.scss";

const PasswordInput = ({variant, label, error, ...rest}) => {
	return (
		<div className={`PasswordInputContainer ${error && "error"}`}>
			{
				label && (
					<label htmlFor="PasswordInput">{label}</label>
				)
			}
			<input
				name="PasswordInput"
				id="PasswordInput"
				className={`PasswordInput ${variant ?? ""}`}
				type="password"
				{...rest}
			/>
		</div>
	);
};

export default PasswordInput;
