import React  from "react";
import Select from "react-select";

const SelectorMenuItem = () => {
	const fakeOptions = [
		{ value : "chocolate", label : "Chocolate" },
		{ value : "strawberry", label : "Strawberry" },
		{ value : "vanilla", label : "Vanilla" },
	];
	return (
		<div>
			<Select options={fakeOptions} />
		</div>
	);
};

export default SelectorMenuItem;
