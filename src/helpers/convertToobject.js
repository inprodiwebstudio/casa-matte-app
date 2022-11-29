const convertToObject = (array) => {
	const newObjectData = array.reduce((a, value) => ({ ...a, [value.id] : value}), {});
	return newObjectData;
};

export default convertToObject;
