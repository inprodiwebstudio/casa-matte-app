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
import { useState } from "react";
// import { closeAllModals }      from "@mantine/modals";
import { workSpaceSlice } from "store/Slices";
import { connect }        from "react-redux";
import { useParams }      from "react-router";


// import { Button }  from "core/components";
// import { Check }   from "Resources/icons";
import { bindAll } from "helpers";
import "./EditText.scss";

const EditText = ({workSpaceSlice, sheetNo, layoutNo, dataTextPage}) => {
	const [editorState, setEditorState] = useState(dataTextPage);

	const { pageId } = useParams();

	// const { pageId, sheetNo, layoutNo } = innerProps;

	const onEditorStateChange = function(editorState) {
		setEditorState(editorState);
		setTimeout(() => {
			workSpaceSlice.addText({pageId, sheetNo, text : editorState, layoutNo});
		}, 2000);
	};

	const editorConfiguration = {
		plugins      : [ Essentials, Bold, Alignment, Italic, Paragraph, FontFamily, FontSize, FontColor],
		GroupHeading : false,
		alignment    : {
			options : [ "left", "right", "center", "justify" ],
		},
		fontFamily : {
			options : [
				"default",
				"Helvetica",
				"Arial, Helvetica, sans-serif",
				"Georgia, serif",
				"Tahoma, Geneva, sans-serif",
				"Verdana, Geneva, sans-serif",
				"BlakaHollow-Regular",
				"Aitana-Regular",
			],
		},
		toolbar : {
			items : [
				"fontSize",
				"fontfamily",
				"bold",
				"italic",
				"fontColor",
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

	// useEffect(() => {
	// 	if (dataTextPage && dataTextPage !== "") {
	// 		const contentBlock = dataTextPage;
	// 		setEditorState();
	// 	}
	// }, []);

	// useEffect(() => {
	// 	workSpaceSlice.addText({pageId, sheetNo, text : editorState, layoutNo});
	// }, [editorState]);

	return (
		<div
			className="EditText"
		>
			<CKEditor
				editor={ BalloonEditor }
				config={ editorConfiguration }
				data={editorState}
				onChange={ ( event, editor ) => {
					const data = editor.getData();
					onEditorStateChange( data );
				} }
				onFocus={ () => {
					console.log( "Focused!" );
				} }
			/>
		</div>
	);
};

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

export default connect(null, mapDispatchToProps) (EditText);
