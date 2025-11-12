import { useContext, useEffect, useState } from "react";
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

import GhostPagesDom from "./GhostPagesDom";


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
	const {setCurrentConfigPhotoBook} = useContext(currentConfigPhotoBookContext);

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

	const handlerAndParseConfig = (config) => {
		const myData = config.replace(/\.(heic|webp)/g, ".jpg");
		const parseJSON = JSON.parse(myData);
		const pagesList = convertToArray(parseJSON?.pages);
		if (isValidArray(pagesList)) {
			setBookSpreadPages(pagesList);
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
	}, [currentIndexSpread]);

	const LayoutContainerPage = ({imgSrc}) => {
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

	const PageComponent = ({children}) => {
		const formatKey = bookConfigData?.format;
		const sizeKey = bookConfigData?.sizePhotoBook;
		const config = PHOTO_BOOK_TYPES[formatKey]?.[sizeKey];

		const { size } = config;

		return (
			<Page size={size}>
				{ children }
			</Page>
		);
	};

	const zipDownload = async (pdfBlob) => {
		const zip = new JSZip();
		const baseName = `${photoBookData.correo_del_autor}-noPedido-${photoBookData.id_del_pedido}-photobookId_${photoBookData.id}`;

		zip.file(`${baseName}/Paginas.pdf`, pdfBlob);

		saveAs(await zip.generateAsync({ type : "blob" }), `${baseName}.zip`);
	};

	const handlerTakeSnapshot = async () => {
		const bloblImagePage1 = await textToImage(`${1}-snapshot`);
		const bloblImagePage2 = await textToImage(`${2}-snapshot`);

		const myBlobPages = [];

		myBlobPages.push(bloblImagePage1);

		if (bloblImagePage2) {
			myBlobPages.push(bloblImagePage2);
		}

		setBase64ImagePages(prev => [...prev, ...myBlobPages]);
	};

	const handleDownload = async () => {
		let counterPagesTakeSnapshot = 0;

		while (counterPagesTakeSnapshot <= bookSpreadPages.length) {
			await handlerTakeSnapshot();
			setCurrentIndexSpread(prev => prev + 1);
			counterPagesTakeSnapshot++;
		}

		if (counterPagesTakeSnapshot === (bookSpreadPages.length - 1)) {
			const blobPdf = await pdf(
				<Document>
					{base64ImagePages.map((base64PageImg, index) => (
						<PageComponent key={index}>
							<LayoutContainerPage imgSrc={base64PageImg} />
						</PageComponent>
					))}
				</Document>
			).toBlob();

			await zipDownload(blobPdf);
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
				onDownload={() => handleDownload()}
				onReturn={onReturn}
			/>
			{currentSpreadDataPage && (
				<GhostPagesDom
					spreadPage={currentSpreadDataPage}
				/>
			)}
			{generationStatus !== "idle" && <StatusCard />}
		</Stack>
	);
};

const OrderInfoCard = ({ photoBookData, isLoading, generationStatus, onDownload, onReturn }) => (
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
