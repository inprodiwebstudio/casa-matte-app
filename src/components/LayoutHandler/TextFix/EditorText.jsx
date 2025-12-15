/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import { CKEditor }   from "@ckeditor/ckeditor5-react";
import { Plugin }     from "@ckeditor/ckeditor5-core";
import BalloonEditor  from "@ckeditor/ckeditor5-editor-balloon/src/ballooneditor";
import Essentials     from "@ckeditor/ckeditor5-essentials/src/essentials";
import Bold           from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Paragraph      from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import FontFamily     from "@ckeditor/ckeditor5-font/src/fontfamily";
import FontColor      from "@ckeditor/ckeditor5-font/src/fontcolor";
import FontSize       from "@ckeditor/ckeditor5-font/src/fontsize";
import Alignment      from "@ckeditor/ckeditor5-alignment/src/alignment";
import FontFamilyIcon from "Resources/svgIcons/fontFamily.svg?raw";
import FontColorIcon  from "Resources/svgIcons/colorWheel.svg?raw";
// import "@ckeditor/ckeditor5-build-classic/build/translations/es";

import { useCallback, useRef, useState, useEffect } from "react";
import { workSpaceSlice }                           from "store/Slices";
import { connect, useSelector, shallowEqual }       from "react-redux";

import { bindAll } from "helpers";
import styles      from "./styles";

class OverrideIcons extends Plugin {
	init() {
		const editor = this.editor;

		const factory = editor.ui.componentFactory;
		const originalFactory = factory.create.bind(factory);

		factory.create = (name, locale) => {
			const view = originalFactory(name, locale);

			if (name === "fontfamily") {
				view.buttonView.icon = FontFamilyIcon;
				view.buttonView.withText = false;
			}

			if (name === "fontColor") {
				view.buttonView.icon = FontColorIcon;
				view.buttonView.withText = false;
			}

			return view;
		};
	}
}

const EditText = ({
	isFront,
	isBound,
	sizes,
	sheetNo,
	layoutNo,
	dataTextPage,
	gapSpacing,
	lineHeight,
	typeText,
	letterSpacing,
	workSpaceSlice,
}) => {
	const [currentFontSize, setCurrentFontSize] = useState(undefined);
	const [editorState, setEditorState] = useState(dataTextPage);
	const [editorId] = useState(() => `editor-${Math.random().toString(36).substr(2, 9)}`);

	// Refs para manejar el debounce y datos temporales
	const debounceTimeoutRef = useRef(null);
	const lastEditorDataRef = useRef(dataTextPage);
	const editorRef = useRef();
	const isToolbarInteractionRef = useRef(false);
	const editorContainerRef = useRef(null);

	const currentPageId = useSelector((state) => state.workSpaceSlice.data?.currentPage, shallowEqual);
	const product = useSelector((state) => state.workSpaceSlice.data?.product, shallowEqual);
	const frontTypeBook = useSelector((state) => state.workSpaceSlice.frontBookTypeView, shallowEqual);
	const currentColorEngravingText = useSelector((state) => state.workSpaceSlice.data?.engraving?.currentColor?.colorHex, shallowEqual);

	const isAvailableChangeColorText = currentColorEngravingText && (currentPageId === "frontpage") && (!frontTypeBook);

	const { classes } = styles({size : currentFontSize, gapSpacing, lineHeight, letterSpacing, gravingColor : isAvailableChangeColorText ? currentColorEngravingText : undefined});

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
		titleTravelCoffee    : ["TAN-MERINGUE"],
		subTitleTravelCoffee : ["TAN-MERINGUE"],
		travelCoffee         : ["Inter-Lifght"],
	};

	const editorConfiguration = {
		plugins      : [Essentials, Bold, Alignment, Paragraph, FontFamily, FontSize, FontColor, OverrideIcons],
		GroupHeading : false,
		alignment    : {
			options : [ "left", "right", "center", "justify" ],
		},
		fontFamily : {
			options : availableFontFamilies[typeText ?? "body"],
		},
		toolbar : ((product === "travelcoffeetable") && isFront) ? undefined : {
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

	// Función para actualizar Redux
	const updateRedux = useCallback((data) => {
		if (isBound) {
			workSpaceSlice.addTextBound({text : data});
			return;
		}
		if (!isFront) {
			workSpaceSlice.addText({pageId : currentPageId, sheetNo, text : data, layoutNo});
			return;
		}
		workSpaceSlice.addTextFront({sheetNo, text : data, layoutNo});
	}, [isBound, isFront, currentPageId, sheetNo, layoutNo, workSpaceSlice]);

	// Handler principal de cambios
	const handleEditorChange = useCallback((event, editor) => {
		let data = editor.getData().trim();

		const parser = new DOMParser();
		const doc = parser.parseFromString(data, "text/html");

		const p = doc.querySelector("p");
		const span = doc.querySelector("span");

		// Detectar "contenido vacío" real
		const isEmpty =
		data === "" ||
		data === "<p>&nbsp;</p>" ||
		data === "<p></p>" ||
		data === "<p><br></p>";

		// Si el usuario borró TODO → aplicar defaultTemplate dinámico
		if (isEmpty && isFront && (product === "travelcoffeetable")) {
			const defaultAlignment = p?.getAttribute("style") || "text-align: center;";
			const handlerFontSize = ( typeText === "titleTravelCoffee") ? "50px" : "20px";
			const defaultTextStyle =
				span?.getAttribute("style") ||
				`font-size: ${handlerFontSize}; font-family: TAN-MERINGUE;`;

			data = `<p style="${defaultAlignment}">
                  <span style="${defaultTextStyle}">&#8203;</span>
                </p>`;
		} else if (isEmpty) {
			let defaultFontSize = "10px";
			const defaultAlignment = "text-align: center;";

			if (isFront) {
				defaultFontSize = "20px";
			}

			const defaultTextStyle = `font-size: ${defaultFontSize}; font-family: Inter-Lifght;`;

			data = `<p style="${defaultAlignment}">
                  <span style="${defaultTextStyle}">&#8203;</span>
                </p>`;
		}

		// Actualizar estado local inmediatamente
		setEditorState(data);
		lastEditorDataRef.current = data;

	}, [isFront, product, typeText]);

	// Handler para cuando el usuario termina de editar (blur) - SOLUCIÓN MEJORADA
	const handleEditorBlur = useCallback(() => {
		// Cancelar el timeout programado anterior
		if (debounceTimeoutRef.current) {
			clearTimeout(debounceTimeoutRef.current);
			debounceTimeoutRef.current = null;
		}

		// Solo actualizar Redux si no fue una interacción con la toolbar
		// y después de un pequeño delay para asegurarnos
		debounceTimeoutRef.current = setTimeout(() => {
			if (!isToolbarInteractionRef.current && lastEditorDataRef.current !== undefined) {
				updateRedux(lastEditorDataRef.current);
			}
			// Resetear la bandera después del procesamiento
			isToolbarInteractionRef.current = false;
			debounceTimeoutRef.current = null;
		}, 150); // 150ms es suficiente para la mayoría de interacciones con la toolbar
	}, [updateRedux]);

	// Función para detectar si un elemento pertenece a la toolbar de ESTE editor específico
	const isToolbarForThisEditor = useCallback((toolbarElement) => {
		if (!editorContainerRef.current || !toolbarElement) return false;

		// Verificar si la toolbar está posicionada cerca de nuestro editor
		const editorRect = editorContainerRef.current.getBoundingClientRect();
		const toolbarRect = toolbarElement.getBoundingClientRect();

		// La toolbar balloon de CKEditor generalmente aparece cerca del editor
		// Podemos verificar si están relativamente cerca en la pantalla
		const verticalDistance = Math.abs(toolbarRect.top - editorRect.bottom);
		const horizontalOverlap =
			toolbarRect.left < editorRect.right &&
			toolbarRect.right > editorRect.left;

		// Si la toolbar está cerca verticalmente y se superpone horizontalmente,
		// probablemente pertenezca a este editor
		return verticalDistance < 200 && horizontalOverlap;
	}, []);

	// Efecto para detectar interacciones con la toolbar balloon de ESTE editor específico
	useEffect(() => {
		const handleToolbarMouseDown = (event) => {
			// Verificar si esta toolbar pertenece a nuestro editor
			const toolbarElement = event.target.closest(".ck-balloon-panel");
			if (!toolbarElement || !isToolbarForThisEditor(toolbarElement)) {
				return;
			}

			// Marcar que hubo interacción con la toolbar
			isToolbarInteractionRef.current = true;

			// Cancelar cualquier timeout de blur pendiente
			if (debounceTimeoutRef.current) {
				clearTimeout(debounceTimeoutRef.current);
				debounceTimeoutRef.current = null;
			}
		};

		const handleToolbarMouseUp = (event) => {
			const toolbarElement = event.target.closest(".ck-balloon-panel");
			if (!toolbarElement || !isToolbarForThisEditor(toolbarElement)) {
				return;
			}

			// Esperar un poco antes de resetear para permitir
			// que el foco vuelva al editor
			setTimeout(() => {
				isToolbarInteractionRef.current = false;
			}, 100);
		};

		// Función para buscar y añadir listeners a la toolbar
		const setupToolbarListeners = () => {
			// Buscar TODAS las toolbars balloon de CKEditor
			const toolbars = document.querySelectorAll(".ck-balloon-panel");
			let foundOurToolbar = false;

			toolbars.forEach(toolbar => {
				// Solo añadir listeners si esta toolbar pertenece a nuestro editor
				if (isToolbarForThisEditor(toolbar)) {
					toolbar.addEventListener("mousedown", handleToolbarMouseDown);
					toolbar.addEventListener("mouseup", handleToolbarMouseUp);
					toolbar.addEventListener("click", handleToolbarMouseDown);
					foundOurToolbar = true;
				}
			});

			return foundOurToolbar;
		};

		// Intentar configurar listeners inmediatamente
		const setupSuccess = setupToolbarListeners();

		// Si no se encuentra la toolbar inmediatamente,
		// intentar periódicamente hasta que se cree
		let intervalId;
		if (!setupSuccess) {
			intervalId = setInterval(() => {
				if (setupToolbarListeners()) {
					clearInterval(intervalId);
				}
			}, 300);
		}

		// Cleanup
		return () => {
			if (intervalId) {
				clearInterval(intervalId);
			}

			// Remover listeners de TODAS las toolbars
			const toolbars = document.querySelectorAll(".ck-balloon-panel");
			toolbars.forEach(toolbar => {
				toolbar.removeEventListener("mousedown", handleToolbarMouseDown);
				toolbar.removeEventListener("mouseup", handleToolbarMouseUp);
				toolbar.removeEventListener("click", handleToolbarMouseDown);
			});

			if (debounceTimeoutRef.current) {
				clearTimeout(debounceTimeoutRef.current);
			}
		};
	}, [isToolbarForThisEditor]);

	// Sincronizar editorState cuando cambie dataTextPage desde fuera
	useEffect(() => {
		setEditorState(dataTextPage);
		lastEditorDataRef.current = dataTextPage;
	}, [dataTextPage]);

	// Handler para cuando el editor está listo
	const handleEditorReady = useCallback((editor) => {
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

		// Escuchar eventos de foco directamente en el editor
		editor.editing.view.document.on("focus", () => {
			// Cuando el editor recibe foco, resetear la bandera
			isToolbarInteractionRef.current = false;

			// Marcar que este editor está activo
			// Podemos añadir una clase CSS para identificarlo
			if (editorContainerRef.current) {
				editorContainerRef.current.classList.add("ckeditor-active");
			}
		});

		// Escuchar eventos de blur directamente en el editor
		editor.editing.view.document.on("blur", (evt, data) => {
			// Verificar si el blur fue causado por un clic en una toolbar
			// que NO pertenece a este editor
			setTimeout(() => {
				const activeElement = document.activeElement;
				const clickedToolbar = activeElement.closest(".ck-balloon-panel");

				if (clickedToolbar && !isToolbarForThisEditor(clickedToolbar)) {
					// El usuario hizo clic en la toolbar de OTRO editor
					// No debemos marcar esto como interacción con nuestra toolbar
					isToolbarInteractionRef.current = false;
					// Pero sí debemos guardar los datos actuales
					if (lastEditorDataRef.current !== undefined) {
						updateRedux(lastEditorDataRef.current);
					}
				}
			}, 50);
		});

	}, [isToolbarForThisEditor, updateRedux]);

	// Handler para guardar datos cuando el usuario cambia a otro editor
	useEffect(() => {
		const handleGlobalClick = (event) => {
			// Si hacemos clic fuera de nuestro editor y su toolbar
			if (!editorContainerRef.current?.contains(event.target)) {
				const clickedToolbar = event.target.closest(".ck-balloon-panel");

				// Si hacemos clic en una toolbar que NO es de nuestro editor
				if (clickedToolbar && !isToolbarForThisEditor(clickedToolbar)) {
					// Guardar los datos de nuestro editor antes de cambiar
					if (lastEditorDataRef.current !== undefined && !isToolbarInteractionRef.current) {
						updateRedux(lastEditorDataRef.current);
					}
				}
			}
		};

		document.addEventListener("mousedown", handleGlobalClick);

		return () => {
			document.removeEventListener("mousedown", handleGlobalClick);
		};
	}, [isToolbarForThisEditor, updateRedux]);

	return (
		<div
			ref={editorContainerRef}
			id={editorId}
			className={classes.editText}
			style={{
				color : ((product === "premium") && (currentPageId === "frontpage")) && "#1c1c1c6c",
			}}
		>
			<CKEditor
				editor={ BalloonEditor }
				config={ editorConfiguration }
				data={editorState}
				onReady={handleEditorReady}
				onChange={handleEditorChange}
				onBlur={handleEditorBlur}
			/>
		</div>
	);
};

const mapDispatchToProps = bindAll({ workSpaceSlice : workSpaceSlice.actions});

export default connect(null, mapDispatchToProps) (EditText);
