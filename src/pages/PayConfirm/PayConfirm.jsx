import { Center, Stack }       from "@mantine/core";
import { Document, pdf, Page } from "@react-pdf/renderer";
import LogoCasaMatte           from "Resources/images/casaMatteLogo.svg";
import { Loading }             from "core/components";

import VerticalLarge  from "components/MyModsLayouts/VerticalLarge";
import VerticalMedium from "components/MyModsLayouts/VerticalMedium";
import SquareSmall    from "components/MyModsLayouts/SquareSmall";
import SquareLarge    from "components/MyModsLayouts/SquareLarge";

import "./PayConfirm.scss";
import { useEffect, useState }                    from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { genericApi }                             from "store/api/genericApi";
import axios                                      from "axios";

import { workSpaceSlice } from "store/Slices";
import { convertToArray } from "helpers";


const PayConfirm = () => {
	const photoBookTypes = {
		vertical : {
			mediano : {
				size                  : [612, 792],
				isInDoublePageLayouts : ["FrontLayout"],
				modLayouts            : {...VerticalMedium},
			},
			grande : {
				size                  : [850, 991],
				isInDoublePageLayouts : ["FrontLayout"],
				modLayouts            : {...VerticalLarge},
			},
		},
		cuadrado : {
			grande : {
				size                  : [850, 850],
				isInDoublePageLayouts : ["FrontLayout"],
				modLayouts            : {...SquareLarge},
			},
			chico : {
				size                  : [595, 595],
				isInDoublePageLayouts : ["FrontLayout"],
				modLayouts            : {...SquareSmall},
			},
		},
	};

	const [ isLoadingOrder, setIsLoadingOrder ] = useState( false );
	const [ isGeneratingPDF, setIsGeneratingPDF ] = useState( false );
	const [ errorToGeneratePDF, setErrorToGeneratePDF ] = useState( false );
	const [ isPay, setIsPay ] = useState( false );
	const searchParams = new URLSearchParams(location.search);

	const [dataMutation, dataMutationResult] = genericApi.useSubmitDataMutation();

	const myPhotoBookData = useSelector((state) => state.workSpaceSlice.data, shallowEqual);
	const userData = useSelector((state) => state.authSlice.user, shallowEqual);

	const dispatch = useDispatch();

	const orderid = searchParams.get("orderid") ?? "";
	const postId = searchParams.get("postId") ?? "";

	const { data : photobookData, isLoading : isFetchingPostId } = genericApi.useGetDataQuery({
		module : `wp-json/wp/v2/photobook-2-0/${postId === "" ? null : postId}`,
	});

	const isLoadingData = isFetchingPostId || isLoadingOrder || isGeneratingPDF;
	const getOrderId = async () => {
		setIsLoadingOrder(true);
		try {
			const orderData = await axios.get(`https://casamatte.wip-inprodi.com/wp-json/wc/v3/orders/${orderid}`,
				{
					auth : {
						username : "ck_ecf36082e00a4cfd16000f338e25073359b78df2",
						password : "cs_23f9bd87790be9f91b91e58d0d7b6a2f9ee9d727",
					},
				}
			);

			setIsLoadingOrder(false);

			if ( (orderData?.data?.date_paid !== "") || (orderData?.data?.date_paid !== null) ) {
				setIsPay(true);
				return;
			}
		} catch (error) {
			setIsLoadingOrder(false);
			console.error(error);
		}
	};

	const getComponent = (pageData) => {
		const Sheet1Layout = photoBookTypes[myPhotoBookData?.format]?.[myPhotoBookData?.sizePhotoBook]?.modLayouts[pageData?.sheet1?.layoutType]?.pdfLayout;

		const Sheet2Layout = photoBookTypes[myPhotoBookData?.format]?.[myPhotoBookData?.sizePhotoBook]?.modLayouts[pageData?.sheet2?.layoutType]?.pdfLayout;

		const sizePages = photoBookTypes[myPhotoBookData?.format]?.[myPhotoBookData?.sizePhotoBook]?.size;

		if (Sheet1Layout) {
			return (
				<>
					<Page size={sizePages}>
						<Sheet1Layout images={pageData?.sheet1?.photos} text={pageData?.sheet1?.text} />
					</Page>
					{Sheet2Layout ? (
						<Page size={sizePages}>
							<Sheet2Layout images={pageData?.sheet2?.photos} text={pageData?.sheet2?.text} />
						</Page>
					) : undefined}
				</>
			);
		}
	};

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

	const uploadPDF = async (photoBookData) => {
		try {
			const listPages = convertToArray(photoBookData?.pages);
			// Generar el documento PDF como un Blob
			const blob = await pdf(<MyDocGenerate listPages={listPages} />).toBlob();

			// Crear un FormData para enviar el archivo al backend
			const formData = new FormData();
			formData.append("file", blob, `${userData?.email}-noPedido:${orderid}-bookId:${postId}.pdf`);
			// Enviar el archivo al backend
			const response = await axios.post("https://casamatteapi-production.up.railway.app/api/v1/uploadPdf", formData, {
				headers : { "Content-Type" : "multipart/form-data" },
			});
			await dataMutation({
				module : "wp-json/wp/v2/photobook-2-0",
				data   : {
					tittle : "Texto de prueba",
					status : "publish",
					meta   : {
						status : "48",
					},
				},
				id     : postId,
				method : "POST",
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
			// if (!userId && photobookData?.author) {
		// 	dispatch(authSlice.actions.setUserId(photobookData?.author));
		// }
			if (photobookData?.meta?.config) {
				const myData = photobookData?.meta?.config;
				const myReplacerString = myData.replace(/'/g, "\"");
				const parseJSON = JSON.parse(myReplacerString);
				dispatch(workSpaceSlice.actions.insertData({...parseJSON, modified : photobookData?.modified, projectTittle : photobookData?.title?.rendered}));
			}
		} catch (error) {
			setIsGeneratingPDF(false);
			setErrorToGeneratePDF(true);
		}
	};

	useEffect(() => {
		if ( orderid ) {
			getOrderId();
		}
	}, [orderid]);

	useEffect(() => {
		if ( isPay && (photobookData?.meta?.config && photobookData?.meta?.config !== "") ) {
			photobookPDF();
		}
	}, [isPay, photobookData]);

	useEffect(() => {
		if ((myPhotoBookData?.product && (myPhotoBookData?.product !== ""))) {
			uploadPDF(myPhotoBookData);
			return;
		}
	}, [myPhotoBookData]);

	useEffect(() => {
		if (dataMutationResult.isUninitialized) return;

		if (dataMutationResult.isError) {
			setIsLoadingOrder(false);
			setIsGeneratingPDF(false);
			setErrorToGeneratePDF(true);
		}

	}, [dataMutationResult]);

	return (
		<Center id="PayConfirm">
			<Stack spacing={80} align="center">
				<Stack spacing={15} align="center">
					<div className="title-body-payment">
						{(isLoadingData && !isPay) && "Validando tu Pago..."}
						{(isLoadingData && isPay) && "Generando Photo Book..."}
						{(!isLoadingData && isPay && !isGeneratingPDF && !errorToGeneratePDF) && "¡Gracias por tu compra!"}
						{(!isLoadingData && !isPay && !errorToGeneratePDF) && "Pago no efectuado"}
						{(errorToGeneratePDF && isPay && !isGeneratingPDF) && "Ocurrió un error al generar tu photobook"}
					</div>
					<div className="body-payment">
						{(isLoadingData && !isPay) && "Estamos validando tu informacion y el pago espera un momento"}
						{(isLoadingData && isPay) && "Estamos generando tu photobook. Esto puede tardar unos minutos."}
						{(!isLoadingData && isPay && !isGeneratingPDF && !errorToGeneratePDF) && "Tu photobook ha sido creado y enviado exitosamente. Casa Matte recibirá tu pedido pronto y se pondrá en contacto contigo. ¡Gracias por elegirnos!"}
						{(!isLoadingData && !isPay && !errorToGeneratePDF) && "El pago no se procesó correctamente. Por favor, verifica y realiza el pago nuevamente, o si ya lo hiciste, intenta ingresando a este link más tarde. (Puedes recargar la pagina si deseas)"}
						{(errorToGeneratePDF && isPay && !isGeneratingPDF) && "Parece que ocurrió un problema al generar tu photobook. Por favor, intenta recargar la página o vuelve a intentarlo más tarde."}
					</div>
					{isLoadingData && (
						<div style={{ marginTop : "20px" }}>
							<Loading />
						</div>
					)}
				</Stack>
				<a href="https://casamatte.wip-inprodi.com/">
					<img src={LogoCasaMatte} width={180} />
				</a>
			</Stack>
		</Center>
	);
};

export default PayConfirm;
