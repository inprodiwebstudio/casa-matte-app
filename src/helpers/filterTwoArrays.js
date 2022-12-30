const filterTwoArrays = (listToFilter, listToLeave) => {
	const newList = listToFilter.filter(element => !listToLeave.includes(element));
	return newList;
};

export default filterTwoArrays;
