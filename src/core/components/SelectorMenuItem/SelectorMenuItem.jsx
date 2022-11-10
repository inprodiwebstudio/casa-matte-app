import React  from "react";
import Select from "react-select";

//Own components
import SelectStyles from "./SelectStyles";

const SelectorMenuItem = () => {
	const fakeOptions = [
		{ value : "chocolate", label : "Chocolate" },
		{ value : "strawberry", label : "Strawberry" },
		{ value : "vanilla", label : "Vanilla" },
	];
	return (
		<div>
			<Select
				options={fakeOptions}
				placeholder="Default..."
				styles={SelectStyles()}
				menuPortalTarget={document.body}
			/>
		</div>
	);
};

export default SelectorMenuItem;
