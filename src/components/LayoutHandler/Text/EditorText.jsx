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
import { Rnd }       from "react-rnd";
import FontSize      from "@ckeditor/ckeditor5-font/src/fontsize";
import Alignment     from "@ckeditor/ckeditor5-alignment/src/alignment";
import "@ckeditor/ckeditor5-build-classic/build/translations/es";

//Contexts
import { currentConfigPhotoBookContext } from "contexts/configContext";

import { useRef, useState, useContext }       from "react";
import { workSpaceSlice }                     from "store/Slices";
import { connect, useSelector, shallowEqual } from "react-redux";

import { bindAll } from "helpers";
import styles      from "./styles";
import { Center }  from "@mantine/core";

const EditText = ({
	sheetNo,
	layoutNo,
	gapSpacing,
	lineHeight,
	typeText,
	letterSpacing,
}) => {
	const {currentConfigPhotoBook, setCurrentConfigPhotoBook} = useContext(currentConfigPhotoBookContext);
	const [currentFontSize, setCurrentFontSize] = useState(undefined);

	const currentPositionText = currentConfigPhotoBook?.[`sheet${sheetNo}`]?.texts?.[layoutNo]?.position ?? {
		x : 0,
		y : 0,
	};

	const currentSizeText = currentConfigPhotoBook?.[`sheet${sheetNo}`]?.texts?.[layoutNo]?.sizes ?? {
		width  : "auto",
		height : "auto",
	};

	const currentPageId = useSelector((state) => state.workSpaceSlice.data?.currentPage, shallowEqual);
	const product = useSelector((state) => state.workSpaceSlice.data?.product, shallowEqual);
	const currentColorEngravingText = useSelector((state) => state.workSpaceSlice.data?.engraving?.currentColor?.colorHex, shallowEqual);

	const isAvailableChangeColorText = currentColorEngravingText && (currentPageId === "frontpage");

	const { classes } = styles({
		size         : currentFontSize,
		gapSpacing,
		lineHeight,
		letterSpacing,
		layoutNo,
		gravingColor : isAvailableChangeColorText ? currentColorEngravingText : undefined,
	});

	const editorRef = useRef();

	const fontFamilies = [
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
	];

	const availableFontFamilies = {
		title      : fontFamilies,
		smallTitle : fontFamilies,
		subtitle   : fontFamilies.filter((fontFamily) => (fontFamily !== "TAN-MERINGUE")),
		index      : fontFamilies.filter((fontFamily) =>
			(fontFamily !== "TAN-MERINGUE")&&
		(fontFamily !== "Cormorant-Light")&&
		(fontFamily !== "Cormorant-Medium")
		),
		body : fontFamilies.filter((fontFamily) =>
			(fontFamily !== "TAN-MERINGUE")&&
		(fontFamily !== "Made-Mirage-Regular")&&
		(fontFamily !== "Made-Mirage-Thin")&&
		(fontFamily !== "Restora-Extra-Light")
		),
	};

	const editorConfiguration = {
		plugins      : [Essentials, Bold, Alignment, Paragraph, FontFamily, FontSize, FontColor],
		GroupHeading : false,
		alignment    : {
			options : [ "left", "right", "center", "justify" ],
		},
		fontFamily : {
			options : availableFontFamilies[typeText ?? "body"],
		},
		toolbar : ((product === "travelcoffeetable ")) ? undefined : {
			items : [
				"fontSize",
				"fontfamily",
				"fontColor",
				"paragraph",
				"italic",
				"alignment:left",
				"alignment:center",
				"alignment:right",
				"alignment:justify",
			],
			shouldNotGroupWhenFull : true,
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
				{title : "1pt", model : "1px"},
				{title : "2pt", model : "2px"},
				{title : "3pt", model : "3px"},
				{title : "4pt", model : "4px"},
				{title : "5pt", model : "5px"},
				{title : "6pt", model : "6px"},
				{title : "7pt", model : "7px"},
				{title : "8pt", model : "8px"},
				{title : "9pt", model : "9px"},
				{title : "10pt", model : "10px"},
				{title : "11pt", model : "11px"},
				{title : "12pt", model : "12px"},
				{title : "13pt", model : "13px"},
				{title : "14pt", model : "14px"},
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
				{title : "41pt", model : "41px"},
				{title : "42pt", model : "42px"},
				{title : "43pt", model : "43px"},
				{title : "44pt", model : "44px"},
				{title : "45pt", model : "45px"},
				{title : "46pt", model : "46px"},
				{title : "47pt", model : "47px"},
				{title : "48pt", model : "48px"},
				{title : "49pt", model : "49px"},
				{title : "50pt", model : "50px"},
			],
			supportAllValues : true,
		},
	};

	const editorState = currentConfigPhotoBook?.[`sheet${sheetNo}`]?.texts?.[layoutNo]?.text;


	const handleEditorChange = (event, editor) =>{
		const data = editor.getData();
		setCurrentConfigPhotoBook(prev => ({
			...prev,
			[`sheet${sheetNo}`] : {
				...prev?.[`sheet${sheetNo}`],
				texts : {
					...prev?.[`sheet${sheetNo}`]?.texts,
					[layoutNo] : {
						...prev?.[`sheet${sheetNo}`]?.texts?.[layoutNo],
						text : data,
					},
				},
			},
		}));
	};

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

	const handlerSetPosition = (d) => {
		setCurrentConfigPhotoBook(prev => ({
			...prev,
			[`sheet${sheetNo}`] : {
				...prev?.[`sheet${sheetNo}`],
				texts : {
					...prev?.[`sheet${sheetNo}`]?.texts,
					[layoutNo] : {
						...prev?.[`sheet${sheetNo}`]?.texts?.[layoutNo],
						position : {
							x : d.x,
							y : d.y,
						},
					},
				},
			},
		}));
	};

	const handlerSetSizes = (ref, position) => {
		setCurrentConfigPhotoBook(prev => ({
			...prev,
			[`sheet${sheetNo}`] : {
				...prev?.[`sheet${sheetNo}`],
				texts : {
					...prev?.[`sheet${sheetNo}`]?.texts,
					[layoutNo] : {
						...prev?.[`sheet${sheetNo}`]?.texts?.[layoutNo],
						sizes : {
							width  : ref.style.width,
							height : ref.style.height,
						},
						position : {
							...position,
						},
					},
				},
			},
		}));
	};

	console.log(currentConfigPhotoBook ?? undefined);

	return (
		<Rnd
			className={classes.editText}
			style={{
				color : ((product === "premium") && (currentPageId === "frontpage")) && "#1c1c1c6c",
			}}
			size={currentSizeText}
			position={currentPositionText}
			bounds={`#draggable-zone-sheet${sheetNo}`}
			dragHandleClassName={`handles-${layoutNo}`}
			scale={0.40}
			onDragStop={(e, d) => {
				handlerSetPosition(d);
			}}
			onResizeStop={(e, direction, ref, delta, position) => {
				handlerSetSizes(ref, position);
			}}
		>
			<div className="handles" />
			<CKEditor
				editor={ BalloonEditor }
				config={ editorConfiguration }
				data={editorState}
				onReady={getCurrentFontSize}
				onChange={(event, editor) => {
					handleEditorChange(event, editor);
				}}
			/>
			<Center
				p="0%"
				m="0%"
			>
				<div
					className={`handles-${layoutNo}`}
				>
					+
				</div>
			</Center>
		</Rnd>
	);
};

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

export default connect(null, mapDispatchToProps) (EditText);
