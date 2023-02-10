//Own components
import "./TextInput.scss";

const TextInput = ({variant, ...rest}) => {
	return (
		<input className={`TextInput ${(variant === "invisible") && "invisible"}`} type="text" {...rest} />
	);
};

export default TextInput;
