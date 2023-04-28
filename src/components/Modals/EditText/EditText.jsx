/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import { CKEditor }  from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import Essentials    from "@ckeditor/ckeditor5-essentials/src/essentials";
import Bold          from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic        from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Paragraph     from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import FontFamily    from "@ckeditor/ckeditor5-font/src/fontfamily";
import FontColor     from "@ckeditor/ckeditor5-font/src/fontcolor";
import FontSize      from "@ckeditor/ckeditor5-font/src/fontsize";
import Alignment     from "@ckeditor/ckeditor5-alignment/src/alignment";
import "@ckeditor/ckeditor5-build-classic/build/translations/es";

// import { EditorState, convertToRaw, ContentState } from "draft-js";
import { useState, useEffect } from "react";
import { closeAllModals }      from "@mantine/modals";
import { workSpaceSlice }      from "store/Slices";
import { connect }             from "react-redux";


import { Button }  from "core/components";
import { Check }   from "Resources/icons";
import { bindAll } from "helpers";
import "./EditText.scss";

const EditText = ({innerProps, workSpaceSlice}) => {
	const [editorState, setEditorState] = useState(null);

	const { pageId, sheetNo, dataTextPage } = innerProps;

	const onEditorStateChange = function(editorState) {
		setEditorState(editorState);
	};

	const handleAddText = () => {
		const text = editorState;
		workSpaceSlice.addText({pageId, sheetNo, text});
		closeAllModals();
	};

	useEffect(() => {
		if (dataTextPage && dataTextPage !== "") {
			const contentBlock = dataTextPage;
			setEditorState(contentBlock);
		}
	}, [dataTextPage]);

	const editorConfiguration = {
		plugins   : [ Essentials, Bold, Alignment, Italic, Paragraph, FontFamily, FontSize, FontColor],
		alignment : {
			options : [ "left", "right", "center", "justify" ],
		},
		fontFamily : {
			options : [
				"default",
				"Arial, Helvetica, sans-serif",
				"Courier New, Courier, monospace",
				"Georgia, serif",
				"Lucida Sans Unicode, Lucida Grande, sans-serif",
				"Tahoma, Geneva, sans-serif",
				"Times New Roman, Times, serif",
				"Trebuchet MS, Helvetica, sans-serif",
				"Verdana, Geneva, sans-serif",
				"BlakaHollow-Regular",
				"Aitana-Regular",
			],
		},
		toolbar : [
			"fontfamily",
			"fontSize",
			 "|",
			"bold",
			"italic",
			"|",
			"fontColor",
			"|",
			"alignment:left",
			"alignment:right",
			"alignment:center",
			"alignment:justify",
			"|",
			"undo",
			"redo",
		],
		language : "es",
		tooltip  : {
			isRendered : false,
		},
		fontColor : {
			colors : [
				{
					color : "hsl(0, 0%, 0%)",
					label : "Black",
				},
				{
					color : "hsl(0, 0%, 30%)",
					label : "Dim grey",
				},
				{
					color : "hsl(0, 0%, 60%)",
					label : "Grey",
				},
				{
					color : "hsl(0, 0%, 90%)",
					label : "Light grey",
				},
				{
					color     : "hsl(0, 0%, 100%)",
					label     : "White",
					hasBorder : true,
				},
			],
		},
		fontSize : {
			options : [
				9,
				11,
				13,
				17,
				19,
				21,
			],
			supportAllValues : true,
		},
	};

	return (
		<div className="EditText">
			<CKEditor
				editor={ ClassicEditor }
				config={ editorConfiguration }
				data={editorState}
				onChange={ ( event, editor ) => {
					const data = editor.getData();
					onEditorStateChange( data );
				} }
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
