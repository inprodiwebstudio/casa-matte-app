import { Card, Stack, Divider, Text, Group, Button, Progress }             from "@mantine/core";
import { convertToArray, convertToObject, isValidArray, textToImage }      from "helpers";
import { useEffect, useState }                                             from "react";
import { SaveIcom }                                                        from "Resources/icons";
import { handlerIdsTextPages, listTextPagesAvailable, loadImageWithRetry } from "./cardSearchPhotoBook.helpers";
// eslint-disable-next-line import/no-extraneous-dependencies
import { PDFDocument }    from "pdf-lib";
import SpinePhotoBook     from "components/MyModsLayouts/SpinePdf";
import VerticalLarge      from "components/MyModsLayouts/VerticalLarge";
import VerticalMedium     from "components/MyModsLayouts/VerticalMedium";
import HorizontalLarge    from "components/MyModsLayouts/HorizontalLarge";
import HorizontalMedium   from "components/MyModsLayouts/HorizontalMedium";
import layflatSquareLarge from "components/MyModsLayouts/LayFlatSquareLarge";
import SquareSmall        from "components/MyModsLayouts/SquareSmall";
// import SpecsConfigPdf                             from "components/MyModsLayouts/SpecsConfigPdf";
import saveAs                                     from "file-saver";
import JSZip                                      from "jszip";
import SquareLarge                                from "components/MyModsLayouts/SquareLarge";
import TravelCoffeeTable                          from "components/MyModsLayouts/TravelCoffeeTable";
import { Document, Page, pdf }                    from "@react-pdf/renderer";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { workSpaceSlice }                         from "store/Slices";
import { convertPDFToImages }                     from "helpers/Functions/convertPdfJpg";
import GhostTextPagesDom                          from "./GhostTextPagesDom";

const PhotoBookDownload = ({ photoBookData, onReturn }) => {
	const [photoBookConfigData, setPhotoBookConfigData] = useState(undefined);
	const [isLoading, setIsLoading] = useState(false);
	const [textPages, setTextPages] = useState(undefined);
	const [progress, setProgress] = useState(0);
	const [generationStatus, setGenerationStatus] = useState("idle");

	const dispatch = useDispatch();

	const photoBookTypes = {
		vertical : {
			mediano : {
				size                  : [612, 792],
				frontSize             : [612, 792],
				isInDoublePageLayouts : ["FrontLayout"],
				modLayouts            : { ...VerticalMedium },
			},
			grande : {
				size                  : [850, 991],
				frontSize             : [850, 991],
				isInDoublePageLayouts : ["FrontLayout"],
				modLayouts            : { ...VerticalLarge },
			},
		},
		horizontal : {
			grande : {
				size                  : [992, 850],
				frontSize             : [992, 850],
				isInDoublePageLayouts : ["FrontLayout"],
				modLayouts            : { ...HorizontalLarge },
			},
			mediano : {
				size                  : [790, 615],
				frontSize             : [790, 615],
				isInDoublePageLayouts : ["FrontLayout"],
				modLayouts            : { ...HorizontalMedium },
			},
		},
		cuadrado : {
			grande : {
				size                  : [850, 850],
				frontSize             : [850, 850],
				isInDoublePageLayouts : ["FrontLayout"],
				modLayouts            : { ...SquareLarge },
			},
			chico : {
				size                  : [595, 595],
				frontSize             : [595, 595],
				isInDoublePageLayouts : ["FrontLayout"],
				modLayouts            : { ...SquareSmall },
			},
		},
		chico : {
			size                  : [595, 595],
			isInDoublePageLayouts : ["FrontLayout"],
			modLayouts            : { ...SquareSmall },
		},
		travelcoffeetable : {
			grande : {
				size                  : [708, 850],
				isInDoublePageLayouts : ["FrontLayout"],
				modLayouts            : { ...TravelCoffeeTable },
			},
		},
		layflatCuadrado : {
			grande : {
				size                  : [1700, 850],
				isInDoublePageLayouts : [
					"FrontLayout", "Mod44", "Mod45", "Mod46", "Mod47", "Mod48", "Mod49", "Mod50",
					"Mod51", "Mod52", "Mod53", "Mod54", "Mod55", "Mod56", "Mod57", "Mod58", "Mod59",
					"Mod60", "Mod61", "Mod62", "Mod63", "Mod64", "Mod65", "Mod66", "Mod67", "Mod68",
					"Mod69", "Mod70", "Mod71", "Mod72", "Mod73", "Mod74", "Mod75", "Mod76", "Mod77", "Mod78",
				],
				modLayouts : { ...layflatSquareLarge },
			},
		},
	};

	const textImgsObj = useSelector((state) => state.workSpaceSlice.textsImgs, shallowEqual);

	const getConfigDataPhotoBook = () => {
		const myData = photoBookData?.meta?.config;
		const newData = myData.replace(/\.(heic|webp)/g, ".jpg");
		const parseJSON = JSON.parse(newData);
		dispatch(workSpaceSlice.actions.insertData({ ...parseJSON }));
		setPhotoBookConfigData({ ...parseJSON });
	};

	const listOfPhotos = (pages) => {
		const urlPhotos = [];
		const listOfPages = convertToArray(pages);

		listOfPages.forEach((page) => {
			const photosSheet1 = convertToArray(page?.sheet1?.photos);
			const photosSheet2 = page?.sheet2?.photos ? convertToArray(page?.sheet2?.photos) : undefined;

			const listPhotosSheet1 = photosSheet1.filter(photo => ((photo?.url !== "") && (photo?.id !== "")));
			const listPhotosSheet2 = photosSheet2 ? photosSheet2.filter(photo => ((photo?.url !== "") && (photo?.id !== ""))) : [];

			const allPhotos = [...listPhotosSheet1, ...listPhotosSheet2];
			const allUrl = allPhotos.map(photo => {
				if (photo?.urlPhotoEdited) {
					return photo?.urlPhotoEdited;
				}
				return photo?.url;
			});

			urlPhotos.push(...allUrl);
		});
		return urlPhotos;
	};

	const validateAllImages = async (imageUrls) => {
		const results = await Promise.allSettled(imageUrls.map((url) => loadImageWithRetry(url)));
		return results.every(result => result.status === "fulfilled");
	};

	const handlerFormat = (productType, format) => {
		if (productType === "travelcoffeetable ") {
			return "travelcoffeetable";
		}
		if ((productType === "layflat") && (format === "cuadrado")) {
			return "layflatCuadrado";
		}
		return format;
	};

	const isLayoutDoublePage = (modLayout, witheList) => {
		return witheList.includes(modLayout);
	};

	const getComponent = (pageData) => {
		const formatKey = handlerFormat(photoBookConfigData?.product, photoBookConfigData?.format);
		const sizeKey = photoBookConfigData?.sizePhotoBook;

		const Sheet1Layout = photoBookTypes[formatKey]?.[sizeKey]?.modLayouts[pageData?.sheet1?.layoutType]?.pdfLayout;
		const Sheet2Layout = photoBookTypes[formatKey]?.[sizeKey]?.modLayouts[pageData?.sheet2?.layoutType]?.pdfLayout;
		const sizePages = photoBookTypes[formatKey]?.[sizeKey]?.size;
		// const isInDoublePageLayout = isLayoutDoublePage(
		// 	pageData?.sheet1?.layoutType,
		// 	photoBookTypes[formatKey]?.[sizeKey]?.isInDoublePageLayouts
		// );

		// if (photoBookConfigData?.product === "layflat") {
		// 	return (
		// 		<Page size={sizePages} style={{ display : "flex", flexDirection : "row" }}>
		// 			<View style={{ width : isInDoublePageLayout ? "100%" : "50%", height : "100%" }}>
		// 				{Sheet1Layout && (
		// 					<Sheet1Layout
		// 						images={pageData?.sheet1?.photos}
		// 						text={pageData?.sheet1?.text}
		// 						textImgs={textImgsObj}
		// 						modLayout={pageData?.sheet1?.layoutType}
		// 						pageNo={pageData?.sheet1?.pageNo}
		// 					/>
		// 				)}
		// 			</View>
		// 			{!isInDoublePageLayout && (
		// 				<View style={{ width : "50%", height : "100%" }}>
		// 					{Sheet2Layout && (
		// 						<Sheet2Layout
		// 							images={pageData?.sheet2?.photos}
		// 							text={pageData?.sheet2?.text}
		// 							textImgs={textImgsObj}
		// 							modLayout={pageData?.sheet2?.layoutType}
		// 							pageNo={pageData?.sheet2?.pageNo}
		// 						/>
		// 					)}
		// 				</View>
		// 			)}
		// 		</Page>
		// 	);
		// }

		return (
			<>
				<Page size={sizePages}>
					{Sheet1Layout && (
						<Sheet1Layout
							images={pageData?.sheet1?.photos}
							text={pageData?.sheet1?.text}
							textImgs={textImgsObj}
							modLayout={pageData?.sheet1?.layoutType}
							pageNo={pageData?.sheet1?.pageNo}
						/>
					)}
				</Page>
				{pageData.sheet2 && (
					<Page size={sizePages}>
						{Sheet2Layout && (
							<Sheet2Layout
								images={pageData?.sheet2?.photos}
								text={pageData?.sheet2?.text}
								textImgs={textImgsObj}
								modLayout={pageData?.sheet2?.layoutType}
								pageNo={pageData?.sheet2?.pageNo}
							/>
						)}
					</Page>
				)}
			</>
		);
	};

	const combinePdfChunks = async (blobChunks) => {
		setGenerationStatus("combining");
		setProgress(95);

		try {
			const mergedPdf = await PDFDocument.create();

			for (const blob of blobChunks) {
				const arrayBuffer = await blob.arrayBuffer();
				const pdfDoc = await PDFDocument.load(arrayBuffer);
				const pages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
				pages.forEach(page => mergedPdf.addPage(page));
			}

			const mergedPdfBytes = await mergedPdf.save();
			return new Blob([mergedPdfBytes], { type : "application/pdf" });
		} catch (error) {
			console.error("Error combining PDF chunks:", error);
			throw error;
		}
	};

	const generatePdfInChunks = async (listPages) => {
		setGenerationStatus("generating");
		setProgress(0);

		try {
			const CHUNK_SIZE = 1;
			const chunks = [];
			for (let i = 0; i < listPages.length; i += CHUNK_SIZE) {
				chunks.push(listPages.slice(i, i + CHUNK_SIZE));
			}

			const blobChunks = [];

			for (let i = 0; i < chunks.length; i++) {
				setProgress(Math.round((i / chunks.length) * 90));
				await new Promise(resolve => setTimeout(resolve, 300));

				const chunkBlob = await pdf(
					<Document>
						{chunks[i].map((pageData, index) => getComponent(pageData, index))}
					</Document>
				).toBlob();

				blobChunks.push(chunkBlob);
			}

			return blobChunks;
		} catch (error) {
			console.error("Error generating PDF chunks:", error);
			setGenerationStatus("error");
			throw error;
		}
	};

	const MyDocGenerate = ({ listPages }) => {
		return (
			<Document>
				{listPages.map((pageData, index) => getComponent(pageData, index))}
			</Document>
		);
	};

	const MyDocFrontGenerate = () => {
		const formatKey = handlerFormat(photoBookConfigData?.product, photoBookConfigData?.format);
		const sizeKey = photoBookConfigData?.sizePhotoBook;
		const SheetFrontLayout = photoBookTypes[formatKey]?.[sizeKey]?.modLayouts[photoBookConfigData?.frontPage?.sheet1?.layoutType]?.pdfLayout;
		const sizeFrontPage = photoBookTypes[formatKey]?.[sizeKey]?.frontSize;

		return (
			<Document>
				{photoBookConfigData?.product === "white" && SheetFrontLayout && (
					<Page size={sizeFrontPage}>
						<SheetFrontLayout
							images={photoBookConfigData?.frontPage?.sheet1?.photos}
							text={photoBookConfigData?.frontPage?.sheet1?.text}
						/>
					</Page>
				)}
			</Document>
		);
	};

	const MyDocBoundGenerate = () => {
		const formatKey = handlerFormat(photoBookConfigData?.product, photoBookConfigData?.format);
		const sizeKey = photoBookConfigData?.sizePhotoBook;
		const sizeFrontPage = photoBookTypes[formatKey]?.[sizeKey]?.frontSize;

		return (
			<Document>
				{photoBookConfigData?.product === "white" && (
					<Page size={sizeFrontPage}>
						<SpinePhotoBook text={photoBookConfigData?.bound} />
					</Page>
				)}
			</Document>
		);
	};

	// const MyDocFrontSpecsConfig = () => {
	// 	return (
	// 		<Document>
	// 			<Page size="A4">
	// 				<SpecsConfigPdf />
	// 			</Page>
	// 		</Document>
	// 	);
	// };

	const zipDownload = async (pdfBlob, frontPdfBlob, boundPdfBlob, SpecsConfigBlob) => {
		const zip = new JSZip();
		const baseName = `${photoBookData?.meta?.correo_del_autor}-noPedido-${photoBookData?.meta?.id_del_pedido}-photobookId_${photoBookData?.id}`;

		zip.file(`${baseName}/Paginas.pdf`, pdfBlob);
		if (frontPdfBlob) zip.file(`${baseName}/Portada.pdf`, frontPdfBlob);
		if (boundPdfBlob) zip.file(`${baseName}/Lomo.pdf`, boundPdfBlob);
		if (SpecsConfigBlob) zip.file(`${baseName}/Especificaciones.pdf`, SpecsConfigBlob);

		const content = await zip.generateAsync({ type : "blob" });
		saveAs(content, `${baseName}.zip`);
	};

	const downloadImagesAsZip = async (imagesDataUrls, zipName = "imagenes") => {
		const zip = new JSZip();
		imagesDataUrls.forEach((dataUrl, index) => {
			const base64Data = dataUrl.split(",")[1];
			zip.file(`pagina_${index + 1}.jpg`, base64Data, { base64 : true });
		});
		const content = await zip.generateAsync({ type : "blob" });
		saveAs(content, `${zipName}.zip`);
	};

	const createPDFPhotoBook = async (photBookConfig) => {
		try {
			const listPages = convertToArray(photBookConfig?.pages);
			const blob = await pdf(<MyDocGenerate listPages={listPages} />).toBlob();
			const images = await convertPDFToImages(blob);
			await downloadImagesAsZip(images, `${photoBookData?.meta?.id_del_pedido}-${photoBookData?.meta?.correo_del_autor}`);
		} catch (error) {
			console.error("Error al generar el photobook:", error);
			throw error;
		}
	};

	const handlerDownload = async () => {
		setIsLoading(true);
		setGenerationStatus("preparing");
		setProgress(0);

		try {
			const urlPhotos = listOfPhotos(photoBookConfigData?.pages);
			setGenerationStatus("validating_images");
			setProgress(10);

			const imagesOk = await validateAllImages(urlPhotos);
			if (!imagesOk) {
				setIsLoading(false);
				setGenerationStatus("error");
				return;
			}

			const listPages = convertToArray(photoBookConfigData?.pages);

			if (photoBookConfigData.product === "layflat") {
				setGenerationStatus("generating_images");
				setProgress(20);
				await createPDFPhotoBook(photoBookConfigData);
			} else {
				setGenerationStatus("generating_pages");
				const blobChunks = await generatePdfInChunks(listPages);

				setGenerationStatus("generating_auxiliary");
				setProgress(90);
				const [blobFrontPhotoBook, blobSpinePhotoBook] = await Promise.all([
					photoBookConfigData?.product === "white" ? pdf(<MyDocFrontGenerate />).toBlob() : null,
					photoBookConfigData?.product === "white" ? pdf(<MyDocBoundGenerate />).toBlob() : null,
				]);

				setGenerationStatus("combining");
				const mergedBlob = await combinePdfChunks(blobChunks);

				setGenerationStatus("packaging");
				await zipDownload(mergedBlob, blobFrontPhotoBook, blobSpinePhotoBook);
			}

			setGenerationStatus("completed");
			setProgress(100);
		} catch (error) {
			console.error("Download error:", error);
			setGenerationStatus("error");
		} finally {
			setIsLoading(false);
			setTimeout(() => {
				if (generationStatus !== "error") {
					setGenerationStatus("idle");
					setProgress(0);
				}
			}, 2000);
		}
	};

	useEffect(() => {
		setIsLoading(true);
		if (photoBookData && (photoBookData?.meta?.config !== "")) {
			getConfigDataPhotoBook();
		}
	}, [photoBookData]);

	useEffect(() => {
		if (photoBookConfigData?.pages) {
			setTextPages(listTextPagesAvailable(photoBookConfigData?.pages));
		}
	}, [photoBookConfigData]);

	useEffect(() => {
		const isAvailableTextPages = textPages && isValidArray(textPages);
		if (isAvailableTextPages) {
			const formatKey = handlerFormat(photoBookConfigData?.product, photoBookConfigData?.format);
			const sizeKey = photoBookConfigData?.sizePhotoBook;
			const modsLayoutsConfigPhotoBook = photoBookTypes[formatKey]?.[sizeKey]?.modLayouts;

			const listIdsTextImgs = handlerIdsTextPages(textPages, modsLayoutsConfigPhotoBook);
			const blobTextImgs = listIdsTextImgs.map(async (textId) => {
				const textImg = await textToImage(textId);
				return { id : textId, textImg };
			});

			Promise.all(blobTextImgs)
				.then((textImgs) => {
					const textImgsObj = convertToObject(textImgs);
					dispatch(workSpaceSlice.actions.addTextImgs({ textImgs : textImgsObj }));
					setIsLoading(false);
				})
				.catch((error) => {
					console.log(error);
					setIsLoading(false);
				});
		}
	}, [textPages, photoBookConfigData]);

	return (
		<Stack
			w="100%"
			h="100%"
			align="center"
			justify="center"
			style={{ position : "relative" }}
		>
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
					<Stack spacing={3}>
						<Text style={{ letterSpacing : "4px" }}>DATOS DEL PEDIDO</Text>
						<Group spacing={30}>
							<Stack spacing={3}>
								<Text color="gray" size="13px" weight={400}>NO DE PEDIDO</Text>
								<Text weight={400} size="14px">#{photoBookData?.meta?.id_del_pedido ?? "--"}</Text>
							</Stack>
							<Stack spacing={3}>
								<Text color="gray" size="13px" weight={400}>ID PHOTOBOOK</Text>
								<Text weight={400} size="14px">{photoBookData?.id ?? "--"}</Text>
							</Stack>
							<Stack spacing={3}>
								<Text color="gray" size="13px" weight={400}>CORREO DEL AUTOR</Text>
								<Text weight={400} size="14px">{photoBookData?.meta?.correo_del_autor ?? "--"}</Text>
							</Stack>
						</Group>
					</Stack>
					<Divider size="sm" variant="dashed" />
					<Stack spacing={3}>
						<Text style={{ letterSpacing : "4px" }}>INFORMACIÓN DEL PHOTOBOOK</Text>
						<Group spacing={30}>
							<Stack spacing={3}>
								<Text color="gray" size="13px" weight={400}>MODELO</Text>
								<Text weight={400} size="14px">{photoBookData?.meta?.modelo ?? "--"}</Text>
							</Stack>
							<Stack spacing={3}>
								<Text color="gray" size="13px" weight={400}>TAMAÑO</Text>
								<Text weight={400} size="14px">{photoBookData?.meta?.tamano ?? "--"}</Text>
							</Stack>
						</Group>
					</Stack>
					<Stack spacing={"0px"}>
						<Button
							color="darkCasaMatte.7"
							size="xs"
							mt="20px"
							sx={{ fontWeight : "200" }}
							loading={isLoading}
							onClick={handlerDownload}
							rightIcon={<SaveIcom size="12px" />}
							disabled={!photoBookConfigData || generationStatus === "generating"}
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
				</Stack>
			</Card>

			{generationStatus !== "idle" && (
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
						{generationStatus === "preparing" && "Preparando descarga..."}
						{generationStatus === "validating_images" && "Validando imágenes..."}
						{generationStatus === "generating_pages" && "Generando páginas..."}
						{generationStatus === "generating_auxiliary" && "Generando portada..."}
						{generationStatus === "combining" && "Combinando PDFs..."}
						{generationStatus === "packaging" && "Empaquetando archivos..."}
						{generationStatus === "completed" && "¡Descarga completada!"}
						{generationStatus === "error" && "Error en la generación"}
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
			)}

			{textPages && <GhostTextPagesDom textPages={textPages} />}
		</Stack>
	);
};

export default PhotoBookDownload;
