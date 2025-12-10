import { Card, TextInput, Text, Stack, Button, Group } from "@mantine/core";
import { showNotification }                            from "@mantine/notifications";
import { useState, useEffect }                         from "react";
import { genericApi }                                  from "store/api/genericApi";
import PhotoBookDownload                               from "./PhotoBookDownload";
import TableOrders                                     from "./TableOrders";
import { isValidArray }                                from "helpers";

const { useLazyGetDataQuery, useGetDataQuery } = genericApi;

const CardSearchPhotoBook = () => {
	const [ orderId, setOrderId ] = useState();

	const [ photoBookData, setPhotoBookData ] = useState(undefined);

	const [ photoBooksOrders, setPhotoBooksOrders ] = useState(undefined);
	const [ initialPhotoBooksOrders, setInitialPhotoBooksOrders ] = useState(undefined);

	const [ fetchPhotoBook, { isLoading : isFetching, error } ] = useLazyGetDataQuery();

	const { data : ordersPhotoBook, isLoading } = useGetDataQuery({
		module : "wp-json/miapi/v1/post-filtrado?per_page=300",
	});

	const loading = isLoading || isFetching;

	const handleOnChange = (e) => {
		setOrderId(e.target.value);
	};

	const handleOnSubmit = async () => {
		const myOreder = orderId;

		try {
			const photoBookData = await fetchPhotoBook({ module : `wp-json/wp/v2/photobook-2-0/meta/?meta_value=${myOreder}`}).unwrap();
			const filteredBooks = photoBookData.filter((photoBook) => (photoBook?.metas?.status[0] === "48") || (photoBook?.metas?.status[0] === "26"));
			const constructorPhotoBooksData = filteredBooks.map((photoBook) => ({
				post_id     	  	 : photoBook?.id ?? "",
				id               : photoBook?.id ?? "",
				config     	  	  : photoBook?.metas?.config?.[0] ?? "",
				id_del_pedido  	 : photoBook?.metas?.id_del_pedido[0] ?? "",
				correo_del_autor : photoBook?.metas?.correo_del_autor[0] ?? "",
				status           : photoBook?.metas?.status[0],
				modelo           : photoBook?.metas?.modelo[0] ?? "",
				tamano           : photoBook?.metas?.tamano[0] ?? "",
				fecha_de_termino : photoBook?.metas?.fecha_de_termino?.[0] ?? "",
			}));
			const photoBooksFiltered = constructorPhotoBooksData.filter((photoBook) => (photoBook?.status === "48") || (photoBook?.status === "26"));
			setPhotoBooksOrders(photoBooksFiltered);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		if (error?.status === 404) {
			showNotification({
				title   : "Pedido no encontrado",
				message : "El numero de pedido ingresado no existe.",
				color   : "yellow",
				styles  : () => ({
					root : {
								  "&::before" : {
									  borderRadius : "0px",
									  width        : "3px",
								  },
								  borderRadius : "0px",
					},

					title       : { fontFamily : "Helvetica", fontWeight : "500", textTransform : "uppercase" },
					description : { fontFamily : "Helvetica" },
				}),
			});
		}
	}, [ error ]);

	const handlerSelectOrder = (photoBookData) => {
		setPhotoBookData(photoBookData);
	};

	useEffect(() => {
		if (ordersPhotoBook && isValidArray(ordersPhotoBook)) {
			const filteredOrders = ordersPhotoBook.filter(order => (order?.status === "48") || (order?.status === "26"));
			console.log(filteredOrders.filter(order => order?.modelo === "PHOTOBOOK BODA"));
			const constructorPhotoBooksData = filteredOrders.map((photoBook) => {
				const parseJsonConfig = (photoBook?.config || (photoBook?.config !== "")) ? JSON.parse(photoBook?.config) : null;

				return {
					post_id        	 : photoBook?.id ?? "",
					id               : photoBook?.id ?? "",
					config     	  	  : photoBook?.config ?? "",
					id_del_pedido  	 : photoBook?.id_del_pedido ?? "",
					correo_del_autor : photoBook?.correo_del_autor ?? "",
					status           : photoBook?.status,
					modelo           : parseJsonConfig?.productName ?? "",
					tamano           : parseJsonConfig?.sizePhotoBook ?? "",
					fecha_de_termino : photoBook?.fecha_de_termino ?? "",
				};
			});
			setPhotoBooksOrders(constructorPhotoBooksData);
			setInitialPhotoBooksOrders(constructorPhotoBooksData);
		}
	}, [ ordersPhotoBook ]);

	useEffect(() => {
		if (!orderId || orderId === "") {
			setPhotoBooksOrders(initialPhotoBooksOrders);
		}
	}, [ orderId ]);

	return (
		<>
			{
				photoBookData ? <>
					<PhotoBookDownload
						photoBookData={photoBookData}
						onReturn={() => setPhotoBookData(undefined)}
					/>
				</> : <Card
					radius="13px"
					shadow="lg"
					w="75%"
					h="90%"
					p="30px"
					pt="35px"
				>
					<Stack
						w="100%"
						h="100%"
					>
						<Group>
							<TextInput
								onChange={(e) => handleOnChange(e)}
								placeholder="Ingrese el no de pedido"
								label={<Text fz="11px" fw={400} mb="5px">NO DE PEDIDO</Text>}
								sx={{
									fontSize   : "14px",
									fontWeight : "400",
									flex       : "1",
								}}
							/>
							<Button
								color="darkCasaMatte.7"
								size="sm"
								mt="25px"
								onClick={() => handleOnSubmit()}
								sx={{
									fontWeight : "200",
								}}
								loading={isFetching}
							>
								BUSCAR
							</Button>
						</Group>
						<TableOrders
							isLoading={loading}
							data={photoBooksOrders}
							onSelectOrder={handlerSelectOrder}
						/>
					</Stack>
				</Card>
			}
		</>
	);
};

export default CardSearchPhotoBook;
