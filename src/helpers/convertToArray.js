const convertToArray = (object) => {
	try {
		const myNewListData = Object.values(object);
		return myNewListData;
	} catch (error) {
		console.error(error);
	}
};


export default convertToArray;
