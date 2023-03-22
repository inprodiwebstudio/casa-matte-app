//Own components
import "./PasswordInput.scss";

const PasswordInput = ({variant, label, ...rest}) => {
	return (
		<div className="PasswordInputContainer">
			{
				label && (
					<label htmlFor="PasswordInput">{label}</label>
				)
			}
			<input name="PasswordInput" id="PasswordInput" className={`PasswordInput ${variant ?? ""}`} type="password" {...rest} />
		</div>
	);
};

export default PasswordInput;
