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
		<div
			style={{
				borderBottom : "solid 1px #E3E3E3",
			}}
		>
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
