const arrayToObj = (array) => {
	const objArray = array.reduce((acc, item, index) => {
		acc[index] = item;
		return acc;
	}, {});
	return objArray;
};

export default arrayToObj;
