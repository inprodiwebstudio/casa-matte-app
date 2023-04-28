import "./TextArea.scss";

const TextArea = ({...rest}) => {
	return (
		<textarea
			className="text-input-body"
			name="customTextArea"
			id="customTextArea"
			placeholder="Has click para escribir"
			{...rest}
		/>
	);
};

export default TextArea;
