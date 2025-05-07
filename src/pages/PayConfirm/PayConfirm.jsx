import { Center, Stack }       from "@mantine/core";
import { Document, pdf, Page } from "@react-pdf/renderer";
import LogoCasaMatte           from "Resources/images/casaMatteLogo.png";
import { Loading }             from "core/components";

import VerticalLarge     from "components/MyModsLayouts/VerticalLarge";
import VerticalMedium    from "components/MyModsLayouts/VerticalMedium";
import HorizontalLarge   from "components/MyModsLayouts/HorizontalLarge";
import HorizontalMedium  from "components/MyModsLayouts/HorizontalMedium";
import SquareSmall       from "components/MyModsLayouts/SquareSmall";
import SquareLarge       from "components/MyModsLayouts/SquareLarge";
import TravelCoffeeTable from "components/MyModsLayouts/TravelCoffeeTable";

import SpinePhotoBook from "components/MyModsLayouts/SpinePdf";

import "./PayConfirm.scss";
import { useEffect, useState }                    from "react";
import { useParams }                              from "react-router";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { genericApi }                             from "store/api/genericApi";
import axios                                      from "axios";

import { workSpaceSlice } from "store/Slices";
import { convertToArray } from "helpers";

const PayConfirm = () => {
	const { postId } = useParams();
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

	const [ isGeneratingPDF, setIsGeneratingPDF ] = useState( false );
	const [ errorToGeneratePDF, setErrorToGeneratePDF ] = useState( false );

	const myPhotoBookData = useSelector((state) => state.workSpaceSlice.data, shallowEqual);
	const userData = useSelector((state) => state.authSlice.user, shallowEqual);

	const dispatch = useDispatch();

	const { data : photobookData, isLoading : isFetchingPostId } = genericApi.useGetDataQuery({
		module : `wp-json/wp/v2/photobook-2-0/${postId === "" ? null : postId}`,
	});

	const isLoadingData = isFetchingPostId || isGeneratingPDF;

	const handlerFormat = (productType) => {
		if ( productType === "travelcoffeetable ") {
			return "travelcoffeetable";
		}
		return myPhotoBookData?.format;
	};

	const getComponent = (pageData) => {
		const Sheet1Layout = photoBookTypes[handlerFormat(myPhotoBookData?.product)]?.[myPhotoBookData?.sizePhotoBook]?.modLayouts[pageData?.sheet1?.layoutType]?.pdfLayout;

		const Sheet2Layout = photoBookTypes[handlerFormat(myPhotoBookData?.product)]?.[myPhotoBookData?.sizePhotoBook]?.modLayouts[pageData?.sheet2?.layoutType]?.pdfLayout;

		const sizePages = photoBookTypes[handlerFormat(myPhotoBookData?.product)]?.[myPhotoBookData?.sizePhotoBook]?.size;

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

	const SheetFrontLayout = photoBookTypes[handlerFormat(myPhotoBookData?.product)]?.[myPhotoBookData?.sizePhotoBook]?.modLayouts[myPhotoBookData?.frontPage?.sheet1?.layoutType]?.pdfLayout;

	//line to check siZe photbook

	const sizeFrontPage = photoBookTypes[handlerFormat(myPhotoBookData?.product)]?.[myPhotoBookData?.sizePhotoBook]?.frontSize;

	const MyDocGenerate = ({listPages}) => {
		return (
			<Document>
				<>
					{
						((myPhotoBookData?.product === "white") && SheetFrontLayout) && (
							<Page size={sizeFrontPage}>
								<SheetSpineLayout text={myPhotoBookData?.bound} />
							</Page>
						)
					}
					{
						((myPhotoBookData?.product === "white") && SheetFrontLayout) && (
							<Page size={sizeFrontPage}>
								<SheetFrontLayout images={myPhotoBookData?.frontPage?.sheet1?.photos} text={myPhotoBookData?.frontPage?.sheet1?.text} />
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

	const uploadPDF = async (photBookConfig) => {
		try {
			const listPages = convertToArray(photBookConfig?.pages);
			// Generar el documento PDF como un Blob
			const blob = await pdf(<MyDocGenerate listPages={listPages} />).toBlob();

			// Crear un FormData para enviar el archivo al backend
			const formData = new FormData();
			formData.append("file", blob, `${userData?.email}-noPedido:${myPhotoBookData.orderId}-bookId:${postId}.pdf`);
			// Enviar el archivo al backend
			const response = await axios.post("https://casa-matte-api-cs6c4.ondigitalocean.app/api/v1/uploadPdf", formData, {
				headers : { "Content-Type" : "multipart/form-data" },
			});
			console.log("Archivo subido:", response.data);
			setIsGeneratingPDF(false);
		} catch (error) {
			setIsGeneratingPDF(false);
			setErrorToGeneratePDF(true);
			console.error("Error al subir el archivo:", error);
		}
	};

	const photobookPDF = () => {
		setIsGeneratingPDF(true);
		try {
			if (photobookData?.meta?.config) {
				const myData = photobookData?.meta?.config;
				const newData = myData.replace(".heic", ".png");
				const parseJSON = JSON.parse(newData);
				dispatch(workSpaceSlice.actions.insertData({...parseJSON, modified : photobookData?.modified, projectTittle : photobookData?.title?.rendered}));
			}
		} catch (error) {
			setIsGeneratingPDF(false);
			setErrorToGeneratePDF(true);
		}
	};

	useEffect(() => {
		if (photobookData?.meta?.config && (photobookData?.meta?.config !== "")) {
			photobookPDF();
		}
	}, [photobookData]);

	useEffect(() => {
		if ((myPhotoBookData?.product && (myPhotoBookData?.product !== ""))) {
			uploadPDF(myPhotoBookData);
			return;
		}
	}, [myPhotoBookData]);

	return (
		<Center id="PayConfirm">
			<Stack spacing={80} align="center">
				<Stack spacing={15} align="center">
					<div className="title-body-payment">
						{(isLoadingData) && "Generando Photo Book..."}
						{(!isLoadingData && !isGeneratingPDF && !errorToGeneratePDF) && "¡Gracias por elegirnos!"}
						{(errorToGeneratePDF && !isGeneratingPDF) && "Ocurrió un error al generar tu photobook"}
					</div>
					<div className="body-payment">
						{(isLoadingData) && "Estamos generando tu photobook. EL proceso puede tardar unos minutos. No cierres o recargues la pagina hasta que el proceso termine."}
						{(!isLoadingData && !isGeneratingPDF && !errorToGeneratePDF) && "Tu photobook ha sido creado y enviado exitosamente. Casa Matte recibirá tu pedido pronto y se pondrá en contacto contigo. ¡Gracias por elegirnos!"}
						{(errorToGeneratePDF && !isGeneratingPDF) && "Parece que ocurrió un problema al generar tu photobook. Por favor, intenta recargar la página o vuelve a intentarlo más tarde."}
					</div>
					{isLoadingData && (
						<div style={{ marginTop : "20px" }}>
							<Loading />
						</div>
					)}
				</Stack>
				<a href="https://casamatte.com/">
					<img src={LogoCasaMatte} width={180} />
				</a>
			</Stack>
		</Center>
	);
};

export default PayConfirm;
