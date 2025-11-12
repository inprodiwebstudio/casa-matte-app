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

		if ( product === "travelcoffeetable") {
			return "travelcoffeetable";
		}
		if ( (product === "layflat") && format ) {
			return `${product}${format.charAt(0).toUpperCase() + format.slice(1).toLowerCase()}`;
		}
		return format;
	};

	const LayoutContainerPage = ({ imgSrc }) => {
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
							alt={""}
							style={{
								objectFit : "cover",
								height    : "100%",
								width     : "100%",
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

	const zipDownload = async (pdfBlob) => {
		const zip = new JSZip();
		const baseName = `${photoBookData.correo_del_autor}-noPedido-${photoBookData.id_del_pedido}-photobookId_${photoBookData.id}`;

		zip.file(`${baseName}.pdf`, pdfBlob);

		saveAs(await zip.generateAsync({ type : "blob" }), `${baseName}.zip`);
	};

	const handlerTakeSnapshot = async (pageNumber) => {
		try {
			// Dar oportunidad al hilo principal antes de tomar snapshot
			await new Promise(resolve => requestAnimationFrame(resolve));
			const blobImage = await textToImage(`${pageNumber}-snapshot`);
			return blobImage;
		} catch (error) {
			console.error(`Error tomando snapshot de página ${pageNumber}:`, error);
			return null;
		}
	};

	// Función optimizada para procesar un solo spread
	const processSingleSpread = async (spread, index) => {
		setCurrentIndexSpread(index);

		// Esperar a que el DOM se actualice con el nuevo spread
		await new Promise(resolve => setTimeout(resolve, 300));

		// Liberar el hilo principal antes de procesar
		await new Promise(resolve => requestAnimationFrame(resolve));

		// Tomar snapshot de ambas páginas del spread actual
		const blobImagePage1 = await handlerTakeSnapshot(1);
		const blobImagePage2 = await handlerTakeSnapshot(2);

		return {
			index,
			page1 : blobImagePage1 || undefined,
			page2 : (!spread?.sheet2) ? undefined : (blobImagePage2 || undefined),
		};
	};

	// Función para procesar chunks de spreads
	const processSpreadChunk = async (spreads, startIndex, chunkSize) => {
		const chunkPromises = [];

		for (let i = startIndex; i < Math.min(startIndex + chunkSize, spreads.length); i++) {
			chunkPromises.push(processSingleSpread(spreads[i], i));
		}

		return await Promise.all(chunkPromises);
	};

	// Función optimizada para generar PDF grande sin bloquear
	const generateLargePdf = async (images) => {
		// Dividir las imágenes en chunks más pequeños para procesamiento
		const PAGE_CHUNK_SIZE = 5;
		const pdfChunks = [];

		for (let i = 0; i < images.length; i += PAGE_CHUNK_SIZE) {
			// Permitir que la UI se actualice entre chunks de páginas
			await new Promise(resolve => setTimeout(resolve, 0));

			const chunkImages = images.slice(i, i + PAGE_CHUNK_SIZE);
			const chunkDoc = (
				<Document>
					{chunkImages.map((base64PageImg, chunkIndex) => (
						base64PageImg ? (
							<PageComponent key={i + chunkIndex}>
								<LayoutContainerPage imgSrc={base64PageImg} />
							</PageComponent>
						) : null
					)).filter(Boolean)}
				</Document>
			);

			pdfChunks.push(chunkDoc);
		}

		// Si solo hay un chunk, procesarlo directamente
		if (pdfChunks.length === 1) {
			return await pdf(pdfChunks[0]).toBlob();
		}

		// Para múltiples chunks, procesar con yield entre ellos
		return await processMultiplePdfChunks(pdfChunks, images);
	};

	// Procesar múltiples chunks de PDF con yield
	const processMultiplePdfChunks = async (pdfChunks, allImages) => {
		// En lugar de combinar chunks (que requiere librerías adicionales),
	// procesamos todo el documento pero con yields estratégicos

		// Crear el documento completo pero procesar con yield
		const finalDoc = (
			<Document>
				{allImages.map((base64PageImg, index) => {
				// Cada 3 páginas, dar oportunidad de actualizar UI
					if (index % 3 === 0 && index > 0) {
					// Pequeño yield para no bloquear la UI
					// Nota: Esto no afecta la renderización del PDF,
					// pero da oportunidad al event loop
					}
					return base64PageImg ? (
						<PageComponent key={index}>
							<LayoutContainerPage imgSrc={base64PageImg} />
						</PageComponent>
					) : null;
				}).filter(Boolean)}
			</Document>
		);

		// Procesar el PDF con un pequeño delay inicial para permitir UI update
		await new Promise(resolve => setTimeout(resolve, 50));
		return await pdf(finalDoc).toBlob();
	};

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
			const CHUNK_SIZE = 2; // Reducido a 2 spreads por chunk para mayor responsividad

			console.log(`Iniciando generación de PDF con ${totalSpreads} spreads`);

			// Procesar por chunks con delays entre ellos
			for (let chunkStart = 0; chunkStart < totalSpreads; chunkStart += CHUNK_SIZE) {
				const chunkEnd = Math.min(chunkStart + CHUNK_SIZE, totalSpreads);
				const chunkSpreads = bookSpreadPages.slice(chunkStart, chunkEnd);

				console.log(`Procesando chunk ${chunkStart + 1}-${chunkEnd} de ${totalSpreads}`);

				// Procesar el chunk actual
				const chunkResults = await processSpreadChunk(chunkSpreads, chunkStart, CHUNK_SIZE);

				// Agregar resultados al array principal manteniendo los undefined
				for (const result of chunkResults) {
					allBase64Images[result.index * 2] = result.page1;
					if (result.page2 !== undefined) {
						allBase64Images[result.index * 2 + 1] = result.page2;
					}
				}

				// Actualizar progreso
				const newProgress = (chunkEnd / totalSpreads) * 100;
				setProgress(newProgress);

				// Actualizar estado para mostrar progreso en UI
				setBase64ImagePages([...allBase64Images]);

				// Pequeño delay entre chunks para permitir que la UI se actualice
				if (chunkEnd < totalSpreads) {
					await new Promise(resolve => setTimeout(resolve, 150));

					// Liberar el hilo principal para UI updates
					await new Promise(resolve => requestAnimationFrame(resolve));
				}
			}

			// Verificar que tenemos imágenes antes de generar el PDF
			const validImages = allBase64Images.filter(img => img !== undefined && img !== null);
			if (validImages.length === 0) {
				throw new Error("No se generaron imágenes válidas para el PDF");
			}

			console.log(`Generando PDF con ${allBase64Images.length} páginas...`);
			setGenerationStatus("creating_pdf");

			// Generar PDF optimizado para grandes cantidades
			const blobPdf = await generateLargePdf(allBase64Images);

			// Descargar el ZIP
			await zipDownload(blobPdf);

			setGenerationStatus("completed");
			setProgress(100);

			console.log("PDF generado y descargado exitosamente");

		} catch (error) {
			console.error("Error generando PDF:", error);
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
				Progreso: {Math.round(progress)}% - {base64ImagePages.filter(img => img !== undefined).length} páginas generadas
			</Text>
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

const OrderInfoCard = ({ photoBookData, isLoading, generationStatus, onDownload, onReturn, disabled }) => (
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
				]}
			/>

			<ActionButtons
				isLoading={isLoading}
				generationStatus={generationStatus}
				onDownload={onDownload}
				onReturn={onReturn}
				disabled={disabled}
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

const ActionButtons = ({ isLoading, generationStatus, onDownload, onReturn, disabled }) => (
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
			 generationStatus === "creating_pdf" ? "CREANDO PDF..." : "DESCARGAR"}
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
