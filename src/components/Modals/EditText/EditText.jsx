import { Editor }      from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { useState }    from "react";

import { Button } from "core/components";
import { Check }  from "Resources/icons";
import "./EditText.scss";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditText = () => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());

	const onEditorStateChange = function(editorState) {
		setEditorState(editorState);
	};

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
				>
					Terminar
				</Button>
			</div>
		</div>
	);
};

export default EditText;
