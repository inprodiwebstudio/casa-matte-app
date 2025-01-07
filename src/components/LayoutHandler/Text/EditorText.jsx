/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import BalloonEditor from "@ckeditor/ckeditor5-editor-balloon/src/ballooneditor";
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
import { useCallback, useState } from "react";
// import { closeAllModals }      from "@mantine/modals";
import { workSpaceSlice } from "store/Slices";
import { connect }        from "react-redux";
import { useParams }      from "react-router";

import { bindAll } from "helpers";
import styles      from "./styles";

const EditText = ({
	isFront,
	sizes,
	sheetNo,
	layoutNo,
	dataTextPage,
	gapSpacing,
	lineHeight,
	letterSpacing,
	workSpaceSlice,
}) => {
	const { classes } = styles({size : sizes?.chico, gapSpacing, lineHeight, letterSpacing});

	const editorConfiguration = {
		plugins      : [ Essentials, Bold, Alignment, Italic, Paragraph, FontFamily, FontSize, FontColor],
		GroupHeading : false,
		alignment    : {
			options : [ "left", "right", "center", "justify" ],
		},
		fontFamily : {
			options : [
				"default",
				"HelveticaLight",
				"Aitana-Regular",
				"Cormorant-Light",
				"Cormorant-Medium",
				"GandhiSans-Regular",
				"GandhiSerif-Regular",
				"Inter-Lifght",
				"Inter-Regular",
				"JosefinSans-Light",
				"JosefinSans-Regular",
				"Made-Mirage-Regular",
				"Made-Mirage-Thin",
				"Restora-Extra-Light",
				"Spectral-Light-Italic",
				"Spectral-Medium-Italic",
				"TAN-MERINGUE",
			],
		},
		toolbar : {
			items : [
				"fontSize",
				"fontfamily",
				"italic",
				"fontColor",
				"paragraph",
				"alignment:left",
				"alignment:center",
				"alignment:right",
			],
			shouldNotGroupWhenFullScreen : true,
		},
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
				{ title : "Chico", model : sizes?.chico},
				{ title : "Regular", model : sizes?.regular},
				{ title : "Grande", model : sizes?.grande},
			],
			supportAllValues : true,
		},
		// initialData : "<p>Hello from CKEditor 5 in React!</p>",
	};

	const [editorState, setEditorState] = useState(dataTextPage);

	// console.log(dataTextPage);

	const { pageId } = useParams();

	const debounce = (func, delay) => {
		let timeout;
		return (...args) => {
			if (timeout) clearTimeout(timeout);
			timeout = setTimeout(() => {
				func(...args);
			}, delay);
		};
	};

	const handleEditorChange = useCallback(
		debounce((event, editor) => {
		  const data = editor.getData();
		  setEditorState(data);
		  if (!isFront) {
				return workSpaceSlice.addText({pageId, sheetNo, text : data, layoutNo});
		  }
		  workSpaceSlice.addTextFront({sheetNo, text : data, layoutNo});
		}, 3000),
		[]
	);

	return (
		<div
			className={classes.editText}
		>
			<CKEditor
				editor={ BalloonEditor }
				config={ editorConfiguration }
				data={editorState}
				onChange={(event, editor) => {
					handleEditorChange(event, editor);
				}}
				onFocus={ () => {
					console.log( "Focused!" );
				} }
			/>
		</div>
	);
};

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

export default connect(null, mapDispatchToProps) (EditText);
