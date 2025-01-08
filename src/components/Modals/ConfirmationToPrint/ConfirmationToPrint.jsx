import { Button, TextInput }             from "core/components";
import { Grid, Stack, Switch }           from "@mantine/core";
import { shallowEqual, useSelector }     from "react-redux";
import React, { useEffect, useState }    from "react";
import { genericApi }                    from "store/api/genericApi";
import { convertToArray, counterSheets } from "helpers";
import "./ConfirmationPrint.scss";
import { yupResolver }                   from "@hookform/resolvers/yup";
import * as Yup                          from "yup";
import { useForm }                       from "react-hook-form";
import axios                             from "axios";
import { closeAllModals }                from "@mantine/modals";
import { LoginNotification }             from "Notifications";
import { useNavigate }                   from "react-router";


const ConfirmationToPrint = () => {
	const navigate = useNavigate();
	const [ isConfirmationView, setIsConfirmationView  ] = useState(false);
	const [checkedShipping, setCheckedShipping] = useState(false);
	const [ dataShipping, setDataShipping ] = useState(undefined);
	const [ orderLoading, setOrderLoading ] = useState(false);

	const productNameKey = useSelector((state) => state.workSpaceSlice.data?.productName, shallowEqual);
	const sizePhotoBook = useSelector((state) => state.workSpaceSlice.data.sizePhotoBook, shallowEqual);
	const dataPages = useSelector((state) => state.workSpaceSlice.data, shallowEqual);
	// const photoBookPrice = useSelector((state) => state.workSpaceSlice.data?.basePrice, shallowEqual);
	const maxRangePages = useSelector((state) => state.workSpaceSlice.data?.maxRangePages, shallowEqual);
	const postIdphotoBook = useSelector((state) => state.authSlice?.user?.postId, shallowEqual);
	const userEmail = useSelector((state) => state.authSlice?.user?.email, shallowEqual);
	const userId = useSelector((state) => state.authSlice?.user?.userId, shallowEqual);
	const userName = useSelector((state) => state.authSlice?.user?.username, shallowEqual);
	// const formatedPrice = photoBookPrice.replace(",", "");

	const listOfPages = convertToArray(dataPages.pages);
	const counterPages = () => counterSheets(listOfPages);

	const basePrice = useSelector((state) => state.workSpaceSlice.data?.basePrice, shallowEqual);

	const [dataMutation, dataMutationResult ] = genericApi.useSubmitDataMutation();

	// const numberPrice = parseInt(formatedPrice);

	const schema = Yup.object().shape({
		sendPhotoBook : Yup.boolean(),
		name          : Yup.string().required("Ingresa tu nombre"),
		last_name     : Yup.string().required("Ingresa tu apellido"),
		city          : Yup.string().required("Ingresa tu ciudad"),
		state         : Yup.string().required("Ingresa tu estado"),
		postcode      : Yup.string().required("Ingresa tu codigo postal"),
		country       : Yup.string().required("Ingresa tu pais"),
		phone         : Yup.string().required("Ingresa tu telefono"),
	});

	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm({
		resolver      : yupResolver(schema),
		defaultValues : {
			name               : "",
			last_name          : "",
			city               : "",
			state              : "",
			postcode           : "",
			country            : "MX",
			phone              : "",
			name_shipping      : "",
			last_name_shipping : "",
			address_1_shipping : "",
			city_shipping      : "",
			state_shipping     : "",
			postcode_shipping  : "",
			country_shipping   : "MX",
		},
	});

	const handlerChecked = () => {
		setCheckedShipping(!checkedShipping);
	};

	const handleSubmitForm = (...args) => {
		handleSubmit( async (data) => {
			setDataShipping(data);
			setIsConfirmationView(true);
		})(...args);
	};

	const createOrderWoocomerce = async () => {
		const data = dataShipping;
		setOrderLoading(true);
		try {
			const productDataRes = await axios.get(`https://casamatte.com/wp-json/wc/v3/products?search=${encodeURIComponent(productNameKey)}`,
				{
					auth : {
						username : "ck_ecf36082e00a4cfd16000f338e25073359b78df2",
						password : "cs_23f9bd87790be9f91b91e58d0d7b6a2f9ee9d727",
					},
				}
			);

			const productId = productDataRes?.data[0]?.id ?? undefined;

			let extraPages = 0;

			if (counterPages() > Number(maxRangePages)) {
				extraPages = (counterPages() - Number(maxRangePages));
			}

			const handlerCost = () => {
				let extraCost = 0;
				if ((sizePhotoBook === "chico") || (sizePhotoBook === "mediano")) {
					extraCost = 15;
				}
				extraCost = 22;
				const cost = extraPages * Number(extraCost);
				if (basePrice && basePrice !== "") {
					const formatStringPrice = basePrice.replace(",", "");
					const basePriceNumber = Number(formatStringPrice);
					return cost + basePriceNumber;
				}
				return extraCost;
			};


			const responseCreateOrder = await axios.post(
				"https://casamatte.com/wp-json/wc/v3/orders",
				{
					payment_method       : "bacs",
					payment_method_title : "Direct Bank Transfer",
					set_paid             : false,
					status               : (userName === "casamatteadmin") ? "processing" : "pending",
					customer_id          : userId,
					billing              : {
						first_name : data?.name ?? undefined,
						last_name  : data?.last_name ?? undefined,
						address_1  : "Dirección",
						city       : data?.city ?? undefined,
						state      : data?.state ?? undefined,
						postcode   : data?.postcode ?? undefined,
						country    : data?.country ?? undefined,
						email      : userEmail ?? undefined,
						phone      : data?.phone ?? undefined,
					},
					...((checkedShipping) && {
						shipping : {
							first_name : data?.name_shipping ?? undefined,
							last_name  : data?.last_name_shipping ?? undefined,
							address_1  : data?.address_1_shipping ?? undefined,
							city       : data?.city_shipping ?? undefined,
							state      : data?.state_shipping ?? undefined,
							postcode   : data?.postcode_shipping ?? undefined,
							country    : data?.country_shipping ?? undefined,
						},
					}),
					line_items : [
						{
							product_id : productId,
							quantity   : 1,
							total      : handlerCost().toString(),
							subtotal   : handlerCost().toString(),
							price      : handlerCost(),
						},
					],
					...((checkedShipping) && {
						shipping_lines : [
							{
							  method_id    : "flat_rate",
							  method_title : "Envío estándar",
							  total        : "180.00",
							},
						],
					}),
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
						id_del_pedido : responseCreateOrder?.data?.id.toString(),
						precio_total  : handlerCost().toString(),
						hojas_extra   : extraPages.toString(),
					},
				},
				id     : postIdphotoBook,
				method : "POST",
			});

			if (userName !== "casamatteadmin") {
				window.location.href = responseCreateOrder?.data?.payment_url;
				return;
			}

			navigate(`payment/confirm?orderid=${responseCreateOrder?.data?.id}&postId=${postIdphotoBook}`);

		} catch (err) {
			LoginNotification["post"][500]();
			setOrderLoading(false);
			console.error(err);
		}
	};

	useEffect(() => {
		console.log(dataMutationResult);
	}, [dataMutationResult]);


	return (
		<div className="body-confirmation-modal">
			{
				!isConfirmationView && (
					<form id="completeInfoOrder" className="login-card-body" onSubmit={handleSubmitForm}>
						<Stack spacing={60}>
							<Stack>
								<div className="tittle-confirmation">
									Datos de Pedido
								</div>
								<Stack>
									<div className="text-description">
										Completa tus datos de pedido.
									</div>
									<Grid>
										<Grid.Col span={12}>
											<TextInput
												isLoading={false}
												error={errors.name ? true : false}
												label="Nombre"
												variant="filled"
												placeholder="Tu nombre"
												name="name"
												defaultValue={undefined}
												register={register("name")}
											/>
										</Grid.Col>
										<Grid.Col span={12}>
											<TextInput
												isLoading={false}
												error={errors.last_name ? true : false}
												label="Apellido"
												variant="filled"
												placeholder="Ingresa tu apellido"
												name="last_name"
												defaultValue={undefined}
												register={register("last_name")}
											/>
										</Grid.Col>
										<Grid.Col span={12}>
											<TextInput
												isLoading={false}
												error={errors.city ? true : false}
												label="Ciudad"
												variant="filled"
												placeholder="Nombre de la ciudad"
												name="city"
												defaultValue={undefined}
												register={register("city")}
											/>
										</Grid.Col>
										<Grid.Col span={12}>
											<TextInput
												isLoading={false}
												error={errors.state ? true : false}
												label="Estado"
												variant="filled"
												placeholder="Nombre del Estado"
												name="state"
												defaultValue={undefined}
												register={register("state")}
											/>
										</Grid.Col>
										<Grid.Col span={12}>
											<TextInput
												isLoading={false}
												error={errors.postcode ? true : false}
												label="C.P."
												variant="filled"
												placeholder="Código postal"
												name="postcode"
												defaultValue={undefined}
												register={register("postcode")}
											/>
										</Grid.Col>
										<Grid.Col span={12}>
											<TextInput
												isLoading={false}
												error={errors.country ? true : false}
												label="País"
												variant="filled"
												placeholder="Ingresa el nombre del país"
												name="country"
												defaultValue={undefined}
												isDisabled={true}
												register={register("country")}
											/>
										</Grid.Col>
										<Grid.Col span={12}>
											<TextInput
												isLoading={false}
												error={errors.phone ? true : false}
												label="Número Telefónico"
												variant="filled"
												placeholder="Ingresa tu número telefónico"
												name="phone"
												defaultValue={undefined}
												register={register("phone")}
											/>
										</Grid.Col>
										<Stack mt="20px">
											<Switch
												label="¿Enviarlo a domicilio? ($180 MXN Nacional)"
												color="gray"
												checked={checkedShipping ? true : false}
												onChange={() => handlerChecked()}
											/>
										</Stack>
									</Grid>
								</Stack>
							</Stack>
							{
								checkedShipping && (
									<Stack>
										<div className="tittle-confirmation">
											Datos de Envío.
										</div>
										<Stack>
											<div className="text-description">
												Completa los datos de envío.
											</div>
											<Grid>
												<Grid.Col span={12}>
													<TextInput
														isLoading={false}
														error={errors.name_shipping ? true : false}
														label="Nombre"
														variant="filled"
														placeholder="Tu nombre"
														name="name_shipping"
														defaultValue={undefined}
														register={register("name_shipping")}
													/>
												</Grid.Col>
												<Grid.Col span={12}>
													<TextInput
														isLoading={false}
														error={errors.last_name_shipping ? true : false}
														label="Apellido"
														variant="filled"
														placeholder="Ingresa tu apellido"
														name="last_name_shipping"
														defaultValue={undefined}
														register={register("last_name_shipping")}
													/>
												</Grid.Col>
												<Grid.Col span={12}>
													<TextInput
														isLoading={false}
														error={errors.address_1_shipping ? true : false}
														label="Dirección"
														variant="filled"
														placeholder="Colonia, calle, avenida, numero, etc."
														name="address_1_shipping"
														defaultValue={undefined}
														register={register("address_1_shipping")}
													/>
												</Grid.Col>
												<Grid.Col span={12}>
													<TextInput
														isLoading={false}
														error={errors.city_shipping ? true : false}
														label="Ciudad"
														variant="filled"
														placeholder="Nombre de la ciudad"
														name="city_shipping"
														defaultValue={undefined}
														register={register("city_shipping")}
													/>
												</Grid.Col>
												<Grid.Col span={12}>
													<TextInput
														isLoading={false}
														error={errors.state_shipping ? true : false}
														label="Estado"
														variant="filled"
														placeholder="Nombre del Estado"
														name="state_shipping"
														defaultValue={undefined}
														register={register("state_shipping")}
													/>
												</Grid.Col>
												<Grid.Col span={12}>
													<TextInput
														isLoading={false}
														error={errors.postcode_shipping ? true : false}
														label="C.P."
														variant="filled"
														placeholder="Código postal"
														name="postcode_shipping"
														defaultValue={undefined}
														register={register("postcode_shipping")}
													/>
												</Grid.Col>
												<Grid.Col span={12}>
													<TextInput
														isLoading={false}
														error={errors.country_shipping ? true : false}
														label="País"
														variant="filled"
														isDisabled={true}
														placeholder="Ingresa el nombre del país"
														name="country_shipping"
														defaultValue={undefined}
														register={register("country_shipping")}
													/>
												</Grid.Col>
											</Grid>
										</Stack>
									</Stack>
								)
							}
							<div className="buttons-container">
								<Button
									fontSize="18px"
									type="subtleActive"
									width={160}
									height={39}
									isLoading={false}
									typeButton="submit"
								>
									Continuar
								</Button>
							</div>
						</Stack>
					</form>
				)
			}
			{
				isConfirmationView && (
					<>
						{orderLoading && (
							<div className="text-description" style={{textTransform : "uppercase"}}>Redirigiendo al pago espera un momento...</div>
						)}
						{!orderLoading && (
							<>
								<div className="tittle-confirmation">¿Estás seguro?</div>
								<div className="text-description" style={{ textAlign : "center" }}>
									Estás a punto de enviar tu photobook para impresión. Una vez que confirmes, no podrás seguir editándolo ni deshacer esta acción. Serás redirigido automáticamente al pago, y tu pedido quedará confirmado. ¿Deseas aceptar?
								</div>
							</>
						)}
						<div className="buttons-container">
							<Button
								fontSize="18px"
								type="subtleActive"
								width={300}
								height={39}
								isLoading={orderLoading}
								onClick={() => createOrderWoocomerce()}
							>
								Aceptar y Crear Pedido
							</Button>
							<Button
								fontSize="18px"
								width={117}
								height={39}
								isLoading={orderLoading}
								onClick={() => closeAllModals()}
							>
								Cancelar
							</Button>
						</div>
					</>
				)
			}
		</div>
	);
};

export default ConfirmationToPrint;
