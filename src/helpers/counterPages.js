const counterSheets = (pages) => {
	let counter = 0;

	for (let i = 0; i < pages.length; i++) {
		counter++;
		if (pages[i]?.sheet2) {
			counter++;
		}
	}

	return counter;
};

export default counterSheets;
