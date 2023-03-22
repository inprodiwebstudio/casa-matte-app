//Own components
import "./PasswordInput.scss";

const PasswordInput = ({variant, label, error, register, ...rest}) => {
	return (
		<div className={`PasswordInputContainer ${error && "error"}`}>
			{
				label && (
					<label>{label}</label>
				)
			}
			<input
				className={`PasswordInput ${variant ?? ""}`}
				type="password"
				{...register}
				{...rest}
			/>
		</div>
	);
};

export default PasswordInput;
