//Own components
import "./TextInput.scss";

const TextInput = ({variant, label, error, ...rest}) => {
	return (
		<div className={`TextInputContainer ${error && "error"}`}>
			{
				label && (
					<label htmlFor="TextInput">{label}</label>
				)
			}
			<input
				name="TextInput"
				id="TextInput"
				className={`TextInput ${variant ?? ""}`}
				type="text" {...rest}
			/>
		</div>
	);
};

export default TextInput;
