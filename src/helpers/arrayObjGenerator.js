const arrayObjGenerator = (quantityElements, obj) => {
	const array = [];
	for (let i = 0; i < quantityElements; i += 1) {
		array.push(obj);
	}
	const newTextObject = array.reduce((acc, item, index) => {
		acc[index] = item;
		return acc;
	}, {});
	return newTextObject;
};

export default arrayObjGenerator;
