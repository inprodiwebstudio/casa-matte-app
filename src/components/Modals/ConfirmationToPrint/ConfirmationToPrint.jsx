import { Button }                    from "core/components";
import { closeAllModals }            from "@mantine/modals";
import { shallowEqual, useSelector } from "react-redux";
import React                         from "react";
import "./ConfirmationPrint.scss";
import axios                         from "axios";


const ConfirmationToPrint = () => {
	const productNameKey = useSelector((state) => state.workSpaceSlice.data?.productName, shallowEqual);
	const photoBookPrice = useSelector((state) => state.workSpaceSlice.data?.basePrice, shallowEqual);
	const userId = useSelector((state) => state.authSlice.user?.userId, shallowEqual);
	const formatedPrice = photoBookPrice.replace(",", "");

	const numberPrice = parseInt(formatedPrice);

	const createOrderWoocomerce = async () => {
		try {
			const productDataRes = await axios.get(`https://temporal.casamatte.com/wp-json/wc/v3/products?search=${encodeURIComponent(productNameKey)}`,
				{
					auth : {
						username : "ck_ecf36082e00a4cfd16000f338e25073359b78df2",
						password : "cs_23f9bd87790be9f91b91e58d0d7b6a2f9ee9d727",
					},
				}
			);

			const responseCreateOrder = await axios.post(
				"https://temporal.casamatte.com/wp-json/wc/v3/orders",
				{
					payment_method       : "bacs",
					payment_method_title : "Direct Bank Transfer",
					set_paid             : false,
					status               : "pending",
					customer_id          : userId,
					line_items           : [
						{
							product_id : productDataRes?.data[0]?.id ?? undefined,
							quantity   : 1,
							price      : numberPrice,
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

			console.log(responseCreateOrder);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className="body-confirmation-modal">
			<div className="tittle-confirmation">¿Estás seguro?</div>
			<div className="text-description">
				Estás a punto de enviar tu photobook para impresión. Una vez que confirmes, no podrás seguir editándolo ni deshacer esta acción. Serás redirigido automáticamente al pago, y tu pedido quedará confirmado. ¿Deseas aceptar?
			</div>
			<div className="buttons-container">
				<Button
					fontSize="18px"
					type="subtleActive"
					width={117}
					height={39}
					isLoading={false}
					onClick={() => createOrderWoocomerce()}
				>
					Aceptar
				</Button>
				<Button
					fontSize="18px"
					width={117}
					height={39}
					isLoading={false}
					onClick={() => closeAllModals()}
				>
					Cancelar
				</Button>
			</div>
		</div>
	);
};

export default ConfirmationToPrint;
