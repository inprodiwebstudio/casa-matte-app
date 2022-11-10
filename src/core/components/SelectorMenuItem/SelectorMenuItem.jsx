import { useState }           from "react";
import Select, { components } from "react-select";

//Own components
import SelectStyles from "./SelectStyles";
import { ArrowTop } from "Resources/icons";
import "./SelectorMenuItem.scss";

const SelectorMenuItem = () => {
	const [ hoverDisplay, setHoverDisplay ] = useState(false);
	const fakeOptions = [
		{ value : "chocolate", label : "Chocolate" },
		{ value : "strawberry", label : "Strawberry" },
		{ value : "vanilla", label : "Vanilla" },
	];

	const DropdownIndicator = (props) => {
		return (
			<components.DropdownIndicator {...props}>
				<ArrowTop size="10px" style={{transform : "rotate(180deg)"}} />
			</components.DropdownIndicator>
		);
	};
	return (
		<div
			className="SelectorMenuItem"
			onMouseOver={() => setHoverDisplay(true)}
			onMouseLeave={() => setHoverDisplay(false)}
		>
			<Select
				options={fakeOptions}
				placeholder="Default"
				styles={SelectStyles()}
				menuPortalTarget={document.body}
				components={{ DropdownIndicator }}
			/>
			<div className={`lineStyle ${hoverDisplay && "fulWidth"}`}>&nbsp;</div>
		</div>
	);
};

export default SelectorMenuItem;
