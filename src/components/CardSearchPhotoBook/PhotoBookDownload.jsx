import { useEffect, useState } from "react";
import {
	Card,
	Stack,
	Divider,
	Text,
	Group,
	Button,
	Progress,
} from "@mantine/core";
import {
	handlerIdsTextPages,
	listTextPagesAvailable,
	loadImageWithRetry,
} from "./cardSearchPhotoBook.helpers";
import {
	convertToArray,
	convertToObject,
	isValidArray,
	textToImage,
} from "helpers";
import {
	PHOTO_BOOK_TYPES,
	GENERATION_STATUS_MESSAGES,
} from "./cardSearchPhotoBook.constants";
// eslint-disable-next-line import/no-extraneous-dependencies
import { PDFDocument }                            from "pdf-lib";
import SpinePhotoBook                             from "components/MyModsLayouts/SpinePdf";
import saveAs                                     from "file-saver";
import JSZip                                      from "jszip";
import { Document, Page, pdf, View }              from "@react-pdf/renderer";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { workSpaceSlice }                         from "store/Slices";
import { convertPDFToImages }                     from "helpers/Functions/convertPdfJpg";
import GhostTextPagesDom                          from "./GhostTextPagesDom";
import { SaveIcom }                               from "Resources/icons";

const PhotoBookDownload = ({ photoBookData, onReturn }) => {
	// Estados
	const [photoBookConfigData, setPhotoBookConfigData] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [textPages, setTextPages] = useState();
	const [progress, setProgress] = useState(0);
	const [generationStatus, setGenerationStatus] = useState("idle");

	const dispatch = useDispatch();
	const textImgsObj = useSelector((state) => state.workSpaceSlice.textsImgs, shallowEqual);

	// Efectos
	useEffect(() => {
		setIsLoading(true);
		if (photoBookData?.meta?.config) {
			getConfigDataPhotoBook();
		}
	}, [photoBookData]);

	useEffect(() => {
		if (photoBookConfigData?.pages) {
			setTextPages(listTextPagesAvailable(photoBookConfigData.pages));
		}
	}, [photoBookConfigData]);

	useEffect(() => {
		if (textPages && isValidArray(textPages)) {
			handleTextImagesGeneration();
		} else {
			setIsLoading(false);
		}
	}, [textPages, photoBookConfigData]);

	// Handlers
	const getConfigDataPhotoBook = () => {
		const myData = photoBookData.meta.config.replace(/\.(heic|webp)/g, ".jpg");
		const parseJSON = JSON.parse(myData);
		dispatch(workSpaceSlice.actions.insertData(parseJSON));
		setPhotoBookConfigData(parseJSON);
	};

	const handleTextImagesGeneration = async () => {
		try {
			const formatKey = getFormatKey();
			const modsLayoutsConfigPhotoBook = PHOTO_BOOK_TYPES[formatKey]?.[photoBookConfigData.sizePhotoBook]?.modLayouts;
			const listIdsTextImgs = handlerIdsTextPages(textPages, modsLayoutsConfigPhotoBook);

			const textImgs = await Promise.all(
				listIdsTextImgs.map(async (textId) => ({
					id      : textId,
					textImg : await textToImage(textId),
				}))
			);

			dispatch(workSpaceSlice.actions.addTextImgs({
				textImgs : convertToObject(textImgs),
			}));
		} catch (error) {
			console.error("Error al obtener las imágenes de texto:", error);
		} finally {
			setIsLoading(false);
		}
	};

	// Funciones de utilidad
	const getFormatKey = () => {
		const { product, format } = photoBookConfigData || {};

		if (product === "travelcoffeetable") return "travelcoffeetable";
		if ((product === "layflat") && (format === "cuadrado")) return "layflatCuadrado";
		return format;
	};

	const listOfPhotos = (pages) => {
		return convertToArray(pages).flatMap(page => {
			const photos = [
				...convertToArray(page?.sheet1?.photos),
				...(page?.sheet2?.photos ? convertToArray(page.sheet2.photos) : []),
			];

			return photos
				.filter(photo => photo?.url && photo?.id)
				.map(photo => photo?.urlPhotoEdited || photo?.url);
		});
	};

	const validateAllImages = async (imageUrls) => {
		try {
			await Promise.all(imageUrls.map(loadImageWithRetry));
			return true;
		} catch {
			return false;
		}
	};

	// Componentes PDF
	const PageComponent = ({ pageData }) => {
		const formatKey = getFormatKey();
		const sizeKey = photoBookConfigData?.sizePhotoBook;
		const config = PHOTO_BOOK_TYPES[formatKey]?.[sizeKey];

		if (!config) return null;

		const { size, isInDoublePageLayouts, modLayouts } = config;

		const handlerDataSheet = (sheetData) => {
			return {
				photos     : sheetData?.photos,
				text       : sheetData?.text,
				pageNo     : sheetData?.pageNo,
				layoutType : sheetData?.layoutType,
			};
		};

		const isLayFlatPhotoBook = photoBookConfigData?.product === "layflat";

		const isAvailableSheet2 = !!pageData?.sheet2;

		const pageDataSheet1 = handlerDataSheet(pageData.sheet1);
		const pageDataSheet2 = handlerDataSheet(pageData?.sheet2);

		const handlerSheetLayoutComponent = (pageDataSheet) => {
			const { layoutType } = pageDataSheet;
			return modLayouts[layoutType]?.pdfLayout ?? undefined;
		};

		const Sheet1Layout = handlerSheetLayoutComponent(pageDataSheet1);
		const Sheet2Layout = handlerSheetLayoutComponent(pageDataSheet2);
		const isDoublePage = isInDoublePageLayouts?.includes(pageDataSheet1?.layoutType);


		if (isLayFlatPhotoBook) {
			return (
				<Page size={size} style={{ display : "flex", flexDirection : "row" }}>
					<View style={{ width : isDoublePage ? "100%" : "50%", height : "100%" }}>
						{
							Sheet1Layout &&
							<Sheet1Layout
								images={pageData?.sheet1?.photos}
								text={pageData?.sheet1?.text}
								textImgs={textImgsObj}
								modLayout={pageData?.sheet1?.layoutType}
								pageNo={pageData?.sheet1?.pageNo}
							/>
						}
					</View>
					{
						!isDoublePage &&
						<View style={{ width : "50%", height : "100%" }}>
							{
								Sheet2Layout &&
								<Sheet2Layout
									images={pageData?.sheet2?.photos}
									text={pageData?.sheet2?.text}
									textImgs={textImgsObj}
									modLayout={pageData?.sheet2?.layoutType}
									pageNo={pageData?.sheet2?.pageNo}
								/>
							}
						</View>
					}
				</Page>
			);
		}

		return (
			<>
				<Page size={size}>
					{
						Sheet1Layout &&
						<Sheet1Layout
							images={pageDataSheet1?.photos}
							textImgs={textImgsObj}
							pageNo={pageDataSheet1?.pageNo}
							modLayout={pageDataSheet1?.layoutType}
						/>
					}

				</Page>
				{isAvailableSheet2 && (
					<Page size={size}>
						{
							Sheet2Layout &&
							<Sheet2Layout
								images={pageDataSheet2?.photos}
								textImgs={textImgsObj}
								pageNo={pageDataSheet2?.pageNo}
								modLayout={pageDataSheet2?.layoutType}
							/>
						}
					</Page>
				)}
			</>
		);
	};

	// Funciones de generación de PDF
	const generatePdfInChunks = async (listPages) => {
		setGenerationStatus("generating");
		setProgress(0);

		try {
			const CHUNK_SIZE = 1;
			const chunks = Array.from(
				{ length : Math.ceil(listPages.length / CHUNK_SIZE) },
				(_, i) => listPages.slice(i * CHUNK_SIZE, (i + 1) * CHUNK_SIZE)
			);

			const blobChunks = await Promise.all(
				chunks.map(async (chunk, i) => {
					setProgress(Math.round((i / chunks.length) * 90));
					await new Promise(resolve => setTimeout(resolve, 200));

					return pdf(
						<Document>
							{chunk.map((pageData, index) => (
								<PageComponent key={index} pageData={pageData} />
							))}
						</Document>
					).toBlob();
				})
			);

			return blobChunks;
		} catch (error) {
			console.error("Error generating PDF chunks:", error);
			setGenerationStatus("error");
			throw error;
		}
	};

	const combinePdfChunks = async (blobChunks) => {
		setGenerationStatus("combining");
		setProgress(95);

		try {
			const mergedPdf = await PDFDocument.create();

			for (const blob of blobChunks) {
				const pdfDoc = await PDFDocument.load(await blob.arrayBuffer());
				const pages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
				pages.forEach(page => mergedPdf.addPage(page));
			}

			return new Blob([await mergedPdf.save()], { type : "application/pdf" });
		} catch (error) {
			console.error("Error combining PDF chunks:", error);
			throw error;
		}
	};

	// Funciones de descarga
	const downloadImagesAsZip = async (imagesDataUrls, zipName = "imagenes") => {
		const zip = new JSZip();
		imagesDataUrls.forEach((dataUrl, index) => {
			zip.file(`pagina_${index + 1}.jpg`, dataUrl.split(",")[1], { base64 : true });
		});
		saveAs(await zip.generateAsync({ type : "blob" }), `${zipName}.zip`);
	};

	const createPDFPhotoBook = async (photBookConfig) => {
		const listPages = convertToArray(photBookConfig.pages);
		const blob = await pdf(
			<Document>
				{listPages.map((pageData, index) => (
					<PageComponent key={index} pageData={pageData} />
				))}
			</Document>
		).toBlob();

		await downloadImagesAsZip(
			await convertPDFToImages(blob),
      `${photoBookData.meta.id_del_pedido}-${photoBookData.meta.correo_del_autor}`
		);
	};

	const zipDownload = async (pdfBlob, frontPdfBlob, boundPdfBlob) => {
		const zip = new JSZip();
		const baseName = `${photoBookData.meta.correo_del_autor}-noPedido-${photoBookData.meta.id_del_pedido}-photobookId_${photoBookData.id}`;

		zip.file(`${baseName}/Paginas.pdf`, pdfBlob);
		if (frontPdfBlob) zip.file(`${baseName}/Portada.pdf`, frontPdfBlob);
		if (boundPdfBlob) zip.file(`${baseName}/Lomo.pdf`, boundPdfBlob);

		saveAs(await zip.generateAsync({ type : "blob" }), `${baseName}.zip`);
	};

	const handlerDownload = async () => {
		setIsLoading(true);
		setGenerationStatus("preparing");
		setProgress(0);

		try {
			const imagesOk = await validateAllImages(listOfPhotos(photoBookConfigData.pages));
			if (!imagesOk) {
				setGenerationStatus("error");
				return;
			}

			if (photoBookConfigData.product === "layflat") {
				await createPDFPhotoBook(photoBookConfigData);
			} else {
				const [blobChunks, [blobFront, blobSpine]] = await Promise.all([
					generatePdfInChunks(convertToArray(photoBookConfigData.pages)),
					photoBookConfigData.product === "white" ? Promise.all([
						pdf(<FrontCover />).toBlob(),
						pdf(<SpineCover />).toBlob(),
					]) : [null, null],
				]);

				await zipDownload(
					await combinePdfChunks(blobChunks),
					blobFront,
					blobSpine
				);
			}

			setGenerationStatus("completed");
			setProgress(100);
		} catch (error) {
			console.error("Download error:", error);
			setGenerationStatus("error");
		} finally {
			setIsLoading(false);
			setTimeout(() => generationStatus !== "error" && resetStatus(), 2000);
		}
	};

	const resetStatus = () => {
		setGenerationStatus("idle");
		setProgress(0);
	};

	// Componentes auxiliares
	const FrontCover = () => {
		const formatKey = getFormatKey();
		const config = PHOTO_BOOK_TYPES[formatKey]?.[photoBookConfigData.sizePhotoBook];
		const SheetLayout = config?.modLayouts[photoBookConfigData.frontPage?.sheet1?.layoutType]?.pdfLayout;

		return (
			<Document>
				{SheetLayout && (
					<Page size={config.frontSize}>
						<SheetLayout
							images={photoBookConfigData?.frontPage?.sheet1?.photos}
							text={photoBookConfigData?.frontPage?.sheet1?.text}
						/>
					</Page>
				)}
			</Document>
		);
	};

	const SpineCover = () => (
		<Document>
			<Page size={PHOTO_BOOK_TYPES[getFormatKey()]?.[photoBookConfigData.sizePhotoBook]?.frontSize}>
				<SpinePhotoBook text={photoBookConfigData.bound} />
			</Page>
		</Document>
	);

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
				Progreso: {progress}%
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
				isLoading={isLoading}
				generationStatus={generationStatus}
				onDownload={handlerDownload}
				onReturn={onReturn}
			/>

			{generationStatus !== "idle" && <StatusCard />}
			{textPages && isValidArray(textPages) && <GhostTextPagesDom textPages={textPages} />}
		</Stack>
	);
};

const OrderInfoCard = ({ photoBookData, isLoading, generationStatus, onDownload, onReturn }) => (
	<Card
		radius="13px"
		shadow="lg"
		w="40%"
		p="30px"
		h="380px"
		pt="35px"
		style={{ backgroundColor : "#F7F5F1", position : "absolute" }}
		withBorder
	>
		<Stack>
			<OrderSection
				title="DATOS DEL PEDIDO"
				items={[
					{ label : "NO DE PEDIDO", value : `#${photoBookData?.meta?.id_del_pedido ?? "--"}` },
					{ label : "ID PHOTOBOOK", value : photoBookData?.id ?? "--" },
					{ label : "CORREO DEL AUTOR", value : photoBookData?.meta?.correo_del_autor ?? "--" },
				]}
			/>

			<Divider size="sm" variant="dashed" />

			<OrderSection
				title="INFORMACIÓN DEL PHOTOBOOK"
				items={[
					{ label : "MODELO", value : photoBookData?.meta?.modelo ?? "--" },
					{ label : "TAMAÑO", value : photoBookData?.meta?.tamano ?? "--" },
				]}
			/>

			<ActionButtons
				isLoading={isLoading}
				generationStatus={generationStatus}
				onDownload={onDownload}
				onReturn={onReturn}
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

const ActionButtons = ({ isLoading, generationStatus, onDownload, onReturn }) => (
	<Stack spacing="0px">
		<Button
			color="darkCasaMatte.7"
			size="xs"
			mt="20px"
			sx={{ fontWeight : "200" }}
			loading={isLoading}
			onClick={onDownload}
			rightIcon={<SaveIcom size="12px" />}
			disabled={generationStatus === "generating"}
			fullWidth
		>
			DESCARGAR
		</Button>
		<Button
			color="darkCasaMatte.6"
			size="xs"
			mt="20px"
			sx={{ fontWeight : "200" }}
			onClick={onReturn}
			loading={isLoading}
			disabled={generationStatus === "generating"}
			fullWidth
		>
			REGRESAR
		</Button>
	</Stack>
);

export default PhotoBookDownload;
