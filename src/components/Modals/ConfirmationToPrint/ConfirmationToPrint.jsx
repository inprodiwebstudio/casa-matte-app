import { useState }                  from "react";
import BodyConfirm                   from "./BodyConfirm";
import { shallowEqual, useSelector } from "react-redux";
import { genericApi }                from "store/api/genericApi";
import { useExtraPriceHandler }      from "helpers/Hooks/useExtraPriceHandler";
import axios                         from "axios";
import { PostingConfig }             from "Notifications";
import { closeAllModals }            from "@mantine/modals";
import { dayjs, isValidArray }       from "helpers";
import { inCompletePages }           from "./ConfirmationToPrint.helpers";
import IncompletedPagesBody          from "./IncompletedPagesBody";
import { useHandlerTypeConfigBooks } from "helpers/Hooks/useHandlerTypeConfigBooks";
// import handlerRemoveErrorImgs                     from "helpers/Functions/handlerRemoveErrorImgs";
// import { workSpaceSlice }                         from "store/Slices";
// import { apiImageKit }                            from "store/api/imageKitApi";


const ConfirmationToPrint = ({ innerProps }) => {
	const { postId } = innerProps;
	const { handlerExtraCost } = useExtraPriceHandler();
	const photoBooksConfig = useHandlerTypeConfigBooks();
	// const dispatch = useDispatch();

	// const [errImgs] = apiImageKit.useCheckImagesMutation();

	const pages = useSelector((state) => state.workSpaceSlice.data?.pages, shallowEqual);
	const product = useSelector((state) => state.workSpaceSlice.data?.product, shallowEqual);
	const size = useSelector((state) => state.workSpaceSlice.data?.sizePhotoBook, shallowEqual);
	const format = useSelector((state) => state.workSpaceSlice.data?.format, shallowEqual);
	const userId = useSelector((state) => state.authSlice?.user?.userId, shallowEqual);
	const userEmail = useSelector((state) => state.authSlice?.user?.email, shallowEqual);

	// const [ loadingValidateImgs, setLoadingValidateImgs ] = useState(false);

	// const [ validatedImages, setValidatedImages] = useState(false);

	const [ dataMutation, { isLoading } ] = genericApi.useSubmitDataMutation();

	const [notCompletedPages, setNotCompletedPages] = useState([]);

	const [isLoadingOrder, setIsLoadingOrder] = useState(false);

	const layoutMods = photoBooksConfig[product][format]?.sizes?.[size]?.layoutMods;

	// const handlerValidateImages = async () => {
	// 	setLoadingValidateImgs(true);
	// 	try {
	// 		const listUrlImages = urlImagesInPages(pages);
	// 		const errorImages = await errImgs({data : listUrlImages});
	// 		const dataErrImgs = errorImages?.data;
	// 		const newPagesRemovedImgs = handlerRemoveErrorImgs(dataErrImgs, pages);
	// 		dispatch(workSpaceSlice.actions.insertPages(newPagesRemovedImgs));
	// 		setLoadingValidateImgs(false);
	// 		setValidatedImages(true);
	// 	} catch (error) {
	// 		setLoadingValidateImgs(false);
	// 	}
	// };

	const handlerSubmit = async () => {
		if (
			isValidArray(
				inCompletePages(Object.values(pages), layoutMods)
			) && (postId !== "29077")
		) {
			setNotCompletedPages(inCompletePages(Object.values(pages), layoutMods));
			return;
		}
		if (handlerExtraCost() > 0) {
			setIsLoadingOrder(true);
			try {
				const responseCreateOrder = await axios.post(
					"https://casamatte.com/wp-json/wc/v3/orders",
					{
						payment_method       : "bacs",
						payment_method_title : "Direct Bank Transfer",
						set_paid             : false,
						status               : "pending",
						customer_id          : userId,
						billing              : {
							first_name : "addOn",
							last_name  : "add",
							address_1  : "Dirección",
							city       : "test",
							state      : "fill",
							postcode   : "00000",
							country    : "MX",
							email      : userEmail,
							phone      : "0000000000",
						},
						line_items : [
							{
								product_id : 28632,
								quantity   : 1,
								total      : handlerExtraCost().toString(),
								subtotal   : handlerExtraCost().toString(),
								price      : handlerExtraCost(),
							},
						],
					},
					{
						auth : {
							username : "ck_f2aa0bf19e74744237e026bb12dff004288ae7d7",
							password : "cs_f84670c1b511ae6d25b66012b9c274b8417f90ef",
						},
					}
				);

				await dataMutation({
					module : "wp-json/wp/v2/photobook-2-0",
					data   : {
						tittle : "Texto de prueba",
						status : "publish",
						meta   : {
							id_pedido_hojas_extra : responseCreateOrder?.data?.id.toString(),
							status                : "48",
							fecha_de_termino      : dayjs(new Date()).format("YYYY-MM-DD"),
						},
					},
					id     : postId,
					method : "POST",
				});
				window.location.href = responseCreateOrder?.data?.payment_url;
				setIsLoadingOrder(false);
			} catch (error) {
				setIsLoadingOrder(false);
				PostingConfig["post"][500]();
				closeAllModals();
				console.error(error);
			}
			return;
		}
		await dataMutation({
			module : "wp-json/wp/v2/photobook-2-0",
			data   : {
				tittle : "Texto de prueba",
				status : "publish",
				meta   : {
					status           : "48",
					fecha_de_termino : dayjs(new Date()).format("YYYY-MM-DD"),
				},
			},
			id     : postId,
			method : "POST",
		});
		window.location.reload();
	};

	// useEffect(() => {
	// 	if (validatedImages) {
	// 		handlerSubmit();
	// 	}
	// }, [validatedImages]);

	return (
		<>
			{
				!isValidArray(notCompletedPages) ?
					<BodyConfirm
						validatedImages={false}
						loadingValidateImgs={false}
						onSubmit={handlerSubmit()}
						isLoading={isLoading || isLoadingOrder}
					/> : <IncompletedPagesBody pages={notCompletedPages} />
			}
		</>
	);
};

export default ConfirmationToPrint;
