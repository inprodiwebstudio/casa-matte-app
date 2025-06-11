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
		module : "wp-json/wp/v2/photobook-2-0?per_page=100",
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
				id   : photoBook?.id,
				meta : {
					config           : photoBook?.metas.config?.[0] ?? "",
					modelo           : photoBook?.metas?.modelo[0],
					tamano           : photoBook?.metas?.tamano[0],
					id_del_pedido    : photoBook?.metas?.id_del_pedido[0],
					correo_del_autor : photoBook?.metas?.correo_del_autor[0],
					status           : photoBook?.metas?.status[0],
				},
			}));
			console.log(constructorPhotoBooksData);
			const photoBooksFiltered = constructorPhotoBooksData.filter((photoBook) => (photoBook?.meta?.status === "48") || (photoBook?.meta?.status === "26"));
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
			const filteredOrders = ordersPhotoBook.filter(order => (order?.meta?.status === "48") || (order?.meta?.status === "26"));
			setPhotoBooksOrders(filteredOrders);
			setInitialPhotoBooksOrders(filteredOrders);
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
