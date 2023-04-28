//Own components
import "./TextInput.scss";

const TextInput = ({variant, label, error, register, isLoading, isDisabled, ...rest}) => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<form onSubmit={(e) => handleSubmit(e)} className={`TextInputContainer ${error && "error"}`}>
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
		</form>
	);
};

export default TextInput;
