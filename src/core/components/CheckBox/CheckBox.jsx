//Own components
import "./CheckBox.scss";

const CheckBox = ({label, isActive, onChange}) => {
	return (
		<div className="CheckBox" onClick={() => onChange()}>
			<div className="check-box" id="checkBox">
				{
					isActive && <div className="filling" />
				}
			</div>
			<label htmlFor="checkBox" className="label-checkbox">{label}</label>
		</div>
	);
};

export default CheckBox;
