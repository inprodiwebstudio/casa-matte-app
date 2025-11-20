import { useContext, useEffect, useState, useRef } from "react";
import {
	Card,
	Stack,
	Divider,
	Text,
	Group,
	Button,
	Progress,
} from "@mantine/core";
import ReactDOMServer from "react-dom/server";
import Html           from "react-pdf-html";
import saveAs         from "file-saver";
import GhostPagesDom  from "./GhostPagesDom";
import {
	GENERATION_STATUS_MESSAGES,
	PHOTO_BOOK_TYPES,
} from "./cardSearchPhotoBook.constants";
// eslint-disable-next-line import/no-extraneous-dependencies
import { SaveIcom }                                  from "Resources/icons";
import { shallowEqual, useDispatch, useSelector }    from "react-redux";
import { workSpaceSlice }                            from "store/Slices";
import { convertToArray, isValidArray, textToImage } from "helpers";
import { currentConfigPhotoBookContext }             from "contexts/configContext";
import { Page, pdf, Document }                       from "@react-pdf/renderer";
import JSZip                                         from "jszip";

const PhotoBookDownload = ({ photoBookData, onReturn }) => {
	const { setCurrentConfigPhotoBook } = useContext(currentConfigPhotoBookContext);
	const bookConfigData = useSelector((state) => state.workSpaceSlice.data, shallowEqual);
	const dispatch = useDispatch();

	// Estados
	const [currentIndexSpread, setCurrentIndexSpread] = useState(0);
	const [base64ImagePages, setBase64ImagePages] = useState([]);
	const [currentSpreadDataPage, setCurrentSpreadDataPage] = useState(undefined);
	const [bookSpreadPages, setBookSpreadPages] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [progress, setProgress] = useState(0);
	const [generationStatus, setGenerationStatus] = useState("idle");
	const [isGenerating, setIsGenerating] = useState(false);

	const processingRef = useRef(false);

	// Determinar si es producto layflat
	const isLayflatProduct = bookConfigData?.product === "layflat";

	const handlerAndParseConfig = (config) => {
		const myData = config.replace(/\.(heic|webp)/g, ".jpg");
		const parseJSON = JSON.parse(myData);
		const pagesList = convertToArray(parseJSON?.pages);
		if (isValidArray(pagesList)) {
			const pagesFilterNotFront = pagesList.filter((page) => page.id !== "FrontLayout");
			setBookSpreadPages(pagesFilterNotFront);
		} else {
			setIsLoading(false);
			return;
		}
		dispatch(workSpaceSlice.actions.insertData(parseJSON));
		setIsLoading(false);
	};

	useEffect(() => {
		setIsLoading(true);
		if (photoBookData) {
			const { config } = photoBookData;
			if (!config) {
				setIsLoading(false);
				return;
			}
			handlerAndParseConfig(config);
		} else {
			setIsLoading(false);
		}
	}, [photoBookData]);

	useEffect(() => {
		if (isValidArray(bookSpreadPages)) {
			const currentDataSpread = bookSpreadPages[currentIndexSpread];
			setCurrentConfigPhotoBook({
				pageId : currentDataSpread?.id ?? undefined,
				sheet1 : {
					modlayoutId     : currentDataSpread?.sheet1?.layoutType ?? undefined,
					texts           : currentDataSpread?.sheet1?.text ?? undefined,
					photos          : currentDataSpread?.sheet1?.photos ?? undefined,
					linesDecoration : currentDataSpread?.sheet1?.linesDecoration ?? undefined,
				},
				...(currentDataSpread?.sheet2 && {
					sheet2 : {
						modlayoutId     : currentDataSpread?.sheet2?.layoutType ?? undefined,
						texts           : currentDataSpread?.sheet2?.text ?? undefined,
						photos          : currentDataSpread?.sheet2?.photos ?? undefined,
						linesDecoration : currentDataSpread?.sheet2?.linesDecoration ?? undefined,
					},
				}),
			});
			setCurrentSpreadDataPage(currentDataSpread);
		}
	}, [bookSpreadPages]);

	useEffect(() => {
		if (isValidArray(bookSpreadPages) && bookSpreadPages[currentIndexSpread]) {
			const currentDataSpread = bookSpreadPages[currentIndexSpread];
			setCurrentConfigPhotoBook({
				pageId : currentDataSpread?.id ?? undefined,
				sheet1 : {
					modlayoutId     : currentDataSpread?.sheet1?.layoutType ?? undefined,
					texts           : currentDataSpread?.sheet1?.text ?? undefined,
					photos          : currentDataSpread?.sheet1?.photos ?? undefined,
					linesDecoration : currentDataSpread?.sheet1?.linesDecoration ?? undefined,
				},
				...(currentDataSpread?.sheet2 && {
					sheet2 : {
						modlayoutId     : currentDataSpread?.sheet2?.layoutType ?? undefined,
						texts           : currentDataSpread?.sheet2?.text ?? undefined,
						photos          : currentDataSpread?.sheet2?.photos ?? undefined,
						linesDecoration : currentDataSpread?.sheet2?.linesDecoration ?? undefined,
					},
				}),
			});
			setCurrentSpreadDataPage(currentDataSpread);
		}
	}, [currentIndexSpread]);

	const getFormatKey = (configDataBook) => {
		const { product, format } = configDataBook || {};

		if (product === "travelcoffeetable") {
			return "travelcoffeetable";
		}
		if ((product === "layflat") && format) {
			return `${product}${format.charAt(0).toUpperCase() + format.slice(1).toLowerCase()}`;
		}
		return format;
	};

	const LayoutContainerPage = ({ imgSrc }) => {
		const formatKey = getFormatKey(bookConfigData);
		const sizeKey = bookConfigData?.sizePhotoBook;
		const config = PHOTO_BOOK_TYPES[formatKey]?.[sizeKey];

		const { size } = config;
		const bodyHtml = (
			<div
				style={{
					height   : "100%",
					width    : "100%",
					overflow : "hidden",
				}}
			>
				{
					imgSrc && (
						<img
							src={imgSrc}
							alt={"image"}
							style={{
								height : size?.[1],
								width  : size?.[0],
							}}
						/>
					)
				}
			</div>
		);

		const toPdfElement = ReactDOMServer.renderToStaticMarkup(bodyHtml);

		return (
			<Html>{toPdfElement}</Html>
		);
	};

	const PageComponent = ({ children }) => {
		const formatKey = getFormatKey(bookConfigData);
		const sizeKey = bookConfigData?.sizePhotoBook;
		const config = PHOTO_BOOK_TYPES[formatKey]?.[sizeKey];

		const { size } = config;

		return (
			<Page size={size}>
				{children}
			</Page>
		);
	};

	// Función para descargar ZIP de imágenes PNG (para layflat)
	const zipDownloadImages = async (images) => {
		const zip = new JSZip();
		const baseName = `${photoBookData.correo_del_autor}-noPedido-${photoBookData.id_del_pedido}-photobookId_${photoBookData.id}`;

		// Agregar cada imagen al ZIP
		images.forEach((imageBase64, index) => {
			if (imageBase64) {
				// Convertir base64 a blob
				const byteString = atob(imageBase64.split(",")[1]);
				const mimeString = imageBase64.split(",")[0].split(":")[1].split(";")[0];
				const ab = new ArrayBuffer(byteString.length);
				const ia = new Uint8Array(ab);

				for (let i = 0; i < byteString.length; i++) {
					ia[i] = byteString.charCodeAt(i);
				}

				const blob = new Blob([ab], { type : mimeString });
				zip.file(`${baseName}_spread_${index + 1}.png`, blob);
			}
		});

		saveAs(await zip.generateAsync({ type : "blob" }), `${baseName}_images.zip`);
	};

	// Función para descargar ZIP de PDF (para productos normales)
	const zipDownloadPdf = async (pdfBlob) => {
		const zip = new JSZip();
		const baseName = `${photoBookData.correo_del_autor}-noPedido-${photoBookData.id_del_pedido}-photobookId_${photoBookData.id}`;

		zip.file(`${baseName}.pdf`, pdfBlob);
		saveAs(await zip.generateAsync({ type : "blob" }), `${baseName}.zip`);
	};

	// Función para tomar snapshot de página individual (productos normales)
	const handlerTakeSnapshot = async (pageNumber) => {
		try {
			await new Promise(resolve => requestAnimationFrame(resolve));
			const blobImage = await textToImage(`${pageNumber}-snapshot`);
			return blobImage;
		} catch (error) {
			console.error(`Error tomando snapshot de página ${pageNumber}:`, error);
			return null;
		}
	};

	// Función para tomar snapshot del spread completo (para layflat)
	const handlerTakeSpreadSnapshot = async () => {
		try {
			await new Promise(resolve => requestAnimationFrame(resolve));
			// Usar el nuevo ID para el spread completo
			const blobImage = await textToImage("spreadBook-snap-container");
			return blobImage;
		} catch (error) {
			console.error("Error tomando snapshot del spread completo:", error);
			return null;
		}
	};

	// Función mejorada para procesar un spread con delays estratégicos
	const processSpreadWithRetry = async (spread, spreadIndex, retryCount = 0) => {
		try {
			console.log(`Procesando spread ${spreadIndex + 1}, intento ${retryCount + 1}`);

			// Actualizar el estado para renderizar el spread actual
			setCurrentIndexSpread(spreadIndex);

			// Delay más largo para asegurar que el DOM se actualice completamente
			await new Promise(resolve => setTimeout(resolve, 300));
			await new Promise(resolve => requestAnimationFrame(resolve));
			await new Promise(resolve => setTimeout(resolve, 200));

			let result;

			if (isLayflatProduct) {
				// Para layflat: tomar snapshot del spread completo
				const spreadSnapshot = await handlerTakeSpreadSnapshot();
				console.log(`Spread ${spreadIndex + 1} (layflat) procesado:`, {
					spread : !!spreadSnapshot,
				});
				result = {
					spread : spreadSnapshot || undefined,
				};
			} else {
				// Para productos normales: tomar snapshots individuales
				const page1Snapshot = await handlerTakeSnapshot(1);

				// Delay entre páginas del mismo spread
				await new Promise(resolve => setTimeout(resolve, 100));

				let page2Snapshot = null;

				// Solo tomar snapshot de página 2 si el spread tiene sheet2
				if (spread?.sheet2) {
					page2Snapshot = await handlerTakeSnapshot(2);
				}

				console.log(`Spread ${spreadIndex + 1} procesado:`, {
					page1     : !!page1Snapshot,
					page2     : !!page2Snapshot,
					hasSheet2 : !!spread?.sheet2,
				});

				result = {
					page1 : page1Snapshot || undefined,
					page2 : spread?.sheet2 ? (page2Snapshot || undefined) : undefined,
				};
			}

			return result;

		} catch (error) {
			console.error(`Error procesando spread ${spreadIndex + 1}:`, error);

			// Reintentar hasta 2 veces
			if (retryCount < 2) {
				console.log(`Reintentando spread ${spreadIndex + 1}, intento ${retryCount + 2}`);
				await new Promise(resolve => setTimeout(resolve, 500));
				return await processSpreadWithRetry(spread, spreadIndex, retryCount + 1);
			}

			// Si falla después de los reintentos, retornar undefined
			console.warn(`Spread ${spreadIndex + 1} falló después de ${retryCount + 1} intentos`);

			if (isLayflatProduct) {
				return {
					spread : undefined,
				};
			} else {
				return {
					page1 : undefined,
					page2 : spread?.sheet2 ? undefined : undefined,
				};
			}
		}
	};

	// Función CORREGIDA para generar PDF completo
	const generateCompletePdf = async (allImages) => {
		console.log("=== INICIANDO GENERACIÓN DE PDF COMPLETO ===");
		console.log("Total de imágenes en array:", allImages.length);

		// Verificar qué tenemos realmente
		const imageStats = {
			total     : allImages.length,
			valid     : 0,
			undefined : 0,
			null      : 0,
		};

		allImages.forEach((img, index) => {
			if (img === undefined) imageStats.undefined++;
			else if (img === null) imageStats.null++;
			else imageStats.valid++;
		});

		console.log("Estadísticas de imágenes:", imageStats);
		console.log("Contenido del array:", allImages.map((img, idx) =>
			`[${idx}] ${img ? "✓ IMAGEN" : "✗ UNDEFINED"}`
		));

		if (imageStats.valid === 0) {
			throw new Error("No hay imágenes válidas para generar el PDF");
		}

		// Crear documento con TODAS las imágenes
		const pdfDocument = (
			<Document>
				{allImages.map((base64PageImg, index) => {
					// Solo crear página si la imagen es válida
					if (!base64PageImg) {
						console.warn(`Imagen ${index} es undefined, omitiendo página`);
						return null;
					}

					return (
						<PageComponent key={`page-${index}`}>
							<LayoutContainerPage imgSrc={base64PageImg} />
						</PageComponent>
					);
				}).filter(Boolean)}
			</Document>
		);

		// Delay antes de generar el PDF completo
		await new Promise(resolve => setTimeout(resolve, 500));

		console.log("Generando blob del PDF completo...");
		const blobPdf = await pdf(pdfDocument).toBlob();

		console.log(`✅ PDF COMPLETO generado con ${imageStats.valid} páginas válidas de ${allImages.length} totales`);
		return blobPdf;
	};

	// Función principal mejorada - VERSIÓN SIMPLIFICADA Y CORREGIDA
	const handleDownload = async () => {
		if (processingRef.current || !isValidArray(bookSpreadPages)) return;

		processingRef.current = true;
		setIsGenerating(true);
		setGenerationStatus("generating");
		setProgress(0);
		setBase64ImagePages([]);

		try {
			const allBase64Images = [];
			const totalSpreads = bookSpreadPages.length;

			console.log(`🎬 INICIANDO DESCARGA: ${totalSpreads} spreads`);
			console.log(`📦 Tipo de producto: ${isLayflatProduct ? "LAYFLAT (imágenes)" : "NORMAL (PDF)"}`);

			// Fase 1: Captura de imágenes (0% - 80% del progreso)
			for (let spreadIndex = 0; spreadIndex < totalSpreads; spreadIndex++) {
				const spread = bookSpreadPages[spreadIndex];

				console.log(`📄 Procesando spread ${spreadIndex + 1} de ${totalSpreads}`);

				// Procesar el spread actual
				const result = await processSpreadWithRetry(spread, spreadIndex);

				// Agregar resultados en orden
				if (isLayflatProduct) {
					// Para layflat: agregar solo el spread completo
					console.log(`📄 Spread ${spreadIndex + 1} (layflat):`, {
						spread : !!result.spread,
					});
					allBase64Images.push(result.spread);
				} else {
					// Para productos normales: agregar páginas individuales
					console.log(`📄 Spread ${spreadIndex + 1}:`, {
						page1 : !!result.page1,
						page2 : !!result.page2,
					});

					// Agregar página 1
					if (result.page1) {
						allBase64Images.push(result.page1);
					}

					// Agregar página 2 si existe
					if (result.page2) {
						allBase64Images.push(result.page2);
					}
				}

				// Actualizar progreso (primera fase: 0% - 80%)
				const captureProgress = ((spreadIndex + 1) / totalSpreads) * 80;
				setProgress(captureProgress);
				setBase64ImagePages([...allBase64Images]);

				// Delay entre spreads para mayor estabilidad
				if (spreadIndex < totalSpreads - 1) {
					await new Promise(resolve => setTimeout(resolve, 300));
					await new Promise(resolve => requestAnimationFrame(resolve));
				}
			}

			console.log("✅ TODAS LAS IMÁGENES CAPTURADAS");
			console.log(`📊 Total de ${isLayflatProduct ? "spreads" : "páginas"} generadas: ${allBase64Images.length}`);
			console.log("Contenido final:", allBase64Images.map((img, idx) =>
				`[${idx}] ${img ? `IMAGEN ${idx + 1}` : "UNDEFINED"}`
			));

			// Fase 2: Generación del documento (80% - 100% del progreso)
			setGenerationStatus("creating_pdf");
			setProgress(85);

			if (isLayflatProduct) {
				// Para layflat: descargar ZIP de imágenes PNG
				console.log("📦 Generando ZIP de imágenes PNG para layflat");
				await new Promise(resolve => setTimeout(resolve, 500));
				await zipDownloadImages(allBase64Images);
				console.log("🎉 ZIP DE IMÁGENES GENERADO Y DESCARGADO EXITOSAMENTE");
			} else {
				// Para productos normales: generar PDF COMPLETO
				console.log("📄 Generando PDF COMPLETO...");
				setProgress(90);

				const blobPdf = await generateCompletePdf(allBase64Images);

				// Delay final antes de la descarga
				await new Promise(resolve => setTimeout(resolve, 200));
				setProgress(95);

				await zipDownloadPdf(blobPdf);
				console.log("🎉 PDF COMPLETO GENERADO Y DESCARGADO EXITOSAMENTE");
			}

			setGenerationStatus("completed");
			setProgress(100);

			// Delay final antes de resetear
			await new Promise(resolve => setTimeout(resolve, 1000));

		} catch (error) {
			console.error("❌ ERROR GENERANDO DESCARGABLE:", error);
			setGenerationStatus("error");
		} finally {
			setIsGenerating(false);
			processingRef.current = false;

			// Resetear al spread inicial después de un delay
			setTimeout(() => {
				setCurrentIndexSpread(0);
			}, 500);
		}
	};

	const StatusCard = () => (
		<Card
			style={{
				position        : "fixed",
				top             : "20px",
				right           : "20px",
				zIndex          : 1000,
				backgroundColor : "#fff",
				padding         : "15px",
				boxShadow       : "0 0 10px rgba(0,0,0,0.2)",
				minWidth        : "300px",
			}}
		>
			<Text weight={600} mb="sm">
				{GENERATION_STATUS_MESSAGES[generationStatus] || "Procesando..."}
			</Text>
			<Progress value={progress} mb="xs" />
			<Text size="sm" color="dimmed">
				Progreso: {Math.round(progress)}% - {base64ImagePages.filter(img => img !== undefined && img !== null).length} {isLayflatProduct ? "spreads" : "páginas"} generadas
			</Text>
			{isLayflatProduct && (
				<Text size="sm" color="blue" mt="xs">
					📦 Producto Layflat - Descargando imágenes PNG
				</Text>
			)}
			{generationStatus === "error" && (
				<Text size="sm" color="red" mt="sm">
					Ocurrió un error. Por favor intenta nuevamente.
				</Text>
			)}
		</Card>
	);

	return (
		<Stack w="100%" h="100%" align="center" justify="center" style={{ position : "relative" }}>
			<OrderInfoCard
				photoBookData={photoBookData}
				isLoading={isLoading || isGenerating}
				generationStatus={generationStatus}
				onDownload={handleDownload}
				onReturn={onReturn}
				disabled={isGenerating}
				isLayflatProduct={isLayflatProduct}
			/>
			{currentSpreadDataPage && (
				<GhostPagesDom
					spreadPage={currentSpreadDataPage}
				/>
			)}
			{(generationStatus !== "idle" && generationStatus !== "completed") && <StatusCard />}
		</Stack>
	);
};

const OrderInfoCard = ({ photoBookData, isLoading, generationStatus, onDownload, onReturn, disabled, isLayflatProduct }) => (
	<Card
		radius="13px"
		shadow="lg"
		w="40%"
		p="30px"
		mih="380px"
		pt="35px"
		style={{ backgroundColor : "#F7F5F1", position : "absolute" }}
		withBorder
	>
		<Stack>
			<OrderSection
				title="DATOS DEL PEDIDO"
				items={[
					{ label : "NO DE PEDIDO", value : `#${photoBookData?.id_del_pedido ?? "--"}` },
					{ label : "ID PHOTOBOOK", value : photoBookData?.id ?? "--" },
					{ label : "CORREO DEL AUTOR", value : photoBookData?.correo_del_autor ?? "--" },
				]}
			/>

			<Divider size="sm" variant="dashed" />

			<OrderSection
				title="INFORMACIÓN DEL PHOTOBOOK"
				items={[
					{ label : "MODELO", value : photoBookData?.modelo ?? "--" },
					{ label : "TAMAÑO", value : photoBookData?.tamano ?? "--" },
					...(isLayflatProduct ? [{ label : "TIPO", value : "LAYFLAT (Imágenes PNG)" }] : []),
				]}
			/>

			<ActionButtons
				isLoading={isLoading}
				generationStatus={generationStatus}
				onDownload={onDownload}
				onReturn={onReturn}
				disabled={disabled}
				isLayflatProduct={isLayflatProduct}
			/>
		</Stack>
	</Card>
);

const OrderSection = ({ title, items }) => (
	<Stack spacing={3}>
		<Text style={{ letterSpacing : "4px" }}>{title}</Text>
		<Group spacing={30}>
			{items.map((item, index) => (
				<Stack key={index} spacing={3}>
					<Text color="gray" size="13px" weight={400}>{item.label}</Text>
					<Text weight={400} size="14px">{item.value}</Text>
				</Stack>
			))}
		</Group>
	</Stack>
);

const ActionButtons = ({ isLoading, generationStatus, onDownload, onReturn, disabled, isLayflatProduct }) => (
	<Stack spacing="0px">
		<Button
			color="darkCasaMatte.7"
			size="xs"
			mt="20px"
			sx={{ fontWeight : "200" }}
			loading={isLoading}
			onClick={onDownload}
			rightIcon={<SaveIcom size="12px" />}
			disabled={disabled || generationStatus === "generating" || generationStatus === "creating_pdf"}
			fullWidth
		>
			{generationStatus === "generating" ? "GENERANDO..." :
				generationStatus === "creating_pdf" ? "CREANDO PDF..." :
					isLayflatProduct ? "DESCARGAR IMÁGENES PNG" : "DESCARGAR PDF"}
		</Button>
		<Button
			color="darkCasaMatte.6"
			size="xs"
			mt="20px"
			sx={{ fontWeight : "200" }}
			onClick={onReturn}
			loading={isLoading}
			disabled={disabled}
			fullWidth
		>
			REGRESAR
		</Button>
	</Stack>
);

export default PhotoBookDownload;
