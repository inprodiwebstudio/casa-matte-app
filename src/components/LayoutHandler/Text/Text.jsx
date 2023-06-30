/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from "prop-types";

import "./Text.scss";

const Text = ({
	data,
	align="center",
	type="regular",
	isThumbNail,
	isInPaginator,
	width="100%",
	height="100%",
}) => {
	const handleDefaultText = () => {
		if (!isThumbNail && (type === "regular")) {
			return "Doble click para redactar...";
		}
		if ((type === "regular") && isThumbNail) {
			return data;
		}
		if (type === "h5") {
			return "SUBTÍTULO";
		}
		return "TÍTULO";
	};

	const handlerSizeText = () => {
		if (type === "regular") {
			return "0.085em";
		}
		if (type === "h5") {
			return "0.1em";
		}
		if (type === "h4") {
			return "0.12em";
		}
		if (type === "h3") {
			return "0.18em";
		}
		if (type === "h2") {
			return "0.2em";
		}
		if (type === "h1") {
			return "0.24em";
		}
	};

	const handleShowText = () => {
		if (!data || (data === "")) {
			return handleDefaultText();
		} else {
			return <div dangerouslySetInnerHTML={{__html : data}} />;
		}
	};

	const handleClick = (e) => {
		e.stopPropagation();
	};

	const activeEditText = (e) => {
		e.stopPropagation();
		console.log("To edit text");
	};

	return (
		<div
			tabIndex={1}
			className="Text"
			style={{
				width,
				height,
				textAlign     : align,
				letterSpacing : "0px",
				lineHeight    : "1.2em",
				fontSize      : handlerSizeText(),
			}}
			{...((!isInPaginator && !isThumbNail) && {
				onClick      : (e) => handleClick(e),
				onDoubleClic : (e) => activeEditText(e),
			})}
		>
			{
				handleShowText()
			}
		</div>
	);
};

Text.propTypes = {
	align         : PropTypes.string,
	type          : PropTypes.string.isRequired,
	isThumbNail   : PropTypes.bool,
	isInPaginator : PropTypes.bool,
	data          : PropTypes.string.isRequired,
	width         : PropTypes.string || PropTypes.number,
	height        : PropTypes.string || PropTypes.number,
};

export default Text;
