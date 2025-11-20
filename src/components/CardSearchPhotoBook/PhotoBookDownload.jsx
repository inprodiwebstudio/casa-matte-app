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

	// Función para procesar un spread completo con mejor manejo de errores
	const processSpreadWithRetry = async (spread, spreadIndex, retryCount = 0) => {
		try {
			console.log(`Procesando spread ${spreadIndex + 1}, intento ${retryCount + 1}`);

			// Actualizar el estado para renderizar el spread actual
			setCurrentIndexSpread(spreadIndex);

			// Esperar más tiempo para asegurar que el DOM se actualice completamente
			await new Promise(resolve => setTimeout(resolve, 500));

			// Verificar que el DOM esté listo
			await new Promise(resolve => requestAnimationFrame(resolve));

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
				await new Promise(resolve => setTimeout(resolve, 300));
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

	// Función para procesar chunks con mejor control
	const processChunk = async (chunkSpreads, chunkStartIndex) => {
		const chunkResults = [];

		for (let i = 0; i < chunkSpreads.length; i++) {
			const spreadIndex = chunkStartIndex + i;
			const spread = chunkSpreads[i];

			console.log(`Procesando spread ${spreadIndex + 1} del chunk`);

			const result = await processSpreadWithRetry(spread, spreadIndex);
			chunkResults.push({
				spreadIndex,
				...result,
			});

			// Pequeño delay entre spreads del mismo chunk
			if (i < chunkSpreads.length - 1) {
				await new Promise(resolve => setTimeout(resolve, 100));
			}
		}

		return chunkResults;
	};

	// Función para generar PDF (para productos normales)
	const generateCompletePdf = async (allImages) => {
		console.log("=== INICIANDO GENERACIÓN DE PDF ===");
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

		// Crear documento con todas las imágenes (incluyendo undefined)
		const pdfDocument = (
			<Document>
				{allImages.map((base64PageImg, index) => {
					return (
						<PageComponent key={index}>
							<LayoutContainerPage imgSrc={base64PageImg} />
						</PageComponent>
					);
				}).filter(Boolean)}
			</Document>
		);

		await new Promise(resolve => setTimeout(resolve, 100));
		const blobPdf = await pdf(pdfDocument).toBlob();

		console.log(`✅ PDF generado con ${imageStats.valid} páginas válidas`);
		return blobPdf;
	};

	// Función principal completamente reescrita
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
			const CHUNK_SIZE = 1; // Reducir a 1 para mejor control

			console.log(`🎬 INICIANDO DESCARGA: ${totalSpreads} spreads`);
			console.log(`📦 Tipo de producto: ${isLayflatProduct ? "LAYFLAT (imágenes)" : "NORMAL (PDF)"}`);

			// Procesar cada spread secuencialmente con mejor control
			for (let chunkStart = 0; chunkStart < totalSpreads; chunkStart += CHUNK_SIZE) {
				const chunkEnd = Math.min(chunkStart + CHUNK_SIZE, totalSpreads);
				const chunkSpreads = bookSpreadPages.slice(chunkStart, chunkEnd);

				console.log(`📦 Procesando chunk ${chunkStart + 1}-${chunkEnd} de ${totalSpreads}`);

				// Procesar el chunk actual
				const chunkResults = await processChunk(chunkSpreads, chunkStart);

				// Agregar resultados en orden
				for (const result of chunkResults) {
					if (isLayflatProduct) {
						// Para layflat: agregar solo el spread completo
						console.log(`📄 Spread ${result.spreadIndex + 1} (layflat):`, {
							spread : !!result.spread,
						});
						allBase64Images.push(result.spread);
					} else {
						// Para productos normales: agregar páginas individuales
						console.log(`📄 Spread ${result.spreadIndex + 1}:`, {
							page1 : !!result.page1,
							page2 : !!result.page2,
						});

						// Agregar página 1
						allBase64Images.push(result.page1);

						// Agregar página 2 si existe
						if (result.page2 !== undefined) {
							allBase64Images.push(result.page2);
						}
					}
				}

				// Actualizar progreso
				const newProgress = (chunkEnd / totalSpreads) * 100;
				setProgress(newProgress);
				setBase64ImagePages([...allBase64Images]);

				// Delay más largo entre chunks para mayor estabilidad
				if (chunkEnd < totalSpreads) {
					await new Promise(resolve => setTimeout(resolve, 200));
					await new Promise(resolve => requestAnimationFrame(resolve));
				}
			}

			console.log("✅ TODOS LOS SPREADS PROCESADOS");
			console.log(`📊 Total de ${isLayflatProduct ? "spreads" : "páginas"} generadas: ${allBase64Images.length}`);

			setGenerationStatus("creating_pdf");

			if (isLayflatProduct) {
				// Para layflat: descargar ZIP de imágenes PNG
				console.log("📦 Generando ZIP de imágenes PNG para layflat");
				await zipDownloadImages(allBase64Images);
				console.log("🎉 ZIP DE IMÁGENES GENERADO Y DESCARGADO EXITOSAMENTE");
			} else {
				// Para productos normales: generar y descargar PDF
				const blobPdf = await generateCompletePdf(allBase64Images);
				await zipDownloadPdf(blobPdf);
				console.log("🎉 PDF GENERADO Y DESCARGADO EXITOSAMENTE");
			}

			setGenerationStatus("completed");
			setProgress(100);

		} catch (error) {
			console.error("❌ ERROR GENERANDO DESCARGABLE:", error);
			setGenerationStatus("error");
		} finally {
			setIsGenerating(false);
			processingRef.current = false;
			setCurrentIndexSpread(0);
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
				Progreso: {Math.round(progress)}% - {base64ImagePages.filter(img => img !== undefined).length} {isLayflatProduct ? "spreads" : "páginas"} generadas
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
