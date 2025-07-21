import { Button, Center, Stack, Text } from "@mantine/core";

import LogoCasaMatte from "Resources/images/casaMatteLogo.png";


const NotPaid = ({
	paymentLink,
}) => {
	return (
		<Center
			h={"100vh"}
		>
			<Stack
				align="center"
				spacing="40px"
			>
				<Stack
					align="center"
				>
					<Text
						size="19px"
						weight={400}
						style={{
							letterSpacing : "4px",
						}}
					>
						PAGO NO EFECTUADO
					</Text>
					<Text
						size="12px"
						weight={300}
						style={{
							textTransform : "uppercase",
						}}
						w="50%"
						align="center"
					>
						El pago de los elementos adicionales en tu photobook aún no se ha realizado. Para continuar con la impresión, es necesario completar el pago correspondiente.
						Haz clic en el siguiente botón para continuar con el proceso de pago.
					</Text>
					<Button
						color="darkCasaMatte.7"
						size="xs"
						mt="20px"
						sx={{
							fontWeight : "200",
						}}
						onClick={() => window.open(paymentLink, "_blank")}
					>
						COMPLETAR PAGO
					</Button>
				</Stack>
				<a href="https://casamatte.com/">
					<img src={LogoCasaMatte} width={170} />
				</a>
			</Stack>
		</Center>
	);
};

export default NotPaid;
