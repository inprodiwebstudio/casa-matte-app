import { Button, TextInput }         from "core/components";
import { Grid }                      from "@mantine/core";
import { shallowEqual, useSelector } from "react-redux";
import React                         from "react";
import "./ConfirmationPrint.scss";
import { yupResolver }               from "@hookform/resolvers/yup";
import * as Yup                      from "yup";
import { useForm }                   from "react-hook-form";


const ConfirmationToPrint = () => {
	const productNameKey = useSelector((state) => state.workSpaceSlice.data?.productName, shallowEqual);
	const photoBookPrice = useSelector((state) => state.workSpaceSlice.data?.basePrice, shallowEqual);
	const userId = useSelector((state) => state.authSlice.user?.userId, shallowEqual);
	const formatedPrice = photoBookPrice.replace(",", "");

	const numberPrice = parseInt(formatedPrice);

	const schema = Yup.object().shape({
		username : Yup.string().required("El campo es obligatorio"),
		password : Yup.string().required("El campo es obligatorio"),
	});

	const {
		setError,
		register,
		handleSubmit,
		formState: {errors},
	} = useForm({
		resolver : yupResolver(schema),
	});

	const handleSubmitForm = (...args) => {
		handleSubmit( async (data) => {
			console.log(data);
		})(...args);
	};

	// const createOrderWoocomerce = async () => {
	// 	try {
	// 		const productDataRes = await axios.get(`https://casamatte.wip-inprodi.com/wp-json/wc/v3/products?search=${encodeURIComponent(productNameKey)}`,
	// 			{
	// 				auth : {
	// 					username : "ck_ecf36082e00a4cfd16000f338e25073359b78df2",
	// 					password : "cs_23f9bd87790be9f91b91e58d0d7b6a2f9ee9d727",
	// 				},
	// 			}
	// 		);

	// 		const responseCreateOrder = await axios.post(
	// 			"https://casamatte.wip-inprodi.com/wp-json/wc/v3/orders",
	// 			{
	// 				payment_method       : "bacs",
	// 				payment_method_title : "Direct Bank Transfer",
	// 				set_paid             : false,
	// 				status               : "pending",
	// 				customer_id          : userId,
	// 				line_items           : [
	// 					{
	// 						product_id : productDataRes?.data[0]?.id ?? undefined,
	// 						quantity   : 1,
	// 						price      : numberPrice,
	// 					},
	// 				],
	// 			},
	// 			{
	// 				auth : {
	// 					username : "ck_ecf36082e00a4cfd16000f338e25073359b78df2",
	// 					password : "cs_23f9bd87790be9f91b91e58d0d7b6a2f9ee9d727",
	// 				},
	// 			}
	// 		);

	// 		console.log(responseCreateOrder);
	// 	} catch (err) {
	// 		console.error(err);
	// 	}
	// };

	return (
		<div className="body-confirmation-modal">
			<div className="tittle-confirmation">Datos de Facturación</div>
			<div className="text-description">
				Completa los datos de facturación.
			</div>
			<form id="completeInfoOrder" className="login-card-body" onSubmit={handleSubmitForm}>
				<Grid>
					<Grid.Col span={4}>
						<TextInput
							isLoading={false}
							error={errors.username ? true : false}
							label="CORREO ELECTRÓNICO"
							variant="filled"
							placeholder="correo_electrónico@email.com"
							name="username"
							defaultValue={nameUser}
							register={register("username")}
						/>
					</Grid.Col>
					<Grid.Col span={4}>2</Grid.Col>
					<Grid.Col span={4}>3</Grid.Col>
				</Grid>
				<div className="buttons-container">
					<Button
						fontSize="18px"
						type="subtleActive"
						width={160}
						height={39}
						isLoading={false}
						onClick={() => createOrderWoocomerce()}
					>
						Continuar
					</Button>
				</div>
			</form>
		</div>
	);
};

export default ConfirmationToPrint;
