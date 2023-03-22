//Own components
import "./TextInput.scss";

const TextInput = ({variant, label, error, register, ...rest}) => {
	return (
		<div className={`TextInputContainer ${error && "error"}`}>
			{
				label && (
					<label>{label}</label>
				)
			}
			<input
				className={`TextInput ${variant ?? ""}`}
				type="text"
				{...register}
				{...rest}
			/>
		</div>
	);
};

export default TextInput;
