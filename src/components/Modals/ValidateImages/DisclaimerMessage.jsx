import { Stack, Text } from "@mantine/core";

const DisclaimerMessage = () => {
	return (
		<Stack
			align="center"
			spacing="20px"
		>
			<Text
				size="14px"
				color="Gray"
				align="center"
				mt="15px"
			>
				Nuestro sistema revisará automáticamente todas las fotos insertadas antes de la impresión. Si se detecta algún inconveniente en una o varias imágenes, se retirarán del layout correspondiente y recibirás una notificación inmediata en pantalla para que puedas reemplazarlas sin problema.
			</Text>
			<div
				style={{
					fontFamily    : "Helvetica",
					letterSpacing : "0px",
				}}
			>
				¿Deseas continuar?
			</div>
		</Stack>
	);
};

export default DisclaimerMessage;
