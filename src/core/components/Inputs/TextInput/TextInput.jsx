//Own components
import "./TextInput.scss";

const TextInput = ({...props}) => {
	return (
		<input className="TextInput" type="text" {...props} />
	);
};

export default TextInput;
