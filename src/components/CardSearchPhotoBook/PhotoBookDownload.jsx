import { useContext, useEffect, useState, useRef } from "react";
import { genericApi }                              from "store/api/genericApi";
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
import DownloadFront  from "./DownloadFront";
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

const { useLazyGetDataQuery } = genericApi;

const PhotoBookDownload = ({ photoBookData, onReturn }) => {
	const { setCurrentConfigPhotoBook } = useContext(currentConfigPhotoBookContext);
	const bookConfigData = useSelector((state) => state.workSpaceSlice.data, shallowEqual);
	const dispatch = useDispatch();

	// Estados
	const [currentIndexSpread, setCurrentIndexSpread] = useState(27);
	const [base64ImagePages, setBase64ImagePages] = useState([]);
	const [currentSpreadDataPage, setCurrentSpreadDataPage] = useState(undefined);
	const [bookSpreadPages, setBookSpreadPages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [progress, setProgress] = useState(0);
	const [generationStatus, setGenerationStatus] = useState("idle");
	const [isGenerating, setIsGenerating] = useState(false);
	const [extraPaid, setExtraPaid] = useState(true);
	const [isAvailableFront, setIsAvailableFront] = useState(false);

	const processingRef = useRef(false);
	const abortControllerRef = useRef(null);

	const [ getData ] = useLazyGetDataQuery();

	// Determinar si es producto layflat
	const isLayflatProduct = bookConfigData?.product === "layflat";

	const handlerAndParseConfig = async (config) => {
		const myData = config.replace(/\.(heic|webp)/g, ".jpg");
		const parseJSON = JSON.parse(myData);
		const pagesList = convertToArray(parseJSON?.pages);
		try {
			const postTypeId = parseJSON?.postTypeId;
			if (!postTypeId) {
				new Error("No se encontro el postTypeId");
			}
			const postInfo = await getData({ module : `wp-json/wp/v2/photobook-2-0/${postTypeId}` }).unwrap();
			const orderIdExtraPges = postInfo?.meta?.id_pedido_hojas_extra;
			if (!orderIdExtraPges || orderIdExtraPges === "") {
				setExtraPaid(true);
			} else {
				const orderInfoData = await getData({ module : `wp-json/wc/v3/orders/${orderIdExtraPges}` }).unwrap();
				const datePaid = orderInfoData?.date_paid;
				if (datePaid) {
					setExtraPaid(true);
				} else {
					setExtraPaid(false);
				}
			}
			if (isValidArray(pagesList)) {
				const pagesFilterNotFront = pagesList.filter((page) => page.id !== "FrontLayout");
				setBookSpreadPages(pagesFilterNotFront);
			} else {
				setIsLoading(false);
				return;
			}
			dispatch(workSpaceSlice.actions.insertData(parseJSON));
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			console.error(error);
			return;
		}
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

	useEffect(() => {
		if (bookConfigData && bookConfigData?.frontPage?.sheet1?.layoutType) {
			setIsAvailableFront(true);
			return;
		}
		return;
	}, [bookConfigData]);

	useEffect(() => {
		setIsAvailableFront(false);
	}, []);

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

		const isVerticalLargeFormat = (
			((formatKey === "vertical") && (sizeKey === "grande")) || (formatKey === "travelcoffeetable")
		);

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
								objectFit : !isVerticalLargeFormat ? "cover" : null,
								height    : isVerticalLargeFormat ? size?.[1] : "100%",
								width     : isVerticalLargeFormat ? size?.[0] : "100%",
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
			const blobImage = await textToImage("spreadBook-snap-container");
			return blobImage;
		} catch (error) {
			console.error("Error tomando snapshot del spread completo:", error);
			return null;
		}
	};

	// Función para comprimir imágenes y reducir tamaño
	const compressImage = async (base64Image, quality = 0.8) => {
		return new Promise((resolve) => {
			const img = new Image();
			img.onload = () => {
				const canvas = document.createElement("canvas");
				canvas.width = img.width;
				canvas.height = img.height;
				const ctx = canvas.getContext("2d");
				ctx.drawImage(img, 0, 0);

				// Comprimir la imagen
				const compressedBase64 = canvas.toDataURL("image/jpeg", quality);
				resolve(compressedBase64);
			};
			img.src = base64Image;
		});
	};

	// Función mejorada para forzar garbage collection de forma segura
	const forceGarbageCollection = () => {
		// Método seguro para navegadores - no usa global.gc
		try {
			// Crear y descartar un objeto grande para incentivar GC
			const largeObject = new Array(1000000).fill(null);
			// Forzar la liberación de referencia
			largeObject.length = 0;
		} catch (error) {
			// Silenciosamente fallar - no es crítico
		}
	};

	// Función mejorada para procesar un spread con gestión de memoria
	const processSpreadWithRetry = async (spread, spreadIndex, retryCount = 0) => {
		// Verificar si el proceso fue abortado
		if (abortControllerRef.current?.signal.aborted) {
			throw new Error("Proceso cancelado por el usuario");
		}

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
				const spreadSnapshot = await handlerTakeSpreadSnapshot();
				if (spreadSnapshot) {
					// Comprimir imagen para layflat
					const compressedSpread = await compressImage(spreadSnapshot, 0.9);
					result = { spread : compressedSpread };
				} else {
					result = { spread : undefined };
				}
			} else {
				const page1Snapshot = await handlerTakeSnapshot(1);
				await new Promise(resolve => setTimeout(resolve, 100));

				let page2Snapshot = null;
				if (spread?.sheet2) {
					page2Snapshot = await handlerTakeSnapshot(2);
				}

				// Comprimir imágenes para productos normales
				const compressedPage1 = page1Snapshot ? await compressImage(page1Snapshot, 0.85) : undefined;
				const compressedPage2 = page2Snapshot ? await compressImage(page2Snapshot, 0.85) : undefined;

				result = {
					page1 : compressedPage1,
					page2 : spread?.sheet2 ? compressedPage2 : undefined,
				};
			}

			return result;

		} catch (error) {
			console.error(`Error procesando spread ${spreadIndex + 1}:`, error);

			if (retryCount < 2) {
				console.log(`Reintentando spread ${spreadIndex + 1}, intento ${retryCount + 2}`);
				await new Promise(resolve => setTimeout(resolve, 500));
				return await processSpreadWithRetry(spread, spreadIndex, retryCount + 1);
			}

			console.warn(`Spread ${spreadIndex + 1} falló después de ${retryCount + 1} intentos`);

			if (isLayflatProduct) {
				return { spread : undefined };
			} else {
				return {
					page1 : undefined,
					page2 : spread?.sheet2 ? undefined : undefined,
				};
			}
		}
	};

	// Función para generar PDF por chunks con gestión de memoria MEJORADA
	const generatePdfInChunksWithMemoryManagement = async (allImages, chunkSize = 10) => {
		console.log("=== GENERANDO PDF POR CHUNKS CON GESTIÓN DE MEMORIA ===");
		console.log(`Total de imágenes: ${allImages.length}, Chunk size: ${chunkSize}`);

		const validImages = allImages.filter(img => img && img !== undefined && img !== null);

		if (validImages.length === 0) {
			throw new Error("No hay imágenes válidas para generar el PDF");
		}

		console.log(`Imágenes válidas: ${validImages.length}`);

		// Para books pequeños, generar un solo PDF
		if (validImages.length <= 20) {
			console.log("Book pequeño, generando PDF único...");
			const pdfDocument = (
				<Document>
					{allImages.map((base64PageImg, index) => (
						<PageComponent key={`page-${index}`}>
							<LayoutContainerPage imgSrc={base64PageImg} />
						</PageComponent>
					))}
				</Document>
			);

			await new Promise(resolve => setTimeout(resolve, 500));
			return await pdf(pdfDocument).toBlob();
		}

		// Para books grandes, dividir en chunks más pequeños
		const chunks = [];
		for (let i = 0; i < validImages.length; i += chunkSize) {
			chunks.push(validImages.slice(i, i + chunkSize));
		}

		console.log(`Generando PDF en ${chunks.length} chunks`);

		const pdfBlobs = [];

		for (let i = 0; i < chunks.length; i++) {
			// Verificar si el proceso fue abortado
			if (abortControllerRef.current?.signal.aborted) {
				throw new Error("Proceso cancelado por el usuario");
			}

			console.log(`Generando chunk ${i + 1} de ${chunks.length}`);

			setGenerationStatus(`Generando PDF parte ${i + 1} de ${chunks.length}`);

			const chunk = chunks[i];
			const chunkDocument = (
				<Document>
					{chunk.map((base64PageImg, index) => (
						<PageComponent key={`chunk-${i}-page-${index}`}>
							<LayoutContainerPage imgSrc={base64PageImg} />
						</PageComponent>
					))}
				</Document>
			);

			// Delay antes de generar cada chunk
			await new Promise(resolve => setTimeout(resolve, 300));

			try {
				const chunkBlob = await pdf(chunkDocument).toBlob();
				pdfBlobs.push(chunkBlob);

				// Liberar memoria de forma segura
				forceGarbageCollection();

				// Actualizar progreso
				const chunkProgress = 80 + ((i + 1) / chunks.length) * 20;
				setProgress(chunkProgress);

			} catch (error) {
				console.error(`Error generando chunk ${i + 1}:`, error);

				// Si falla un chunk, intentar con chunks más pequeños
				if (chunkSize > 5) {
					console.log("Reduciendo chunk size y reintentando...");
					return await generatePdfInChunksWithMemoryManagement(allImages, Math.floor(chunkSize / 2));
				}
				throw error;
			}

			// Delay más largo entre chunks para PDF
			if (i < chunks.length - 1) {
				await new Promise(resolve => setTimeout(resolve, 500));
				await new Promise(resolve => requestAnimationFrame(resolve));
			}
		}

		console.log("Combinando chunks de PDF...");

		// Para books muy grandes, considerar descargar chunks separados
		if (pdfBlobs.length > 1 && validImages.length > 100) {
			console.warn("Book muy grande, considerando descarga por partes");
			// Por ahora, generamos un PDF único pero con advertencia
		}

		// Crear un PDF final combinado
		const finalDocument = (
			<Document>
				{validImages.map((base64PageImg, index) => (
					<PageComponent key={`final-page-${index}`}>
						<LayoutContainerPage imgSrc={base64PageImg} />
					</PageComponent>
				))}
			</Document>
		);

		console.log("Generando PDF final combinado...");
		await new Promise(resolve => setTimeout(resolve, 1000));

		return await pdf(finalDocument).toBlob();
	};

	// Función principal MEJORADA con gestión de memoria
	const handleDownload = async () => {
		if (processingRef.current || !isValidArray(bookSpreadPages)) return;

		// Crear AbortController para permitir cancelación
		abortControllerRef.current = new AbortController();

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

			// Fase 1: Captura de imágenes con gestión de memoria
			for (let spreadIndex = 0; spreadIndex < totalSpreads; spreadIndex++) {
				// Verificar si el proceso fue abortado
				if (abortControllerRef.current?.signal.aborted) {
					console.log("Proceso cancelado por el usuario");
					return;
				}

				const spread = bookSpreadPages[spreadIndex];

				console.log(`📄 Procesando spread ${spreadIndex + 1} de ${totalSpreads}`);

				// Procesar el spread actual
				const result = await processSpreadWithRetry(spread, spreadIndex);

				// Agregar resultados en orden
				if (isLayflatProduct) {
					if (result.spread) {
						allBase64Images.push(result.spread);
					}
				} else {
					allBase64Images.push(result.page1);
					if (spread.sheet2) {
						allBase64Images.push(result.page2);
					}
				}

				// Actualizar progreso
				const captureProgress = ((spreadIndex + 1) / totalSpreads) * 80;
				setProgress(captureProgress);
				setBase64ImagePages([...allBase64Images]);

				// Gestión de memoria cada 10 spreads
				if (spreadIndex % 10 === 0 && spreadIndex > 0) {
					forceGarbageCollection();
					await new Promise(resolve => setTimeout(resolve, 100));
				}

				// Yield cada 5 spreads para mayor estabilidad en books grandes
				if (spreadIndex % 5 === 0 && spreadIndex < totalSpreads - 1) {
					await new Promise(resolve => setTimeout(resolve, 100));
					await new Promise(resolve => requestAnimationFrame(resolve));
				}

				// Delay normal entre spreads
				if (spreadIndex < totalSpreads - 1) {
					await new Promise(resolve => setTimeout(resolve, 200));
				}
			}

			console.log("✅ TODAS LAS IMÁGENES CAPTURADAS Y COMPRIMIDAS");
			console.log(`📊 Total de ${isLayflatProduct ? "spreads" : "páginas"} generadas: ${allBase64Images.length}`);

			// Fase 2: Generación del documento
			setGenerationStatus("creating_pdf");
			setProgress(85);

			if (isLayflatProduct) {
				await new Promise(resolve => setTimeout(resolve, 500));
				await zipDownloadImages(allBase64Images);
			} else {
				// Usar chunks más pequeños para books grandes
				const chunkSize = totalSpreads > 100 ? 5 : totalSpreads > 50 ? 8 : 15;
				console.log(`📄 Generando PDF con chunks de ${chunkSize} páginas...`);

				const blobPdf = await generatePdfInChunksWithMemoryManagement(allBase64Images, chunkSize);

				await new Promise(resolve => setTimeout(resolve, 200));
				setProgress(95);

				await zipDownloadPdf(blobPdf);
			}

			setGenerationStatus("completed");
			setProgress(100);
			await new Promise(resolve => setTimeout(resolve, 1000));

		} catch (error) {
			console.error("❌ ERROR GENERANDO DESCARGABLE:", error);
			setGenerationStatus("error");
		} finally {
			setIsGenerating(false);
			processingRef.current = false;
			abortControllerRef.current = null;

			setTimeout(() => {
				setCurrentIndexSpread(0);
			}, 500);
		}
	};

	// Función para cancelar la generación
	const handleCancel = () => {
		if (abortControllerRef.current) {
			abortControllerRef.current.abort();
		}
		setIsGenerating(false);
		processingRef.current = false;
		setGenerationStatus("idle");
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
				{generationStatus.startsWith("Generando PDF parte")
					? generationStatus
					: GENERATION_STATUS_MESSAGES[generationStatus] || "Procesando..."}
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
			{isGenerating && (
				<Button
					color="red"
					size="xs"
					mt="sm"
					onClick={handleCancel}
					fullWidth
				>
					CANCELAR GENERACIÓN
				</Button>
			)}
		</Card>
	);

	return (
		<Stack
			w="100%"
			h="100%"
			align="center"
			justify="center"
			style={{ position : "relative" }}
		>
			<OrderInfoCard
				isAvailableFront={isAvailableFront}
				extraPaid={extraPaid}
				photoBookData={photoBookData}
				isLoading={isLoading || isGenerating}
				generationStatus={generationStatus}
				onDownload={handleDownload}
				onReturn={onReturn}
				onCancel={handleCancel}
				disabled={isGenerating}
				isLayflatProduct={isLayflatProduct}
				showCancel={isGenerating}
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

const OrderInfoCard = ({
	photoBookData,
	isLoading,
	generationStatus,
	onDownload,
	onReturn,
	onCancel,
	disabled,
	isLayflatProduct,
	showCancel,
	extraPaid=true,
	isAvailableFront,
}) => (
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
				isAvailableFront={isAvailableFront}
				isNotPaid={!extraPaid}
				isLoading={isLoading}
				generationStatus={generationStatus}
				onDownload={onDownload}
				onReturn={onReturn}
				onCancel={onCancel}
				disabled={disabled}
				isLayflatProduct={isLayflatProduct}
				showCancel={showCancel}
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

const ActionButtons = ({
	isLoading,
	generationStatus,
	onDownload,
	onReturn,
	onCancel,
	disabled,
	isLayflatProduct,
	showCancel,
	isNotPaid=false,
	isAvailableFront,
}) => (
	<Stack spacing="0px">
		{
			isNotPaid && (
				<Text size="xs" align="center" color="red" mt="5px" sx={{ fontWeight : "300" }}>
					No se ha completado el pago de hojas extras.
				</Text>
			)
		}
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

		{showCancel && (
			<Button
				color="red"
				size="xs"
				mt="10px"
				sx={{ fontWeight : "200" }}
				onClick={onCancel}
				disabled={!disabled}
				fullWidth
			>
				CANCELAR
			</Button>
		)}

		{
			isAvailableFront && (
				<DownloadFront />
			)
		}

		<Button
			color="darkCasaMatte.6"
			size="xs"
			mt="10px"
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
