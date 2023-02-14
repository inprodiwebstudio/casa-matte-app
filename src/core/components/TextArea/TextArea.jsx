import "./TextArea.scss";

const TextArea = () => {
	const stopPropagation = (e) => {
		e.stopPropagation();
	};
	return (
		<textarea
			onClick={(e) => stopPropagation(e)}
			className="text-input-body"
			name="customTextArea"
			id="customTextArea"
			placeholder="Has click para escribir"
		/>
	);
};

export default TextArea;
