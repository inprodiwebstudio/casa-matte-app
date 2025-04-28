import { Card, TextInput, Text, Stack, Button, Center } from "@mantine/core";
import { showNotification }                             from "@mantine/notifications";
import { useState, useEffect }                          from "react";
import { genericApi }                                   from "store/api/genericApi";
import PhotoBookDownload                                from "./PhotoBookDownload";

const { useLazyGetDataQuery } = genericApi;

const CardSearchPhotoBook = () => {
	const [ orderId, setOrderId ] = useState();

	const [ photoBookData, setPhotoBookData ] = useState(undefined);

	const [ fetchPhotoBook, { isFetching, error } ] = useLazyGetDataQuery();

	const handleOnChange = (e) => {
		setOrderId(e.target.value);
	};

	const handleOnSubmit = async () => {
		const myOreder = orderId;

		try {
			const photoBookData = await fetchPhotoBook({ module : `wp-json/wp/v2/photobook-2-0/meta/?meta_value=${myOreder}`}).unwrap();
			setPhotoBookData(photoBookData[0]);
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
					w="40%"
					p="30px"
					pt="35px"
				>
					<Stack>
						<Center>
							<Text w="70%" align="center" fz="14px" fw={400} mb="5px">INGRESA EL NUMERO DEL PEDIDO PARA ENCONTRAR EL PHOTOBOOK</Text>
						</Center>
						<TextInput
							onChange={(e) => handleOnChange(e)}
							placeholder="Ingrese el no de pedido"
							label={<Text fz="11px" fw={400} mb="5px">NO DE PEDIDO</Text>}
							sx={{
								fontSize   : "14px",
								fontWeight : "400",
							}}
						/>
						<Button
							color="darkCasaMatte.7"
							size="xs"
							onClick={() => handleOnSubmit()}
							mt="20px"
							sx={{
								fontWeight : "200",
							}}
							loading={isFetching}
						>
							BUSCAR PHOTOBOOK
						</Button>
					</Stack>
				</Card>
			}
		</>
	);
};

export default CardSearchPhotoBook;
