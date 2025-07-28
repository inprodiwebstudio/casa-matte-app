/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from "prop-types";
//Styles
import "./DividerLayout.scss";

const DividerLayout = ({
	position="h",
	long="100%",
	weight="0.01em",
}) => {
	const handlerPosition = () => {
		if (position === "h") {
			return {
				width  : long,
				height : weight,
			};
		}
		if (position === "v") {
			return {
				width  : weight,
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
