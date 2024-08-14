/* eslint-disable import/no-extraneous-dependencies */
import PropTypes     from "prop-types";
import { useParams } from "react-router-dom";

import { openContextModal } from "@mantine/modals";

import EditorText from "./EditorText";

import "./Text.scss";

const Text = ({
	data,
	sheetNo,
	textNo,
	align="center",
	type="regular",
	isThumbNail,
	isInPaginator,
}) => {
	const isNullableAction = isThumbNail || isInPaginator;

	const { pageId } = useParams();

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
		if (type === "LargeTitle") {
			return "0.35em";
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
		openContextModal({
			modal      : "editText",
			innerProps : {
				pageId,
				sheetNo,
				dataTextPage : data,
				layoutNo     : textNo,
			},
		});
	};

	return (
		<div
			tabIndex={1}
			className={!isNullableAction ? "Text isInWorkSpace" : "Text"}
			style={{
				textAlign     : align,
				letterSpacing : "0px",
				height        : "100%",
				fontSize      : handlerSizeText(),
			}}
			// onDoubleClick={(e) => activeEditText(e)}
			{...(!isNullableAction && {
				onClick       : (e) => handleClick(e),
				onDoubleClick : (e) => activeEditText(e),
			})}
		>
			{
				(isInPaginator || isThumbNail) &&
				handleShowText()
			}
			{
				(!isInPaginator && !isThumbNail) && (
					<EditorText sheetNo={sheetNo} layoutNo={textNo} dataTextPage={data} />
				)
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
