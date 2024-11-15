/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from "prop-types";
//Styles
import "./DividerLayout.scss";

const DividerLayout = ({
	position="h",
	long="100%",
}) => {
	const handlerPosition = () => {
		if (position === "h") {
			return {
				width  : long,
				height : "0.01em",
			};
		}
		if (position === "v") {
			return {
				width  : "0.01em",
				height : long,
			};
		}
	};
	return (
		<div
			style={{
				...handlerPosition(),
			}}
			className="DividerLayout"
		>
			&nbsp;
		</div>
	);
};

DividerLayout.propTypes = {
	position : PropTypes.string,
	long     : PropTypes.string || PropTypes.number,
};

export default DividerLayout;
