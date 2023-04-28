//Own components
import "./PasswordInput.scss";

const PasswordInput = ({variant, label, error, register, isLoading, isDisabled, ...rest}) => {
	return (
		<div className={`PasswordInputContainer ${error && "error"}`}>
			{
				label && (
					<label>{label}</label>
				)
			}
			<input
				className={`PasswordInput ${variant ?? ""} ${isLoading || isDisabled && "disabledStyle"}`}
				type="password"
				{...(
					(isLoading || isDisabled) && {disabled : true})
				}
				{...register}
				{...rest}
			/>
		</div>
	);
};

export default PasswordInput;
