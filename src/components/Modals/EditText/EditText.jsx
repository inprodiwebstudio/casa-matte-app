import { Editor }  from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

import { EditorState, convertToRaw, ContentState } from "draft-js";
import { useState, useEffect }                     from "react";
import { closeAllModals }                          from "@mantine/modals";
import { workSpaceSlice }                          from "store/Slices";
import { connect }                                 from "react-redux";


import { Button }  from "core/components";
import { Check }   from "Resources/icons";
import { bindAll } from "helpers";
import "./EditText.scss";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditText = ({innerProps, workSpaceSlice}) => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());

	const { pageId, sheetNo, dataTextPage } = innerProps;

	const onEditorStateChange = function(editorState) {
		setEditorState(editorState);
	};

	const handleAddText = () => {
		const text = draftToHtml(convertToRaw(editorState.getCurrentContent()));
		workSpaceSlice.addText({pageId, sheetNo, text});
		closeAllModals();
	};

	useEffect(() => {
		if (dataTextPage && dataTextPage !== "") {
			const contentBlock = htmlToDraft(dataTextPage);
			const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
			const editorState = EditorState.createWithContent(contentState);
			setEditorState(editorState);
		}
	}, [dataTextPage]);

	return (
		<div className="EditText">
			<Editor
				editorState={editorState}
				toolbarClassName="toolbarClassName"
				wrapperClassName="wrapperClassName"
				editorClassName="editorClassName"
				onEditorStateChange={onEditorStateChange}
				toolbar={{
					options : ["fontFamily", "fontSize", "colorPicker", "inline", "textAlign", "history"],
					inline  : {
						options : ["bold"],
						bold    : {
							className : "inline-styled",
						},
					},
					fontFamily : {
						options           : ["Helvetica", "Georgia", "Tahoma", "BlakaHollow-Regular"],
						className         : "font-family-input",
						component         : undefined,
						dropdownClassName : "font-family-dropDown",
					},
					fontSize : {
						className         : "font-size-selector",
						dropdownClassName : "font-size-dropdown",
					},
					colorPicker : {
						className      : "color-picker-editor",
						popupClassName : "popup-styled-picker",
					},
					textAlign : {
						left    : { className : "text-aling-styled" },
						center  : { className : "text-aling-styled" },
						right   : { className : "text-aling-styled" },
						justify : { className : "text-aling-styled" },
					},
					history : {
						className : "history-styled",
						undo      : { className : "history-undo" },
						redo      : { className : "history-redo" },
					},
				}}
			/>
			<div className="button-container">
				<Button
					icon={<Check size="15px" />}
					fontSize="16px"
					type="subtle"
					width={117}
					height={39}
					onClick={() => handleAddText()}
				>
					Terminar
				</Button>
			</div>
		</div>
	);
};

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

export default connect(null, mapDispatchToProps) (EditText);
