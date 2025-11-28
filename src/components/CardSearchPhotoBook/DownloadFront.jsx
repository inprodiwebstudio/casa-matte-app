import { Stack, Button }                          from "@mantine/core";
import { FaBook }                                 from "react-icons/fa";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import GhostFrontDom                              from "./GhostFrontDom";
import { snapShotCover }                          from "helpers";
import { useEffect, useState }                    from "react";
import { workSpaceSlice }                         from "store/Slices";
import { Document, Page, pdf }                    from "@react-pdf/renderer";
import Html                                       from "react-pdf-html";
import ReactDOMServer                             from "react-dom/server";
import SpecsConfigPdf                             from "components/MyModsLayouts/SpecsConfigPdf";
import { PHOTO_BOOK_TYPES }                       from "./cardSearchPhotoBook.constants";

const DownloadFront = () => {
	const dispatch = useDispatch();
	const bookConfigData = useSelector((state) => state.workSpaceSlice.data, shallowEqual);
	const frontTypeBook = useSelector((state) => state.workSpaceSlice.frontBookTypeView, shallowEqual);
	const availableSpine = useSelector((state) => state.workSpaceSlice.data.availableSpine, shallowEqual);

	const spineText = bookConfigData?.bound;

	const isAvailableSpineText = availableSpine && (spineText !== "");

	const [frontImages, setFrontImages] = useState([]);

	const handlerDownloadFront = async () => {
		const blobImageFullFront = await snapShotCover("spanShotCover");
		setFrontImages(prev => [ ...prev, blobImageFullFront]);
		dispatch(workSpaceSlice.actions.changeFrontBookTypeView("whitOutImage"));
	};

	const generateFrontWhitOutImage = async () => {
		const blobImageWithoutImage = await snapShotCover("spanShotCover");
		setFrontImages(prev => [ ...prev, blobImageWithoutImage]);
		dispatch(workSpaceSlice.actions.changeFrontBookTypeView("whitOutText"));
	};

	const generateFrontWhitOutText = async () => {
		const blobImageWithoutImage = await snapShotCover("spanShotCover");
		setFrontImages(prev => [ ...prev, blobImageWithoutImage]);
		if (isAvailableSpineText) {
			dispatch(workSpaceSlice.actions.changeFrontBookTypeView("spineText"));
		} else {
			dispatch(workSpaceSlice.actions.changeFrontBookTypeView(null));
		}
	};

	const handlerSnapShotSpineText = async () => {
		const blobImageSpineText = await snapShotCover("snapShotSpine");
		setFrontImages(prev => [ ...prev, blobImageSpineText]);
		dispatch(workSpaceSlice.actions.changeFrontBookTypeView(null));
	};

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

	const LayoutContainerPage = ({ imgSrc, indexImage }) => {
		const formatKey = getFormatKey(bookConfigData);
		const sizeKey = bookConfigData?.sizePhotoBook;
		const config = PHOTO_BOOK_TYPES[formatKey]?.[sizeKey];

		const isVerticalLargeFormat = (
			((formatKey === "vertical") && (sizeKey === "grande")) || (formatKey === "travelcoffeetable")
		);

		const { size } = config;
		const parseSizes = [size?.[0] + 30, size?.[1] + 30];

		const isSpineTextImage = (indexImage === 3) && isAvailableSpineText;

		const bodyHtml = (
			<div
				style={{
					height         : "100%",
					width          : "100%",
					overflow       : "hidden",
					display        : "flex",
					justifyContent : "center",
					alignItems     : "center",
				}}
			>
				{
					(imgSrc && !isSpineTextImage) && (
						<img
							src={imgSrc}
							alt={"image"}
							style={{
								objectFit : !isVerticalLargeFormat ? "cover" : null,
								height    : isVerticalLargeFormat ? parseSizes?.[1] : "100%",
								width     : isVerticalLargeFormat ? parseSizes?.[0] : "100%",
							}}
						/>
					)
				}
				{
					(imgSrc && isSpineTextImage) && (
						<img
							src={imgSrc}
							alt={"image"}
							style={{
								objectFit : null,
								height    : "20%",
								width     : "auto",
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

		const parseSizes = [size?.[0] + 30, size?.[1] + 30];

		return (
			<Page size={parseSizes}>
				{children}
			</Page>
		);
	};

	const generatePdfDocument = async () => {
		const pdfDocument = (
			<Document>
				{frontImages.map((base64PageImg, index) => (
					<PageComponent key={`page-${index}`}>
						<LayoutContainerPage imgSrc={base64PageImg} indexImage={index} />
					</PageComponent>
				))}
				<PageComponent>
					<SpecsConfigPdf />
				</PageComponent>
			</Document>
		);
		return await pdf(pdfDocument).toBlob();
	};

	const handlerDownloadPdfFront = async () => {
		const url = URL.createObjectURL(await generatePdfDocument());

		const a = document.createElement("a");
		a.href = url;
		a.download = `front-book-${bookConfigData?.postTypeId}.pdf`;
		a.click();

		URL.revokeObjectURL(url);
	};

	useEffect(() => {
		dispatch(workSpaceSlice.actions.changeFrontBookTypeView("fullFrontBook"));
	}, []);

	useEffect(() => {
		if (frontTypeBook === "whitOutImage") {
			setTimeout(() => {
				generateFrontWhitOutImage();
			}, 1000);
		}
		if (frontTypeBook === "whitOutText") {
			setTimeout(() => {
				generateFrontWhitOutText();
			}, 1000);
		}
		if (frontTypeBook === "spineText") {
			setTimeout(() => {
				handlerSnapShotSpineText();
			}, 1000);
		}
	}, [frontTypeBook]);

	useEffect(() => {
		const lengthPagesAvailable = isAvailableSpineText ? 4 : 3;
		if (frontImages.length === lengthPagesAvailable) {
			handlerDownloadPdfFront();
			setFrontImages([]);
			return;
		}
		return;
	}, [frontImages]);

	return (
		<Stack
			spacing={0}
		>
			<GhostFrontDom />
			<Button
				color="gray"
				size="xs"
				mt={10}
				sx={{ fontWeight : "200" }}
				loading={false}
				rightIcon={<FaBook size="15px" />}
				onClick={() => handlerDownloadFront()}
				fullWidth
			>
				DESCARGAR PORTADA
			</Button>
		</Stack>
	);
};

export default DownloadFront;
