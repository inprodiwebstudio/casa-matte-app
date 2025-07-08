/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import BalloonEditor from "@ckeditor/ckeditor5-editor-balloon/src/ballooneditor";
import Essentials    from "@ckeditor/ckeditor5-essentials/src/essentials";
import Bold          from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Paragraph     from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import FontFamily    from "@ckeditor/ckeditor5-font/src/fontfamily";
import FontColor     from "@ckeditor/ckeditor5-font/src/fontcolor";
import FontSize      from "@ckeditor/ckeditor5-font/src/fontsize";
import Alignment     from "@ckeditor/ckeditor5-alignment/src/alignment";
import "@ckeditor/ckeditor5-build-classic/build/translations/es";

// import { EditorState, convertToRaw, ContentState } from "draft-js";
import { useCallback, useRef, useState } from "react";
// import { closeAllModals }      from "@mantine/modals";
import { workSpaceSlice }                     from "store/Slices";
import { connect, useSelector, shallowEqual } from "react-redux";

import { bindAll } from "helpers";
import styles      from "./styles";

const EditText = ({
	isFront,
	isBound,
	sizes,
	sheetNo,
	layoutNo,
	dataTextPage,
	gapSpacing,
	lineHeight,
	letterSpacing,
	workSpaceSlice,
}) => {
	const [currentFontSize, setCurrentFontSize] = useState(undefined);

	const currentPageId = useSelector((state) => state.workSpaceSlice.data?.currentPage, shallowEqual);
	const { classes } = styles({size : currentFontSize, gapSpacing, lineHeight, letterSpacing});

	const editorRef = useRef();

	const editorConfiguration = {
		plugins      : [Essentials, Bold, Alignment, Paragraph, FontFamily, FontSize, FontColor],
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
				"fontColor",
				"paragraph",
				"italic",
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
				{title : "15pt", model : "15px"},
				{title : "16pt", model : "16px"},
				{title : "17pt", model : "17px"},
				{title : "18pt", model : "18px"},
				{title : "19pt", model : "19px"},
				{title : "20pt", model : "20px"},
				{title : "21pt", model : "21px"},
				{title : "22pt", model : "22px"},
				{title : "23pt", model : "23px"},
				{title : "24pt", model : "24px"},
				{title : "25pt", model : "25px"},
				{title : "26pt", model : "26px"},
				{title : "27pt", model : "27px"},
				{title : "28pt", model : "28px"},
				{title : "29pt", model : "29px"},
				{title : "30pt", model : "30px"},
				{title : "31pt", model : "31px"},
				{title : "32pt", model : "32px"},
				{title : "33pt", model : "33px"},
				{title : "34pt", model : "34px"},
				{title : "35pt", model : "35px"},
				{title : "36pt", model : "36px"},
				{title : "37pt", model : "37px"},
				{title : "38pt", model : "38px"},
				{title : "39pt", model : "39px"},
				{title : "40pt", model : "40px"},
			],
			supportAllValues : true,
		},
		// initialData : "<p>Hello from CKEditor 5 in React!</p>",
	};

	const [editorState, setEditorState] = useState(dataTextPage);

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
		  if (isBound) {
				workSpaceSlice.addTextBound({text : data});
				return;
		  }
		  if (!isFront) {
				workSpaceSlice.addText({pageId : currentPageId, sheetNo, text : data, layoutNo});
				return;
		  }
		  workSpaceSlice.addTextFront({sheetNo, text : data, layoutNo});
		}, 3000),
		[]
	);

	const getCurrentFontSize = (editor) => {
		editorRef.current = editor;

		const handlerSetcurrentFontSize = () => {
			const selection = editor.model.document.selection;
			const fontSize = selection.getAttribute("fontSize");

			if (fontSize) {
				setCurrentFontSize(fontSize);
			}
		};

		handlerSetcurrentFontSize();

		editor.model.document.on("change:data", () => {
			handlerSetcurrentFontSize();
		});
	};

	return (
		<div
			className={classes.editText}
		>
			<CKEditor
				editor={ BalloonEditor }
				config={ editorConfiguration }
				data={editorState}
				onReady={getCurrentFontSize}
				onChange={(event, editor) => {
					handleEditorChange(event, editor);
				}}
			/>
		</div>
	);
};

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

export default connect(null, mapDispatchToProps) (EditText);
