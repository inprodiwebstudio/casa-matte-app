import { useState }           from "react";
import Select, { components } from "react-select";

//Own components
import SelectStyles from "./SelectStyles";
import { ArrowTop } from "Resources/icons";
import "./SelectorMenuItem.scss";

const SelectorMenuItem = ({type, placeholder, leftIcon, isLoading, options, onChange, value, dropTopMenu}) => {
	const [ hoverDisplay, setHoverDisplay ] = useState(false);

	const DropdownIndicator = (props) => {
		return (
			<components.DropdownIndicator {...props}>
				<ArrowTop size="10px" style={{transform : "rotate(180deg)"}} />
			</components.DropdownIndicator>
		);
	};

	const handleChange = (value) => {
		setHoverDisplay(false);
		onChange(value);
	};
	return (
		<div
			className={`SelectorMenuItem ${(type === "filled") && "isFilled"} ${((type === "light") && hoverDisplay) && "isHover"}`}
			onMouseOver={() => setHoverDisplay(true)}
			onMouseLeave={() => setHoverDisplay(false)}
		>
			{
				leftIcon && (
					<div className="icon-selector-container">
						{leftIcon}
					</div>
				)
			}
			<Select
				isDisabled={isLoading}
				options={options}
				placeholder={placeholder ? placeholder : "Defaul"}
				onChange={(value) => handleChange(value)}
				styles={SelectStyles({type, leftIcon, dropTopMenu, isLoading})}
				menuPortalTarget={document.body}
				components={{ DropdownIndicator }}
				value={value}
				noOptionsMessage={() => "No hay resultados"}
				menuPlacement={dropTopMenu && "top"}
			/>
			{
				((type !== "light") && (type !== "filled")) && (
					<div className={`lineStyle ${hoverDisplay && "fulWidth"}`}>&nbsp;</div>
				)
			}
		</div>
	);
};

export default SelectorMenuItem;
