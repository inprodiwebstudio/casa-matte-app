import { openContextModal } from "@mantine/modals";

//Own components
import "./TextPlace.scss";


const TextPlace = ({pageId, sheetNo, dataPages}) => {
	const handleClick = (e) => {
		e.stopPropagation();
	};
	const ConvertStringToHTML = (str) => {
		const parser = new DOMParser();
		const doc = parser.parseFromString(str, "text/html");
		return doc.body;
	 };

	const activeEditText = (e) => {
		e.stopPropagation();
		openContextModal({
			modal      : "editText",
			size       : "50vw",
			innerProps : {
				pageId,
				sheetNo,
			},
		});
	};

	return (
		<div
			tabIndex={1}
			onDoubleClick={(e) => activeEditText(e)}
			className="text-place"
			onClick={(e) => handleClick(e)}
		>
			{(dataPages?.[pageId]?.[sheetNo]?.["text"] !== "") && ConvertStringToHTML(dataPages?.[pageId]?.[sheetNo]?.["text"])}
		</div>
	);
};

export default TextPlace;
