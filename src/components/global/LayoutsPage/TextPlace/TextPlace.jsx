import { openContextModal } from "@mantine/modals";

//Own components
import "./TextPlace.scss";


const TextPlace = ({pageId, sheetNo, dataPages}) => {
	const dataTextPage = dataPages?.[pageId]?.[sheetNo]?.["text"] ?? "";
	const handleClick = (e) => {
		e.stopPropagation();
	};

	const activeEditText = (e) => {
		e.stopPropagation();
		openContextModal({
			modal      : "editText",
			size       : "50vw",
			innerProps : {
				pageId,
				sheetNo,
				dataTextPage,
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
			{
				(dataPages?.[pageId]?.[sheetNo]?.["text"] !== "") && (
					<div dangerouslySetInnerHTML={{__html : dataTextPage}} />
				)
			}
		</div>
	);
};

export default TextPlace;
