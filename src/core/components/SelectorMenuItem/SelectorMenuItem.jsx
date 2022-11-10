import { useState } from "react";
import Select       from "react-select";

//Own components
import SelectStyles from "./SelectStyles";
import "./SelectorMenuItem.scss";

const SelectorMenuItem = () => {
	const [ hoverDisplay, setHoverDisplay ] = useState(false);
	const fakeOptions = [
		{ value : "chocolate", label : "Chocolate" },
		{ value : "strawberry", label : "Strawberry" },
		{ value : "vanilla", label : "Vanilla" },
	];
	return (
		<div
			className="SelectorMenuItem"
			onMouseOver={() => setHoverDisplay(true)}
			onMouseLeave={() => setHoverDisplay(false)}
		>
			<Select
				options={fakeOptions}
				placeholder="Default..."
				styles={SelectStyles()}
				menuPortalTarget={document.body}
			/>
			<div className={`lineStyle ${hoverDisplay && "fulWidth"}`}>&nbsp;</div>
		</div>
	);
};

export default SelectorMenuItem;
