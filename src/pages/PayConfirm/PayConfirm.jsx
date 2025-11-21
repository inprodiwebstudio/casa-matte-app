import { Center, Stack } from "@mantine/core";
import LogoCasaMatte     from "Resources/images/casaMatteLogo.png";

import "./PayConfirm.scss";

const PayConfirm = () => {
	return (
		<Center id="PayConfirm">
			<Stack spacing={80} align="center">
				<Stack spacing={15} align="center">
					<div className="title-body-payment">
						¡TU PHOTOBOOK YA ESTA EN IMPRESIÓN!
					</div>
					<div className="body-payment">
						Felicidades por haber completado tu proyecto en Casa Matte Lab.
						Tu photobook ya se encuentra en la lista de Impresión. Después del proceso de encuadernación, lo recibirás en tu dirección en las siguientes semanas.
					</div>
					<div>Gracias por tu confianza</div>
				</Stack>
				<a href="https://casamatte.com/">
					<img src={LogoCasaMatte} width={180} />
				</a>
			</Stack>
		</Center>
	);
};

export default PayConfirm;
