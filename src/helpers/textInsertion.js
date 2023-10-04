const textInsertion = (textData, defaultText, isInWorkSpace) => {
	if (!isInWorkSpace || !textData || textData === "") {
		return defaultText;
	}
	return textData;
};

export default textInsertion;
