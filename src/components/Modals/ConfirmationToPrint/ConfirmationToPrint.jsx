import { useState }                  from "react";
import BodyConfirm                   from "./BodyConfirm";
import { shallowEqual, useSelector } from "react-redux";
// import { inCompletePages }           from "./ConfirmationToPrint.helpers";
import { genericApi }           from "store/api/genericApi";
import { useExtraPriceHandler } from "helpers/Hooks/useExtraPriceHandler";
import "./ConfirmationPrint.scss";
import axios                    from "axios";
import { PostingConfig }        from "Notifications";
import { closeAllModals }       from "@mantine/modals";


const ConfirmationToPrint = ({ innerProps }) => {
	const { postId } = innerProps;
	const { handlerExtraCost } = useExtraPriceHandler();

	// const pages = useSelector((state) => state.workSpaceSlice.data?.pages, shallowEqual);
	const userId = useSelector((state) => state.authSlice?.user?.userId, shallowEqual);
	const userEmail = useSelector((state) => state.authSlice?.user?.email, shallowEqual);

	const [ dataMutation, { isLoading } ] = genericApi.useSubmitDataMutation();

	// const [notCompletedPages, setNotCompletedPages] = useState([]);

	const [isLoadingOrder, setIsLoadingOrder] = useState(false);

	const handlerSubmit = async () => {
		// if (
		// 	isValidArray(
		// 		inCompletePages(Object.values(pages))
		// 	)
		// ) {
		// 	setNotCompletedPages(inCompletePages(Object.values(pages)));
		// 	return;
		// }
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
							username : "ck_ecf36082e00a4cfd16000f338e25073359b78df2",
							password : "cs_23f9bd87790be9f91b91e58d0d7b6a2f9ee9d727",
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
					status : "48",
				},
			},
			id     : postId,
			method : "POST",
		});
		window.location.reload();
	};

	return (
		<>
			<BodyConfirm
				onSubmit={handlerSubmit}
				isLoading={isLoading || isLoadingOrder}
			/>
		</>
	);
};

export default ConfirmationToPrint;
