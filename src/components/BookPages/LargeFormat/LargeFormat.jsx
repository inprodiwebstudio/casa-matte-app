//Own components
import "./LargeFormat.scss";

const LargeFormat = () => {
	return (
		<div className="LargeFormat">
			<div className="page-body">
				<div style={{
					width  : "calc(200% + 4px)",
					height : "100%",
				}} />
			</div>
			<div className="page-body"></div>
		</div>
	);
};

export default LargeFormat;
