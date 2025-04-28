import { Card, Stack, Divider, Text, Group, Button } from "@mantine/core";
import { SaveIcom }                                  from "Resources/icons";


const PhotoBookDownload = ({ photoBookData }) => {
	console.log(photoBookData);
	return (
		<Card
			radius="13px"
			shadow="lg"
			w="40%"
			p="30px"
			pt="35px"
			style={{
				backgroundColor : "#F7F5F1",
			}}
			withBorder
		>
			<Stack>
				<Stack spacing={3}>
					<Text
						style={{
							letterSpacing : "4px",
						}}
					>
						DATOS DEL PEDIDO
					</Text>
					<Group spacing={30}>
						<Stack spacing={3}>
							<Text
								color="gray"
								size="13px"
								weight={400}
							>
								NO DE PEDIDO
							</Text>
							<Text
								weight={400}
								size="14px"
							>
								#{photoBookData?.metas?.id_del_pedido[0] ?? "--"}
							</Text>
						</Stack>
						<Stack spacing={3}>
							<Text
								color="gray"
								size="13px"
								weight={400}
							>
								ID PHOTOBOOK
							</Text>
							<Text
								weight={400}
								size="14px"
							>
								{photoBookData?.id ?? "--"}
							</Text>
						</Stack>
						<Stack spacing={3}>
							<Text
								color="gray"
								size="13px"
								weight={400}
							>
								CORREO DEL AUTOR
							</Text>
							<Text
								weight={400}
								size="14px"
							>
								{photoBookData?.metas?.correo_del_autor[0] ?? "--"}
							</Text>
						</Stack>
					</Group>
				</Stack>
				<Divider size="sm" variant="dashed" />
				<Stack spacing={3}>
					<Text
						style={{
							letterSpacing : "4px",
						}}
					>
						INFORMACIÓN DEL PHOTOBOOK
					</Text>
					<Group
						spacing={30}
					>
						<Stack spacing={3}>
							<Text
								color="gray"
								size="13px"
								weight={400}
							>
								MODELO
							</Text>
							<Text
								weight={400}
								size="14px"
							>
								{photoBookData?.metas?.modelo[0] ?? "--"}
							</Text>
						</Stack>
						<Stack spacing={3}>
							<Text
								color="gray"
								size="13px"
								weight={400}
							>
								TAMAÑO
							</Text>
							<Text
								weight={400}
								size="14px"
							>
								{photoBookData?.metas?.tamano[0] ?? "--"}
							</Text>
						</Stack>
					</Group>
				</Stack>
				<Stack spacing={"0px"}>
					<Button
						color="darkCasaMatte.7"
						size="xs"
						onClick={() => console.log("click")}
						mt="20px"
						sx={{
							fontWeight : "200",
						}}
						loading={false}
						rightIcon={<SaveIcom size="12px" />}
						fullWidth
					>
						DESCARGAR
					</Button>
					<Button
						color="darkCasaMatte.6"
						size="xs"
						onClick={() => console.log("click")}
						mt="20px"
						sx={{
							fontWeight : "200",
						}}
						loading={false}
						fullWidth
					>
						REGRESAR
					</Button>
				</Stack>
			</Stack>
		</Card>
	);
};

export default PhotoBookDownload;
