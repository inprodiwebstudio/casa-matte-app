/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from "prop-types";

const Paragraph = ({
	pt=0,
	pb=0,
	pl=0,
	pr=0,
	p=0,
	gap=0,
	width="100%",
	height="100%",
	direction="column",
	children,
}) => {
	return (
		<div
			style={{
				display       : "flex",
				flexDirection : direction ?? "column",
				padding       : p,
				paddingTop    : pt,
				paddingBottom : pb,
				paddingLeft   : pl,
				paddingRight  : pr,
				gap,
				width,
				height,
			}}
		>
			{children}
		</div>
	);
};

Paragraph.propTypes = {
	pt        : PropTypes.string || PropTypes.number,
	pb        : PropTypes.string || PropTypes.number,
	pl        : PropTypes.string || PropTypes.number,
	pr        : PropTypes.string || PropTypes.number,
	p         : PropTypes.string || PropTypes.number,
	gap       : PropTypes.string || PropTypes.number,
	direction : PropTypes.string,
};

export default Paragraph;
