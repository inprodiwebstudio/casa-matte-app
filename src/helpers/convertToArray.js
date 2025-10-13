const convertToArray = (object) => {
	if (!object) {
		return [];
	}
	try {
		const myNewListData = Object.values(object);
		return myNewListData;
	} catch (error) {
		console.error(error);
		return [];
	}
};


export default convertToArray;
