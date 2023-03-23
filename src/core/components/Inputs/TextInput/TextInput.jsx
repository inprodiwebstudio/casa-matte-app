//Own components
import "./TextInput.scss";

const TextInput = ({variant, label, error, register, isLoading, isDisabled, ...rest}) => {
	return (
		<div className={`TextInputContainer ${error && "error"}`}>
			{
				label && (
					<label>{label}</label>
				)
			}
			<input
				className={`TextInput ${variant ?? ""} ${isLoading || isDisabled && "disabledStyle"}`}
				type="text"
				{...(
					(isLoading || isDisabled) && {disabled : true})
				}
				{...register}
				{...rest}
			/>
		</div>
	);
};

export default TextInput;
