//Own components
import "./CheckBox.scss";

const CheckBox = ({label, isActive, onChange, isLoading}) => {
	return (
		<div
			className={`CheckBox ${isLoading && "is-loading"}`}
			{...(!isLoading && {
				onClick : () => onChange(),
			})}
		>
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
