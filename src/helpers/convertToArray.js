const convertToArray = (object) => {
	try {
		const myNewListData = Object.values(object);
		return myNewListData;
	} catch (error) {
		console.log(error);
	}
};


export default convertToArray;
