import { Card, Stack, Divider, Text, Group, Button }                       from "@mantine/core";
import { convertToArray, convertToObject, isValidArray, textToImage }      from "helpers";
import { useEffect, useState }                                             from "react";
import { SaveIcom }                                                        from "Resources/icons";
import { handlerIdsTextPages, listTextPagesAvailable, loadImageWithRetry } from "./cardSearchPhotoBook.helpers";

import SpinePhotoBook from "components/MyModsLayouts/SpinePdf";

import VerticalLarge      from "components/MyModsLayouts/VerticalLarge";
import VerticalMedium     from "components/MyModsLayouts/VerticalMedium";
import HorizontalLarge    from "components/MyModsLayouts/HorizontalLarge";
import HorizontalMedium   from "components/MyModsLayouts/HorizontalMedium";
import layflatSquareLarge from "components/MyModsLayouts/LayFlatSquareLarge";
import SquareSmall        from "components/MyModsLayouts/SquareSmall";
import SpecsConfigPdf     from "components/MyModsLayouts/SpecsConfigPdf";
// eslint-disable-next-line import/no-extraneous-dependencies
import saveAs from "file-saver";
// eslint-disable-next-line import/no-extraneous-dependencies
import JSZip                                      from "jszip";
import SquareLarge                                from "components/MyModsLayouts/SquareLarge";
import TravelCoffeeTable                          from "components/MyModsLayouts/TravelCoffeeTable";
import { Document, Page, pdf, View }              from "@react-pdf/renderer";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { workSpaceSlice }                         from "store/Slices";
import { convertPDFToImages }                     from "helpers/Functions/convertPdfJpg";
import GhostTextPagesDom                          from "./GhostTextPagesDom";

const PhotoBookDownload = ({ photoBookData, onReturn }) => {
	const [ photoBookConfigData, setPhotoBookConfigData ] = useState(undefined);
	const [ isLoading, setIsLoading ] = useState(false);

	const [ textPages, setTextPages ] = useState(undefined);

	const dispatch = useDispatch();


	const photoBookTypes = {
		vertical : {
			mediano : {
				size                  : [612, 792],
				frontSize             : [612, 792],
				isInDoublePageLayouts : ["FrontLayout"],
				modLayouts            : {...VerticalMedium},
			},
			grande : {
				size                  : [850, 991],
				frontSize             : [850, 991],
				isInDoublePageLayouts : ["FrontLayout"],
				modLayouts            : {...VerticalLarge},
			},
		},
		horizontal : {
			grande : {
				size                  : [992, 850],
				frontSize             : [992, 850],
				isInDoublePageLayouts : ["FrontLayout"],
				modLayouts            : {...HorizontalLarge},
			},
			mediano : {
				size                  : [790, 615],
				frontSize             : [790, 615],
				isInDoublePageLayouts : ["FrontLayout"],
				modLayouts            : {...HorizontalMedium},
			},
		},
		cuadrado : {
			grande : {
				size                  : [850, 850],
				frontSize             : [850, 850],
				isInDoublePageLayouts : ["FrontLayout"],
				modLayouts            : {...SquareLarge},
			},
			chico : {
				size                  : [595, 595],
				frontSize             : [595, 595],
				isInDoublePageLayouts : ["FrontLayout"],
				modLayouts            : {...SquareSmall},
			},
		},
		chico : {
			size                  : [595, 595],
			isInDoublePageLayouts : ["FrontLayout"],
			modLayouts            : {...SquareSmall},
		},
		travelcoffeetable : {
			grande : {
				size                  : [708, 850],
				isInDoublePageLayouts : ["FrontLayout"],
				modLayouts            : {...TravelCoffeeTable},
			},
		},
		layflatCuadrado : {
			grande : {
				size                  : [1700, 850],
				isInDoublePageLayouts : [
					"FrontLayout",
					"Mod44",
					"Mod45",
					"Mod46",
					"Mod47",
					"Mod48",
					"Mod49",
					"Mod50",
					"Mod51",
					"Mod52",
					"Mod53",
					"Mod54",
					"Mod55",
					"Mod56",
					"Mod57",
					"Mod58",
					"Mod59",
					"Mod60",
					"Mod61",
					"Mod62",
					"Mod63",
					"Mod64",
					"Mod65",
					"Mod66",
					"Mod67",
					"Mod68",
					"Mod69",
					"Mod70",
					"Mod71",
					"Mod72",
					"Mod73",
					"Mod74",
					"Mod75",
					"Mod76",
					"Mod77",
					"Mod78",
				],
				modLayouts : {...layflatSquareLarge},
			},
		},
	};

	const textImgsObj = useSelector((state) => state.workSpaceSlice.textsImgs, shallowEqual);

	const getConfigDataPhotoBook = () => {
		const myData = photoBookData?.meta?.config;
		const newData = myData.replace(/\.(heic|webp)/g, ".jpg");
		const parseJSON = JSON.parse(newData);
		dispatch(workSpaceSlice.actions.insertData({...parseJSON}));
		setPhotoBookConfigData({...parseJSON});
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
		console.log(results);
		return true;
	};

	const handlerFormat = (productType, format) => {
		if ( productType === "travelcoffeetable ") {
			return "travelcoffeetable";
		}
		if ( (productType === "layflat") && (format === "cuadrado") ) {
			return "layflatCuadrado";
		}
		return format;
	};

	const isLayoutDoublePage = (modLayout, witheList) => {
		const isAvailableDouble = witheList.includes(modLayout);
		return isAvailableDouble;
	};

	const getComponent = (pageData) => {
		const Sheet1Layout = photoBookTypes[handlerFormat(photoBookConfigData?.product, photoBookConfigData?.format)]?.[photoBookConfigData?.sizePhotoBook]?.modLayouts[pageData?.sheet1?.layoutType]?.pdfLayout;

		const Sheet2Layout = photoBookTypes[handlerFormat(photoBookConfigData?.product, photoBookConfigData?.format)]?.[photoBookConfigData?.sizePhotoBook]?.modLayouts[pageData?.sheet2?.layoutType]?.pdfLayout;

		const sizePages = photoBookTypes[handlerFormat(photoBookConfigData?.product, photoBookConfigData?.format)]?.[photoBookConfigData?.sizePhotoBook]?.size;

		const isInDoublePageLayout = isLayoutDoublePage(pageData?.sheet1?.layoutType, photoBookTypes[handlerFormat(photoBookConfigData?.product, photoBookConfigData?.format)]?.[photoBookConfigData?.sizePhotoBook]?.isInDoublePageLayouts);

		// if ((Sheet1Layout && Sheet2Layout) || isInDoublePageLayout) {
		// 	if (Sheet1Layout && isInDoublePageLayout) {
		// 		return (
		// 			<>
		// 				<Page size={[850, 991]}>
		// 					<Sheet1Layout images={pageData?.sheet1?.photos} />
		// 				</Page>
		// 				<Page size={[850, 991]}>
		// 					<Sheet1Layout images={pageData?.sheet1?.photos} isRightPage />
		// 				</Page>
		// 			</>
		// 		);
		// 	}
		// }
		if ( photoBookConfigData?.product === "layflat" ) {
			return (
				<Page
					size={sizePages}
					style={{display : "flex", flexDirection : "row"}}
				>
					<View
						style={{
							width  : isInDoublePageLayout ? "100%" : "50%",
							height : "100%",
						}}
					>
						{
							Sheet1Layout ? (
								<Sheet1Layout
									images={pageData?.sheet1?.photos}
									text={pageData?.sheet1?.text}
									textImgs={textImgsObj}
									modLayout={pageData?.sheet1?.layoutType}
									pageNo={pageData?.sheet1?.pageNo}
								/>
							) : (
								""
							)
						}
					</View>
					{
						!isInDoublePageLayout && (
							<View
								style={{
									width  : "50%",
									height : "100%",
								}}
							>
								{
									Sheet2Layout ? (
										<Sheet2Layout
											images={pageData?.sheet2?.photos}
											text={pageData?.sheet2?.text}
											textImgs={textImgsObj}
											modLayout={pageData?.sheet2?.layoutType}
											pageNo={pageData?.sheet2?.pageNo}
										/>
									) : (
										""
									)
								}
							</View>
						)
					}
				</Page>
			);
		}

		return (
			<>
				<Page size={sizePages}>
					{
						Sheet1Layout ? (
							<Sheet1Layout
								images={pageData?.sheet1?.photos}
								text={pageData?.sheet1?.text}
								textImgs={textImgsObj}
								modLayout={pageData?.sheet1?.layoutType}
								pageNo={pageData?.sheet1?.pageNo}
							/>
						) : (
							""
						)
					}
				</Page>
				{pageData.sheet2 ? (
					<Page size={sizePages}>
						{
							Sheet2Layout ? (
								<Sheet2Layout
									images={pageData?.sheet2?.photos}
									text={pageData?.sheet2?.text}
									textImgs={textImgsObj}
									modLayout={pageData?.sheet2?.layoutType}
									pageNo={pageData?.sheet2?.pageNo}
								/>
							) : (
								""
							)
						}
					</Page>
				) : undefined}
			</>
		);
	};

	const SheetSpineLayout = SpinePhotoBook;

	const SheetFrontLayout = photoBookTypes[handlerFormat(photoBookConfigData?.product, photoBookConfigData?.format)]?.[photoBookConfigData?.sizePhotoBook]?.modLayouts[photoBookConfigData?.frontPage?.sheet1?.layoutType]?.pdfLayout;

	const sizeFrontPage = photoBookTypes[handlerFormat(photoBookConfigData?.product, photoBookConfigData?.format)]?.[photoBookConfigData?.sizePhotoBook]?.frontSize;

	const MyDocGenerate = ({listPages}) => {
		return (
			<Document>
				<>
					{
						listPages.map((pageData, index) => getComponent(pageData, index))
					}
				</>
			</Document>
		);
	};

	const MyDocFrontGenerate = () => {
		return (
			<Document>
				<>
					{
						((photoBookConfigData?.product === "white") && SheetFrontLayout) && (
							<Page size={sizeFrontPage}>
								<SheetFrontLayout
									images={photoBookConfigData?.frontPage?.sheet1?.photos}
									text={photoBookConfigData?.frontPage?.sheet1?.text}
								/>
							</Page>
						)
					}
				</>
			</Document>
		);
	};

	const MyDocBoundGenerate = () => {
		return (
			<Document>
				<>
					{
						((photoBookConfigData?.product === "white") && SheetFrontLayout) && (
							<Page size={sizeFrontPage}>
								<SheetSpineLayout
									text={photoBookConfigData?.bound}
								/>
							</Page>
						)
					}
				</>
			</Document>
		);
	};

	const MyDocFrontSpecsConfig = () => {
		return (
			<Document>
				<>
					<Page size="A4">
						<SpecsConfigPdf />
					</Page>
				</>
			</Document>
		);
	};

	const zipDownload = async (pdfBlob, frontPdfBlob, boundPdfBlob, SpecsConfigBlob) => {
		const zip = new JSZip();
		zip.file(`${photoBookData?.meta?.correo_del_autor}-noPedido-${photoBookData?.meta?.id_del_pedido}-photobookId_${photoBookData?.id}/Paginas.pdf`, pdfBlob);
		zip.file(`${photoBookData?.meta?.correo_del_autor}-noPedido-${photoBookData?.meta?.id_del_pedido}-photobookId_${photoBookData?.id}/Portada.pdf`, frontPdfBlob);
		zip.file(`${photoBookData?.meta?.correo_del_autor}-noPedido-${photoBookData?.meta?.id_del_pedido}-photobookId_${photoBookData?.id}/Lomo.pdf`, boundPdfBlob);
		zip.file(`${photoBookData?.meta?.correo_del_autor}-noPedido-${photoBookData?.meta?.id_del_pedido}-photobookId_${photoBookData?.id}/Especificaciones.pdf`, SpecsConfigBlob);
		const content = await zip.generateAsync({ type : "blob" });
		saveAs(content, `${photoBookData?.meta?.correo_del_autor}-noPedido-${photoBookData?.meta?.id_del_pedido}-photobookId_${photoBookData?.id}.zip`);
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
			// Generar el documento PDF como un Blob
			const blob = await pdf(<MyDocGenerate listPages={listPages} />).toBlob();

			const images = await convertPDFToImages(blob);

			await downloadImagesAsZip(images, `${photoBookData?.meta?.id_del_pedido}-${photoBookData?.meta?.correo_del_autor}`);
			return;

			// await zipDownload(blob);
		} catch (error) {
			console.error("Error al subir el archivo:", error);
			return;
		}
	};

	const handlerDownload = async () => {
		setIsLoading(true);
		const urlPhotos = listOfPhotos(photoBookConfigData?.pages);
		const imagesOk = await validateAllImages(urlPhotos);
		if (photoBookConfigData.product === "layflat") {
			await createPDFPhotoBook(photoBookConfigData);
			setIsLoading(false);
			return;
		}
		if (imagesOk) {
			const listPages = convertToArray(photoBookConfigData?.pages);

			const blobPagesPhotoBook = await pdf(<MyDocGenerate listPages={listPages} />).toBlob();
			const blobFrontPhotoBook = await pdf(<MyDocFrontGenerate />).toBlob();
			const blobSpinePhotoBook = await pdf(<MyDocBoundGenerate />).toBlob();
			const blobSpecsConfigPhotoBook = await pdf(<MyDocFrontSpecsConfig />).toBlob();

			zipDownload(blobPagesPhotoBook, blobFrontPhotoBook, blobSpinePhotoBook, blobSpecsConfigPhotoBook);
			return;
		}
		setIsLoading(false);
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
			const modsLayoutsConfigPhotoBook = photoBookTypes[handlerFormat(photoBookConfigData?.product, photoBookConfigData?.format)]?.[photoBookConfigData?.sizePhotoBook]?.modLayouts;
			const listIdsTextImgs = handlerIdsTextPages(textPages, modsLayoutsConfigPhotoBook);
			const blobTextImgs = listIdsTextImgs.map(async (textId) => {
				const textImg = await textToImage(textId);
				return {
					id : textId,
					textImg,
				};
			});
			Promise.all(blobTextImgs).then((textImgs) => {
				const textImgsObj = convertToObject(textImgs);
				dispatch(workSpaceSlice.actions.addTextImgs({ textImgs : textImgsObj }));
				setIsLoading(false);
			}).catch((error) => {
				console.log(error);
				setIsLoading(false);
			});
		}
	}, [textPages]);

	return (
		<Stack
			w="100%"
			h="100%"
			align="center"
			justify="center"
			style={{
				position : "relative",
			}}
		>
			<Card
				radius="13px"
				shadow="lg"
				w="40%"
				p="30px"
				h="380px"
				pt="35px"
				style={{
					backgroundColor : "#F7F5F1",
					position        : "absolute",
				}}
				withBorder
			>
				<Stack>
					<Stack spacing={3}>
						<Text
							style={{
								letterSpacing : "4px",
							}}
						>
							DATOS DEL PEDIDO
						</Text>
						<Group spacing={30}>
							<Stack spacing={3}>
								<Text
									color="gray"
									size="13px"
									weight={400}
								>
									NO DE PEDIDO
								</Text>
								<Text
									weight={400}
									size="14px"
								>
									#{photoBookData?.meta?.id_del_pedido ?? "--"}
								</Text>
							</Stack>
							<Stack spacing={3}>
								<Text
									color="gray"
									size="13px"
									weight={400}
								>
									ID PHOTOBOOK
								</Text>
								<Text
									weight={400}
									size="14px"
								>
									{photoBookData?.id ?? "--"}
								</Text>
							</Stack>
							<Stack spacing={3}>
								<Text
									color="gray"
									size="13px"
									weight={400}
								>
									CORREO DEL AUTOR
								</Text>
								<Text
									weight={400}
									size="14px"
								>
									{photoBookData?.meta?.correo_del_autor ?? "--"}
								</Text>
							</Stack>
						</Group>
					</Stack>
					<Divider size="sm" variant="dashed" />
					<Stack spacing={3}>
						<Text
							style={{
								letterSpacing : "4px",
							}}
						>
							INFORMACIÓN DEL PHOTOBOOK
						</Text>
						<Group
							spacing={30}
						>
							<Stack spacing={3}>
								<Text
									color="gray"
									size="13px"
									weight={400}
								>
									MODELO
								</Text>
								<Text
									weight={400}
									size="14px"
								>
									{photoBookData?.meta?.modelo ?? "--"}
								</Text>
							</Stack>
							<Stack spacing={3}>
								<Text
									color="gray"
									size="13px"
									weight={400}
								>
									TAMAÑO
								</Text>
								<Text
									weight={400}
									size="14px"
								>
									{photoBookData?.meta?.tamano ?? "--"}
								</Text>
							</Stack>
						</Group>
					</Stack>
					<Stack spacing={"0px"}>
						<Button
							color="darkCasaMatte.7"
							size="xs"
							mt="20px"
							sx={{
								fontWeight : "200",
							}}
							loading={isLoading}
							onClick={() => handlerDownload()}
							rightIcon={<SaveIcom size="12px" />}
							disabled={!photoBookConfigData}
							fullWidth
						>
							DESCARGAR
						</Button>
						<Button
							color="darkCasaMatte.6"
							size="xs"
							mt="20px"
							sx={{
								fontWeight : "200",
							}}
							onClick={onReturn}
							loading={isLoading}
							fullWidth
						>
							REGRESAR
						</Button>
					</Stack>
				</Stack>
			</Card>
			{
				textPages && (
					<GhostTextPagesDom
						textPages={textPages}
					/>
				)
			}
		</Stack>
	);
};

export default PhotoBookDownload;
