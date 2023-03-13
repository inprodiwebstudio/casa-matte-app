// import { Editor }  from "react-draft-wysiwyg";
// import draftToHtml from "draftjs-to-html";
// import htmlToDraft from "html-to-draftjs";
// import {CKEditor}    from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor }  from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import FontFamily    from "@ckeditor/ckeditor5-font/src/fontfamily";
// import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
// import Font          from "@ckeditor/ckeditor5-font/src/font";
// import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import "@ckeditor/ckeditor5-build-classic/build/translations/es";

// import { EditorState, convertToRaw, ContentState } from "draft-js";
// import { useState, useEffect }                     from "react";
// import { closeAllModals }                          from "@mantine/modals";
import { workSpaceSlice } from "store/Slices";
import { connect }        from "react-redux";


import { Button }  from "core/components";
import { Check }   from "Resources/icons";
import { bindAll } from "helpers";
import "./EditText.scss";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditText = () => {
	// const handleEditorChange = (event, editor) => {
	// 	const data = editor.getData();
	// 	console.log(data);
	// };
	// const [editorState, setEditorState] = useState(EditorState.createEmpty());

	// const { pageId, sheetNo, dataTextPage } = innerProps;

	// const onEditorStateChange = function(editorState) {
	// 	setEditorState(editorState);
	// };

	// const handleAddText = () => {
	// 	const text = draftToHtml(convertToRaw(editorState.getCurrentContent()));
	// 	workSpaceSlice.addText({pageId, sheetNo, text});
	// 	closeAllModals();
	// };

	// useEffect(() => {
	// 	if (dataTextPage && dataTextPage !== "") {
	// 		const contentBlock = htmlToDraft(dataTextPage);
	// 		const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
	// 		const editorState = EditorState.createWithContent(contentState);
	// 		setEditorState(editorState);
	// 	}
	// }, [dataTextPage]);

	return (
		<div className="EditText">
			<CKEditor
				editor={ ClassicEditor }
				data="<p>Hello from CKEditor 5!</p>"
				// onReady={(editor) => {
				// 	// Add the font family plugin to the editor
				// 	editor.plugins.get("FontFamily").options.options = [
				// 	  "default",
				// 	  "Arial, sans-serif",
				// 	  "Courier New, Courier, monospace",
				// 	  "Georgia, serif",
				// 	  "Lucida Sans Unicode, Lucida Grande, sans-serif",
				// 	  "Tahoma, Geneva, sans-serif",
				// 	  "Times New Roman, Times, serif",
				// 	  "Trebuchet MS, Helvetica, sans-serif",
				// 	  "Verdana, Geneva, sans-serif",
				// 	];
				// }}
				config={ {
					language : "es",
					plugins  : [FontFamily],
					toolbar  : ["fontfamily"],
					// fontFamily : {
					// 	options : [
					// 	  "default",
					// 	  "Ubuntu, Arial, sans-serif",
					// 	  "Courier New, Courier, monospace",
					// 	  "Georgia, serif",
					// 	  "Lucida Sans Unicode, Lucida Grande, sans-serif",
					// 	  "Tahoma, Geneva, sans-serif",
					// 	  "Verdana, Geneva, sans-serif",
					// 	],
					// },
				} }
				onReady={ editor => {
					// You can store the "editor" and use when it is needed.
					console.log( "Editor is ready to use!", editor );
				} }
				onChange={ ( event, editor ) => {
					const data = editor.getData();
					console.log( { event, editor, data } );
				} }
				onBlur={ ( event, editor ) => {
					console.log( "Blur.", editor );
				} }
				onFocus={ ( event, editor ) => {
					console.log( "Focus.", editor );
				} }
			/>
			{/* <Editor
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
			/> */}
			<div className="button-container">
				<Button
					icon={<Check size="15px" />}
					fontSize="16px"
					type="subtle"
					width={117}
					height={39}
					onClick={() =>console.log("Se termino el texto")}
				>
					Terminar
				</Button>
			</div>
		</div>
	);
};

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

export default connect(null, mapDispatchToProps) (EditText);
