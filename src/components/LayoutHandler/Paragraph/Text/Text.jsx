/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from "prop-types";

import "./Text.scss";

const Text = ({
	data,
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
			return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga alias obcaecati explicabo eos aut amet neque iure eligendi. Temporibus, expedita tempore. Laborum hic voluptates esse odio aliquid. Dicta, quidem perferendis. Hic, quae vero sequi deserunt enim iure ut dolore ab consequatur sint quidem tenetur dignissimos quos laudantium ea saepe quaerat aut reprehenderit debitis at officia. Fuga sequi harum eaque ex";
		}
		if (type === "h5") {
			return "Subtitulo";
		}
		return "TITULO";
	};

	const handlerSizeText = () => {
		if (type === "regular") {
			return "0.2em";
		}
		if (type === "h5") {
			return "0.3em";
		}
		if (type === "h4") {
			return "0.4em";
		}
		if (type === "h3") {
			return "0.5em";
		}
		if (type === "h2") {
			return "0.6em";
		}
		if (type === "h1") {
			return "0.7em";
		}
	};

	const handleShowText = () => {
		if (!data || (data === "") || isThumbNail) {
			handleDefaultText();
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
			className={`Text ${isInPaginator && "isInPaginator"}`}
			style={{
				width,
				height,
				fontSize : `${handlerSizeText()} !important`,
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
	type          : PropTypes.string.isRequired,
	isThumbNail   : PropTypes.bool,
	isInPaginator : PropTypes.bool,
	data          : PropTypes.string.isRequired,
	width         : PropTypes.string || PropTypes.number,
	height        : PropTypes.string || PropTypes.number,
};

export default Text;
