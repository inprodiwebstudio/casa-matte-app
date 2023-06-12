/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from "prop-types";

const LayoutConstructor = ({
	orientation="v",
	width="100%",
	height="100%",
	gap=" 0.05em",
	pt=0,
	pb=0,
	pl=0,
	pr=0,
	p=0,
	children,
}) => {
	const handlerFelxDirection = (orientation === "v") ? "column" : "row";
	return (
		<div
			style={{
				display       : "flex",
				flexDirection : handlerFelxDirection,
				padding       : p,
				paddingTop    : pt,
				paddingBottom : pb,
				paddingLeft   : pl,
				paddingRight  : pr,
				width,
				height,
				gap,
			}}
		>
			{children}
		</div>
	);
};

LayoutConstructor.propTypes = {
	orientation : PropTypes.string.isRequired,
	pt          : PropTypes.string || PropTypes.number,
	pb          : PropTypes.string || PropTypes.number,
	pl          : PropTypes.string || PropTypes.number,
	pr          : PropTypes.string || PropTypes.number,
	p           : PropTypes.string || PropTypes.number,
	width       : PropTypes.string || PropTypes.number,
	height      : PropTypes.string || PropTypes.number,
	gap         : PropTypes.string || PropTypes.number,
};

export default LayoutConstructor;
