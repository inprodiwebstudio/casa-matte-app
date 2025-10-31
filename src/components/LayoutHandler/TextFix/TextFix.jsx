/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from "prop-types";

import EditorText from "./EditorText";

import "./Text.scss";

const TextFix = ({
	isBound,
	isFront,
	data,
	sizes,
	textNo,
	sheetNo,
	textShell,
	gapSpacing,
	lineHeight,
	letterSpacing,
	align="center",
	isThumbNail,
	isInPaginator,
}) => {
	const isNullableAction = isThumbNail || isInPaginator;

	// const handleShowText = () => {
	// 	if (!data || (data === "")) {
	// 		return;
	// 	} else {
	// 		return <div dangerouslySetInnerHTML={{__html : data}} />;
	// 	}
	// };

	const handleClick = (e) => {
		e.stopPropagation();
	};

	return (
		<div
			tabIndex={1}
			className={!isNullableAction ? "Text isInWorkSpace" : "Text"}
			style={{
				textAlign     : align,
				letterSpacing : "0px",
				height        : "100%",
				width         : "100%",
				// fontSize      : "38px",
			}}
			{...(!isNullableAction && {
				onClick : (e) => handleClick(e),
			})}
		>
			{
				((isInPaginator || isThumbNail) && textShell) &&
				textShell()
			}
			{
				(!isInPaginator && !isThumbNail) && (
					<EditorText
						isFront={isFront}
						isBound={isBound}
						lineHeight={lineHeight}
						letterSpacing={letterSpacing}
						sheetNo={sheetNo}
						layoutNo={textNo}
						dataTextPage={data}
						sizes={sizes}
						gapSpacing={gapSpacing}
					/>
				)
			}
		</div>
	);
};

Text.propTypes = {
	align         : PropTypes.string,
	isThumbNail   : PropTypes.bool,
	isInPaginator : PropTypes.bool,
	data          : PropTypes.string.isRequired,
	width         : PropTypes.string || PropTypes.number,
	height        : PropTypes.string || PropTypes.number,
};

export default TextFix;
