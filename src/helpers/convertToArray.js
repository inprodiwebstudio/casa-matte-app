const convertToArray = (object) => {
	try {
		const myNewListData = Object.values(object);
		return myNewListData;
	}
	catch (e) {
		return [];
	}
};


export default convertToArray;
