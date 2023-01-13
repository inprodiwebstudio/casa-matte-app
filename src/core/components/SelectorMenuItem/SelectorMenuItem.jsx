import { useState }           from "react";
import Select, { components } from "react-select";

//Own components
import SelectStyles from "./SelectStyles";
import { ArrowTop } from "Resources/icons";
import "./SelectorMenuItem.scss";

const SelectorMenuItem = ({type, placeholder, leftIcon, isLoading}) => {
	const [ hoverDisplay, setHoverDisplay ] = useState(false);
	const fakeOptions = [
		{ value : "1 FOTO", label : "1 FOTO" },
		{ value : "2 FOTOS", label : "2 FOTOS" },
		{ value : "3 FOTOS", label : "3 FOTOS" },
	];

	const DropdownIndicator = (props) => {
		return (
			<components.DropdownIndicator {...props}>
				<ArrowTop size="10px" style={{transform : "rotate(180deg)"}} />
			</components.DropdownIndicator>
		);
	};

	const handleChange = () => {
		setHoverDisplay(false);
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
				options={fakeOptions}
				placeholder={placeholder ? placeholder : "Defaul"}
				onChange={handleChange}
				styles={SelectStyles({type, leftIcon})}
				menuPortalTarget={document.body}
				components={{ DropdownIndicator }}
				noOptionsMessage={() => "No hay resultados"}
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
