//Own components
import "./LargeFormat.scss";

const LargeFormat = () => {
	return (
		<div className="LargeFormat">
			<div className="page-body">
				<div
					style={{
						width      : "calc(200% + 2px)",
						height     : "100%",
						background : "red",
					}}
				/>
			</div>
			<div className="spacer" />
			<div className="page-body" />
		</div>
	);
};

export default LargeFormat;
