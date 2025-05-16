import { Card, Stack, Divider, Text, Group, Button } from "@mantine/core";
import { convertToArray }                            from "helpers";
import { useEffect, useState }                       from "react";
import { SaveIcom }                                  from "Resources/icons";
import { loadImageWithRetry }                        from "./cardSearchPhotoBook.helpers";

import SpinePhotoBook from "components/MyModsLayouts/SpinePdf";

import VerticalLarge    from "components/MyModsLayouts/VerticalLarge";
import VerticalMedium   from "components/MyModsLayouts/VerticalMedium";
import HorizontalLarge  from "components/MyModsLayouts/HorizontalLarge";
import HorizontalMedium from "components/MyModsLayouts/HorizontalMedium";
import SquareSmall      from "components/MyModsLayouts/SquareSmall";
// eslint-disable-next-line import/no-extraneous-dependencies
import saveAs from "file-saver";
// eslint-disable-next-line import/no-extraneous-dependencies
import JSZip                   from "jszip";
import SquareLarge             from "components/MyModsLayouts/SquareLarge";
import TravelCoffeeTable       from "components/MyModsLayouts/TravelCoffeeTable";
import { Document, Page, pdf } from "@react-pdf/renderer";
import { useDispatch }         from "react-redux";
import { workSpaceSlice }      from "store/Slices";
import { openContextModal }    from "@mantine/modals";

const PhotoBookDownload = ({ photoBookData, onReturn }) => {
	const [ photoBookConfigData, setPhotoBookConfigData ] = useState(undefined);
	const [ isLoading, setIsLoading ] = useState(false);

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
	};

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
		try {
		  await Promise.allSettled(imageUrls.map((url) => loadImageWithRetry(url)));
		  return true;
		} catch (error) {
		  console.error("Error cargando imágenes:", error.message);
		  return false;
		}
	};

	const handlerFormat = (productType) => {
		if ( productType === "travelcoffeetable ") {
			return "travelcoffeetable";
		}
		return photoBookConfigData?.format;
	};

	const getComponent = (pageData) => {
		const Sheet1Layout = photoBookTypes[handlerFormat(photoBookConfigData?.product)]?.[photoBookConfigData?.sizePhotoBook]?.modLayouts[pageData?.sheet1?.layoutType]?.pdfLayout;

		const Sheet2Layout = photoBookTypes[handlerFormat(photoBookConfigData?.product)]?.[photoBookConfigData?.sizePhotoBook]?.modLayouts[pageData?.sheet2?.layoutType]?.pdfLayout;

		const sizePages = photoBookTypes[handlerFormat(photoBookConfigData?.product)]?.[photoBookConfigData?.sizePhotoBook]?.size;

		return (
			<>
				{Sheet1Layout ? (
					<Page size={sizePages}>
						<Sheet1Layout images={pageData?.sheet1?.photos} text={pageData?.sheet1?.text} />
					</Page>
				) : undefined}
				{Sheet2Layout ? (
					<Page size={sizePages}>
						<Sheet2Layout images={pageData?.sheet2?.photos} text={pageData?.sheet2?.text} />
					</Page>
				) : undefined}
			</>
		);
	};

	const SheetSpineLayout = SpinePhotoBook;

	const SheetFrontLayout = photoBookTypes[handlerFormat(photoBookConfigData?.product)]?.[photoBookConfigData?.sizePhotoBook]?.modLayouts[photoBookConfigData?.frontPage?.sheet1?.layoutType]?.pdfLayout;

	const sizeFrontPage = photoBookTypes[handlerFormat(photoBookConfigData?.product)]?.[photoBookConfigData?.sizePhotoBook]?.frontSize;

	const MyDocGenerate = ({listPages}) => {
		return (
			<Document>
				<>
					{
						((photoBookConfigData?.product === "white") && SheetFrontLayout) && (
							<Page size={sizeFrontPage}>
								<SheetSpineLayout text={photoBookConfigData?.bound} />
							</Page>
						)
					}
					{
						((photoBookConfigData?.product === "white") && SheetFrontLayout) && (
							<Page size={sizeFrontPage}>
								<SheetFrontLayout images={photoBookConfigData?.frontPage?.sheet1?.photos} text={photoBookConfigData?.frontPage?.sheet1?.text} />
							</Page>
						)
					}
					{
						listPages.map((pageData, index) => getComponent(pageData, index))
					}
				</>
			</Document>
		);
	};


	const zipDownload = async (pdfBlob) => {
		const zip = new JSZip();
		zip.file(`${photoBookData?.meta?.correo_del_autor}-noPedido-${photoBookData?.meta?.id_del_pedido}-photobookId_${photoBookData?.id}/${photoBookData?.meta?.correo_del_autor}-noPedido-${photoBookData?.meta?.id_del_pedido}-photobookId_${photoBookData?.id}.pdf`, pdfBlob);
		const content = await zip.generateAsync({ type : "blob" });
		saveAs(content, `${photoBookData?.meta?.correo_del_autor}-noPedido-${photoBookData?.meta?.id_del_pedido}-photobookId_${photoBookData?.id}.zip`);
	};

	const createPDFPhotoBook = async (photBookConfig) => {
		try {
			const listPages = convertToArray(photBookConfig?.pages);
			// Generar el documento PDF como un Blob
			const blob = await pdf(<MyDocGenerate listPages={listPages} />).toBlob();

			await zipDownload(blob);
		} catch (error) {
			console.error("Error al subir el archivo:", error);
		}
	};

	const handlerDownload = async () => {
		setIsLoading(true);
		const urlPhotos = listOfPhotos(photoBookConfigData?.pages);
		const imagesOk = await validateAllImages(urlPhotos);
		if (imagesOk) {
			openContextModal({
				modal      : "testPdf",
				innerProps : {
					photoBookData : photoBookConfigData,
				},
			});
			setIsLoading(false);
			return;
		}
		setIsLoading(false);
	};

	useEffect(() => {
		if (photoBookData && (photoBookData?.meta?.config !== "")) {
			getConfigDataPhotoBook();
		}
	}, [photoBookData]);

	return (
		<Card
			radius="13px"
			shadow="lg"
			w="40%"
			p="30px"
			pt="35px"
			style={{
				backgroundColor : "#F7F5F1",
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
						PREVISUALIZAR Y DESCARGAR
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
	);
};

export default PhotoBookDownload;
