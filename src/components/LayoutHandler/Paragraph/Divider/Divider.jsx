/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from "prop-types";

const Divider = ({
	width="100%",
	height="0.3em",
	mt="0px",
	mb="0px",
	color="#000000",
}) => {
	return (
		<div
			style={{
				color,
				width,
				height,
				marginBottom : mb,
				marginTop    : mt,
			}}
		>
            &nbsp;
		</div>
	);
};

Divider.propTypes = {
	width  : PropTypes.string || PropTypes.number,
	height : PropTypes.string || PropTypes.number,
	mt     : PropTypes.string || PropTypes.number,
	mb     : PropTypes.string || PropTypes.number,
	color  : PropTypes.string,
};

export default Divider;
